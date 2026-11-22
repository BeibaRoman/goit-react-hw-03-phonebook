# Phonebook

A phonebook app built with React class components. Contacts are saved in `localStorage`, so they stay in the browser after a page reload.

This is a homework project for the GoIT React course (module 3): it extends the previous Phonebook task with persistent storage using lifecycle methods.

**Live demo:** <link>

## Features

- Add a contact with a name and a phone number
- Block duplicate names (case-insensitive) with an alert
- Delete a contact
- Filter contacts by name (case-insensitive)
- Contacts are saved to `localStorage` when they are added or deleted
- Contacts are loaded from `localStorage` when the app starts

## How `localStorage` works here

| Lifecycle method     | What it does                                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `componentDidMount`  | Reads the `contacts` key from `localStorage`, parses it, and puts the result into the state (only if something was saved). |
| `componentDidUpdate` | Compares `prevState.contacts` with `this.state.contacts`. If they differ, saves the new array to `localStorage`.           |

Saving only when `contacts` has changed (and not on every update, such as typing in the filter) avoids unnecessary writes.

## Tech stack

- React (class components, controlled form and filter)
- nanoid for unique contact ids
- CSS Module
