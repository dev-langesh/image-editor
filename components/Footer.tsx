import React, { useRef } from "react";
import { useAppDispatch } from "../src/app/hooks";
import { reset } from "../src/features/filters/filters";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>();

  function chooseImage() {
    inputRef.current?
  }

  return (
    <footer className={styles.footer}>
      <button onClick={() => dispatch(reset())} className={styles.resetBtn}>
        Reset
      </button>

      <input
        ref={inputRef}
        type="file"
        name="image"
        className={styles.inputImage}
      />

      <div className={styles.btnGroup}>
        <button className={styles.chooseBtn}>Choose</button>
        <button className={styles.saveBtn}>Save</button>
      </div>
    </footer>
  );
}
