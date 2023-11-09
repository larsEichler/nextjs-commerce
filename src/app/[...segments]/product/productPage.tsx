import React from "react";
import ProductLayout from "@/app/[...segments]/product/productLayout";

function ProductPage({ segments }: { segments: string[] }) {
  return (
    <>
      <h2>ProductPage</h2>
      {segments.map((segment, index) => (
        <p key={index}>{segment}</p>
      ))}
    </>
  );
}

ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductLayout>{page}</ProductLayout>;
};

export default ProductPage;
