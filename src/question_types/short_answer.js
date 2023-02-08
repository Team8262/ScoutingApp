export default function ShortAnswer(props){
    return(
        <div class="shortanswer" id={props.label}>
            <label>{props.question}</label>
            <input type="text"/>
            <br></br>
            <br></br>
        </div>
    );
}