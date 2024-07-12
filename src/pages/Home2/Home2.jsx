import './Home2.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, } from 'swiper/modules';
import interior from './../../assets/images/interior.png';
import bulletTick from './../../assets/graphics/bulletTick.png';
import cycle from './../../assets/images/cycle.png';
import model from './../../assets/images/model.png'
import line from './../../assets/graphics/line.png';
import pdf from './../../assets/graphics/pdf.png';
import RoomCard from '../../components/RoomCard/RoomCard';
import mask from './../../assets/images/mask.png'
import building from './../../assets/images/building.png'
import { useState } from 'react';
import Button from './../../components/Button/Button'
import PdfCard from '../../components/PdfCard/PdfCard';

const Home2 = () => {
    const [boxNumber, setBoxNumber] = useState(1);

    const roomData = [
        {
            id: 1,
            title: 'Chess Room',
            image: mask
        },
        {
            id: 2,
            title: 'Study Room',
            image: mask
        },
        {
            id: 3,
            title: 'Chess Room',
            image: mask
        },
        {
            id: 4,
            title: 'Dining Room',
            image: mask
        },
        {
            id: 5,
            title: 'Bed Room',
            image: mask
        },
        {
            id: 6,
            title: 'Art and Crafts Room',
            image: mask
        },
        {
            id: 7,
            title: 'Chess Room',
            image: mask
        },
        {
            id: 8,
            title: 'Chess Room',
            image: mask
        },
        {
            id: 9,
            title: 'Art and Crafts Room',
            image: mask
        },
        {
            id: 10,
            title: 'Chess Room',
            image: mask
        },
        {
            id: 11,
            title: 'Art and Crafts Room',
            image: mask
        }
    ]

    const pdfData = [
        {
            id: 1,
            title: 'CORPORATE BROCHURE',
            image: pdf,
        },
        {
            id: 2,
            title: 'CORPORATE BROCHURE',
            image: pdf,
        },
        {
            id: 3,
            title: 'CORPORATE BROCHURE',
            image: pdf,
        }
        , {
            id: 4,
            title: 'CORPORATE BROCHURE',
            image: pdf,
        }
        , {
            id: 5,
            title: 'CORPORATE BROCHURE',
            image: pdf,
        }
    ];
    return (
        <>
            {/* ------------------------ Section 1 ---------------------------------------- */}
            <div className="container">
                <div className="home2_section1">
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='slide1 slide'>
                            <div className="slide_content">
                                <h2>LET THIS WORLD <br /> <span>BEYOUND</span> IMAGINATION</h2>
                                <p>Change is an opportunity! We want to lead people towards durable solutions and designs that enhance feelings of closeness, and hopefully, happiness.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide2 slide'>
                            <div className="slide_content">
                                <h2>LET THIS WORLD <br /> <span>BEYOUND</span> IMAGINATION</h2>
                                <p>Change is an opportunity! We want to lead people towards durable solutions and designs that enhance feelings of closeness, and hopefully, happiness.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide3 slide'>
                            <div className="slide_content">
                                <h2>LET THIS WORLD <br /> <span>BEYOUND</span> IMAGINATION</h2>
                                <p>Change is an opportunity! We want to lead people towards durable solutions and designs that enhance feelings of closeness, and hopefully, happiness.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* ------------------------ Section 2 ---------------------------------------- */}
            <div className="container">
                <div className="home2_section2">
                    <div className="left">
                        <img src={interior} alt="" />
                    </div>
                    <div className="right">
                        <h2>About Boshundhara </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        <ul>
                            <li><img src={bulletTick} alt="" />Ut enim ad minim veniam, quis nostrud exercitation.</li>
                            <li><img src={bulletTick} alt="" />Ut enim ad minim veniam, quis nostrud exercitation.</li>
                            <li><img src={bulletTick} alt="" />Ut enim ad minim veniam, quis nostrud exercitation.</li>
                            <li><img src={bulletTick} alt="" />Ut enim ad minim veniam, quis nostrud exercitation.</li>
                            <li><img src={bulletTick} alt="" />Ut enim ad minim veniam, quis nostrud exercitation.</li>
                        </ul>
                        <img className='line' src={line} alt="" />
                    </div>
                </div>
            </div>
            {/* ------------------------- Section 3 -------------------------------------- */}
            <div className="container">
                <div className="home2_section3">
                    <h2>Leisurely Luxuries <br />For Jubilance AndJoy</h2>
                    <p>We take a broader, more holistic all</p>
                    <div className="boxes">
                        <div className="left">
                            <div className="top">
                                <p
                                    onClick={() => setBoxNumber(1)}
                                    className={boxNumber === 1 ? 'active' : ''}
                                >
                                    Indoor <br /> Amenities
                                </p>
                                <p
                                    onClick={() => setBoxNumber(2)}
                                    className={boxNumber === 2 ? 'active' : ''}
                                >
                                    Outdoor <br /> Amenities
                                </p>
                                <p
                                    onClick={() => setBoxNumber(3)}
                                    className={boxNumber === 3 ? 'active' : ''}
                                >
                                    Terrace <br /> Amenities
                                </p>
                            </div>
                            <div className="bottom">
                                {boxNumber === 1 &&
                                    roomData.map((room, index) => (
                                        <RoomCard key={index} image={room.image} title={room.title} />
                                    ))
                                }
                                {boxNumber === 2 &&
                                    roomData.map((room, index) => (
                                        <RoomCard key={index} image={room.image} title={room.title} />
                                    ))
                                }
                                {boxNumber === 3 &&
                                    roomData.slice(0, 5).map((room, index) => (
                                        <RoomCard key={index} image={room.image} title={room.title} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="right">
                            <img src={cycle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------- Section 4 --------------------------------------- */}
            <div className="container">
                <div className="home2_section4">
                    <h2>Your Own Paradise</h2>
                    <Button title='Enquiry Now' />
                </div>
            </div>
            {/* -------------------------------------- Section 5 -------------------------- */}
            <div className="container">
                <div className="home_section5">
                    <div className="left">
                        <img src={building} alt="" />
                    </div>
                    <div className="right">
                        <h2>Fill The Form It&apos;s Easy.</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                        <div className="form">
                            <div className="input_div">
                                <input type="text" name="name" id="name" placeholder='Enter your name' autoComplete='off' />
                            </div>
                            <div className="input_div">
                                <input type="number" name="number" id="number" placeholder='Enter your number' autoComplete='off' />
                            </div>
                            <div className="input_div">
                                <input type="email" name="email" id="email" placeholder='Enter your email' autoComplete='off' />
                            </div>
                            <div className="time">
                                <div className="input_div">
                                    <input type="date" name="date" id="date" />
                                </div>
                                <div className="input_div">
                                    <input type="time" name="time" id="time" />
                                </div>
                            </div>
                            <textarea name="message" id="message" placeholder='Write your message'></textarea>
                            <Button title='Submit Now' />
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- Section 6 -------------------------- */}
            <div className="container">
                <div className="home2_section6">
                    <h2>Your Own Paradise</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    <Button title='Enquiry Now' />
                </div>
            </div>
            {/* -------------------------------------- Section 7 ------------------------- */}
            <div className="container">
                <div className="home2_section7">
                    <div className="left">
                        <h2>Experience The Luxury <br /> Of Space Floor Plans</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <button className='explore'>Explore More</button>
                    </div>
                    <div className="right">
                        <img src={model} alt="" />
                    </div>
                </div>
            </div>
            {/* -------------------------------------- Section 9 --------------------------------------------------- */}
            <div className="container">
                <div className="home2_section8">
                    <h2>Download Application Kit <br /> <span>BOSUNDHARA Tower</span> </h2>
                    <div className="box">
                        {
                            pdfData.map((pdf, index) => (
                                <PdfCard key={index} title={pdf.title} image={pdf.image} />
                            ))
                        }
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    )
}

export default Home2