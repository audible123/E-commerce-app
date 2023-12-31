import React,{useState} from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { updateuser } from "../utils/DataSlice";




const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword]= useState("");
    const[error,setError]=useState("")


    const dispatch = useDispatch();


    function handleSubmit(e){
        e.preventDefault();
        setError('')
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.displayName = "John" ;
            dispatch(updateuser(user));
        }
        )
        .catch( err => setError(err.message))
        setEmail('')
        setPassword('')
    }

    
    return (
    <div 
    className='page flex justify-center items-center h-[100vh]'>
        <div 
        className='auth shadow-2xl h-auto bg-gray-200'>
            <h1 className="font-bold text-2xl">Login</h1>
            {error && <div className="auth__error">{error}</div>}

            <div className="mt-16">
            <form
            onSubmit={handleSubmit} name='Login Form'>
                <input
                type="email"
                value={email}
                placeholder="Enter your Email"
                required
                className="shadow-xl bg-white"
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                type="password"
                value={password}
                placeholder="enter your password"
                className="shadow-xl bg-white"
                onChange={(e)=> setPassword(e.target.value)}/>

                <button 
                className="bg-[#cd9042]"
                type='submit'>
                    Login</button>
            </form>
            </div>

            <span 
            className="text-xs"
            >
                Don't Have An Account?
                <Link
                to="/signup"
                className="text-[#cd9042]">
                SignUp</Link>
            </span>

        </div>
    </div>
)
}

export default Login