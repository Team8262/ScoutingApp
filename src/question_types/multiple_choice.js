export default function MultipleChoice(props){
    return(
        <div class="multiplechoice" id={props.label}>
            <label>{props.question}</label>
            <select>
                {props.options.map((option) => <option value={option}>{option}</option>)}
            </select>
            <br></br>
            <br></br>
        </div>
    );
}