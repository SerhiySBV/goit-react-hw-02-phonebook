import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
  };

  addSubmitUserData = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addSubmitUserData} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
