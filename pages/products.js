import styles from "../styles/ProductPage.module.css";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "black",

      "&:hover": {
        backgroundColor: "#D6EFFF",
      },
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h1>สินค้าของทางเรา</h1>
      <div className={styles.wrapper}>
        <a href="#target1" id="target1" className={styles.title}>
          Bean Coffee Roaster
        </a>
        <div className={styles.VL}></div>
        <a href="#target2" id="target2" className={styles.title}>
          Coffee Equipment
        </a>
      </div>
      <div className={styles.pagination}>
        <Pagination classes={{ ul: classes.ul }} count={10} />
      </div>
    </div>
  );
}
