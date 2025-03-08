import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  animation: ${slideUp} 0.4s ease-out;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ModalText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => (props.error ? "#e53e3e" : "#cbd5e0")};
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: #4299e1;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3182ce;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const UsernamePopup = ({ onSubmit, isSubmitting }) => {
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    if (username.length > 15) {
      setError("Username must be at most 15 characters");
      return;
    }

    setError("");
    onSubmit(username);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Welcome to the Travel Quiz!</ModalTitle>
        <ModalText>
          Please enter a username to get started with your geography adventure.
        </ModalText>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error}
            disabled={isSubmitting}
            autoFocus
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Start Quiz"}
          </Button>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UsernamePopup;
