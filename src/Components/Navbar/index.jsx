import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"
import { useContext } from "react"


const Navbar = ()=>{
    const context = useContext(ShoppingCartContext)
    const actvieStyle ='underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white rounded-lg">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>                
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                    Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    korreo@colegio-pf.edu.mx
                </li>                
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-order'
                    className={({ isActive }) => isActive ? actvieStyle : undefined
                    }>
                        🛒 {context.count}
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}
export default Navbar