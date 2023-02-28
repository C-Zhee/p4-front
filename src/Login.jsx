import { useNavigate, Link  } from "react-router-dom"
import TextField from '@mui/material/TextField';
import {useState} from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(username)

    return (
        <div style={{border:'1px solid black', textAlign:'center', marginTop:'10%'}}>
            <form>
                <h1>Log in</h1>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/><br />
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} /><br />
                {/* <button className="button-4" type="button">Login</button> */}
                <button className="button-4" type="button" onClick={() => navigate('/sneakercard')}>Login</button>
                <h3>Dont have an account yet? <Link to='/signup'>Sign up</Link></h3>
            </form>
        </div>
    )
}

export default Login;