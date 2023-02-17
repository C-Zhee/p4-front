import { useNavigate, Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import { useState } from 'react'

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(username)

    return (
        <div style={{ border: '1px solid black', textAlign: 'center', marginTop: '10%' }}>
            <form>
                <h1>Sign up</h1>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} /><br />
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} /><br />
                <button className="button-4" type="button">Login</button>
                <h3>Already a member? <Link to='/'>Log in</Link></h3>
            </form>
        </div>
    )
}

export default Signup;