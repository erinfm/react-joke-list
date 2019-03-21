import React from "react";

const jokeStyle = {
  alignSelf: "center",
  borderBottom: "2px solid #999",
  padding: "1.5rem 0",
  maxWidth: "250px"
};

const questionStyle = {
  color: "#666"
};

const punchLineStyle = {
  color: "#444",
  fontWeight: "bold"
};

function Joke(props) {
  return (
    <div style={jokeStyle}>
      <p style={questionStyle}>{props.question}</p>
      <p style={punchLineStyle}>{props.punchLine}</p>
    </div>
  );
}

export default Joke;
