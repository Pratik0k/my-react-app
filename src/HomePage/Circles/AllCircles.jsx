import Circles from "./Circles";

// Import your downloaded PNG icons
import touristIcon from './TouristPlaces.png'; // Example path to the PNG
import universityIcon from './University.png'; // Example path to the PNG
import hospitalIcon from './Hospital.png'; // Example path to the PNG
import hotelIcon from './Hotel.png'; // Example path to the PNG

import restaurantIcon from './Restaurant.png'; // Example path to the PNG

export default function AllCircles() {
    return (
        <div>
                <div className="text-center mt-10">
                    <h2 className="text-black text-3xl font-semibold">Explore By</h2>
                    <div className="w-32 h-[0.8px]  mx-auto mt-4 " style={{backgroundColor : "rgb(36, 211, 211)"}}>

                    </div>
                </div>

                <div className="mt-6 mr-[170px] ml-[170px] h-40 flex justify-around items-center rounded-full 2">
                    {/* Pass the PNG icon as a prop */}
                    <Circles icon={touristIcon} route="/touristplaces" />
                    <Circles icon={universityIcon} route="/universities" />
                    <Circles icon={hospitalIcon} route="/hospitals" />
                    <Circles icon={hotelIcon} route="/hotels" />

                    <Circles icon={restaurantIcon} route="/restaurants" />
                </div>
        </div>
    );
}
