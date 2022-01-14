import React, { useEffect, useState }  from 'react';
import './Comp.scss'
import Button from '@mui/material/Button';

const Comp = ({ titulo, texto }) => {

    const [isOpen, setIsOpen] = useState(false);

    function handleClickOpen(){
        setIsOpen(true);
    }
    function handleClickClose(){
        setIsOpen(false);
    }
    return (
        <div>
            <div className='HeaderComp'>
                <h2>{titulo}</h2>
                <div className='botoesvisu'>
                    <Button variant="outlined" onClick={handleClickOpen}><p>+</p></Button>
                    <button onClick={handleClickClose} className='infoPlus'><p>-</p></button>
                    
                </div>
            </div>
            <div className={isOpen ? "CorpoComp" : "closed" }>
                <p>{texto}</p>
            </div>
        </div>
    );
}


export default Comp; 