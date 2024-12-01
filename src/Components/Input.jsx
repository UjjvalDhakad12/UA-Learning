import React from 'react'
import './Input.css'
import PanToolSharpIcon from '@mui/icons-material/PanToolSharp';

const Input = () => {
    return (
        <div className='contanier'>
            <input type="text" className='searchbar' placeholder='type here' />
            <button className='btnsearch'> {<PanToolSharpIcon />}</button>
        </div>
    )
}

export default Input