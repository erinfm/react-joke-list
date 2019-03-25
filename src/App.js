import React from "react";
import Joke from "./components/Joke";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontFamily: "Montserrat, sans-serif",
  justifyContent: "center",
  lineHeight: "1.5rem",
  margin: "1rem"
};

function App() {
  return (
    <div style={containerStyle}>
      <Joke
        question="What do you call a factory that sells passable products?"
        punchLine="A satisfactory."
      />
      <Joke
        question="Why did the invisible man turn down the job offer?"
        punchLine="He couldn't see himself doing it."
      />
      <Joke punchLine="I'm reading a book about anti-gravity. It's impossible to put down!" />
      <Joke
        question="You know what the loudest pet you can get is?"
        punchLine="A trumpet."
      />
      <Joke punchLine="You heard of that new band 1023MB? They're good but they haven't got a gig yet." />
    </div>
  );
}

export default App;
