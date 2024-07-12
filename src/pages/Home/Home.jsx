import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import dial from './../../assets/graphics/dial.png'
import Button from './../../components/Button/Button'
import HomeCard from '../../components/HomeCard/HomeCard';
import image from './../../assets/images/slide1.jpg'
import building from './../../assets/images/building.png'
import model from './../../assets/images/model.png'
import mask from './../../assets/images/mask.png'
import t1 from './../../assets/images/t1.png'
import t2 from './../../assets/images/t2.png'
import pdf from './../../assets/graphics/pdf.png'
// import s1 from './../../assets/images/s1.png'
// import s4 from './../../assets/images/s4.jpg'
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import RoomCard from '../../components/RoomCard/RoomCard';
import { useState } from 'react';
import PdfCard from '../../components/PdfCard/PdfCard';
// import Marquee from "react-fast-marquee";

const Home = () => {
    const [boxNumber, setBoxNumber] = useState(1);
    // const [active, setActive] = useState(true);

    const cardData = [
        {
            id: 1,
            image: image,
            heading: '1594 Glenwood Avenue',
            subHeading: 'Extension, Flat Conversion',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam repellendus cum provident minus est voluptate culpa facere necessitatibus ipsa?'
        },
        {
            id: 2,
            image: image,
            heading: '3515 Timberbrook Lane',
            subHeading: 'Extension, Flat Conversion',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam repellendus cum provident minus est voluptate culpa facere necessitatibus ipsa?'
        },
        {
            id: 3,
            image: image,
            heading: 'Camden Road NW1',
            subHeading: 'Extension, Flat Conversion',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam repellendus cum provident minus est voluptate culpa facere necessitatibus ipsa?'
        },
        {
            id: 4,
            image: image,
            heading: '678 Pick Street',
            subHeading: 'Extension, Flat Conversion',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam repellendus cum provident minus est voluptate culpa facere necessitatibus ipsa?'
        }
    ]

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
            {/* -------------------------------------- Section 1--------------------------------------------------- */}
            <div className="container">
                <section className='slider'>
                    <div className="left">
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'navActive' : 'home')}>HOME</NavLink>
                        <div className="number">
                            <img src={dial} alt="" />(+91) 33 4039 4600
                        </div>
                        <div className="social_icons">
                            <a href='' className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                    <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                                </svg>
                            </a>
                            <a href='' className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                </svg>
                            </a>
                            <a href='' className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <Swiper
                            // spaceBetween={30}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: '.pre',
                                nextEl: '.next'
                            }}
                            modules={[Autoplay, Navigation]}
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
                            <div className="arrows">
                                <div className="pre">&larr;  PREV</div>
                                <div className="next">NEXT  &rarr;</div>
                            </div>
                        </Swiper>
                    </div>
                </section>
            </div>
            {/* -------------------------------------- Section 2 -------------------------------------------------- */}
            <div className="container">
                <div className="home_section2">
                    <h2>A Small Efficient <br />
                        <span>Interior Designing</span> Team</h2>
                    <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostruercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehei voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehei voluptate veliet esse cillum dolore eu fugiat nulla pariatur..
                        Ut enim ad minim veniam quis nostruercitation ullamco laboris nisi ut aliquip ex ea commonsequat Duis aute irure dolor reprehei voluptate esseu fugiat nulla pariatur.</p>
                    <Button title='OVERVIEW OF PROPNAME' />
                </div>
            </div>
            {/* -------------------------------------- Section 3 -------------------------------------------------- */}
            <div className="container">
                <div className="home_section3">
                    <h1>Exceptional</h1>
                    <h2>Why Choose The property <br /> Name?</h2>
                    <p>Change is an opportunity! We want to lead people towards durable solutions and designs that enhance feelings of closeness, and hopefully, happiness.d designs that enhance feelings of closeness, and </p>
                    <div className="section3_boxes">
                        <div className="box">
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                        </div>
                        <div className="box">
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                        </div>
                        <div className="box">
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                            <PropertyCard image={image} title='PEN SPACE' details='A total 26.53 acres of land, of which 19.36 acres is open space.' />
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- Section 2 -------------------------------------------------- */}
            <div className="container">
                <div className="home_section2">
                    <h2>A Small Efficient <br />
                        <span>Interior Designing</span> Team</h2>
                    <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostruercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehei voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehei voluptate veliet esse cillum dolore eu fugiat nulla pariatur..
                        Ut enim ad minim veniam quis nostruercitation ullamco laboris nisi ut aliquip ex ea commonsequat Duis aute irure dolor reprehei voluptate esseu fugiat nulla pariatur.</p>
                </div>
            </div>
            {/* -------------------------------------- Section 4 --------------------------------------------------- */}
            <div className="container">
                <div className="home_section4">
                    {
                        cardData.map((card, index) => (
                            <HomeCard key={index} number={`0${index + 1}`} image={card.image} heading={card.heading} subHeading={card.subHeading} content={card.content} />
                        ))
                    }
                </div>
            </div>
            {/* -------------------------------------- Section 5 --------------------------------------------------- */}
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
            {/* -------------------------------------- Section 6 --------------------------------------------------- */}
            {/* -------------------------------------- Section 7 -------------------------------------------------- */}
            <div className="container">
                <div className="home_section7">
                    <div className="left">
                        <img src={model} alt="" />
                    </div>
                    <div className="right">
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
                </div>
            </div>
            {/* -------------------------------------- Section 8 --------------------------------------------------- */}
            <div className="container">
                <div className="home_section8">
                    <div className="left">
                        <h2>MEET OUR TEAM</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="right">
                        <div className="box">
                            <img src={t1} alt="" />
                            <div className="member_details">
                                <h3>Adora Montminy</h3>
                                <p>Project Manager </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={t2} alt="" />
                            <div className="member_details">
                                <h3>Adora Montminy</h3>
                                <p>Project Manager </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- Section 9 --------------------------------------------------- */}
            <div className="container">
                <div className="home_section9">
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

export default Home