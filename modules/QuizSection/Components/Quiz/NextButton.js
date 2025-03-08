import { NextButtonStyle } from '../../Styles/buttonStyles';

const NextButton = ({ onClick }) => {
  return (
    <NextButtonStyle onClick={onClick}>
      Next Destination →
    </NextButtonStyle>
  );
};

export default NextButton;