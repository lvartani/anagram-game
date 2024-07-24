import {Link} from 'react-router-dom'

function Button(props) {
    return (
       // <button type="submit" id="go-btn">Play!</button>

       <Link className ={props.bootstrapClass} to={props.route}> {props.label}</Link>
    )
}

export default Button;
