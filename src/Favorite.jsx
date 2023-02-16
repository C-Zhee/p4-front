import { useNavigate } from 'react-router-dom'


const Favorite = ({ favorite, deleteSneaker }) => {
    const navigate = useNavigate()
    
    return (
        <div >
            <button className="button-4" onClick={() => navigate('/sneakercard')}>Sneaker Card</button>
            {
                favorite.map((sneaker) => {
                    return (
                        <div onClick={() => { deleteSneaker(sneaker) }}>
                            <img width="250px" height="300px" grid-template-columns="auto auto auto auto auto auto" src={sneaker.image} />
                            <p>{sneaker.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorite;