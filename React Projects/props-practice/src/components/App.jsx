import React from "react";
import contacts from "../contacts.js";
import "../components/styles.css";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      contact={contact.contact}
      mail={contact.mail}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;