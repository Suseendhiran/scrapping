import { useEffect, useState } from "react";
import queryString from "query-string";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Filter from "./Components/Filter";

import { useLoader } from "./Providers/LoaderProvider";
import { usePagination } from "./Providers/PaginationProvider";

import "./App.css";

import axios from "./Api/api";

function App() {
  const [products, setProducts] = useState([]);

  const { setLoading } = useLoader();
  const { page, setTotalCount, limit } = usePagination();
  const [filter, setFilter] = useState({
    name: "",
    source: "",
  });
  const getProducts = () => {
    Object.keys(filter).forEach((key) => {
      if (!filter[key]) delete filter[key];
    });
    if (page) filter.page = page;
    if (limit) filter.limit = limit;

    let filterQuery = queryString.stringify(filter);
    setLoading(true);
    axios
      .get(`/products?${filterQuery ? filterQuery : ""}`)
      .then((res) => {
        setProducts(res.data.results);
        setTotalCount(res.data.totalCount);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, [page, filter]);
  return (
    <div className="App">
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
