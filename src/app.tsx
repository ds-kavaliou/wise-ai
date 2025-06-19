import { useState, useEffect } from "react";
import { UserModal } from "./components/UserModal/UserModal";
import UserTable from "./components/UserTable/UserTable";
import type { User } from "./types/user";

export function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Directory</h1>
      <UserTable
        users={users}
        onSelect={setSelectedUser}
        onDelete={handleDelete}
      />
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
