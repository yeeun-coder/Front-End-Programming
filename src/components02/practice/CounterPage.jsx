//number를 일반 변수로 정의하여 증감하기
//number를 state 변수로 정의하여 증감하기
//------------------------------------------
import React, { useState } from 'react'
import '../Style02.css'

const CounterPage = () => {
    // let number = 0;
    const [number, setNumber] = useState(1);

    // 1씩 증가함수
    const onIncrease = () => {
        // number = number + 1;
        // console.log('Number:', number);
        setNumber(number + 1);
    }

    // 1씩 감소함수
    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div className='box'>
            <h1>{number}</h1>
            <button onClick={onDecrease}>감소</button>
            <button onClick={onIncrease}>증가</button>
        </div>
    )
}
export default CounterPage