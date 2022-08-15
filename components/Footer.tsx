import React from "react";
import { useAppDispatch } from "../src/app/hooks";
import { reset } from "../src/features/filters/filters";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const dispatch = useAppDispatch();
  return (
    <footer className={styles.footer}>
      <button onClick={() => dispatch(reset())} className={styles.resetBtn}>
        Reset
      </button>

      <div className={styles.btnGroup}>
        <button className={styles.chooseBtn}>Choose</button>
        <button className={styles.saveBtn}>Save</button>
      </div>
    </footer>
  );
}
