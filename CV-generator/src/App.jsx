import "./App.css";
import Header from "./componenets/Header";
import Form from "./componenets/Form";
import CV from "./componenets/CV";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-2">
        {/* Filling out form */}
        <Form />

        {/* CV */}
        <CV />
      </main>
    </>
  );
}

export default App;
