import React, { useEffect, useState } from "react";

import Product from "../Product";

function Index({ products }) {
  return (
    <div className="prodcutsWrapper">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default Index;
