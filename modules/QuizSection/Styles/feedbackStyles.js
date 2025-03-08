import styled from '@emotion/styled';
import { sadAnimation } from './animations';

export const FeedbackContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const FeedbackText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.correct ? '#00b894' : '#d63031'};
  margin-bottom: 0.5rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s ease;
`;

export const Emoji = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  animation: ${props => props.sad ? sadAnimation : 'none'} 1s ease-in-out;
`;

export const FunFact = styled.p`
  background: #fdcb6e;
  border-radius: 10px;
  padding: 1rem;
  color: #2d3436;
  font-size: 1rem;
  font-style: italic;
  margin-top: 1rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  position: relative;
  
  &:before {
    content: '💡';
    margin-right: 8px;
  }
`;