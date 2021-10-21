import styled from "styled-components";
import { colors } from "../globalStyles";

const MainTitle = styled.h1`
  font-family: "Saira Stencil One", cursive;
  margin-bottom: 20px;
  font-size: 32px;
  color: ${colors.white};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 160px auto 0 auto;
  padding: 0 20px;
  width: 100%;
`;

const FormField = styled.input`
  width: 100%;
  height: 58px;
  border-radius: 6px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  color: ${colors.black};
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 6px;
  background-color: ${colors.clearPurple};
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledLink = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export { MainTitle, Container, FormField, StyledLink, StyledButton };
