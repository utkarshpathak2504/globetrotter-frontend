import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getRandomDestination = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations/random`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random destination:", error);
    throw new Error("Failed to fetch random destination data");
  }
};

export const registerUser = async (username) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return response.json();
};

export const getUserScore = async (username = "") => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/getUser/${username}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Failed to fetch user score: ${
          error.response.data.error || error.message
        }`
      );
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(`Error setting up request: ${error.message}`);
    }
  }
};

export const submitAnswer = async (username = "", answer = "") => {
  try {
    const response = await axios.post(`${API_BASE_URL}/game/submit`, {
      username,
      answer,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Failed to submit answer: ${error.response.data.error || error.message}`
      );
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(`Error setting up request: ${error.message}`);
    }
  }
};

export const generateInvite = async (username, score) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/friends/invite`, {
      username,
      score,
    });

    return {
      success: true,
      inviteText: response.data.inviteText,
      imageUrl: response.data.imageUrl,
    };
  } catch (error) {
    console.error("Error generating invite:", error);

    return {
      success: false,
      error: error.response?.data?.error || "Failed to generate invite",
      details: error.response?.data?.details || error.message,
    };
  }
};
