import { Component } from '@angular/core';
import questions from "../assets/questions.json"
import { Question } from './question';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  categories: string[] = ["Matematyka", "Fizyka", "Geografia", "Angielski", "Polski", "Chemia"];
  category: string;
  questions: Question[];
  actualQuestions: Question[];
  chosenAns = [];
  numOfQ: number;
  
  setCategory(category: string){
    if(this.category == category){
      for(let i = 0; i < this.numOfQ; i++){
        let question = this.actualQuestions[i];
        let matButton = document.getElementById("rad"+question.id+this.chosenAns[i]);
        if(question.answer == this.chosenAns[i]){
          matButton.setAttribute("style", "color:black;");
        } else if(matButton){
          console.log(this.chosenAns[i]);
          matButton.setAttribute("style", "color:black;");
          let correctAns = document.getElementById("rad"+question.id+question.answer);
          correctAns.setAttribute("style", "color:black;")
        } else {
          let correctAns = document.getElementById("rad"+question.id+question.answer);
          correctAns.setAttribute("style", "color:black;")
        }
      }
      this.chosenAns.length = 0;
    }
    else{
      this.category = category;
      this.chosenAns.length = 0;
      this.actualQuestions = this.questions.filter(item => item.category == this.category);
      this.numOfQ = this.actualQuestions.length;
      this.chosenAns.length = this.numOfQ;
    }
  }

  constructor(){
    this.questions = questions;
  }

  onSubmit(){
    
    for(let i = 0; i < this.numOfQ; i++){
      let question = this.actualQuestions[i];
      let matButton = document.getElementById("rad"+question.id+this.chosenAns[i]);
      if(question.answer == this.chosenAns[i]){
        matButton.setAttribute("style", "color:green;");
      } else if(matButton){
        console.log(this.chosenAns[i]);
        matButton.setAttribute("style", "color:red;");
        let correctAns = document.getElementById("rad"+question.id+question.answer);
        correctAns.setAttribute("style", "color:green;")
      } else {
        let correctAns = document.getElementById("rad"+question.id+question.answer);
        correctAns.setAttribute("style", "color:green;")
      }
    }
  }
}
