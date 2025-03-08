import { OptionsContainer, OptionButton } from "../../Styles/quizStyles";
import { useMemo } from "react";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const OptionButtons = ({
  options = [],
  selectedOption,
  correctOption,
  onOptionClick,
  disabled,
}) => {
  const shuffledOptions = useMemo(() => shuffleArray(options), [options]);
  const showResult = selectedOption !== null;

  return (
    <OptionsContainer>
      {shuffledOptions.map((option) => (
        <OptionButton
          key={option}
          onClick={() => onOptionClick(option)}
          selected={selectedOption === option}
          correct={option === correctOption}
          isCorrectOption={option === correctOption}
          showResult={showResult}
          disabled={disabled || showResult}
        >
          {option}
        </OptionButton>
      ))}
    </OptionsContainer>
  );
};

export default OptionButtons;
