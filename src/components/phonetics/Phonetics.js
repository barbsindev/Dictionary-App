import React from "react";
import "./Phonetics.scss";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="Phonetics__link"
      >
        Listen
      </a>
      <br />
      <span className="Phonetics__text">{props.phonetic.text}</span>
    </div>
  );
}
