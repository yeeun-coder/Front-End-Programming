//입력상자에서 키를 입력(onChange)하면 state변수 변경
//확인버튼 클릭(onClick)하면 경고창 띄우기
//상품명 입력상자에서 Enter키를 누르면(onKeyDown) 경고창 띄우기
//useRef Hook을 사용하여 포커스(focus) 이동
//------------------------------------------------
import React, { useRef, useState } from 'react'
import '../Style03.css'

const InfoPage = () => {
    const [name, setName] = useState('Justin');
    const [age, setAge] = useState(20);
    const nameRef = useRef(null);

    // 등록버튼을 클릭한 경우
    const onClickRegister = () => {
        alert(`${name}, 나이:${age} 정보가 등록되었습니다.`);
        nameRef.current.focus();  // 포커스 이동
    }

    // 이름 입력상자에서 엔터를 쳤을때 함수
    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onClickRegister();  // 등록버튼 클릭시 실행되는 함수 호출
        }
    }

    return (
        <div className='box'>
            <h3>이름:{name} | 나이:{age}</h3>
            <input ref={nameRef}
                onChange={(event)=>setName(event.target.value)}
                value={name}
                placeholder='이름'/><br/>
            <input onKeyDown={onKeyDown}
                onChange={(e)=>setAge(parseInt(e.target.value))}
                value={age}
                placeholder='나이' type='number' setp={1}/><br/>
            <button onClick={onClickRegister}>등록</button>
        </div>
    )
}
export default InfoPage