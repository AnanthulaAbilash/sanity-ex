import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import sanityClient from "../Client";
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
      body,
      "name": designer->name,
      "authorImage": designer->image
    }`
      )
      .then((data) => {
        setSingleProduct(data[0]);
        console.log("The products in useeffect are...", data);
      })
      .catch(console.error);
  }, [slug]);

  console.log("the single product is", singleProduct);

  if (!singleProduct) return <div>Loading...</div>;

  return (
    <main className="bg-[PeachPuff] min-h-screen p-12 pt-20">
      <article className="container shadow-lg mx-auto bg-[SkyBlue] rounded-lg">
        <header className="relative ">
          <div className=" absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="mainfont text-3xl lg:text-6xl mb-4">
                {singleProduct.title}
              </h1>
              <div className="flex justify-center text-gray-600">
                <img
                  src={urlFor(singleProduct.authorImage).url()}
                  alt={singleProduct.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="sectionfont flex items-center pl-2 text-2xl">
                  {singleProduct.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singleProduct.mainImage.asset.url}
            alt={singleProduct.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full ">
          <BlockContent
            blocks={singleProduct.body}
            projectId="tmvzdzrj"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default SingleProduct;