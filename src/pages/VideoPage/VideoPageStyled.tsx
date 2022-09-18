import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const RecomendedStyled = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  width: 1306px;
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
  justify-content: center;
`;

export const CommentsList = styled.div`
  height: 506px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: ${(props) => props.theme.colors.boxShadow};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.commentBackground};
    border-radius: 10px;
  }
`;
