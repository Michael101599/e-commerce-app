import { useNavigate } from "react-router-dom"

export default function Header(){

    const navigate = useNavigate();

    return(
        <div className="ui fixed menu"  >
            <div className="ui container center" >
                <h2 onClick={() => navigate('/')}>FakeShop</h2>
            </div>
        </div>
    )
}