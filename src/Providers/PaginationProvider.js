import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const paginateContext = createContext();

export default function LoaderProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [limit] = useState(5);
  const values = useMemo(() => {
    return {
      page,
      setPage,
      totalCount,
      setTotalCount,
      limit,
      noOfPages,
      setNoOfPages,
    };
  }, [
    page,
    setPage,
    totalCount,
    setTotalCount,
    limit,
    noOfPages,
    setNoOfPages,
  ]);
  useEffect(() => {
    setNoOfPages(Math.floor(totalCount / limit));
  }, [totalCount, limit]);
  return (
    <paginateContext.Provider value={values}>
      {children}
    </paginateContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(paginateContext);
  if (!context) {
    throw new Error("useLoader must be used within Loadercontext provider");
  }
  return context;
}
