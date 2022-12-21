'use client'
import styles from './page.module.css'
import { Mountains_of_Christmas } from '@next/font/google'
import List from './components/List'
import NewGift from './components/NewGift.jsx'
import { useGiftContext } from './context/giftContext'

const christmas = Mountains_of_Christmas({
  weight: '700',
  subsets: ['latin']
})

export default function Home() {

  const { gifts, showModal, openModal, loading } = useGiftContext();

  const modal = (index) => {
    return () => {
      openModal(index)
    }
  }

  const startStopSong = () => {
    const audio = document.querySelector('audio')
    if (audio.paused) {
      audio.play()
      audio.loop = true
      audio.volume = 0.3
    } else {
      audio.pause()
    }
  }


  if (loading) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.card}>
            <p className={styles.subtitle}>Loading...</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={`${styles.title} ${christmas.className}`}>Gifts</h1>
          <button className={`${styles.evilBtn} ${styles.margin} ${styles.w75}`} onClick={modal(null)}>Add gift</button>
          <div className={`${showModal} ${styles.modal}`}>
            <NewGift />
          </div>
          {gifts.length === 0 ? <p>No gifts, add one</p> : <List gifts={gifts} />}
          <button onClick={startStopSong} className={styles.startStopSong}>🎶</button>
        </div>
        <audio src="/song.mp3" preload="auto" hidden></audio>
      </main>
    </div>
  )
}

