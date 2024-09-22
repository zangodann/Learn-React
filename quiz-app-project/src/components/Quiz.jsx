import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz(){
  const [ userAnswers, setUserAnswers ] = useState([]);
  
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ){
    setUserAnswers((prevAnswers) =>{
      return [...prevAnswers, selectedAnswer];
    });
  }, 
  []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null) , [handleSelectAnswer]);

  if(quizIsComplete){
    return <Summary userAnswers={userAnswers} />
  }


  return (
    <div id="quiz">
      <div id="question">
        <Question 
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  )
};