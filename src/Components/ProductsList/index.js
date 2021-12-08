import React from "react";

import Product from "../Product";
import { useLoader } from "../../Providers/LoaderProvider";

function Index({ products }) {
  const { loading } = useLoader();
  console.log("laoding", loading);
  return (
    <div className="prodcutsWrapper">
      {products.length ? (
        products.map((product) => <Product product={product} />)
      ) : (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          {loading ? "Fetching Products..." : "No items Found !!"}
        </h2>
      )}
    </div>
  );
}

export default Index;
