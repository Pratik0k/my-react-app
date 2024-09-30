

import Explore from "./Explore/Explore";
import AllCircles from "./Circles/AllCircles"
import Header from "./Header/Header";
import AllEvent from "./Event/AllEvent";
import AllWeather from "./Weather/AllWeather";
import AllFooter from "./Footer/AllFooter";
import ScrollToTop from "../ScrollTop";
export default function Home() {
   

    return (
        <>
            
            <div>
            <div className="bg-top bg-no-repeat rounded-bl-[25%] rounded-br-[25%] bg-cover bg-[url('https://images.unsplash.com/photo-1677934125266-2c2941e03e6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                    <Header />
                    <Explore />
                </div>
                <AllCircles />
                <AllEvent />
                <AllWeather />
                <AllFooter />
            </div>
        </>
    )
}