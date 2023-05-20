import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            minus sed ipsam inventore a rem labore quaerat cupiditate assumenda
            nam recusandae nulla repellat cumque ratione hic deserunt
            voluptatum, voluptatem officiis?
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Massa orci ultrices gravida dictum fusce ut placerat.
          </p>
          <p className="my-5">
            Massa orci ultrices gravida dictum fusce ut placerat.
          </p>
          <p>Massa orci ultrices gravida dictum fusce ut placerat.</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Massa orci ultrices gravida dictum fusce ut placerat.
          </p>
          <p>(333) 432-4324</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
