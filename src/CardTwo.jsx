import { React, useState, useEffect } from 'react'
import Button from '@mui/material/Button';

const CardTwo = ({ fav,deleteSneaker }) => {
    console.log(fav)
    const [sneaker, setSneaker] = useState(fav)
    const sneakerID = fav.id
    console.log(sneakerID)

    const notfavorite = () => {
        console.log(fav.id)
        fetch(`http://localhost:3000/favoritesU/7`, {
            method: 'DELETE'
        })

    }

    return (
        <div style={{ border: '1px solid orange', textAlign: 'center', marginLeft: '30%', marginRight: '30%', marginBottom: '40px', backgroundColor: 'orange', borderRadius: '5%' }}>
            <h1>{sneaker.name}</h1>
            <div style={{ textAlign: 'center', padding: '3%' }}>
                <img src={sneaker.image} height='250px' style={{ borderRadius: '5%' }} />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                </div>
            </div>
        </div>
    )
}

export default CardTwo