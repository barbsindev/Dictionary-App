import Dictionary from "../src/components/dictionary/Dictionary";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
