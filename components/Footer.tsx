import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.resetBtn}>Reset</button>

      <div className={styles.btnGroup}>
        <button className={styles.chooseBtn}>Choose</button>
        <button className={styles.saveBtn}>Save</button>
      </div>
    </footer>
  );
}
