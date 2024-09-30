import { useNavigate } from 'react-router-dom';

export default function Circles({ icon, route }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <div 
            className="h-[120px] w-[120px] rounded-full flex justify-center items-center cursor-pointer
                       bg-white border-2 border-gray-300 shadow-lg hover:bg-gray-100 hover:border-gray-400 
                       hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleClick}
        >
            <img src={icon} alt="icon" className="h-[70px] w-[70px] text-black" />
        </div>
    );
}
