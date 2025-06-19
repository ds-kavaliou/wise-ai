import React from "react";
import styles from "./UserModal.module.css";
import type { User } from "../../types/user";

interface Props {
  user: User;
  onClose: () => void;
}

export const UserModal: React.FC<Props> = ({ user, onClose }) => {
  const mapLink = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
        <h2>
          {user.name} ({user.username})
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
        </p>
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          📍 View on map
        </a>
      </div>
    </div>
  );
};
