'use client'
import styles from './page.module.css'
import { Mountains_of_Christmas } from '@next/font/google'
import List from './components/List'
import NewGift from './components/NewGift.jsx'
import { useGiftContext } from './context/giftContext'

const christmas = Mountains_of_Christmas({
  weight: '700'
})

export default function Home() {

  const { gifts, showModal, openModal } = useGiftContext();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={`${styles.title} ${christmas.className}`}>Gifts</h1>
          <button className={`${styles.btn} ${styles.margin} ${styles.w75}`} onClick={openModal}>Add gift</button>
          <div className={`${showModal} ${styles.modal}`}>
            <NewGift />
          </div>
          {gifts.length === 0 ? <p>No gifts, add one</p> :  <List gifts={gifts} /> }
        </div>
      </main>
    </div>
  )
}
