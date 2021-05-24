import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const FormWrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;

  flex: 1;

  position: absolute;
  width: 60vw;
  height: 618px;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 2.375rem 4.813rem;

  background: ${(props) => props.theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 6px 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.25rem;

    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Form = styled.form`
  margin-top: 1.875rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  align-items: center;

  button {
    margin: 0 auto;
  }
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  width: 70%;

  button {
    width: 30%;
    margin-left: 12px;
  }

  input {
    flex: 1;
  }
`;
