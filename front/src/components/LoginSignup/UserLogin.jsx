import React, { useState } from 'react'
import './UserLogin.css'

const UserLogin = ({Login, error}) => {
    const [details, setDetails] = useState({name:"", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error != "") ? ( <div className='error'>Enter a correct ID and PASSWORD</div> ) : ""}
            {/*
            <div className='form-gorup'>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            */}
            <div className='form-group'>
                <label htmlFor="id">Id : </label>
                <input type="text" name='id' id='id' onChange={e => setDetails({...details, id: e.target.value})} value={details.id}/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>
  )
}

export default UserLogin