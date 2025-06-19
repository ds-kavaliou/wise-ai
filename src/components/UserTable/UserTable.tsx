import React from "react";
import styles from "./UserTable.module.css";
import UserRow from "./UserRow";
import type { User } from "../../types/user";

type Props = {
  users: User[];
  onSelect: (user: User) => void;
  onDelete: (userId: number) => void;
};

const UserTable: React.FC<Props> = ({ users, onSelect, onDelete }) => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          <div>Name / Email</div>
          <div>Address</div>
          <div>Phone</div>
          <div>Website</div>
          <div>Company</div>
          <div>Action</div>
        </div>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default UserTable;
