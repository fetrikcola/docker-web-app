import React, { useState, useEffect } from "react";

const AddUser = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "user" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("✅ User berhasil ditambahkan!");
          setForm({ name: "", email: "", role: "user" });
        } else {
          setMessage("❌ Gagal menambahkan user.");
        }
      })
      .catch(() => setMessage("❌ Terjadi kesalahan."));
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>👤 Tambah User</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input type="text" name="name" placeholder="Nama" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Tambah</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddUser;
