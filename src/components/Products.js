import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      price
    }`
      )
      .then((data) => {
        setProductData(data);
        //console.log("The products in useeffect are...", data);
      })
      .catch(console.error);
  }, []);

  if (productData) {
    //console.log("the products are", productData);
  }

  //if (!productData) return <div>Loading...</div>;

  return (
    <main className="bg-[LightCoral] min-h-screen p-12 pt-20 pb-48">
      <section className="container mx-auto">
        <h1 className="text-5xl flex text-[DarkOliveGreen] justify-center mainfont pt-20">
          Products Page
        </h1>
        <h2 className="text-lg text-[DarkSlateGray] flex justify-center mb-12 pt-4 font-medium">
          Welcome to the product store
        </h2>
        <div className="grid grid-cols-2 xsmg:grid-cols-1 lgd:grid-cols-3 gap-8">
          {productData &&
            productData.map((product, index) => (
              <article className="h-80 w-80">
                <Link
                  to={"/products/" + product.slug.current}
                  key={product.slug.current}
                >
                  <span
                    className="block h-80 w-80 relative rounded shadow leading-snug bg-[rgb(225,225,225)] border-[LightSeaGreen]"
                    key={index + 1}
                  >
                    <img
                      src={product.mainImage.asset.url}
                      alt={product.mainImage.alt}
                      className="w-full h-full object-cover absolute p-3 rounded-lg "
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-600 text-lg font-blog px-2 py-1 bg-[NavajoWhite] text-gray bg-opacity-75 rounded">
                        {product.title} <br></br>
                        <span className="text-gray-600 font-medium">
                          Rs.{``} {product.price}
                        </span>
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
