import React, { useState } from "react";
import "./Dictionary.scss";
import axios from "axios";
import Results from "../result/Results";
import Photos from "../photos/Photos";
import Logo from "../../assets/Dilogo.png";
import Img from "../../assets/owl.jpeg";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelApiKey = `${process.env.REACT_APP_PEXEL_API_KEY}`;

    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let header = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: header }).then(handlePexelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <header className="Dictionary__header">
          <img
            className="Dictionary__Logo"
            src={Logo}
            alt="dictionary logo"
          ></img>
          <img className="Dictionary__Img" src={Img} alt="reading owl"></img>

          <form onSubmit={handleSubmit}>
            <input
              className="Dictionary__input"
              type="search"
              onChange={handleKeywordChange}
              placeholder="Search..."
            ></input>
          </form>
          <h4>
            What word are you looking for?(example:'love', 'charismatic',
            'universe', 'bilingual'...)
          </h4>
        </header>
        {results && <Results results={results} />}

        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
