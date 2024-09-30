import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
    return (
        <>
            <div className="m-0 p-[180px] h-[80vh] flex justify-center items-center flex-col">
                <div>
                    <h2 className='text-[90px] text-white mt-20 font-serif font-semibold font-protestguerrilla'>MUMBAI</h2>
                </div>
                <div className="relative w-full max-w-lg"> {/* Parent div for relative positioning */}
                    <input 
                        type="text" 
                        className="px-4 py-2 h-[50px] w-full text-black rounded-3xl border-none focus:outline-none focus:ring-0" 
                        placeholder="Search..."
                    />
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-[#D4AF37] text-white px-4 py-2 rounded-full"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </>
    );
}
