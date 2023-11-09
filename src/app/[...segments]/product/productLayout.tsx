import React, { PropsWithChildren } from "react";

function ProductLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}

export default ProductLayout;
