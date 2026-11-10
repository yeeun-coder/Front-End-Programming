//1. MainRouter에 BookPage를 Route로 등록
//2. API 결과 출력 (index, title, thumbnail)
//3. SearchForm 검색기능 (documents.length가 0이면 '검색 결과가 없습니다.' 메지지 출력)
//4. 마지막 페이지가 1보다 큰 경우에만 PagingButton 컴포넌트 보이기
//-------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchForm from '../common/SearchForm';
import PagingButton from '../common/PagingButton'

const BookPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [text, setText] = useState('리액트');
    const navi = useNavigate();
    const [search] = useSearchParams();

    const size=12;
    const query=search.get('query') || '리액트';
    const page = parseInt(search.get('page')) || 1;

    const callAPI = async() => {
        setLoading(true);
        const url = 'https://dapi.kakao.com/v3/search/book?target=title';
        const config = {
            headers:{'Authorization':`KakaoAK ${process.env.REACT_APP_KAKAOAK}`},
            params:{size, query, page}
        }
        const res = await axios(url, config);
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, [page, query]);

    if (!response) return (
        <div className='text-center my-5'>
            <Spinner variant='sucess' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )

    const {meta, documents} = response;
    const last = Math.ceil(meta.pageable_count/size);

    const onSearch = (e) => {
        e.preventDefault();
        if(text === '') {
            alert('검색어를 입력하세요!');
            return;
        }
        navi(`/book?query=${text}`)
    }

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>도서검색</h1>
            {/* <Row>
                <Col xs={6} md={5} xl={4} className='mb-2'>
                    <Form onSubmit={onSearch}>
                        <InputGroup>
                            <Form.Control 
                                onChange={(e)=>setText(e.target.value)}
                                value={text}/>
                            <Button type='submit'>검색</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row> */}
            <SearchForm query={query}/>  {/*대신 사용 가능*/}
            <Row>
                {documents.map(book=>
                    <Col xs={6} md={4} lg={3} xl={2} 
                        key={book.isbn} className='mb-2'>
                        <Card>
                            <Card.Body>
                                <img src={book.thumbnail || '/no_image.png'} width='100%'/>
                                {/* <img src={book.thumbnail || 'http://placehold.co/100x150'} width='100%'/> */}
                            </Card.Body>
                            <Card.Footer>
                                <div className='title text-truncate'>
                                    {book.title}
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            {/* <div className='text-center my-3'>
                <Button 
                    disabled={page===1}
                    onClick={()=>navi(`/book?page=${page-1}&query=${query}`)}
                    variant='success'>이전</Button>
                <span className='mx-3'> {page}/{last}</span>
                <Button 
                    disabled={page===last}
                    onClick={()=>navi(`/book?page=${page+1}&query=${query}`)}
                    variant='success'>다음</Button>
            </div> */}
            <PagingButton page={page} last={last} query={query}/>  {/*대신 사용 가능*/}
        </div>
    );
}
export default BookPage