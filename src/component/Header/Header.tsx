// import React from 'react';
import styles from './Header.module.css';
import burger from '../../assets/svg/Burger.svg';
import notification from '../../assets/svg/Notife.svg';
import mode from '../../assets/svg/DarkMode.svg';
import profile from '../../assets/svg/Profile.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={burger} alt={'Menu'}/>
      <nav className={styles.header__nav}>
        <img src={notification} alt={'Notification'}/>
        <img src={mode} alt={'Mode'}/>
        <img src={profile} alt={'Profile'}/>
      </nav>
    </header>
  );
};

export default Header;