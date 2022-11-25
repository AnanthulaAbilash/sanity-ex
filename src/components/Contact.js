import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import contactbg from "../assets/nature-3630553_1280.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Contact() {
  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'designer']{
      name,
      bio,
      "designerImage": image.asset->url
    }`
      )
      .then((data) => {
        setDesigner(data[0]);
        //console.log("The designer in useeffect are...", data);
      })
      .catch(console.error);
  }, []);

  if (!designer) {
    //console.log("No designer fetched...");
    return <div>Loading...</div>;
  }

  //console.log("the designer is", designer);

  return (
    <main className="relative min-h-screen pb-12 pt-20 flex-column items-center justify-center">
      <img
        src={contactbg}
        alt="img"
        className="-z-50 bg-[DarkGreen] w-full h-full object-cover absolute opacity-82"
      />
      <div className="p-10 pt-14 lg:pt-48 container mx-auto relative flex justify-center shadow-lg ">
        <section className="bg-[BurlyWood] rounded-lg shadow-2xl lg:flex p-20 smbl:p-10">
          {designer?.designerImage && (
            <img
              src={urlFor(designer.designerImage).url()}
              className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8 smbl:w-28 smbl:h-28"
              alt={designer.name}
            />
          )}
          <div className="text-lg flex flex-col justify-center smbl:text-base">
            <h1 className="mainfont text-6xl text-gray-700 mb-4 smbl:text-3xl">
              I am{" "}
              {designer?.name && (
                <span className="text-[Sienna]">'{designer.name}'</span>
              )}
            </h1>
            <div className="prose lg:prose-xl text-[#4682B4] text-lg font-medium smbl:text-base">
              {designer?.bio && (
                <BlockContent
                  blocks={designer.bio}
                  projectId="tmvzdzrj"
                  dataset="production"
                />
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="p-10 lg:pt-36 container mx-auto relative flex justify-center shadow-lg">
        <section className="bg-[Cornsilk] bg-opacity-75 rounded-2xl shadow-2xl lg:flex p-16 smbl:p-10">
          {/* <hr></hr> */}
          <div className="text-lg flex flex-col justify-center">
            <h1 className="mainfont text-base text-gray-700 mb-4 ">
              To purchase the products in the store or to order new work,{" "}
              <br></br>please contact the below:
            </h1>
            <div className="text-[gray] font-medium">
              <p className="text-[1.2rem] text-[Sienna] font-bold underline ">
                Asha Bairu
              </p>
              <p className="text-[0.95rem]">
                <em>Mobile:</em> <strong>+91-7993292950</strong>
              </p>
              <p className="text-[0.95rem]">
                <em>Alternate:</em> <strong>+91-9849309061</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
