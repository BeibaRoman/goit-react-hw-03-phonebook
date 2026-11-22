import styles from "./ContactItem.module.css";

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className={styles.contactItem}>
      <p className={styles.contactName}>
        {name}: <span className={styles.contactNumber}>{number}</span>
      </p>
      <button
        onClick={() => {
          onDelete(id);
        }}
        className={styles.deleteButton}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}
export default ContactItem;
