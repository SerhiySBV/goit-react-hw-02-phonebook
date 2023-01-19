import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li
            key={id}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 140px 100px',
              alignItems: 'center',
            }}
          >
            <p>{name} :</p>
            <p>{number}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
