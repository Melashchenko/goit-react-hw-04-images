import { Btn } from './Button.styled';

export const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Open modal
  </Btn>
);
