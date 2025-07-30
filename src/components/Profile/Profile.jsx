import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <img className={styles.profileImage} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li className={styles.profileStat}>
          <span className={styles.profileStatName}>Followers</span>
          <span className={styles.profileStatValue}>{stats.followers}</span>
        </li>
        <li className={styles.profileStat}>
          <span className={styles.profileStatName}>Views</span>
          <span className={styles.profileStatValue}>{stats.views}</span>
        </li>
        <li className={styles.profileStat}>
          <span className={styles.profileStatName}>Likes</span>
          <span className={styles.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
