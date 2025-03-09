import { useState, useEffect } from "react";
import Head from "next/head";
import Quiz from "./Components/Quiz";
import { useRouter } from "next/router";
import UsernamePopup from "./Components/UserNamePopup";
import { Toaster } from "react-hot-toast";
import {
  fetchUserData,
  handleScoreUpdate,
  fetchRandomDestination,
  handleUsernameSubmit,
  loadStoredUsername,
} from "./utils/quizHelper";
import { LoadingSpinner } from "./Styles/quizStyles";

export default function QuizSection({ destination }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);  // Set loading to true initially
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  // Fetch user data when username changes
  useEffect(() => {
    if (username) {
      fetchUserData(username, setUserData);
    }
  }, [username]);

  // Load stored username on initial render
  useEffect(() => {
    loadStoredUsername(setUsername, setShowUsernameModal);
  }, []);

  // Set loading state when destination is available
  useEffect(() => {
    if (destination) {
      setLoading(false);
    }
  }, [destination]);

  return (
    <>
      <Head>
        <title>Travel Quiz - Test Your Geography Knowledge!</title>
        <meta
          name="description"
          content="Test your geography knowledge with our fun travel quiz"
        />
        <Toaster position="top-right" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {showUsernameModal && (
        <UsernamePopup
          onSubmit={(name) =>
            handleUsernameSubmit(
              name,
              setUsername,
              setShowUsernameModal,
              setIsSubmitting
            )
          }
          isSubmitting={isSubmitting}
        />
      )}

      {loading ? (
        <div>  <LoadingSpinner /></div>
      ) : (
        <Quiz
          destination={destination}
          loading={loading}
          score={score}
          onScoreUpdate={(isCorrect, totalCorrect, totalIncorrect) =>
            handleScoreUpdate(isCorrect, totalCorrect, totalIncorrect, setScore)
          }
          onNextQuestion={() =>
            fetchRandomDestination(router, destination, setLoading)
          }
          userData={userData}
        />
      )}
    </>
  );
}
