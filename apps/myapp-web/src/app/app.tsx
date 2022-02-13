import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div style={{background: "green", color: "white"}}>
        <p>The current date is '{new Date(currentTime).toString()}'.</p>
    </div>
  );
}

export default App;
