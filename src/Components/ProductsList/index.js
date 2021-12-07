import React from "react";

import Product from "../Product";

function Index({ products }) {
  return (
    <div className="prodcutsWrapper">
      {products.length ? (
        products.map((product) => <Product product={product} />)
      ) : (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          No items Found !!
        </h2>
      )}
    </div>
  );
}

export default Index;
