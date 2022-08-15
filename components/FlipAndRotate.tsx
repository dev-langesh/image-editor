import React from "react";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import FlipIcon from "@mui/icons-material/Flip";
import style from "../styles/Home.module.css";
import { useAppDispatch } from "../src/app/hooks";
import { flip, rotateLeft, rotateRight } from "../src/features/filters/filters";

export default function FlipAndRotate() {
  const dispatch = useAppDispatch();
  return (
    <section>
      <h4>Rotate & Flip</h4>
      <div className={style.flipBtnGroup}>
        <button
          onClick={() => dispatch(rotateRight())}
          className={style.flipBtn}
        >
          <RotateRightIcon />
        </button>
        <button
          onClick={() => dispatch(rotateLeft())}
          className={style.flipBtn}
        >
          <RotateLeftIcon />
        </button>
        <button onClick={() => dispatch(flip())} className={style.flipBtn}>
          <FlipIcon />
        </button>
      </div>
    </section>
  );
}
