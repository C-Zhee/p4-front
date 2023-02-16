import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button className="button-4" type="button" onClick={() => navigate('/sneakercard')}>Login</button>
        </div>
    )
}

export default Login;