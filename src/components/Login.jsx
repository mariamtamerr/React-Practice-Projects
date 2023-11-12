import React, { useContext, useEffect, useReducer } from 'react'
import { Global } from '../context/Global';

const Login = () => {
    const reducer = (prev, next ) => ({...prev, ...next});
    const [ {username, password} , setState] = useReducer(reducer, {
        username: '',
        password: '',
    })

    // Consumer of context
    const {user, setUser} = useContext(Global);

    useEffect( () => {
        console.log(user);
    }, [user] )


    const handleChange = (e) => {
        const inputName = e.target.name; //the name you gave ur input : <input name="username"
        const value = e.target.value; 
        setState({ [inputName] : value}) //like doing if (inputName === 'username' ) setState( { username:value } ) ; if (inputName === 'password' ) setState( { password : value } ) in one step
       
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password}); // setUSer from context ... e3ml set bl username w password el m3aya flstate
        setState( {username: '' , password: ''} ); // setSTATE NOT setUSER ... set them to fady after u press submit + GIVE VALUE ATTR TO INPUTS
    }

  return (
    <>

    <form onSubmit={handleSubmit}>
        <label>
            Username
            <input type='text' name='username' onChange={handleChange} value={username}/>
        </label> <br/>
        <label>
            Password
            <input type='password' name='password' onChange={handleChange} value={password}/>
        </label> <br/>
        <input type='submit' value='submit' />
    </form>

    </>
  )
}

export default Login
