import {React, useState, useEffect} from 'react'
import Button from '@mui/material/Button';

const Card = ({shoe}) => {
    const [sneaker, setSneaker] = useState(shoe)
    console.log(sneaker)
   

    const notfavorite = () => {
        console.log('dont like it')
    }

    const favorite = () => {
        console.log(sneaker.id)
        fetch(`http://localhost:3000/favorites`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: 7,
                sneaker_id: sneaker.id,
            })
        })

    }


    return(
        <div style={{border:'1px solid orange', textAlign:'center', marginLeft:'30%', marginRight:'30%', marginBottom:'40px', backgroundColor:'orange', borderRadius:'5%'}}>
            <h1>{sneaker.name}</h1>
            <div style={{textAlign:'center', padding:'3%'}}>
                <img src={sneaker.image} height='250px' style={{borderRadius:'5%'}} />
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{flex:'50%'}}>
                    <Button variant="contained" onClick={notfavorite}>DROP</Button>
                </div>
                <div tyle={{ flex: '50%' }}>
                    <Button variant="contained" onClick={favorite}>COP</Button>
                </div>
            </div>
        </div>
    )
}

export default Card