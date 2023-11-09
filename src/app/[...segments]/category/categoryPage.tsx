import React from "react";
import CategoryLayout from "@/app/[...segments]/category/categoryLayout";
import Link from "next/link";

const sleep = (ms: number): Promise<number> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(Math.random());
    }, ms),
  );

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

async function CategoryPage({ segments }: { segments: string[] }) {
  const foo = await sleep(3000);

  return (
    <>
      <h1>Category Page</h1>
      <p>{foo}</p>
      {segments.map((segment, index) => (
        <p key={index}>{segment}</p>
      ))}
      <p>
        <Link href={makeid(10)}>Go to random page</Link>
      </p>
    </>
  );
}

CategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default CategoryPage;
