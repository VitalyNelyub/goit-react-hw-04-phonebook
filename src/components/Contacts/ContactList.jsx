import css from '../Contacts/ContactList.module.css';

export default function ContactList({ filteredContact, deleteContact }) {
  return filteredContact.map(contact => (
    <li key={contact.id} className={css.contact__item}>
      <p>{contact.name}:</p>
      <span>{contact.number}</span>
      <button
        type="button"
        onClick={() => deleteContact(contact.id)}
        className={css.delete__btn}
        id={contact.id}
      >
        Delete
      </button>
    </li>
  ));
}
