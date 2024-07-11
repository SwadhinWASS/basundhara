import './RoomCard.scss';

const RoomCard = ({image, title}) => {
    return (
        <div className="roomCard">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default RoomCard