import { Slider } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Filters() {
  return (
    <section className={styles.filters}>
      <h4>Filters</h4>
      <div className={styles.filterBtnGroup}>
        <button className={styles.filterBtn}>Brightness</button>
        <button className={styles.filterBtn}>Saturation</button>
        <button className={styles.filterBtn}>Inversion</button>
        <button className={styles.filterBtn}>Grayscale</button>
      </div>
      <span className={styles.info}>Brightness</span>
      <Slider
        sx={{ margin: "6px 0" }}
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </section>
  );
}
