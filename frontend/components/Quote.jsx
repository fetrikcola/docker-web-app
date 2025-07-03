import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => setQuote(data.data))
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "1rem",
        borderLeft: "5px solid #ccc",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <h2>🧠 Motivational Quote</h2>
      <blockquote style={{ fontStyle: "italic", margin: "1rem 0" }}>
        "{quote.text}"
      </blockquote>
      <p style={{ textAlign: "right", fontWeight: "bold" }}>— {quote.author}</p>
    </div>
  );
};

export default Quote;
