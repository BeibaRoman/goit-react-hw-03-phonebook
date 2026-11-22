import { Component } from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      const digitsOnly = value.replace(/\D/g, "");
      this.setState({ number: digitsOnly });
      return;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    this.props.onAdd({ name: name.value, number: number.value });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            pattern="[0-9]+"
            inputMode="numeric"
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInput}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
