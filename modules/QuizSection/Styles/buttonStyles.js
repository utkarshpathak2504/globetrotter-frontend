import styled from '@emotion/styled';
import { pulse } from './animations';

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 2rem 0;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionButton = styled.button`
  padding: 1rem;
  border-radius: 12px;
  border: none;
  background: ${props => props.selected 
    ? props.correct 
      ? '#00b894' 
      : '#ff7675' 
    : 'linear-gradient(135deg, #6c5ce7, #a29bfe)'};
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    animation: ${pulse} 1s infinite;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: ${props => props.selected ? 1 : 0.7};
    animation: none;
    transform: translateY(0);
  }
`;

export const NextButtonStyle = styled.button`
  background: linear-gradient(135deg, #fd79a8, #e84393);
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const InviteButtonStyle = styled.button`
  background: linear-gradient(135deg, #fd79a8, #e84393);
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;
