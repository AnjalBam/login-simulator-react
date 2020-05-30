import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: auto;
  justify-content: center;
  align-items: center;
`;

export const LoginBoxWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 45vh;
  background: rgb(235, 235, 250);
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(30, 30, 30, 0.2);
  position: relative;
  transition: ease 0.4s;
`;

export const BoxContent = styled.div`
  display: block;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ease 0.4s;
`;

export const BoxContentLeft = styled(BoxContent)`
  background: #66f;
  border-radius: 10px 0px 0px 10px;
  color: #f2f2f2;
  &.loading {
    position: absolute;
    width: 100%;
  }
`;

export const BoxContentRight = styled(BoxContent)`
  background: #f2f2f2;
  border-radius: 0px 10px 10px 0px;
  color: #66f;
`;

export const LoginButton = styled.button`
  padding: 1rem 3rem;
  background: #66f;
  border: none;
  border-radius: 10rem;
  margin-left: auto;
  margin-right: auto;
  transition: ease 0.3s;
  &:hover {
    padding: 1rem 4rem;
    box-shadow: 0px 0px 5px #66f;
  }
  &:focus {
    outline: none;
  }
`;

export const LeftContentText = styled.p`
  text-align: center;
  font-size: ${(props) => {
    return props.header ? "2.5rem" : "1.75rem";
  }};
  font-weight: ${(props) => {
    return props.header ? 500 : 400;
  }};
  padding: 1rem;
`;

export const RightContentText = styled.p`
  font-size: "2.5rem";
  padding: 1rem;
  margin-bottom: 10px;
`;

export const LoadingDisplay = styled.div`
  width: 100%;
  height: 100%;
  background: #66f;
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const LoadingText = styled.p`
  padding: 10px;
  font-size: 2.5rem;
`;
