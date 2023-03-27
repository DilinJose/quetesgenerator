import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [index, setIndex] = useState(1);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <div className="App">
      <button onClick={() => handleClick()}>click me</button>
      <div>
        <h3>{quotes[index]["text"]}</h3>
        <p>~{quotes[index]["author"]}</p>
      </div>
    </div>
  );
}
