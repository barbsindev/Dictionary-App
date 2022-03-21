import React from "react";
import "./Results.scss";
import Meaning from "../meaning/Meaning";
import Phonetics from "../phonetics/Phonetics";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="Results__main">
          <div>
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map((phonetic, index) => {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="Results__meaning" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
