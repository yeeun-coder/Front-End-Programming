import { useContext } from "react";
import { ThemeContext } from "./TemeContext";
import { UserContext } from "./UserContext";

const Content = () => {
    const { dark } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    return (
        <div className={`content ${dark ? "black" : "gray"}`}>
            <h1>{user || '사용자'}님 좋은 하루되세요!</h1>
        </div>
    )
}
export default Content