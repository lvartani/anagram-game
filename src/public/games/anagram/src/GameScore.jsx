import Score from "./Score";
import Button from "./Button";


function GameScore (props) {
    return (
        <div id="ana-finalview">
            <Score score={props.score} />
            <Button bootstrapClass="btn btn-primary" label="Play Again!" route="/play"/>
            <hr></hr>
            <Button bootstrapClass="btn btn-light" label="Back!" route="/"/>        
        </div>
    )
}

export default GameScore;