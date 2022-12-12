
'use client';
import styles from '../page.module.css'
import { Mountains_of_Christmas } from '@next/font/google'
import { useState } from 'react'
import { useGiftContext } from '../context/giftContext'

const christmas = Mountains_of_Christmas({
    weight: '400'
})

function NewGift() {

    const [gift, setGift] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [img, setImg] = useState('')
    const [to, setTo] = useState('')

    const { gifts, addGift, closeModal } = useGiftContext();

    const addNewGift = () => {
        if (gifts.find((g) => g.gift === gift)) {
            return;
        }
        if (!img) {
            setImg('https://via.placeholder.com/25');
        }
        addGift({ gift, quantity, img, to });
        setGift('')
        setQuantity(1)
        setImg('')
        setTo('')
        closeModal()
    }

    return (
        <div className={styles.newGift}>
            <h2 className={christmas.className}>Add a new gift</h2>
            <form className={styles.form}>
                <input type="text" id="gift" name="gift" value={gift} onChange={(e) => setGift(e.target.value)} placeholder='Gift' />
                <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' />
                <input type="text" id="img" name="img" value={img} onChange={(e) => setImg(e.target.value)} placeholder='Image url' />
                <input type="text" id="to" name="to" value={to} onChange={(e) => setTo(e.target.value)} placeholder='To' />
                <button className={styles.btn} onClick={addNewGift}
                    disabled={!gift || !quantity || quantity < 1 || !to}
                >Add</button>
                <button className={styles.btnCancel}
                    onClick={(e) => {
                        e.preventDefault()
                        closeModal()
                    }}
                >Cancel</button>
            </form>
        </div>
    )
}

export default NewGift