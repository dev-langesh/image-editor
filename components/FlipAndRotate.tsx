import React from "react";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import FlipIcon from "@mui/icons-material/Flip";
import style from "../styles/Home.module.css";

export default function FlipAndRotate() {
  return (
    <section>
      <h4>Rotate & Flip</h4>
      <div className={style.flipBtnGroup}>
        <button className={style.flipBtn}>
          <RotateRightIcon />
        </button>
        <button className={style.flipBtn}>
          <RotateLeftIcon />
        </button>
        <button className={style.flipBtn}>
          <FlipIcon />
        </button>
      </div>
    </section>
  );
}
