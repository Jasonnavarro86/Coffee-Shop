import '../styles/globals.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer className={styles.footer}>
      2022 @Jason Navarro 
      </footer>
    </div>
  )
}

export default MyApp
