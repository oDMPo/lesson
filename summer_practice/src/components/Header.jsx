import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="Header">
            <div className="logo">
                <img src="" alt="" className="logo" />
            </div>
            <div className="nav">
                {
                    props.menu.map((ele, index) => {
                        return <div key={index} className="nav-item">
                            <Link to={ele}>
                                {ele}
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


export default Header