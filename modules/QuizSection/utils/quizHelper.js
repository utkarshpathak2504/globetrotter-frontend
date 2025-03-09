import { generateInvite, submitAnswer } from "./api";
import { triggerConfetti } from "./confettiHelper";

export const handleOptionClick = async ({
  option,
  selectedOption,
  isSubmitting,
  setSelectedOption,
  setIsSubmitting,
  onScoreUpdate,
  setIsCorrect,
  setCorrectAns,
  setFunFact,
  setShowFunFact,
  destination,
}) => {
  if (selectedOption || isSubmitting) return;

  setSelectedOption(option);
  setIsSubmitting(true);

  try {
    const username = localStorage.getItem("quizUsername");
    if (!username) {
      console.error("No username found");
      return;
    }

    const result = await submitAnswer(username, option);
    setIsCorrect(result.correct);
    setCorrectAns(result?.city);

    if (result.correct) {
      onScoreUpdate(true, result?.correctAnswers, result?.incorrectAnswers);
      triggerConfetti();

      const randomIndex = Math.floor(Math.random() * 2); // Generates either 0 or 1
      setFunFact(
        result.funFacts?.[randomIndex] || destination.fun_fact?.[randomIndex]
      );
    } else {
      onScoreUpdate(false, result?.correctAnswers, result?.incorrectAnswers);
      const randomIndex = Math.floor(Math.random() * 2); // Generates either 0 or 1
      setFunFact(
        result.trivia?.[randomIndex] || destination.trivia?.[randomIndex]
      );
    }

    setShowFunFact(true);
  } catch (error) {
    console.error("Error submitting answer:", error);
  } finally {
    setIsSubmitting(false);
  }
};

export const handleNextClick = ({
  setSelectedOption,
  setIsCorrect,
  setShowFunFact,
  onNextQuestion,
}) => {
  setSelectedOption(null);
  setIsCorrect(null);
  setShowFunFact(false);
  onNextQuestion();
};

export const handleInviteFriends = async (userData) => {
  const fallbackInviteText =
    "🎮 Hey! Try out this fun game! Here’s the link: https://globetrotter-frontend-ashen.vercel.app/quiz 🚀";

  try {
    const { inviteText = "" } = await generateInvite(
      userData?.username,
      userData?.highestScore
    );

    const shareText = inviteText.trim() ? inviteText : fallbackInviteText;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    window.open(whatsappUrl, "_blank");

    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        alert("Link copied! Share it with your friends to play.");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  } catch (error) {
    console.error("Error fetching invite data:", error);
    const fallbackUrl = `https://wa.me/?text=${encodeURIComponent(
      fallbackInviteText
    )}`;
    window.open(fallbackUrl, "_blank");
    alert("Failed to fetch invite data. Using fallback message.");
  }
};

////////////////
import { registerUser, getUserScore } from "./api";

export const fetchUserData = async (username, setUserData) => {
  if (username) {
    try {
      const data = await getUserScore(username);
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user score:", error);
    }
  }
};

export const handleScoreUpdate = (
  isCorrect,
  totalCorrect,
  totalIncorrect,
  setScore
) => {
  if (totalCorrect !== undefined && totalIncorrect !== undefined) {
    setScore({ correct: totalCorrect, incorrect: totalIncorrect });
  } else {
    setScore((prev) => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
    }));
  }
};

export const fetchRandomDestination = (router, destination, setLoading) => {
  setLoading(true);
  router.replace(`${router.pathname}?t=${destination?._id}`);
};

export const handleUsernameSubmit = async (
  username,
  setUsername,
  setShowUsernameModal,
  setIsSubmitting
) => {
  setIsSubmitting(true);
  try {
    await registerUser(username);
    localStorage.setItem("quizUsername", username);
    setUsername(username);
    setShowUsernameModal(false);
  } catch (error) {
    console.error("Error registering user:", error);
    alert("There was an error registering your username. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

export const loadStoredUsername = (setUsername, setShowUsernameModal) => {
  const storedUsername = localStorage.getItem("quizUsername");
  if (!storedUsername) {
    setShowUsernameModal(true);
  } else {
    setUsername(storedUsername);
  }
};
