/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Recette(props) {
    return (
        <div className="recette">
            <Link to={`/recettes/${props.id}`}>
                <img src={props.image} alt={props.titre} />
                <h4>{props.titre}</h4>
            </Link>
        
        </div>
    );
}

export default Recette;
