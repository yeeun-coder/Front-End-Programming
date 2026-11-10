import { Route, Routes } from 'react-router'
import MenuBar from './MenuBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import ModalProvider from '../context/ModalProvider'
import '../Style.css'
import { Container } from 'react-bootstrap'
import PlacePage from './PlacePage'

const MainRouter = () => {
    return (
        <ModalProvider>
            <Container>
                <MenuBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/book' element={<BookPage/>}/>
                    <Route path='/place' element={<PlacePage/>}/>
                </Routes>
            </Container>
        </ModalProvider>
    )
}
export default MainRouter