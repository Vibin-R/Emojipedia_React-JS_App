import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function Entry(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji-Pedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Entry)}</dl>
    </div>
  );
}

export default App;
