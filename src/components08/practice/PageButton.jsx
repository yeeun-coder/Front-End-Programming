//리액트 부트스트랩->Components->Buttons
import { Button } from 'react-bootstrap'

const PageButton = ({ page, setPage, last }) => {
    return (
        <div className='text-center mt-3 mb-5'>
            <Button disabled={page===1}
                onClick={()=>setPage(page-1)}
                variant='outline-success'>이전</Button>
            <span className='mx-3'>{page}/{last}</span>
            <Button disabled={page===last}
                onClick={()=>setPage(page+1)}
                variant='outline-success'>다음</Button>
        </div>
    )
}
export default PageButton