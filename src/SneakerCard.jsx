import SneakerInfo from './SneakerInfo'
import { useNavigate } from "react-router-dom"

const SneakerCard = ({sneakers, addSneaker}) => {
    const navigate = useNavigate()


return (    
    <div>
        <button className="button-4" type="button" onClick={() => navigate('/favorite')}>favorite</button>


        {sneakers.map((sneaker)=>{
            return(
                <div onClick={() => { addSneaker(sneaker) }}>
                <SneakerInfo sneaker={sneaker}/>
                </div>
            )
        })
        }
    </div>
   )
}

export default SneakerCard