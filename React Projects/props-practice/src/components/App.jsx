import React from "react";
import contacts from "../contacts.js";
import "../components/styles.css"
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        contact={contacts[0].contact}
        mail={contacts[0].mail}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        contact={contacts[1].contact}
        mail={contacts[1].mail}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        contact={contacts[2].contact}
        mail={contacts[2].mail}
      />
    </div>
  );
}

export default App;