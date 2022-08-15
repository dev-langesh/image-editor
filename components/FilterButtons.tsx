import React from "react";
import { useAppDispatch } from "../src/app/hooks";
import { changeFilterOption } from "../src/features/filters/filters";
import styles from "../styles/Home.module.css";
import FilterButton from "./FilterButton";

export default function FilterButtons() {
  const dispatch = useAppDispatch();

  function clickHandler(name: string) {
    dispatch(changeFilterOption(name));
  }

  return (
    <div className={styles.filterBtnGroup}>
      {["Brightness", "Saturation", "Inversion", "Grayscale"].map(
        (name, index) => (
          <FilterButton key={index} name={name} clickHandler={clickHandler} />
        )
      )}
    </div>
  );
}
