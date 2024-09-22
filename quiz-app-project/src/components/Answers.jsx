import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }){
  const shuffledAnswers = useRef();

  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
    {shuffledAnswers.current.map((answer) =>{
      const isSelected = selectedAnswer === answer;
      let cssClasses = '';

      if(answerState === 'answered' && isSelected){
        cssClasses = 'selected';
      }
      
      if((answerState === 'correct' || answerState === 'wrong') && isSelected){
        cssClasses = answerState;
      }

      return (
        <li className='answer' key={answer}>
          <button 
            onClick={() => onSelect(answer)}
            disabled={answerState !== ''}
            className={cssClasses} 
          >
            {answer}
          </button>
        </li>
    )
    })
    }
  </ul>
  )
}