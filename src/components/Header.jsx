import { useNavigate } from "react-router-dom"

export default function Header(){

    const navigate = useNavigate();

    return(
        <div className="ui fixed menu"  >
            <div className="ui container center" >
                <h2 className="logo" onClick={() => navigate('/')}>E-Shop</h2>
            </div>
        </div>
    )
}