import styles from "../styles/Home.module.css";

export default function FilterButton({
  name,
  clickHandler,
}: {
  name: string;
  clickHandler: (name: string) => void;
}) {
  return (
    <button className={styles.filterBtn} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
}
