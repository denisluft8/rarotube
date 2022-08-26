import styled from "styled-components";
import { fontSize, lineHeight } from "../../styles/theme";

export const BannerStyled = styled.div`
  width: 100%;
  height: 246px;
  border: 1px dashed ${(props) => props.theme.colors.primary};
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: ${fontSize["heading3"]};
    line-height: ${lineHeight["heading3"]};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const AllVideosStyled = styled.div`
  width: 100%;
  height: 221px;
  display: flex;
  flex-direction: column;
`;

export const FavoritesStyled = styled.div`
  width: 100%;
  height: 221px;
  display: flex;
  flex-direction: column;

  & > h4 {
    height: 39px;
    font-style: normal;
    font-weight: 600;
    font-size: ${fontSize["heading4"]};
    line-height: ${lineHeight["heading4"]};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const FavVideosStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 39px;
  margin-bottom: 30px;

  & > h4 {
    width: 200px;
    height: 39px;
    font-style: normal;
    font-weight: 600;
    font-size: ${fontSize["heading4"]};
    line-height: ${lineHeight["heading4"]};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SortStyled = styled.select`
  background: url(${(props) => props.theme.colors.background});
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  height: 20px;
  width: 64px;

  & > option {
    appearance: none;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ThumbnailsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
