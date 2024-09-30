export default function Event({ backgroundImage, title }) {
    return (
        <>
            <div className="relative w-[380px] h-96 pt-4 bg-cover bg-center rounded-lg overflow-hidden flex items-end transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-black/50"  
                style={{ backgroundImage }}>
                
                {/* Vignette effect with gradient */}
                <div className="absolute inset-0 bg-black bg-opacity-30" 
                     style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 80%)" }}>
                </div>  

                {/* Text content */}
                <div className="relative text-white text-xl font-semibold p-4 z-10">
                    {title}
                </div>
            </div>
        </>
    );
}
