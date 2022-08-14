import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import {
  applyFilter,
  changeFilterOption,
  selectFilterOptions,
} from "../src/features/filters/filters";
import styles from "../styles/Home.module.css";
import FilterButtons from "./FilterButtons";

export default function Filters() {
  const filters = useAppSelector(selectFilterOptions);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(30);

  useEffect(() => {
    const currentFilter = filters.currentFilter;

    const currentFilterOptionAndValue = filters.filterValues.filter(
      (item) => item.name === currentFilter
    );
    setValue(currentFilterOptionAndValue[0].value);
  }, [filters]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch(applyFilter({ name: filters.currentFilter, value: newValue }));
  };

  return (
    <section className={styles.filters}>
      <h4>Filters</h4>
      <FilterButtons />
      <span className={styles.info}>{filters.currentFilter}</span>

      <Slider
        sx={{ margin: "5px 0" }}
        size="small"
        value={typeof value === "number" ? value : 0}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
    </section>
  );
}
