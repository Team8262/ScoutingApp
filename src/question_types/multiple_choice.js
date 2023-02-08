export default function MultipleChoice(props){
    return(
        <div class="multiplechoice">
            <label>{props.question}</label>
            <select>
                {props.options.map((option) => <option value={option}>{option}</option>)}
            </select>
            <br></br>
            <br></br>
        </div>
    );
}