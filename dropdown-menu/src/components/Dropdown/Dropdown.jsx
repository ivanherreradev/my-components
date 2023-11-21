import styles from './Dropdown.module.css'

export default function Dropdown() {
  return (
    <div className={styles.container}>
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}
