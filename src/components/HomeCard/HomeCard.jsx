import './HomeCard.scss'

const HomeCard = ({image, heading, subHeading, content, number}) => {
    return (
        <>
            <div className="homeCard">
                <div className="homeCard_top">
                    <h1>{number}</h1>
                    <img src={image} alt="" />
                </div>
                <div className="homeCard_bottom">
                    <div className="heading">
                        <h2>{heading}</h2>
                        <small>{subHeading}</small>
                    </div>
                    <div className="content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard