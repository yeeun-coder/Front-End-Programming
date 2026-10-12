import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useContext } from 'react';
import { ThemeContext } from './TemeContext';

const Page = () => {
    const { dark, setDark } = useContext(ThemeContext);

    return (
        <div>
            <Header dark={dark} />
            <Content dark={dark} />
            <Footer dark={dark} setDark={setDark}/>
        </div>
    )
}
export default Page