import { Component } from 'react';
import { nanoid } from 'nanoid';

export class PhoneList extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handelSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}
