function SolveMe(props) {
    return (
        <>
         <p>Guess anagram of the following word:</p>
         <h2> {props.startingWord}</h2>
         <h4>{props.wordLength} letters</h4>
        </>
       
    )
}

export default SolveMe;
