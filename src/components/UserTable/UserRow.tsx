import React from "react";
import styles from "./UserTable.module.css";
import type { User } from "../../types/user";

type Props = {
  user: User;
  onSelect: (user: User) => void;
  onDelete: (userId: number) => void;
};

const UserRow: React.FC<Props> = ({ user, onSelect, onDelete }) => {
  return (
    <div className={styles.row} onClick={() => onSelect(user)}>
      <div className={styles.nameEmail}>
        <span className={styles.name}>{user.name}</span>
        <span className={styles.email}>{user.email}</span>
      </div>
      <div>{`${user.address.city}, ${user.address.street}`}</div>
      <div>{user.phone}</div>
      <div>
        <a
          href={`http://${user.website}`}
          className={styles.website}
          onClick={(e) => e.stopPropagation()}
        >
          {user.website}
        </a>
      </div>
      <div>{user.company.name}</div>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.id);
          }}
        />
      </div>
    </div>
  );
};

export default UserRow;
