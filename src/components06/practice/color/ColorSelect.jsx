import React, { useContext } from 'react'
import { ColorContext } from './ColorContext';

const ColorSelect = () => {
    const { dispatch } = useContext(ColorContext);

    const colors =['red', 'orange', 'yellow', 'green', 
        'blue', 'indigo', 'violet', 'pink', 'brown'];

    const onLeft = (color) => {
        dispatch({type:'big', color:color});
    }

    const onRight = (e, color) => {
        e.preventDefault();
        dispatch({type:'small', color:color});
    }
    
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display:'flex' }}>
                { colors.map(color=>
                    <div onContextMenu={(e)=>onRight(e, color)}
                        onClick={()=>onLeft(color)}
                        key={color} 
                        style={{background:color, width:'30px', 
                            height:'30px', cursor:'pointer'}}/>
                )}
            </div>
        </div>
    )
}

export default ColorSelect
