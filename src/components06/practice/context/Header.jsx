import { useContext } from "react";
import { ThemeContext } from "./TemeContext";
import { UserContext } from "./UserContext";

const Header = () => {
    const { dark } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    const onLogin = () => {
        alert('Login Successful!');
        setUser('홍길동');
    }

    const onLogout = () => {
        if(window.confirm('Do you want to Logout?')) {
            setUser('');
        }
    }

    return (
        <div className={`header ${dark ? "black" : "gray"}`}>
            <h1>Welcom {user || '사용자'}</h1>
            {user ? 
                <button onClick={onLogout}>Logout</button>
                :
                <button onClick={onLogin}>Login</button>}
        </div>
    )
}
export default Header