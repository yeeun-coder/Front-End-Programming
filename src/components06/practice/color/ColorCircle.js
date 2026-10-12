//RAFCE
import React, { useContext } from 'react'
import { ColorContext } from './ColorContext';

const ColorCircle = () => {
    const {state} = useContext(ColorContext);
    return (
        <div>
            <div className='big' style={{ backgroundColor: state.big }} />
            <div className='small' style={{ backgroundColor: state.small }} />
        </div>
    )
}

export default ColorCircle