import { useEffect, useState } from "react";
import queryString from "query-string";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Filter from "./Components/Filter";
import LoaderProvider, { useLoader } from "./Providers/LoaderProvider";

import "./App.css";

import axios from "./Api/api";

function App() {
  const [products, setProducts] = useState([]);
  const [nameFilter, setNameFilter] = useState();
  const [sourceFilter, setSourceFilter] = useState("");
  const { setLoading } = useLoader();
  const getProducts = (filter) => {
    setLoading(true);
    axios.get(`/products?${filter ? filter : ""}`).then((data) => {
      setProducts(data.data);
      setLoading(false);
    });
  };
  const handleApplyFilter = (category, source) => {
    let filterObject = {};
    if (category) filterObject.category = category;
    if (source) filterObject.source = source;
    let stringifiedFilter = queryString.stringify(filterObject);
    getProducts(stringifiedFilter);
  };
  const handleClearFilter = () => {
    setNameFilter("");
    setSourceFilter("");
    getProducts();
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <Header />
      <Filter
        setNameFilter={setNameFilter}
        setSourceFilter={setSourceFilter}
        sourceFilter={sourceFilter}
        handleApplyFilter={handleApplyFilter}
        nameFilter={nameFilter}
        handleClearFilter={handleClearFilter}
      />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
