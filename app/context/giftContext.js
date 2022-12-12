'use client'
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";
import { createContext, useContext, useState, useEffect } from "react";

export const GiftContext = createContext();


export const GiftProvider = ({ children }) => {

    const [gifts, setGifts] = useState([]);
    const [showModal, setShowModal] = useState('hide')

    useEffect(() => {
        console.log('useEffect on GiftContext')
        const data = localStorage.getItem('gifts')
        if (data) {
            setGifts(JSON.parse(data))
        }
    }, [])

    const addGift = (gift) => {
        localStorage.setItem('gifts', JSON.stringify([...gifts, gift]));
        setGifts([...gifts, gift]);
    }

    const deleteGift = (index) => {
        return () => {const newGifts = [...gifts];
        newGifts.splice(index, 1);
        localStorage.setItem('gifts', JSON.stringify(newGifts));
        setGifts(newGifts);}
    }

    const clearList = () => {
        setGifts([])
        localStorage.removeItem('gifts')
    }

    const openModal = () => {
        setShowModal('flex')
    }

    const closeModal = () => {
        setShowModal('hide')
    }

    return (
        <GiftContext.Provider value={{ gifts, addGift, clearList, showModal, openModal, closeModal, clearList, deleteGift }}>
            {children}
        </GiftContext.Provider>
    )

};

export const useGiftContext = () => useContext(GiftContext);