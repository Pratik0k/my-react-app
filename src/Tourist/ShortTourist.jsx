import { useNavigate } from "react-router-dom";

export default function ShowTourist({ heading, location, img, para, link }) {
    const navigate = useNavigate(); // For navigation

    const handleImageClick = () => {
        navigate('/MainTourist', { state: { heading, img, para, location } }); // Pass state with navigation
    };

    return (
        <div>
            <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-7xl mx-auto my-10">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-serif font-semibold text-gray-800">
                        {heading}
                    </h1>
                    <div className="w-[200px] h-[1.8px] mt-[10px] bg-black mx-auto"></div>
                </header>
        
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2 overflow-hidden">
                        <img
                            src={img}
                            alt={heading}
                            className="rounded-xl shadow-xl object-cover w-full h-[360px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                            onClick={handleImageClick} // Call the handler on click
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="leading-relaxed text-gray-700 font-desc text-justify text-2xl font-medium">
                            {para}
                        </p>
                        <a href={link}>
                            <p className="text-blue-600 text-[20px] ml-2 font-semibold mt-8 cursor-pointer font-desc transition-all duration-300 ease-in-out transform hover:scale-105">
                                <i className="fa-solid fa-location-dot fa-bounce"></i> {location}
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
