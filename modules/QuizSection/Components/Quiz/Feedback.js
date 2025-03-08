// import { FeedbackContainer, FeedbackText, Emoji, FunFact } from '../../Styles/feedbackStyles';

// const Feedback = ({ isCorrect, showFunFact, funFact }) => {
//   if (isCorrect === null) return <FeedbackContainer />;
  
//   return (
//     <FeedbackContainer>
//       <FeedbackText correct={isCorrect} show={isCorrect !== null}>
//         {isCorrect ? 'Correct Answer!' : 'Oops! Wrong Answer!'}
//       </FeedbackText>
      
//       <Emoji sad={!isCorrect}>
//         {isCorrect ? '🎉' : '😢'}
//       </Emoji>
      
//       <FunFact show={showFunFact}>
//         {funFact}
//       </FunFact>
//     </FeedbackContainer>
//   );
// };

// export default Feedback;

import { FeedbackContainer } from '../../Styles/quizStyles';

const Feedback = ({ isCorrect, showFunFact, funFact }) => {
  if (!showFunFact) return null;
  
  return (
    <FeedbackContainer isCorrect={isCorrect}>
      <h3>{isCorrect ? "Correct! 🎉" : "Not quite! 🤔"}</h3>
      <p>{funFact}</p>
    </FeedbackContainer>
  );
};

export default Feedback;