import Event from "./Event";

export default function AllEvent() {
    return (
        <div className=" bg-black overflow-x-auto pt-10 pb-6 mt-10 ">
            <div className="text-center mb-8">
                <h2 className="text-white text-3xl font-semibold">Cards</h2>
                <div className="w-32 h-[0.8px]  mx-auto mt-4 " style={{backgroundColor : "rgb(36, 211, 211)"}}>

                </div>
             </div>

            <div className="flex justify-around gap-1 p-6">
                <Event 
                    backgroundImage="url('https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
                    title="Events"
                />
                <Event 
                    backgroundImage="url('https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
                    title="Local News"
                />
                <Event 
                    backgroundImage="url('https://images.unsplash.com/photo-1599700403969-f77b3aa74837?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
                    title="Emergency Services"
                />
            </div>

            <div className="w-[100px] h-[5px] pt-2 pb-2 ml-[680px] rounded-full flex justify-center justify-between">
                <div className="w-[8px] h-[8px]  rounded-full" style={{backgroundColor : "rgb(36, 211, 211)"}}></div>
                <div className="w-[8px] h-[8px]  rounded-full" style={{backgroundColor : "rgb(36, 211, 211)"}}></div> 
                <div className="w-[8px] h-[8px]  rounded-full" style={{backgroundColor : "rgb(36, 211, 211)"}}></div>
            </div>
        </div>
    );
}
