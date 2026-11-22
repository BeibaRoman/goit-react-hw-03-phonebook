import styles from "./ContactList.module.css";

import ContactItem from "./ContactItem/ContactItem";

function ContactList({ contacts = [], onDelete }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          onDelete={onDelete}
          key={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
}

export default ContactList;
