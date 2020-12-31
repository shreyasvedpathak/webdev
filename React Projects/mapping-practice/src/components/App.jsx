import React from "react";
import emojis from "../emojipedia";
import Emoji from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(emojis => (
          <Emoji
            key={emojis.id}
            name={emojis.name}
            emoji={emojis.emoji}
            meaning={emojis.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
