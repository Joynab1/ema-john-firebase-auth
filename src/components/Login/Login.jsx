import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                setSuccess('successfully logged in')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="pass" required />
                        <p onClick={() => setShow(!show)}><small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small></p>
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p><small>New to ema-john? Please <Link to='/signUp'>Create an Account</Link></small></p>
                <p><small>{success}</small></p>
            </div>
        </>
    );
};

export default Login;