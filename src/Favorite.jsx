import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardTwo from './CardTwo'


const Favorite = () => {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])
    console.log(favorites)

    useEffect(() => {
        let request = async () => {
            let req = await fetch(`http://localhost:3000/favoritesU/7`)
            let res = await req.json()
            setFavorites(res)
        }
        request()
    }, [])
    
    return (    
        <div>
            <button className="button-4" type="button" onClick={() => navigate('/sneakercard')}>Sneaker Card</button>
            <h1>Favorites</h1>
            {
                favorites.map((fav)=> {
                    return(
                        <div>
                            <CardTwo fav={fav} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorite;


