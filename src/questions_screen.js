import question_list from './question_list.js';
import ShortAnswer from './question_types/short_answer.js';
import MultipleChoice from './question_types/multiple_choice.js';
import Checkboxes from './question_types/checkboxes.js';
import FreeSelection from './question_types/free_selection.js';
import { Component } from 'react';

import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

import { Values } from './values';


async function uploadData(data){
  await addDoc(collection(db, Values.get('event')), data);
  console.log("Data Uploaded: ", data);
}

function handleSubmit(){
  var data = {};
  var checkboxes = document.getElementsByClassName("checkboxes");
  var multiplechoice = document.getElementsByClassName("multiplechoice");
  var shortanswer = document.getElementsByClassName("shortanswer");
  var free_selection = document.getElementsByClassName("freeselection");

  Array.from(free_selection).forEach((element) => {
    var question = element.getElementsByTagName("label")[0].innerHTML;
    var options = element.getElementsByTagName("input")[0].value;
    var answers = [];
    answers.push(options);
    data[element.id] = answers;
  });
  
  Array.from(checkboxes).forEach((element) => {
    var question = element.getElementsByTagName("label")[0].innerHTML;
    var options = element.getElementsByClassName("boxlabel");
    var answers = [];
    Array.from(options).forEach((option) => {
      var value = option.getElementsByTagName("input")[0];
      if(value.checked){
        answers.push(option.textContent);
      }
    });
    data[element.id] = answers;
  });
  
  Array.from(multiplechoice).forEach((element) => {
    var question = element.getElementsByTagName("label")[0].innerHTML;
    var options = element.getElementsByTagName("option");
    var answers = [];
    Array.from(options).forEach((option) => {
      if(option.selected){
        answers.push(option.value);
      }
    });
    data[element.id] = answers;
  });
  
  Array.from(shortanswer).forEach((element) => {
    var question = element.getElementsByTagName("label")[0].innerHTML;
    var options = element.getElementsByTagName("input")[0].value;
    var answers = [];
    answers.push(options);
    data[element.id] = answers;
  });
  
      uploadData(data);
  
  }

  function handleEvents(mm) {
    switch(mm.type){
        case "short_answer":
            return <ShortAnswer question={mm.question} label={mm.label} />;
        case "multiple_choice":
            return <MultipleChoice question={mm.question} label={mm.label} options={mm.options} />;
        case "checkboxes":
            return <Checkboxes question={mm.question} label={mm.label} options={mm.options} />;
        case "free_selection":
            return <FreeSelection question={mm.question} label={mm.label} options={mm.options} />;
        default:
            return <div>ERROR</div>;
    }
  }

class QuestionsScreen extends Component{
    render(){
        return (
          <div>
              <h1>Questions</h1>
              {question_list.map((element) => (
                  handleEvents(element)
              ))}
              <button id="submit" type="button" onClick={handleSubmit}>Submit</button>
          </div>
            );
    }
}

export default QuestionsScreen;