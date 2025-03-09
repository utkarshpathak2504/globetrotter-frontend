import { OptionsContainer, OptionButton } from "../../Styles/quizStyles";
import { useEffect, useMemo } from "react";

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
  isCorrect
}) => {
  const shuffledOptions = useMemo(() => shuffleArray(options), [options]);

  const showResult = isCorrect !== null;
  const normalizeText = (text = "") => text?.toLowerCase().replace(/\s+/g, "");

  useEffect(() => {
    console.log("Selected Option:", selectedOption);
    console.log("Correct Option:", correctOption);
  }, [selectedOption, correctOption]);

  return (
    <OptionsContainer>
      {shuffledOptions.map((option) => {
        const isSelected = normalizeText(selectedOption) === normalizeText(option);
        const isCorrectOption = normalizeText(option) === normalizeText(correctOption);

        return (
          <OptionButton
            key={option}
            onClick={() => onOptionClick(option)}
            selected={isSelected}
            isCorrect={isCorrectOption}
            showResult={showResult}
            disabled={disabled || !!correctOption}
          >
            {option}
          </OptionButton>
        );
      })}
    </OptionsContainer>
  );
};

export default OptionButtons;
