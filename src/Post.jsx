import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Post = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")



    const handleClick = () => {
        window.alert('Thanks for adding your shoe!');
    };

    return(
        <div>
            <button className="button-4" type="button" onClick={() => navigate('/sneakercard')}>Sneaker Card</button>
            <h2>New Shoe</h2>
            <form>
                <input type="text" name="name" placeholder="Shoe name" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="number" name="price" step="0.01" placeholder="Price" />
                <button onClick={handleClick} type="submit">Add Shoe</button>
            </form>

        </div>
    )
}

export default Post;
