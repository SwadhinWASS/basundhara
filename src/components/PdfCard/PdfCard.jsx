import './PdfCard.scss';

const PdfCard = ({ title, image}) => {
    return (
        <>
            <div className="pdfCard">
                <img src={image} alt="" />
                <p>{title}</p>
                <button className="download">Download</button>
            </div>
        </>
    )
}

export default PdfCard