import React from 'react'
import {Card} from '@/components/ui/cardone';
import Link from 'next/link';
type Product = {
    title: string;
    categoryId: string;
    thumbnail: string;
    description: string;
  };
  
  export const products: Product[] = [
    {
      title: "Home & Living",
      categoryId: "Homeliving",
      thumbnail: "/assets/home.png",
      description: "Discover our Home & Living collection: eco-friendly decor, smart gadgets, and sleek furniture for a modern lifestyle",
    },
    {
      title: "Sustainable Food Packaging",
      categoryId: "SustainableFoodPackaging",
      thumbnail: "/assets/food.png",
      description: "Eco-friendly food and drink essentials, from reusable bottles to compostable pods.",
    },
    {
      title: "BodyCare",
      categoryId: "BodyCare",
      thumbnail: "/assets/body.png",
      description: "Explore our range of body care products designed to nourish, rejuvenate, and protect your skin, leaving it soft, smooth, and healthy",
    },
    {
      title: "Clothing and Accessories",
      categoryId: "ClothingandAccessories",
      thumbnail: "/assets/clothesbefore.png",
      description: "Discover our curated collection of clothing and accessories, where style meets comfort.",
    },
  ];
const category = () => {
  return (
    <div className="flex flex-col w-full pt-20">
      <div className="flex w-full justify-center items-center">
        <h1 className=" text-3xl md:text-6xl font-bold font-Cinzel_Decorative pl-5 md:pl-20 text-gray-800 dark:text-gray-200">
          Shop by Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 px-2 md:px-20 py-10">
        {products.map((product) => (
         <Link key={product.categoryId} href={`/category/${product.categoryId}`}>
         
           <Card key={product.title} product={product} />
        
       </Link>
        ))}
      </div>
      </div>
  )
}

export default category