export default function Checkboxes(props){
    return(
        <div class="checkboxes">
            <label>{props.question}</label>
            {props.options.map((option) => <label class="boxlabel">{option}<input type="checkbox" /></label>)}
            <br></br>
            <br></br>
        </div>

    );
}