import css from '../Filter/Filter.module.css';

export default function Filter({handleFilterContacts, filterContacts}) {

    return (
      <div className={css.filter}>
        <label className={css.filter__title}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            className={css.filter__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleFilterContacts}
            onInput={filterContacts}
          />
        </label>
      </div>
    );
  }

