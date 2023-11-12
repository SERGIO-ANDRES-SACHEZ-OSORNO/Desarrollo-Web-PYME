
import { Outlet, Link } from "react-router-dom"
const layout =()=>{
    return <section>
        <nav>
            <ul>
                <li>
                    <Link to="/">  index </Link>
                </li>
                <li>
                <Link to="/e-comerce">  e-comerce </Link>
                </li>
                <li>
                <Link to="/formulario">  formulario </Link> 
                </li>
            </ul>
            <hr />
            <Outlet>

            </Outlet>
        </nav>
    </section>
}