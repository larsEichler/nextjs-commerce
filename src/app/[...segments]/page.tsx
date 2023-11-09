import React from "react";
import ProductPage from "@/app/[...segments]/product/productPage";
import CategoryPage from "@/app/[...segments]/category/categoryPage";

function Page({ params: { segments } }: { params: { segments: string[] } }) {
  if ([...segments].pop() === "product") {
    const getLayout = ProductPage.getLayout || ((page) => page);
    return getLayout(<ProductPage segments={segments} />);
  }

  const getLayout = CategoryPage.getLayout || ((page) => page);
  return getLayout(<CategoryPage segments={segments} />);
}

export default Page;
