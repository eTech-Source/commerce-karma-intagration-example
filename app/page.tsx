import Client from "./components/Client";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <div>
      <header className={styles.customerProfileHeader}>
        <h1>Customer Profile: Example Client</h1>
      </header>
      <div className={styles.profileInfo}>
        <div className={styles.contacts}>
        <header className={styles.infoHeader}>
          <h1>Contacts</h1>
        </header>
          <h2>Primary Contact</h2>
          <div className={styles.contactInfo}>
            <p className={styles.info}>Example Client</p>
            <b>Primary Contact Details</b>
            <hr />
            <div>
              <b>Mail</b>
              <p className={styles.info}>test@email.com</p>
            </div>
            <div>
              <b>Phone</b>
              <p className={styles.info}>+1-949-999-777</p>
            </div>
          </div>
          <b>Commerce Karma Rating</b>
          <Client />
        </div>
      </div>
    </div>
  )
}
