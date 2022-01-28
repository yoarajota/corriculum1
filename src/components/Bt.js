import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Bt = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/home");
    }
    return (
        <Button  bg='#D8D4E7' colorScheme='blue' onClick={handleClick}>Button</Button>
    )
}

export default Bt;