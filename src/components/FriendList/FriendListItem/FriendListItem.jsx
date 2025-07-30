import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classes = [
    styles.friendStatus,
    isOnline ? styles.online : styles.offline,
  ].join(" ");

  return (
    <div className={styles.friendContainer}>
      <img
        className={styles.friendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p className={classes}>{isOnline ? "online" : "offline"}</p>
    </div>
  );
};

export default FriendListItem;
