import { InviteButtonStyle } from '../../Styles/buttonStyles';

const InviteButton = ({ onClick }) => {
  return (
    <InviteButtonStyle onClick={onClick}>
     Invite Friends
    </InviteButtonStyle>
  );
};

export default InviteButton;