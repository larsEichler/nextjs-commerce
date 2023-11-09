import React, { PropsWithChildren, Suspense } from "react";

function CategoryLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Category Layout</h1>

      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}

export default CategoryLayout;
