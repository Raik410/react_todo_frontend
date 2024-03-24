import styles from './Main.module.css';
import basket from '../../assets/svg/Basket.svg'
import edit from '../../assets/svg/Edit.svg'
const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Running Tasks</h1>
      <ul className={styles.main__todos}>
        <li className={styles.main__todo}>
          <div className={styles.main__todoContainer}>
            <p className={styles.main__todoTitle}>Learn Javascipt</p>
            <p className={styles.main__todoTitle}>Start date: 07-07-2023</p>
          </div>
          <div className={styles.main__todoContainer}>
            <img src={basket} alt={'Basket'}/>
            <img src={edit} alt={'Edit'}/>
          </div>
        </li>
        <li className={styles.main__todo}>
          <div className={styles.main__todoContainer}>
            <p className={styles.main__todoTitle}>Learn Javascipt</p>
            <p className={styles.main__todoTitle}>Start date: 07-07-2023</p>
          </div>
          <div className={styles.main__todoContainer}>
            <img src={basket} alt={'Basket'}/>
            <img src={edit} alt={'Edit'}/>
          </div>
        </li>
        <li className={styles.main__todo}>
          <div className={styles.main__todoContainer}>
            <p className={styles.main__todoTitle}>Learn Javascipt</p>
            <p className={styles.main__todoTitle}>Start date: 07-07-2023</p>
          </div>
          <div className={styles.main__todoContainer}>
            <img src={basket} alt={'Basket'}/>
            <img src={edit} alt={'Edit'}/>
          </div>
        </li>
        <li className={styles.main__todo}>
          <div className={styles.main__todoContainer}>
            <p className={styles.main__todoTitle}>Learn Javascipt</p>
            <p className={styles.main__todoTitle}>Start date: 07-07-2023</p>
          </div>
          <div className={styles.main__todoContainer}>
            <img src={basket} alt={'Basket'}/>
            <img src={edit} alt={'Edit'}/>
          </div>
        </li>
        <li className={styles.main__todo}>
          <div className={styles.main__todoContainer}>
            <p className={styles.main__todoTitle}>Learn Javascipt</p>
            <p className={styles.main__todoTitle}>Start date: 07-07-2023</p>
          </div>
          <div className={styles.main__todoContainer}>
            <img src={basket} alt={'Basket'}/>
            <img src={edit} alt={'Edit'}/>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Main;