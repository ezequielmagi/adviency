'use client';
import styles from '../page.module.css'
import { useGiftContext } from '../context/giftContext'
import ShowGifts from './ShowGifts'

function List({ gifts }) {

    const { deleteGift, clearList, openModal, setDuplicate, showBuyList, openBuyList } = useGiftContext();

    const editGift = (index) => {
        return () => {
            openModal(index)
        }
    }

    const duplicate = (index) => {
        return () => {
            setDuplicate(true);
            openModal(index)
        }
    }

    return (
        <div>
            <ul className={styles.list}>
                {gifts.map((gift, index) => (
                    <li key={index} className={styles.item}>
                        <img src={gift.img} alt={gift.gift} className={styles.img} />
                        <div className={styles.giftName}>
                            <span>{gift.gift} ({gift.quantity}) - ${parseFloat(gift.price) * gift.quantity} </span>
                            <small>{gift.to}</small>
                        </div>
                        <button onClick={editGift(index)} className={styles.evilBtn}>Edit</button>
                        <button onClick={duplicate(index)} className={styles.evilBtn}>Dup</button>
                        <button onClick={deleteGift(index)} className={styles.btn}>x</button>
                    </li>
                ))}
            </ul>
            <p className={styles.total}>Total: ${gifts.reduce((acc, gift) => acc + (parseFloat(gift.price) * gift.quantity), 0)}</p>
            <div className="actions">
                <button className={`${styles.btn} ${styles.w75}`} onClick={clearList}>Clear all</button>
                <button className={`${styles.evilBtn} ${styles.w75}`} onClick={openBuyList}>Show</button>
            </div>
            <div className={`${showBuyList} ${styles.modal}`}>
                <ShowGifts />
            </div>
        </div>
    )
}

export default List