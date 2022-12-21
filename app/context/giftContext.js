'use client'
import { createContext, useContext, useState, useEffect, use } from "react";
import { api } from "../utils/api";

export const GiftContext = createContext();


export const GiftProvider = ({ children }) => {

    const [gifts, setGifts] = useState([]);
    const [showModal, setShowModal] = useState('hide')
    const [showBuyList, setShowBuyList] = useState('hide')
    const [giftToEdit, setGiftToEdit] = useState(null)
    const [loading, setLoading] = useState(true)
    const [randomGifts, setRandomGifts] = useState([]);
    const [duplicate, setDuplicate] = useState(false)

    useEffect(() => {
        const gifts = JSON.parse(localStorage.getItem('gifts'));

        if (!gifts) {
            api.gifts.get().then(gifts => {
                setGifts(gifts)
                localStorage.setItem('gifts', JSON.stringify(gifts));
                setLoading(false)
            })
        } else {
            setGifts(gifts)
            setLoading(false)
        }

        api.randomGifts.get().then((random) => {
            setRandomGifts(random)
        })

        }, [])

    const addGift = (gift) => {
        localStorage.setItem('gifts', JSON.stringify([...gifts, gift]));
        setGifts([...gifts, gift]);
    }

    const deleteGift = (index) => {
        return () => {
            const newGifts = [...gifts];
            newGifts.splice(index, 1);
            localStorage.setItem('gifts', JSON.stringify(newGifts));
            setGifts(newGifts);
        }
    }

    const updateGift = (index, gift) => {
        const newGifts = [...gifts];
        newGifts[index] = gift;
        localStorage.setItem('gifts', JSON.stringify(newGifts));
        setGifts(newGifts);

    }

    const clearList = () => {
        setGifts([])
        localStorage.removeItem('gifts')
    }

    const openModal = (order) => {
        if (order !== null) {
            setGiftToEdit(order)
        }
        setShowModal('flex')
    }

    const closeModal = () => {
        setShowModal('hide')
        setGiftToEdit(null)
    }

    const openBuyList = () => {
        setShowBuyList('flex')
    }

    const closeBuyList = () => {
        setShowBuyList('hide')
    }

    return (
        <GiftContext.Provider value={{ gifts, addGift, clearList, showModal, openModal, closeModal, clearList, deleteGift, updateGift, giftToEdit, loading, randomGifts, setDuplicate, duplicate, openBuyList, closeBuyList, showBuyList }}>
            {children}
        </GiftContext.Provider>
    )

};

export const useGiftContext = () => useContext(GiftContext);