import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePagination } from "../../Providers/PaginationProvider";

function Index() {
  const { setPage, noOfPages } = usePagination();

  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div className="paginationContainer">
      <Stack spacing={2}>
        <Pagination
          onChange={handleChange}
          count={noOfPages}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default Index;
