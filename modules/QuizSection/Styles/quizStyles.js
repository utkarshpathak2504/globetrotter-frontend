import styled from "@emotion/styled";
import { gradientAnimation, cardEntrance } from "./animations";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(
    -45deg,
    #ff9a9e,
    #fad0c4,
    #fbc2eb,
    #a6c1ee,
    #c2e9fb
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  font-family: "Poppins", sans-serif;
`;

export const QuizCardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${cardEntrance} 0.8s ease-out;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const Title = styled.h1`
  color: #6c5ce7;
  margin: 0.75rem 0 1.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h2`
  color: #2e7d32;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h3`
 color: black;
  font-size: 1rem;
  font-weight: 400;
   margin: 0.25rem;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);`

export const Clue = styled.p`
  font-size: 1.2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  line-height: 1.6;
  font-weight: 500;
  position: relative;
  &:before {
    content: "🌍";
    margin-right: 8px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  z-index: 10;
`;

export const ScoreBox = styled.div`
  background: ${(props) => (props.type === "correct" ? "#00cec9" : "#ff7675")};
  color: white;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  span {
    margin-left: 5px;
    font-size: 1.2rem;
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #6c5ce7;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.invite-button {
      background-color: #6c5ce7;
      color: white;

      &:hover {
        background-color: #5b4ac7;
        transform: translateY(-2px);
      }
    }

    &.next-button {
      background-color: #00b894;
      color: white;

      &:hover {
        background-color: #00a383;
        transform: translateY(-2px);
      }
    }
  }
`;

// New styles for feedback container
export const FeedbackContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isCorrect ? "rgba(0, 206, 201, 0.1)" : "rgba(255, 118, 117, 0.1)"};
  border: 2px solid ${(props) => (props.isCorrect ? "#00cec9" : "#ff7675")};
  position: relative;
  margin-bottom: 1.5rem;
  z-index: 5;

  h3 {
    color: ${(props) => (props.isCorrect ? "#00cec9" : "#ff7675")};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #2d3436;
  }
`;

// Styles for option buttons
export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
  position: relative;
  z-index: 2;
`;

// export const OptionButton = styled.button`
//   padding: 1rem;
//   border-radius: 10px;
//   background-color: ${(props) => {
//     // Only show colors when we're showing results
//     if (!props.showResult) return "white";
    
//     // Show green for correct answers (either selected or to highlight the correct one)
//     if ((props.selected && props.correct) || 
//         (!props.selected && props.isCorrectOption)) 
//       return "#00cec9";
    
//     // Show red only for selected incorrect answers
//     if (props.selected && !props.correct) 
//       return "#ff7675";
    
//     // Default white for unselected options
//     return "white";
//   }};
  
//   color: ${(props) => {
//     if (!props.showResult) return "#2d3436";
//     if ((props.selected && props.correct) || 
//         (!props.selected && props.isCorrectOption)) 
//       return "white";
//     if (props.selected && !props.correct) 
//       return "white";
//     return "#2d3436";
//   }};
  
//   border: 2px solid ${(props) => {
//     if (!props.showResult) return "#e0e0e0";
//     if ((props.selected && props.correct) || 
//         (!props.selected && props.isCorrectOption)) 
//       return "#00cec9";
//     if (props.selected && !props.correct) 
//       return "#ff7675";
//     return "#e0e0e0";
//   }};
  
//   font-weight: 600;
//   font-size: 1rem;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   opacity: ${(props) =>
//     props.disabled &&
//     !props.selected &&
//     !(props.isCorrectOption && props.showResult)
//       ? 0.7
//       : 1};

//   &:hover {
//     transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
//     box-shadow: ${(props) =>
//       props.disabled
//         ? "0 4px 6px rgba(0, 0, 0, 0.1)"
//         : "0 7px 10px rgba(0, 0, 0, 0.15)"};
//   }

//   &:after {
//     content: ${(props) => {
//       if (!props.showResult) return '""';
//       if (props.selected && props.correct) return '"✓"';
//       if (props.selected && !props.correct) return '"✗"';
//       return '""';
//     }};
//     position: absolute;
//     right: 10px;
//     font-size: 1.2rem;
//   }
// `;



export const OptionButton = styled.button`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  outline: none;
  border: 2px solid #e0e0e0;
  background-color: white;
  color: #333;

  ${(props) =>
    !props.disabled &&
    `
    &:hover {
      border-color: #a0a0a0;
      background-color: #f8f8f8;
    }
  `}

  /* Correct option (Green) */
  ${(props) =>
    props.isCorrect &&
    props.showResult &&
    `
    border-color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
    color: #2e7d32;
  `}

  /* Selected option (Before checking - Orange) */
  ${(props) =>
    props.selected &&
    !props.showResult &&
    `
    border-color: #ff9800;
    background-color: rgba(255, 152, 0, 0.1);
    color: #e65100;
  `}

  /* Selected wrong option (After checking - Red) */
  ${(props) =>
    props.selected &&
    props.showResult &&
    !props.isCorrect &&
    `
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.1);
    color: #d32f2f;
  `}

  /* Disabled state */
  ${(props) =>
    props.disabled &&
    `
    opacity: ${props.showResult ? "1" : "0.7"};
  `}
`;
