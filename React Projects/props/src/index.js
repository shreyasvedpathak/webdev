import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.phone}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Shreyas Vedpathak"
      img="https://storage.googleapis.com/kaggle-avatars/images/5433696-kg.jpg"
      phone="9881898291"
      mail="babcdefg"
    />
  </div>,
  document.getElementById("root")
);
