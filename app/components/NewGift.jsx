
'use client';
import styles from '../page.module.css'
import { Mountains_of_Christmas } from '@next/font/google'
import { useEffect, useState } from 'react'
import { useGiftContext } from '../context/giftContext'
import { api } from '../utils/api';

const christmas = Mountains_of_Christmas({
    weight: '400',
    subsets: ['latin']
})

function NewGift() {

    const { gifts, addGift, closeModal, giftToEdit, updateGift, randomGifts, duplicate } = useGiftContext();

    const [gift, setGift] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [img, setImg] = useState('');
    const [to, setTo] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (giftToEdit !== null) {
            setGift(gifts[giftToEdit].gift)
            setQuantity(gifts[giftToEdit].quantity)
            setImg(gifts[giftToEdit].img)
            setTo(gifts[giftToEdit].to)
            setPrice(gifts[giftToEdit].price)
        }

    }, [giftToEdit])


    const addNewGift = (e) => {
        e.preventDefault()

        if (!img) {
            setImg('https://via.placeholder.com/25');
        }

        
        if (giftToEdit !== null && !duplicate) {
            updateGift(giftToEdit, { gift, quantity, img, to, price });
        } else {
            addGift({ gift, quantity, img, to, price });
        }

        setGift('')
        setQuantity(1)
        setImg('')
        setTo('')
        setPrice('')
        closeModal()
    }

    const hide = () => {
        setGift('')
        setQuantity(1)
        setImg('')
        setTo('')
        setPrice('')
        closeModal()
    }

    const randomGift = (e) => {
        e.preventDefault()
        setGift(randomGifts[Math.floor(Math.random() * randomGifts.length)].gift)
    }

    return (
        <div className={styles.newGift}>
            <h2 className={christmas.className}>Add a new gift</h2>
            <form className={styles.form}>
                <div className={styles.align}>
                    <input type="text" id="gift" name="gift" value={gift} onChange={(e) => setGift(e.target.value)} placeholder='Gift' />
                    <button className={styles.btn} onClick={randomGift}> Sorprice me! </button>
                </div>
                <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' />
                <input type="text" id="img" name="img" value={img} onChange={(e) => setImg(e.target.value)} placeholder='Image url' />
                <input type="text" id="to" name="to" value={to} onChange={(e) => setTo(e.target.value)} placeholder='To' />
                <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='ARS $' />
                <div className={styles.align}>
                    <button className={styles.btnCancel}
                        onClick={(e) => {
                            e.preventDefault()
                            hide()
                        }}
                    >Cancel</button>
                    <button className={styles.btn} onClick={addNewGift}
                        disabled={!gift || !quantity || quantity < 1 || !to || !price || price < 1}
                    >{giftToEdit !== null && !duplicate ? 'Update' : 'Add'}</button>

                </div>
            </form>
        </div>
    )
}

export default NewGift