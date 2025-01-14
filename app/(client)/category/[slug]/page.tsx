import React from "react";
import Container from "@/components/Container";
import { getAllCategories } from "@/sanity/helpers/query";
import { Title } from "@radix-ui/react-toast";
import CategoryProducts from "@/components/CategoryProducts";

const CategoryPage = async ({params,}:{params:Promise<{slug:string}>;}) => {
   const { slug } = await params;
   const categories = await getAllCategories(); 
  return (
  <Container className="py-20">
    <Title className="text-xl">
        Products by Category 
        {/* <span className="font-bold text-green-600 capitalize tracking-wide">{slug && slug}</span> */}
        </Title>
        <CategoryProducts categories={categories} slug={slug}/>
    </Container>
);
};

export default CategoryPage;
