import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Load more
  </Btn>
);

Button.propType = {
  onClick: PropTypes.func.isRequired,
};
