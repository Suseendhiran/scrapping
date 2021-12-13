import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePagination } from "../../Providers/PaginationProvider";

function Index({ updateUrlParams }) {
  const { setPage, noOfPages, page } = usePagination();

  const handleChange = (e, value) => {
    setPage(value);
    updateUrlParams({ page: value });
  };
  console.log("pages", page);
  return (
    <div className="paginationContainer">
      <Stack spacing={2}>
        <Pagination
          onChange={handleChange}
          count={noOfPages}
          variant="outlined"
          color="primary"
          page={page}
        />
      </Stack>
    </div>
  );
}

export default Index;
