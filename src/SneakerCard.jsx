import { useNavigate } from "react-router-dom"
import {React, useState, useEffect } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { Carousel } from "bootstrap";
import Card from "./Card";

const SneakerCard = ({sneakers, addSneaker}) => {
    const navigate = useNavigate()



return (    
    <div>
       
        
        <h1>Cards goes here</h1>
        <button className="button-4" type="button" onClick={() => navigate('/favorites')}>favorite</button>
        <button className="button-4" type="button" onClick={() => navigate('/post')}>Post</button>
        {
            sneakers.map((shoe, i) => {
                return(
                    <div key={i}>
                        <Card shoe={shoe}/>
                    </div>
                )
            })
        }
 
    </div>
   )
}

export default SneakerCard