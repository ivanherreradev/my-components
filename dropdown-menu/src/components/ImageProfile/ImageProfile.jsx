import styles from './ImageProfile.module.css'

export default function ImageProfile({onClick}) {
  return (
    <img
      src="https://robohash.org/hicveldicta.png?size=50x50&set=set1"
      alt="profile image"
      className={styles.imgProfile}
      onClick={onClick}
    />
  );
}
