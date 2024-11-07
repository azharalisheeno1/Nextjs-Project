import React from "react";
import pic from "../../../public/1.png";
import pic1 from "../../../public/2.png";
import pic2 from "../../../public/3.png";
import pic3 from "../../../public/4.png";
import Image from "next/image";
function Footer() {
  const images = [
    { id: 1, img: pic },
    { id: 2, img: pic1 },
    { id: 3, img: pic2 },
    { id: 4, img: pic3 },
  ];
  return (
    <>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6  sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  sm:text-center ">
              © 2024 The Curated Corner. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center gap-10 sm:mt-0">
              {images.map((image) => (
                <Image
                  src={image.img}
                  alt="loading"
                  key={image.id}
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
