import styles from './layout.module.css'
import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {

    const [restaurantsState, setRestaurants] = useState([0]);

    const fetchResturants = async () => {
        const restaurants = await fetch('http://localhost:3001/restaurant')
        console.log(restaurants.json());
    }

    useEffect(() => {
        fetchResturants();
    }, []);

    return (
        <h1>wat
        </h1>
    )
}