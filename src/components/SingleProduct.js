import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      price,
      body,
      "name": designer->name,
      "authorImage": designer->image
    }`
      )
      .then((data) => {
        setSingleProduct(data[0]);
        //console.log("The products in useeffect are...", data);
      })
      .catch(console.error);
  }, [slug]);

  //console.log("the single product is", singleProduct);

  if (!singleProduct) return <div>Loading...</div>;

  return (
    <main className="bg-[PeachPuff] min-h-screen p-12 pt-[8rem] pb-28">
      <article className="container shadow-lg mx-auto bg-[SkyBlue] rounded-lg">
        <div className=" relative h-full w-full flex items-center justify-center p-8 pt-0">
          <div className="bg-white bg-opacity-100 rounded p-4 smbl:p-2 smbl:px-4">
            <h1 className="mainfont text-3xl lg:text-6xl mb-4 smbl:text-xl smbl:mb-2">
              {singleProduct.title}
            </h1>
            <div className="flex justify-center text-gray-600">
              <img
                src={urlFor(singleProduct.authorImage).url()}
                alt={singleProduct.name}
                className="w-10 h-10 rounded-full smbl:w-6 smbl:h-6"
              />
              <p className="sectionfont flex items-center pl-2 text-2xl smbl:text-base">
                {singleProduct.name}
              </p>
            </div>
          </div>
        </div>
        <header className="relative ">
          <img
            src={singleProduct.mainImage.asset.url}
            alt={singleProduct.title}
            className="h-auto w-full object-cover rounded-t aspect-auto lg:max-h-[60vh] lg:max-w-[60vw]"
            /* style={{ maxHeight: "60vh",
            maxWidth: "60vw",
           }} */
          />
        </header>
        <div className="flex text-white font-medium relative justify-end align-end bg-[IndianRed] w-auto">
          <span className="relative text-lg right-4 ">
            Rs.{``} {singleProduct.price}
          </span>
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full ">
          <BlockContent
            blocks={singleProduct.body}
            projectId="tmvzdzrj"
            dataset="production"
          />
        </div>

        <div className="flex text-gray-700 font-medium relative justify-center align-center bg-gray-100 w-auto border-t-4 border-[white]">
          <span className="relative text-base px-4 py-1 pb-4 text-center">
            To purchase or book an order please see{" "}
            <NavLink
              to="/contact"
              className="inflex-flex items-center px-4 pt-5 mb-8 mt-2 rounded text-[IndianRed] -300 hover:text-white font-bold smbl:px-[0.5rem]"
              activeclassname="!bg-gray-300"
            >
              Contact
            </NavLink>
          </span>
        </div>
      </article>
    </main>
  );
}

export default SingleProduct;
