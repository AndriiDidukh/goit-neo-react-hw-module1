import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.row}>Type</th>
          <th className={styles.row}>Amount</th>
          <th className={styles.row}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.row}>{item.type}</td>
            <td className={styles.row}>{item.amount}</td>
            <td className={styles.row}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
