// import React from 'react';
import Header from "../../component/Header/Header.tsx";
import './Reset.css'
import Main from "../../component/Main/Main.tsx";
import './Root.module.css'
import Footer from "../../component/Footer/Footer.tsx";
import styles from './Root.module.css'

function Root() {
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Root
