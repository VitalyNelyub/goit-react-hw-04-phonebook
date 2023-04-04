import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css';

const localContacts = localStorage.getItem('contacts');

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in your contacts.`);
    } else {
      setContacts([...contacts, newContact]);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterContacts = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };

  const visibleContacts = filterContacts();
  return (
    <div className={css.phonebook}>
      <h1 className={css.form__title}>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        contactsList={contacts}
        handleFilterContacts={handleFilterContacts}
        filterContacts={filterContacts}
      />
      <ul>
        <ContactList
          contactsList={contacts}
          filterContacts={filterContacts}
          deleteContact={deleteContact}
          filter={filter}
          filteredContact={visibleContacts}
        />
      </ul>
    </div>
  );
}
