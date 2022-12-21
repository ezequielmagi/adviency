
import { useGiftContext } from '../context/giftContext';
import { Mountains_of_Christmas } from '@next/font/google'
import styles from '../page.module.css';

const christmas = Mountains_of_Christmas({
  weight: '400',
  subsets: ['latin']
})

function ShowGifts() {

  const { gifts, closeBuyList } = useGiftContext();

  const printList = () => {
    window.print();
  }


  return (
    <div className={styles.cardToBuy}>
      <h1 className={`${styles.title} ${christmas.className}`}>To buy</h1>
      <ul className={styles.list}>
        {gifts.map((gift, index) => (
          <li key={index} className={styles.itemToBuy}>
            <img src={gift.img} alt={gift.gift} className={styles.img} />
            <div className={styles.giftName}>
              <span> {gift.gift} ({gift.quantity}) </span>
              <small>{gift.to}</small>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.align}>
        <button className={styles.btnCancel} onClick={ closeBuyList } >Close</button>
        <button className={styles.btn} onClick={ printList }>Print</button>
      </div>
    </div>
  )
}

export default ShowGifts