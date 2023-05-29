import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai"
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request, response: any) {
  try {
    const { title, role } = await request.json();

    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> = 
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Your tone is :${role || "You are a helpful assistant"}. Write with HTML tags.`,
          },
          {
            role: "user",
            content: `Create a 3 line blog post with HTML tags based on this title: ${title}. Only provide the body of the article. Do not start with an H1 tag, and do not say "Sure thing"`,
          },
        ],
      });
    
    // response.revalidate("api/posts")
    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}