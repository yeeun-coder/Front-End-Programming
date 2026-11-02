//리액트 부트스트랩->Components->Forms
//Col 레이아웃 디자인 xs={12} md={10} lg={9} xs={8}
import React, { useContext, useRef, useState } from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import '../Style08.css'
import { ModalContext } from '../context/ModalContext'

const initForm = {
    id:'blue',
    pass:'1234',
    name:'홍길동',
    intro:'저는 초보 개발자입니다.'
}

const FormPage = () => {
    const [form, setForm] = useState(initForm);
    const { id, pass, name, intro } = form;
    const { setAlert, setConfirm } = useContext(ModalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        // if(id==='' || name==='' || pass==='') {
        //     alert('Please Enter your name, id, pass!');
        //     return;
        // }
        if(id==='' || name==='' || pass==='') {
            setAlert({
                show:true,
                message:'Please Enter your name, id, pass!'
            });
            return;
        }

        // if(window.confirm('Are you sure you want to join?')) {
        //     console.log('join success', form);
        // }
        setConfirm({
            show:true,
            message:'Are you sure you want to join?',
            action:()=>console.log('join success', form)
        });
    }

    const onReset = (e) => {
        e.preventDefault();
        // if(window.confirm('Are you sure you want to reset?')) {
        //     setForm(initForm);
        // }
        setConfirm({
            show:true,
            message:'Are you sure you want to reset?',
            action:()=>{
                setForm(initForm)
            }
        });
    }

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className='text-center my-5'>회원가입</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={9} xl={8}>
                    <Form onReset={onReset}
                        className='p-3' onSubmit={onSubmit}>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>아이디</InputGroup.Text>
                            <Form.Control onChange={onChange}
                                value={id} name='id'/>
                        </InputGroup>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>비밀번호</InputGroup.Text>
                            <Form.Control onChange={onChange}value={pass} name='pass' type='password'/>
                        </InputGroup>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>이름</InputGroup.Text>
                            <Form.Control onChange={onChange} 
                                value={name} name='name'/>
                        </InputGroup>
                        <Form.Control onChange={onChange}
                            placeholder='자기소개를 입력하세요.'
                            as="textarea" rows={5} value={intro} name='intro' />
                        <div className='text-center mt-3'>
                            <Button disabled={JSON.stringify(initForm) === JSON.stringify(form)}
                                type='submit'
                                className='me-3 px-5'>가입</Button>
                            <Button disabled={JSON.stringify(initForm) === JSON.stringify(form)}
                                type='reset'
                                className='me-3 px-5' 
                                variant='secondary'>취소</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default FormPage