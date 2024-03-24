import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <a className={styles.footer__telegram}>Telegram</a>
        <a className={styles.footer__github}>Github</a>
      </nav>
    </footer>
  );
};

export default Footer;