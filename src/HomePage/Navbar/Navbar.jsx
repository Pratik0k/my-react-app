import Logo from "./Logo"
import Signin from "./Signin" 
import Login from "./Login"

export default function Navbar() {

    return (
        <>
            <div className="p-3 flex justify-between">
                <Logo/>
                <div className="w-[190px] flex justify-around">
                    <Signin/>
                    <Login/>
                </div>
                
            </div>
        </>
    )
}