import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://13.207.114.206:8081/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        background: "#f4f6f8",
      }}
    >
      <h1>Maven Practice Application</h1>

      <h2>React Frontend</h2>

      <p>Spring Boot Backend Response:</p>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
