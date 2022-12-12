import styles from '../page.module.css'
import { useGiftContext } from '../context/giftContext'

function List({ gifts }) {

    const { deleteGift, clearList } = useGiftContext();

    return (
        <>
            <ul className={styles.list}>
                {gifts.map((gift, index) => (
                    <li key={gift.gift} className={styles.item}>
                        <img src={gift.img} alt={gift.gift} className={styles.img} />
                        <div className={styles.giftName}>
                            <span>{gift.gift} ({gift.quantity})</span>
                            <small>{gift.to}</small>
                        </div>
                        <button onClick={deleteGift(index)} className={styles.btn}>x</button>
                    </li>
                ))}
            </ul>
            <button className={`${styles.btn} ${styles.w75}`} onClick={clearList}>Clear all</button>
        </>
    )
}

export default List