import { useRouteError } from "react-router-dom";
import sadCat from '../assets/images/crying.jpg'
import styles from './error-page.module.css';
const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <section className={styles.errorPage}>
      <h1 className={styles.errorPage__text}>Gotcha error :(</h1>
      <p className={styles.errorPage__text}>Sorry, an unexpected error has occurred.</p>
      <img className={styles.errorPage__image} src={sadCat} alt={'Sad cat'}/>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};

export default ErrorPage;