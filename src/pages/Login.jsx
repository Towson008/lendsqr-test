import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import BannerImg from '../images/banner-image.png';
import Logo from '../images/lendsqr.png';
import ImgLogo from '../images/Union.png';
import axios from '../api/axios';
import Dashboard from './Dashboard';

const LoginUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/"

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMeg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); 

    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        setErrMsg('')
    },[email, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            const response = await axios.get(LoginUrl, JSON.stringify({email, pwd}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            });

            console.log(JSON.stringify(response?.data) );
            
            // console.log(JSON.stringify(response));

            const accessToken = response?.data?.accessToken;
            const profile = response?.data.profile;
            setAuth({email, pwd, profile,accessToken});
            setEmail('')
            setPwd('')
            setSuccess(true)
        }catch(err){
            if(!err?.response){
                setErrMsg('No Server Response')
            }else if(err.response?.status === 400){
                setErrMsg('Missing Email or Password')
            }else if(err.response?.status === 401){
                setErrMsg('Unauthorized Profile')
            }else{
                setErrMsg("Login Fail")
            }
            errRef.current.focus();
        }
    }

  return (
    <> 
    { success? (
        <section>
            <Dashboard />
        </section>
    ):(
    <section className='login-page'>
        <div className="pablo-banner">
            <div className="logo">
                <img src={ImgLogo} alt="" />
                <img src={Logo} alt="" />
            </div>
            <div className="banner-img">
                <img src={BannerImg} alt="" />
            </div>
        </div>
        <div className="form-section"> 
            <h2>Welcome!</h2>
            <p>Enter details to login</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    <input type="email" 
                    id='email'
                    ref={userRef}
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder="Email"/>
                </label>
                <label htmlFor='password'>
                    <input type="password" 
                    id='password'
                    onChange={(e)=>setPwd(e.target.value)}
                    value={pwd}
                    required
                    placeholder="Password"/>
                </label>
                
                <Link to='/' >
                    <p className='forgot-password'>Forgot Password?</p>
                </Link>
                <button className='cta-login'>Login</button>
            </form>
        </div>
    </section>
    )}
    </>
  )
}

export default Login