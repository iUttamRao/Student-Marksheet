import React, { useState } from 'react'
import "./details.css"
import { useDispatch } from 'react-redux';
import { fetchFirstName, fetchLastName } from '../../redux/reducer/nameReducer';
import { useNavigate } from 'react-router-dom';
import { MARKSHEET } from '../../router/keys';

const Details = () => {
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');

    const firstNameSet =()=>{
      dispatch(fetchFirstName(firstName))
    }
    const lastNameSet =()=>{
      dispatch(fetchLastName(lastName))
    }
    const handleSubmit =() => {
        firstNameSet();
        lastNameSet();
        navigate(MARKSHEET);
    };

  return (
    <div className='form'>
        <h1>Student's Details</h1>
        <input 
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        required
        />
        <input 
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        required
        />
        <buttom className="but" onClick={handleSubmit}>Submit</buttom>
   </div>
  );
}

export default Details