import{Link} from "react-router-dom";

export default function Navbar(){

    return(

        <div>
            <ul>
                <li><Link to='/'>首頁</Link></li>
                <li><Link to='/about'>關於放飲</Link></li>
                <li><Link to='/diy'>DIY區</Link></li>
                <li><Link to='/ingred'>原料區</Link></li>
                <li><Link to='/menu'>菜單</Link></li>
                <li><Link to='/order'>訂單查詢結果</Link></li>
                <li><Link to='/search'>訂單查詢</Link></li>
                <li><Link to='/store'>門市</Link></li>
            </ul>
        </div>
    )
}