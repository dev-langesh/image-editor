import React from "react";
import Filters from "./Filters";
import FlipAndRotate from "./FlipAndRotate";
import style from "../styles/Home.module.css";

export default function FeatureContainer() {
  return (
    <aside className={style.features}>
      <Filters />
      <FlipAndRotate />
    </aside>
  );
}
