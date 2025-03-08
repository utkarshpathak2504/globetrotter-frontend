import { useState } from "react";
import QuizCard from "./QuizCard";
import ScoreBoard from "./ScoreBoard";
import ClueDisplay from "./ClueDisplay";
import OptionButtons from "./OptionButtons";
import Feedback from "./Feedback";
import NextButton from "./NextButton";
import {
  Container,
  LoadingSpinner,
  Title,
  Logo,
  Name,
  ButtonGroup,
} from "../../Styles/quizStyles";
import {
  handleOptionClick,
  handleNextClick,
  handleInviteFriends,
} from "../../utils/quizHelper";
import InviteButton from "./InviteButton";

const Quiz = ({
  destination = {},
  loading,
  score,
  onScoreUpdate,
  onNextQuestion,
  userData = {},
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAns, setCorrectAns] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFunFact, setShowFunFact] = useState(false);
  const [funFact, setFunFact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  if (loading) {
    return (
      <Container>
        <QuizCard>
          <Title>Travel Quiz</Title>
          <LoadingSpinner />
          <p>Loading your next destination...</p>
        </QuizCard>
      </Container>
    );
  }

  return (
    <Container>
      <QuizCard>
        <Logo>Globetrotter</Logo>
        <Name>Hey, {userData?.username || " "}</Name>
        <Title>Where in the World?</Title>

        <ScoreBoard
          score={score}
          correctAnswers={userData?.correctAnswers}
          incorrectAnswers={userData?.incorrectAnswers}
        />

        <ClueDisplay clues={destination.clues} />

        <OptionButtons
          options={destination.options}
          selectedOption={selectedOption}
          onOptionClick={(option) =>
            handleOptionClick({
              option,
              selectedOption,
              isSubmitting,
              setSelectedOption,
              setIsSubmitting,
              onScoreUpdate,
              setIsCorrect,
              setFunFact,
              setShowFunFact,
              setCorrectAns,
              destination,
            })
            
          }
           correctOption={correctAns}
          disabled={isSubmitting || showFunFact}
        />

        {showFunFact && (
          <Feedback
            isCorrect={isCorrect}
            showFunFact={showFunFact}
            funFact={funFact}
          />
        )}

        <ButtonGroup>
          <InviteButton
            onClick={() => handleInviteFriends(userData)}
            className="invite-button"
          >
            Invite Friends
          </InviteButton>

          {selectedOption && showFunFact && (
            <NextButton
              onClick={() =>
                handleNextClick({
                  setSelectedOption,
                  setIsCorrect,
                  setShowFunFact,
                  onNextQuestion,
                })
              }
            />
          )}
        </ButtonGroup>
      </QuizCard>
    </Container>
  );
};

export default Quiz;
