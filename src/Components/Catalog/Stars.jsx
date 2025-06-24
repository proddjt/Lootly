import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars({stars}){
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <span className="inline-flex">
            {[...Array(fullStars)].map((star, index) => (
                <FaStar key={index} className="text-[yellow]"/>
            ))}
            {halfStar && <FaStarHalfAlt className="text-[yellow]"/>}
            {[...Array(emptyStars)].map((star, index) => (
                <FaRegStar key={index} className="text-[yellow]"/>
            ))}
        </span>
    )
}

export default Stars