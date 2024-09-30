import ShowTourist from "./ShortTourist"
import NavTourist from "./NavTourist"
import AllFooter from "../HomePage/Footer/AllFooter"
import { useEffect } from "react";
import MainTourist from "./MainTourist";
export default function AllTourist() {
    

    return (
        <>
            
            <div>
                <NavTourist/>

                <ShowTourist 
                 heading="GATEWAY OF INDIA"

                 location="LOCATION: Apollo Bandar, Colaba, Mumbai"

                 img="https://yometro.com/images/places/gateway-of-india.jpg"

                 para=" Explore Mumbai's iconic GATEWAY OF INDIA, an architectural marvel that symbolizes the city's rich history. With its intricate design and stunning seafront location, it's the perfect blend of past and present, offering captivating photo opportunities and a vibrant atmosphere."

                 link="https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9219892,72.8320794,17z/data=!4m6!3m5!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543!16zL20vMDJoN3Iy?entry=ttu"
                 />
                 <ShowTourist 
                 heading="ELEPHANTA CAVES"

                 location="LOCATION: Gharapuri, Maharashtra"

                 img="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_694433434_20191213110339_20191213110412.png"

                 para="A short ferry ride from Mumbai, the Elephanta Caves on Elephanta Island showcase 5th-century rock-cut sculptures dedicated to Lord Shiva. Discover intricately carved caves and mythological depictions that highlight India’s ancient art and spirituality."

                 link="https://www.google.com/maps/place/Elephanta+Caves/@18.9643922,72.9171719,14.84z/data=!4m6!3m5!1s0x3be7c5307da3602f:0xf4ab181b1aaef53f!8m2!3d18.9633474!4d72.9314864!16zL20vMDIwcmI1?entry=ttu"
                 />

                 <ShowTourist 
                 heading="SIDDHIVINAYAK TEMPLE"
                 
                 location="LOCATON: SK Bole Rd, Prabhadevi, Mumbai"

                 img="https://mumbaitourism.travel/images/places-to-visit/headers/shree-siddhivinayak-temple-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg"

                 para="Find solace and seek blessings at Siddhivinayak Temple, where spirituality meets serenity. This sacred site houses a unique black stone idol of Lord Ganesha, believed to grant wishes and bring peace to its devotees."

                 link="https://www.google.com/maps/place/Shree+Siddhivinayak+Temple/@19.01699,72.8303997,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cec0d851ebc3:0xcc61876914526329!8m2!3d19.01699!4d72.8303997!16zL20vMDlxeGc1?entry=ttu"
                 />
                 <ShowTourist 
                 heading="BANDRA WORLI SEA LINK"

                 location="LOCATION: Bandra Worli Sea Link, Mount Mary, Bandra West, Mumbai"

                 img="https://www.mageba-group.com/latam/data/docs/es/52134/Bandra-Worli-Sea-Link.webp?variant=113748&v=1.1"

                 para="Embark on a mesmerizing journey across the Bandra-Worli Sea Link, an engineering marvel that seamlessly connects Mumbai's suburbs. As you traverse this cable-stayed bridge, prepare to be captivated by the awe-inspiring views of the Arabian Sea and the city's glittering skyline."

                 link="https://www.google.com/maps/place/Bandra+-+Worli+Sea+Link,+Mount+Mary,+Bandra+West,+Mumbai,+Maharashtra/@19.0425459,72.8205325,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ceb3b002576f:0xf51617363a2f6536!8m2!3d19.0425408!4d72.8231074!16s%2Fg%2F11cfmj34c?entry=ttu"
                 />
                 <ShowTourist 
                 heading="MARINE DRIVE"

                 location="LOCATION: The Netaji Subhash Chandra Bose Road"

                 img="https://images.indianexpress.com/2023/05/marine-drive.jpg"

                 para="Mumbai's Marine Drive is an iconic seafront promenade, known for its distinctive crescent shape and glittering cityscape views. Often called the Queen's Necklace when lit up at night, it's a beloved spot for leisurely walks and enjoying breathtaking sunsets."

                 link="https://www.google.com/maps/place/Marine+Dr,+Mumbai/@18.9432161,72.8181274,17z/data=!3m1!4b1!4m10!1m2!2m1!1s+the+Netaji+Subhash+Chandra+Bose+Road+in+Mumbai,+India!3m6!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b!8m2!3d18.9432111!4d72.8229983!15sCjV0aGUgTmV0YWppIFN1Ymhhc2ggQ2hhbmRyYSBCb3NlIFJvYWQgaW4gTXVtYmFpLCBJbmRpYZIBBXRyYWls4AEA!16zL20vMDM1Nnls?entry=ttu"
                 />

                <ShowTourist 
                 heading="BANDRA BANDSTAND"

                 location="LOCATION: Bandstand Promenade Bandra West, Mumbai"

                 img="https://mumbaitourism.travel/images//tourist-places/bandra-bandstand-mumbai/bandra-bandstand-mumbai-indian-tourism-one-day-city-tour.jpg"

                 para=" Experience the romance of Mumbai at Bandra Bandstand, a picturesque seaside promenade that overlooks the Arabian Sea. As you take in the breathtaking views, you'll also feel the enchanting charm of Bollywood, making it a perfect spot for leisurely strolls and beautiful sunsets."

                 link="https://www.google.com/maps/place/Bandstand+Promenade,+Bandra+West,+Mumbai,+400050/@19.0516755,72.8195135,18.2z/data=!4m6!3m5!1s0x3be7c94404368f7b:0xc4c0b741715907db!8m2!3d19.050516!4d72.8213832!16zL20vMDd4dGpj?entry=ttu"
                 />
                  <ShowTourist 
                 heading="CHHATRAPATI SHIVAJI MAHARAJ VASTU SANGHRALAYA"

                 location="LOCATION: 159-161, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai"

                 img="https://afar.brightspotcdn.com/dims4/default/b84ea12/2147483647/strip/false/crop/1600x800+0+0/resize/1486x743!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F96%2F97%2F9bd0c39e1252c9fe8334cd8e28eb%2Foriginal-6cb07e8ecb947187f0bffa00b167c7ae.jpg"

                 para="Formerly known as the Prince of Wales Museum, this Mumbai institution is a treasure trove of art and history. Its impressive collection includes sculptures, decorative arts, and artifacts from India and beyond. "

                 link="https://www.google.com/maps/place/Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya/@18.9266744,72.8319741,19z/data=!4m15!1m8!3m7!1s0x3be7d1c3e95e82e7:0x4def27e4efa8253e!2s159-161,+Mahatma+Gandhi+Road,+Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400023!3b1!8m2!3d18.9266522!4d72.832459!16s%2Fg%2F11c45z791p!3m5!1s0x3be7d1c3eaf8b127:0x44e72610553e9253!8m2!3d18.9269015!4d72.8326916!16zL20vMDIweHFq?entry=ttu"
                 />
                  <ShowTourist 
                 heading="NEHRU PLANETARIUM"

                 location="LOCATION: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://i.pinimg.com/736x/5a/44/55/5a4455988ea1a92dc30ca5a1bb0030f2.jpg"

                 para="Explore the wonders of the cosmos at the Nehru Planetarium in Mumbai. This interactive space science center offers captivating astronomy shows, celestial observations, and educational programs. "

                 link="https://www.google.com/maps/place/Nehru+planetarium/@18.9888888,72.8123317,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd3665787c4ee6d:0xcba9fe91bf3fc50c!8m2!3d18.9888837!4d72.8149066!16s%2Fg%2F1vhq256k?entry=ttu"
                 />
                  <ShowTourist 
                 heading="NEHRU CENTRE"

                 location="LOCATION: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e0/57/c8/inside.jpg?w=1200&h=-1&s=1"

                 para="The Nehru Center in Mumbai is a cultural hub dedicated to promoting art, science, and culture. Named after India's first Prime Minister, Jawaharlal Nehru, it hosts art exhibitions, cultural performances, educational events, and lectures.  "

                 link="https://www.google.com/maps/place/Nehru+Centre+Auditorium+Worli/@18.9888327,72.8124801,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf229516299f:0x6367e9a70eb0032a!8m2!3d18.9888276!4d72.815055!16s%2Fg%2F11t5y7mlq1?entry=ttu"
                 />
                  <ShowTourist 
                 heading="TARAPOREVALA AQUARIUM"

                 location="LOCATION: Netaji Subhash Chandra Bose Road, Marine Drive, near Charni Road "

                 img="https://mumbaitourism.travel/images/places-to-visit/headers/taraporevala-aquarium-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg"

                 para=" Dive into the wonders of marine life at Mumbai's Taraporewala Aquarium. Home to a diverse collection of aquatic species, including colorful fish, sharks, and turtles, this aquarium offers an educational and visually captivating experience."

                 link="https://www.google.com/maps/place/Taraporevala+Aquarium/@18.9492639,72.8174553,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce1bbc806f01:0x2ec42768fb318cb7!8m2!3d18.9492588!4d72.8200302!16s%2Fm%2F02qr9m4?entry=ttu"
                 />

                <ShowTourist 
                 heading="DR.BHAU DAJI LAD MUSEUM"

                 location="LOCATION: Dr Baba Saheb Ambedkar Rd, Byculla East, Mumbai"

                 img="https://ak-d.tripcdn.com/images/100v1f000001h1b8i1325.jpg?proc=source%2Ftrip"

                 para=" Discover Mumbai's heritage at this museum, housed in a beautifully restored 19th-century building. Explore a fascinating collection of art, artifacts, and exhibits that highlight the city's history and culture. "

                 link="https://www.google.com/maps/place/Dr.+Bhau+Daji+Lad+Museum/@18.978994,72.8322404,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce5b428e70af:0x79efde6c140c2e05!8m2!3d18.9789889!4d72.8348153!16s%2Fm%2F06w4mwg?entry=ttu"
                 />
                 
                 <ShowTourist 
                 heading="MANI BHAVAN"

                 location="LOCATION: Mani Bhavan, 19, Laburnum Rd, Babulnath, Gamdevi, Mumbai"

                 img="https://memumbai.com/wp-content/uploads/2019/10/mani-bhavan.jpg"

                 para="Immerse yourself in history at Mani Bhavan, once Mahatma Gandhi's residence and now a captivating museum. Walk in the footsteps of the Mahatma and explore the exhibits and photographs that offer profound insights into his life and the Indian freedom struggle."

                 link="https://www.google.com/maps/place/Mani+Bhavan+Gandhi+Sangrahalaya/@18.9597717,72.8089949,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce0c69115555:0xc0b175f791f839fd!8m2!3d18.9597666!4d72.8115698!16zL20vMGI4M3Qx?entry=ttuu"
                 />
                 
                 <ShowTourist 
                 heading="RANI BAUG"

                 location="LOCATION: Railway Station, 91A, Lalbaug Flyover, near Byculla, Byculla East, Byculla, Mumbai"

                 img="https://www.saveranibagh.org/imagesHomePage/2.jpg"

                 para=" Step into tranquility at Rani Baug, often called Victoria Gardens, nestled in the heart of bustling Mumbai. Dating back to the 1860s, this historic botanical garden is a haven of greenery and peace. "

                 link="https://www.google.com/maps/place/Veermata+Jijabai+Bhosale+Udyan+And+Zoo/@18.9787151,72.8325462,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce36ee34d0a1:0x623099a68d41b780!8m2!3d18.97871!4d72.8351211!16zL20vMDIwcjk0?entry=ttu"
                 />
                 <ShowTourist 
                 heading="BOOT HOUSE"

                 location="LOCATION: Ridge Rd, Simla Nagar, Malabar Hill, Mumbai"

                 img="https://www.mumbailive.com/images/media/images/hanging_garden_1695731117497.jpg?bg=292712&crop=960%2C538.9473684210526%2C0%2Cnull&fit=crop&fitToScale=w%2C1368%2C768&fm=webp&h=768&height=639&w=1368&width=960"

                 para=" The Boot House, located in Mumbai, is a unique architectural marvel shaped like a giant boot. Originally built as a tribute to a British officer's love for his wife, it now houses a shoe store."

                 link="https://www.google.com/maps/place/Hanging+Gardens/@18.956537,72.8049527,17z/data=!4m15!1m8!3m7!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!2sHanging+Gardens!8m2!3d18.9565598!4d72.8049866!10e5!16zL20vMDIwcDlw!3m5!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!8m2!3d18.9565598!4d72.8049866!16zL20vMDIwcDlw?entry=ttu"
                 />

                <ShowTourist 
                 heading="FILM CITY"

                 location="LOCATION: Film City Rd, Film City Complex, Aarey Colony, Goregaon, Mumbai"

                 img="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2020%2F12%2F05%2Fgalleryset31-923719-1607160018.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100"

                 para="Explore the heart of India's film industry at Mumbai's Film City. This sprawling studio complex is where Bollywood magic comes to life. Guided tours offer a glimpse behind the scenes, where you might spot film sets, stars, and crew at work. "

                 link="https://www.google.com/maps/place/Dadasaheb+Phalke+Chitranagari/@19.1607967,72.8850306,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b78e073c60f3:0x5902e0f75253a72b!8m2!3d19.1607917!4d72.8876055!16s%2Fm%2F04n489p?entry=ttu"
                 />

                 <ShowTourist 
                 heading="CHOWPATTY VIEW DECK"

                 location="LOCATION: Chowpatty, Girgaon, Mumbai"

                 img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/FQjZ2xGakAAoOtl_1200x768.jpeg?VersionId=bEHsa2S9IzX8maWYocL0yJk9hVvJZ2IC"

                 para=" Experience breathtaking views of Mumbai's Girgaum Chowpatty beach from the Chowpatty View Deck. This elevated vantage point offers a captivating perspective of the Arabian Sea and the lively shoreline. "

                 link="https://www.google.com/maps/place/Girgaon+Chowpatty+Viewing+Deck/@18.9548232,72.8055365,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf22fb44ca23:0xd9de59061eebb2a6!8m2!3d18.9548181!4d72.8081114!16s%2Fg%2F11sxwth1l6?entry=ttu"
                 />

                 <ShowTourist 
                 heading="MAHALAXMI RACE TRACK"

                 location="LOCATION: Keshavrao Khadye Marg, Royal Western India Turf Club, Mahalakshmi, Mumbai"

                 img="https://i.pinimg.com/originals/b2/6c/46/b26c46ad3366ab4d77fbdd3b7b2d32df.jpg"

                 para=" Experience the excitement of horse racing in Mumbai at the prestigious Mahalaxmi Race Course. Set against lush green surroundings, it offers thrilling equestrian action and a vibrant social atmosphere."

                 link="https://www.google.com/maps/place/Mahalakshmi+Race+Course/@18.984214,72.8175004,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce63d14b3d83:0xb6ce08c6304dcc32!8m2!3d18.9842089!4d72.8200753!16zL20vMDVmNzNt?entry=ttu"
                 />

                 <AllFooter/>
            </div>
        </>
    )
}