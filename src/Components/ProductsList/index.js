import React from "react";

import Product from "../Product";
import Pagination from "../Pagination";
import { useLoader } from "../../Providers/LoaderProvider";
import { usePagination } from "../../Providers/PaginationProvider";

function Index({ products, page, setpage, updateUrlParams }) {
  const { loading } = useLoader();
  const { limit, totalCount } = usePagination();

  return (
    <div className="prodcutsWrapper">
      {products.length ? (
        products.map((product) => <Product product={product} />)
      ) : (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          {loading ? "Fetching Products..." : "No items Found !!"}
        </h2>
      )}
      {totalCount > limit ? (
        <Pagination updateUrlParams={updateUrlParams} />
      ) : null}
    </div>
  );
}

export default Index;
