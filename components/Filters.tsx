import { Slider } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import {
  changeFilterOption,
  selectFilterOptions,
} from "../src/features/filters/filters";
import styles from "../styles/Home.module.css";

export default function Filters() {
  const filters = useAppSelector(selectFilterOptions);
  const dispatch = useAppDispatch();

  function clickHandler(event: React.MouseEvent<HTMLElement>, name: string) {
    dispatch(changeFilterOption(name));
  }

  return (
    <section className={styles.filters}>
      <h4>Filters</h4>
      <div className={styles.filterBtnGroup}>
        <button
          className={styles.filterBtn}
          onClick={(event) => clickHandler(event, "Brightness")}
        >
          Brightness
        </button>
        <button
          className={styles.filterBtn}
          onClick={(ev) => clickHandler(ev, "Saturation")}
        >
          Saturation
        </button>
        <button
          className={styles.filterBtn}
          onClick={(ev) => clickHandler(ev, "Inversion")}
        >
          Inversion
        </button>
        <button
          className={styles.filterBtn}
          onClick={(ev) => clickHandler(ev, "Grayscale")}
        >
          Grayscale
        </button>
      </div>
      <span className={styles.info}>{filters.currentFilter}</span>
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
