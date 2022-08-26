import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const RecomendedStyled = styled.div`
  height: 105px;
  width: 1306px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.boxBackground};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
`;

export const CommentsFooter = styled.div`
  display: flex;
  & > button {
    width: 90px;
    margin-left: 10px;
  }
`;

export const CommentsDiv = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.boxBackground};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  height: 626px;
  margin-left: 15px;
  padding: 20px;
  width: 459px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentsList = styled.div`
  height: 506px;
`;
