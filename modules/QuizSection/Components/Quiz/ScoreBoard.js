import { ScoreContainer, ScoreBox } from '../../Styles/quizStyles';

const ScoreBoard = ({ score, correctAnswers, incorrectAnswers }) => {
  return (
    <ScoreContainer>
      <ScoreBox type="correct">
        ✓ <span>{correctAnswers ||score.correct}  </span>
      </ScoreBox>
      <ScoreBox type="incorrect">
        ✗ <span>{ incorrectAnswers || score.incorrect}</span>
      </ScoreBox>
    </ScoreContainer>
  );
};

export default ScoreBoard;