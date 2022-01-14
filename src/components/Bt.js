import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Bt.scss";

const Bt = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/home");
    }
    return (
        <button className='draw' onClick={handleClick}>Home</button>
    )
}

export default Bt;