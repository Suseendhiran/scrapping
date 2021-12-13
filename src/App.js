import { useEffect, useState } from "react";
import queryString from "query-string";
import { useSearchParams } from "react-router-dom";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Filter from "./Components/Filter";

import { useLoader } from "./Providers/LoaderProvider";
import { usePagination } from "./Providers/PaginationProvider";

import "./App.css";

import axios from "./Api/api";

function App() {
  const urlQuery = window.location.search;
  const queryParams = queryString.parse(urlQuery);
  const [products, setProducts] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const { setLoading } = useLoader();
  const { setTotalCount, limit } = usePagination();
  const [filter, setFilter] = useState({
    name: "",
    source: searchParams.get("source"),
  });
  const updateUrlParams = (param) => {
    //if no params present, will clear the urlquery
    if (!Object.keys(param).length) {
      setSearchParams({});
      setFilter({});
      return;
    }
    //Add filter/pagination details to query
    let query = { ...queryParams, ...param };
    //delete prop if no value present
    Object.keys(query).forEach((key) => {
      if (!query[key]) delete query[key];
    });
    if (limit) query.limit = limit;
    setSearchParams({ ...query });
  };
  const getProducts = () => {
    if (!queryParams.source) queryParams.source = filter.source; // add default source to query
    Object.keys(queryParams).forEach((key) => {
      if (!queryParams[key]) delete queryParams[key];
    });

    if (limit) queryParams.limit = limit;
    //querifying filter and pagination details
    let filterQuery = queryString.stringify(queryParams);
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
  //get products on first render and while page, filter values changes
  useEffect(() => {
    getProducts();
  }, [urlQuery]);

  return (
    <div className="App">
      <Header />
      <Filter
        filter={filter}
        setFilter={setFilter}
        updateUrlParams={(filters) => updateUrlParams(filters)}
      />
      <ProductsList
        products={products}
        updateUrlParams={(page) => updateUrlParams(page)}
      />
    </div>
  );
}

export default App;
