import React from 'react';

function AnswerOption (props){
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return(
    <li className="AnswerOption">
    <input
       type="radio"
       className="radioCustomButton"
       name="radioGroup"
       checked={props.answerType === props.userAnswer}
       id={props.answerType}
       value={props.answerType}
       disabled={props.userAnswer}
       onChange={props.onAnswerSelected}
    />
    <label className="radioCustomLabel" htmlFor={props.answerType}>
       {props.answerContent}
       </label>
       </li>
  );
}

AnswerOption.propTypes = {
  answerType: React.propTypes.string.isRequired,
  answerContent: React.propTypes.string.isRequired,
  userAnswer: React.propTypes.string.isRequired,
  onAnswerSelected: React.propTypes.func.isRequired
};

export AnswerOption;
