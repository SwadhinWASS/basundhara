import './PropertyCard.scss';
const PropertyCard = ({image, title, details}) => {
    return (
        <>
            <div className="propertyCard">
                <div className="card_top">
                    <img src={image} alt="" />
                </div>
                <div className="card_bottom">
                    <h3>{title}</h3>
                    <p>{details}</p>
                </div>
            </div>
        </>
    )
}

export default PropertyCard