// import { OptionsContainer, OptionButton } from "../../Styles/quizStyles";
// import { useMemo } from "react";

// const shuffleArray = (array) => {
//   return array
//     .map((item) => ({ item, sort: Math.random() }))
//     .sort((a, b) => a.sort - b.sort)
//     .map(({ item }) => item);
// };

// const OptionButtons = ({
//   options = [],
//   selectedOption,
//   correctOption,
//   onOptionClick,
//   disabled,
// }) => {
//   const shuffledOptions = useMemo(() => shuffleArray(options), [options]);
//   const showResult = selectedOption !== null;

//   return (
//     <OptionsContainer>
//       {shuffledOptions.map((option) => (
//         <OptionButton
//           key={option}
//           onClick={() => onOptionClick(option)}
//           selected={selectedOption === option}
//           correct={option === correctOption}
//           isCorrectOption={option === correctOption}
//           showResult={showResult}
//           disabled={disabled || showResult || !correctOption}
//         >
//           {option}
//         </OptionButton>
//       ))}
//     </OptionsContainer>
//   );
// };

// export default OptionButtons;

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
  
  // Only show results after a selection has been made
  const showResult = selectedOption !== null && correctOption;
   const normalizeText = (text="") => text?.toLowerCase().replace(/\s+/g, '');

  

  return (
    <OptionsContainer>
      {shuffledOptions.map((option) => {
        console.log('correctOption',correctOption,option)
        const isSelected = normalizeText(selectedOption) === normalizeText(option);
        const isCorrect = normalizeText(option) === normalizeText(correctOption);
        
        return (
          <OptionButton
            key={option}
            onClick={() => onOptionClick(option)}
            selected={isSelected}
            correct={isCorrect}
            isCorrectOption={isCorrect}
            showResult={showResult} // Only true after a selection has been made
            disabled={disabled || showResult }
          >
            {option}
          </OptionButton>
        );
      })}
    </OptionsContainer>
  );
};

export default OptionButtons;