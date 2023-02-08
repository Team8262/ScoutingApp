export default function FreeSelection(props){
    return(
        <div class="freeselection" id={props.label}>
            <label>{props.question}</label>
            <input type="text" list={props.question}/>
            <datalist id={props.question}>
                {props.options.map((option) => <option value={option}>{option}</option>)}
            </datalist>
            <br></br>
            <br></br>
        </div>
    );
}