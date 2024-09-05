/* eslint-disable react/prop-types */
import Button from "../common/Button/Button"
import './Banner.css';
const Banner = ({ isrotate, data }) => {
    const { title, subTitle, imgUrl, buttonText } = data;
    console.log(isrotate)
    return (
        // "banner-wrapper"
        <div className={`banner-wrapper ${isrotate && "rotateImg"}`}>
            <div className="text-wrpper">
                <h1>{title}</h1>
                <p>{subTitle}</p>
                {buttonText ? <Button text={buttonText} /> : null}
            </div>
            <div className="img-wrapper">
                <img src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default Banner
