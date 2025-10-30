import axios from "axios";

//!--------- Registration --------!//
export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    `${import.meta.env.VITE_REACT_API_BASE_URL}/api/v1/openai/generate-content`,
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
