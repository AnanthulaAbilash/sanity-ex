import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function About() {
  const [designer, setDesigner] = useState(null);

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
        setDesigner(data);
        console.log("The designer in useeffect are...", data);
      })
      .catch(console.error);
  }, []);

  if (!designer) return <div>Loading...</div>;

  console.log("the designer is", designer);

  return (
    <main className="relative bg-[DarkGreen] min-h-screen p-12 pt-20">
      <img />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-[BurlyWood] rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(designer.designerImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 "
            alt={designer.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="mainfont text-6xl text-gray-700 mb-4">
              I am {""}
              <span className="text-white">{designer.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={designer.bio}
                projectId="tmvzdzrj"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
