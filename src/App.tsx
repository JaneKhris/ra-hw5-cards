import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        textBtn="Go somewhere"
      >
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="card-img-top"
          alt="..."
        ></img>
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        textBtn="Go somewhere"
      ></Card>
    </>
  );
}

export default App;
