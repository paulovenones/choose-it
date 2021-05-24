import styled from 'styled-components';

type InputLabelProps = {
  type: 'text' | 'textarea';
  error: string;
};

export const InputLabel = styled.label<InputLabelProps>`
  display: block;
  line-height: 0px;

  font-weight: 500;
  font-size: 1.125rem;

  input,
  textarea {
    /* display: block; */

    font-size: 1.125rem;

    height: ${(props) => (props.type === 'text' ? '50px' : '100px')};

    width: 100%;

    margin-top: 0.75rem;
    border-radius: 4px;
    box-sizing: border-box;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
    padding-left: 0.938rem;

    outline: none;
    border: none;
    background: ${(props) => props.theme.colors.input};

    resize: none;

    border: ${(props) =>
      props.error ? `0.16rem solid ${props.theme.colors.red}` : ''};
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.text.secondaryDark};
    font-size: 1.125rem;
    font-weight: 500;
  }

  p {
    text-align: right;
    color: ${(props) => props.theme.colors.red};
    font-size: 0.75rem;
  }
`;
