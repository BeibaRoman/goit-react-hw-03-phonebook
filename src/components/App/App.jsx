import { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  filterInput = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onAdd = (newContact) => {
    this.setState((prevState) => {
      const isDuplicate = prevState.contacts.some(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
      );
      if (isDuplicate) {
        alert(`${newContact.name} is already in contacts.`);
        return null;
      }
      return {
        contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    let visibleContact = this.state.contacts;

    visibleContact = visibleContact.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div className="wrapper">
        <main className={styles.page}>
          <div className="page__container">
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onAdd={this.onAdd} />

            <h2 className={styles.subtitle}>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.filterInput} />
            <ContactList
              contacts={visibleContact}
              onDelete={this.deleteContact}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
