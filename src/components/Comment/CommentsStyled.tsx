import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../../styles/theme";

export const CommentDivStyled = styled.div`
  width: 429px;
  height: 109px;
  display: flex;
  align-items: center;
  margin: 12px;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fontSize["body-small"]};
  font-weight: 500;
  line-height: ${lineHeight["body-small"]};
  padding: 8px 0px;
  width: 268px;
`;

export const Date = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fontSize["body-small"]};
  font-weight: 500;
  line-height: ${lineHeight["body-small"]};
  padding: 8px 0px;
`;

export const ProfilePic = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50px;
`;

export const Comment = styled.div`
  background: ${(props) => props.theme.colors.commentBackground};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 5px;
  padding: 12px;
  width: 351px;
`;

export const UpVote = styled.p`
  color: ${(props) => props.theme.colors.primary};
  display: inline-flex;
  font-family: "Inter";
  font-size: 12px;
  line-height: 15px;
  margin: 10px;

  & > svg {
    margin-right: 10px;
  }
`;

export const DownVote = styled.p`
  color: ${(props) => props.theme.colors.primary};
  display: inline-flex;
  font-family: "Inter";
  font-size: 12px;
  line-height: 15px;
  margin: 10px;

  & > svg {
    margin-right: 10px;
    transform: rotate(-180deg);
    & path:hover {
      fill: ${colors["pink-sasquatch"]};
      stroke: ${colors["pink-sasquatch"]};
    }
  }
`;
