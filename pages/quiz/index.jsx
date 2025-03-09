import QuizSection from "../../modules/QuizSection";
import { getRandomDestination } from "../../modules/QuizSection/utils/api";

const HomePage = ({ destination = {} }) => {
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


export default HomePage