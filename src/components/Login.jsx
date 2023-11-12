import React, { useReducer } from 'react'

const Login = () => {
    const reducer = (prev, next ) => ({...prev, ...next});
    const [ {username, password} , setState] = useReducer(reducer, {
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const inputName = e.target.name; 
        const value = e.target.value; 
        console.log(e.target.value); 
        console.log(e.target.name); 
        setState({ [inputName] : value})
        console.log(setState({ inputName : value}));
        console.log(setState({ [inputName] : value}));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>

    <form>
        <label>
            Username
            <input type='text' name='text' onChange={handleChange}/>
        </label> <br/>
        <label>
            Password
            <input type='password' name='password' onChange={handleChange}/>
        </label> <br/>
        <input type='submit' value='submit' />
    </form>

    </>
  )
}

export default Login
