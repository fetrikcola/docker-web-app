// frontend/components/UsersList.jsx
import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  // Ambil daftar user
  const fetchUsers = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data)) {
          setUsers(json.data);
        } else {
          console.error("Data user tidak valid:", json);
        }
      })
      .catch((err) => console.error("Gagal fetch users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fungsi hapus user
  const deleteUser = (id) => {
    if (window.confirm("Yakin ingin menghapus user ini?")) {
      fetch(`/api/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            fetchUsers(); // refresh daftar user
          } else {
            alert("Gagal menghapus user.");
          }
        })
        .catch(() => alert("Terjadi kesalahan saat menghapus."));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">📋 Daftar User</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">Belum ada user.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-2 border rounded bg-white shadow flex justify-between items-center"
            >
              <span>
                <strong>{user.name}</strong> — {user.email} ({user.role})
              </span>
              <button
                onClick={() => deleteUser(user.id)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#e53935",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
