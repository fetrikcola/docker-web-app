import React from "react";
import AddUser from "./components/Adduser";
import UsersList from "./components/UsersList";
import Quote from "./components/Quote";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "'Segoe UI', 'Arial', sans-serif",
        background: "linear-gradient(to bottom, #f2f4f8, #dce3ea)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        color: "#333",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#222",
          }}
        >
          🚀 User Dashboard
        </h1>

        {/* Add User Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "1rem",
              borderBottom: "2px solid #ddd",
              paddingBottom: "0.4rem",
              color: "#444",
            }}
          >
            👤 Add New User
          </h2>
          <AddUser />
        </section>

        {/* Users List Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "1rem",
              borderBottom: "2px solid #ddd",
              paddingBottom: "0.4rem",
              color: "#444",
            }}
          >
            📋 Users List
          </h2>
          <UsersList />
        </section>

        {/* Quote Section */}
        <section>
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "1rem",
              borderBottom: "2px solid #ddd",
              paddingBottom: "0.4rem",
              color: "#444",
            }}
          >
            🧠 Motivational Quote
          </h2>
          <Quote />
        </section>
      </div>

      <footer style={{ fontSize: "0.9rem", color: "#666", marginTop: "auto" }}>
        &copy; {new Date().getFullYear()} User Dashboard • Made with 💻 by Fetrik
      </footer>
    </div>
  );
}
