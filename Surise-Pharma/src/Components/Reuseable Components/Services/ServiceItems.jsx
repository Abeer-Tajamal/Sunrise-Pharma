import MediaTop from "../Cards/MediaTop/MediaTop";

const ServiceItem = ({ imgSrc, imgLink, btnName, content }) => {
    return <MediaTop imgSrc={imgSrc} imgLink={imgLink} btnName={btnName} content={content} />;
};

export default ServiceItem;