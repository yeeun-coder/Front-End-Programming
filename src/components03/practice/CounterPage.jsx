//마우스 왼쪽 버튼을 클릭(onClick)하면 1증가, 
//마우스 오른쪽 버튼을 클릭(onContextMenu)하면 1감소
//-------------------------------------------------
import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    const [number, setNumber] = useState(0);

    // 마우스 오른쪽 클릭한 경우
    const onClickRight = (e) => {
        e.preventDefault();
        setNumber(number - 1);
    }
    
    return (
        <div className='box'>
            <input onChange={(e)=>setNumber(parseInt(e.target.value))}
                value={number}
                style={{width:'100px'}} type='number'/>
            <button onContextMenu={onClickRight}
                onClick={()=>setNumber(number + 1)}>증감</button>
        </div>
    )
}
export default CounterPage