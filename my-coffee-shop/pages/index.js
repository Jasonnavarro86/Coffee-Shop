import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Image from 'next/image'
export default function Home() {
  const handleOnBannerButtonClick = () => {
    alert(5)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>My Coffe Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Banner buttonText={'Find Local Shops'} handleOnClick={handleOnBannerButtonClick} />
        <div className={styles.heroImage} >
          <Image width={700} height={400} src='/static/images/hero-image.png' />
        </div>
      </main>
    </div>
  )
}
