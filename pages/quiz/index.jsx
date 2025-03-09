import QuizSection from "../../modules/QuizSection";
import { getRandomDestination } from "../../modules/QuizSection/utils/api";

export const HomePage = ({ destination = {} }) => {
  return <QuizSection destination={destination} />;
};

export const getServerSideProps = async () => {
  try {
    const response = await getRandomDestination();
    const { city, country, ...destination } = response;

    return {
      props: {
        destination,
      },
    };
  } catch (error) {
    console.error("Error fetching question:", error);

    return {
      props: {
        destination: {},
      },
    };
  }
};

