import { Link } from "react-router-dom"
import "./button.css"

export default function ColorButtons({ buttonLink, label, buttonTarget }) {
    return (
        <Link to={buttonLink} target={buttonTarget}>
            <button className="button-colored">{label}</button>
        </Link>
    );
}