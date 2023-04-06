import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  const addContactBtn = event => {
    event.preventDefault();
    // const { name, id, number } = this.state;
    // const newContact = { name, id, number };
    addContact({ name, id, number });
    setName('');
    setNumber('');
  };

  const handleAddContactName = e => {
    setName(e.target.value);
    setId(nanoid());
  };

  const handleAddContactNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={addContactBtn} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={css.form__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleAddContactName}
          value={name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter number 111-22-33"
          className={css.form__input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleAddContactNumber}
          value={number}
        />
      </label>
      <button type="submit" className={css.form__btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propType = {
  addContact: PropTypes.func.isRequired,
};
