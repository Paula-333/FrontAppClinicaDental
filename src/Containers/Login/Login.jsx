import axios from 'axios';
import React, {useState } from 'react';
import './Login.css'
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post('https://clinia-dental-citas.herokuapp.com/user/login', {email,password})
            localStorage.setItem('token',res.data.token)
            props.setUser(res.data.user)
            history.push('/')
        } catch (error) {
            console.log('ERROR')
        }
    
    }
    return (
        <div className="Login" onSubmit={handleSubmit}>
            <h1>¡Login!</h1>
            <input type="email" onChange={event=>setEmail(event.target.value)} name="email" placeholder="Email" value={email} className="input-1"/>
            <input type="password" onChange={event=>setPassword(event.target.value)} name="password" placeholder="Contraseña" value={password} className="input-1"/>
            <button type="submit" className="button">Login</button>
        </div>
    )
}


export default Login;