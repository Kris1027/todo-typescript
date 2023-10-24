import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 0.5rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  background-color: #bf4f74;
  color: white;
`;

interface ButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
