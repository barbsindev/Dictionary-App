import React from "react";
import Synonyms from "../synonyms/Synonyms";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="example" key={index}>
            <p>{definition.definition} </p>
            <h4>Example:</h4> <em>{definition.example}</em> <h4>Synonyms:</h4>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
