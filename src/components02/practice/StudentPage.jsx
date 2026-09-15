//부모컴포넌트에서 학번,성명,학과를 props로 설정하여 자식컴포넌트로 전달
import '../Style02.css'
import Student from './Student.jsx'

const students = [
    { id: 1, name: '홍길동', dept: '컴정과' },
    { id: 2, name: '심청이', dept: '전자과' },
    { id: 3, name: '이순신', dept: '건축과' },
    { id: 4, name: '양예은', dept: '컴정과' },
]

const StudentPage = () => {  // function StudentPage() { 도 가능
    return ( 
        <div className='box'>
            <h1>학생목록</h1>
            {students.map(stu=>
                <Student key={stu.id} student={stu}/>
            )}
        </div>
    )
}
export default StudentPage