import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client";

function Products() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'product']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        setProductData(data);
        console.log("The products in useeffect are...", data);
      })
      .catch(console.error);
  }, []);

  console.log("the products are", productData);

  return (
    <main className="bg-[LightCoral] min-h-screen p-12 pt-20">
      <section className="container mx-auto">
        <h1 className="text-5xl flex text-[DarkOliveGreen] justify-center mainfont pt-28">
          Products Page
        </h1>
        <h2 className="text-lg text-[DarkSlateGray] flex justify-center mb-12 pt-4 font-medium">
          Welcome to the products store
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData &&
            productData.map((product, index) => {
              <article>
                <Link
                  to={"/products/" + product.slug.current}
                  key={product.slug.current}
                >
                  <span
                    className="block h-96 relative rounded shadow leading-snug bg-[Ivory] border-[LightSeaGreen]"
                    key={index}
                  >
                    <img
                      src={product.mainImage.asset.url}
                      alt={product.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-600 text-lg font-blog px-3 py-3 bg-[NavajoWhite] text-gray bg-opacity-75 rounded"></h3>
                    </span>
                  </span>
                </Link>
              </article>;
            })}
        </div>
      </section>
    </main>
  );
}

export default Products;
