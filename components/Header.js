import styles from "../styles/Header.module.css";

const Nav = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>Newz
      </h1>
      <p className={styles.description}>Stay updated with the current news</p>
    </div>
  );
};

export default Nav;
