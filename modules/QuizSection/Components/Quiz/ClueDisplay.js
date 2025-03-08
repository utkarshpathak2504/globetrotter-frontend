import { Clue } from '../../Styles/quizStyles';

const ClueDisplay = ({ clues=[] }) => {
  return (
    <div>
      {clues?.map((clue, index) => (
        <Clue key={index}>{clue}</Clue>
      ))}
    </div>
  );
};

export default ClueDisplay;