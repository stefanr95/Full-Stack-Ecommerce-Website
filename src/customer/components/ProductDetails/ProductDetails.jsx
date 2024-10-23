import React from "react";
import { useState } from "react";

const product = {
  name: "Wilson Tour Slam Lite Adult Tennis Racket - Blue, 112 sq. in., 10.3 ounces",
  price: "$100",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Blue-112-sq-in-10-3-ounces_a7e40673-4e04-42b7-825e-acb7b07d906b.8e46a224a883e2dced1bcb15ca14f4c2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Blue-112-sq-in-10-3-ounces_a7e40673-4e04-42b7-825e-acb7b07d906b.8e46a224a883e2dced1bcb15ca14f4c2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Blue-112-sq-in-10-3-ounces_a7e40673-4e04-42b7-825e-acb7b07d906b.8e46a224a883e2dced1bcb15ca14f4c2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Blue-112-sq-in-10-3-ounces_a7e40673-4e04-42b7-825e-acb7b07d906b.8e46a224a883e2dced1bcb15ca14f4c2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "Lightweight with an oversize head, the Wilson Tour Slam Lite is all about improving power and consistency for recreational players. The large sweet spot boosts power and adds several degrees of forgiveness on off-centered hits. Another source of added power comes from the Power Bridge, which enhances rebound speed and energy.",
  highlights: [
    " V-Matrix Technology creates larger sweet spot for increased power ",
    " AirLite Alloy construction creates lightweight frame with power and durability",
    "Power Bridge allows for longer main strings, optimizing rebound speed",
    "Stop Shock Sleeves reduce string vibrations at 3 & 9 for improved feel",
    "Oversized head generates impressive power and added forgiveness with enlarged sweet spot",
    "Extra length provides extended reach and court coverage",
    "Pre-strung",
    "Racquet Head Size: 112 sq. in. (723 sq. cm.)",
    "Racquet Strung Weight: 10.3 ounces (291 grams)",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                <img
                  alt={product.images[1].alt}
                  src={product.images[1].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={product.images[2].alt}
                  src={product.images[2].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                alt={product.images[3].alt}
                src={product.images[3].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
