import styles from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          onChange={onChange}
          value={value}
          className={styles.input}
          type="text"
          name="filter"
        />
      </label>
    </div>
  );
}

export default Filter;
