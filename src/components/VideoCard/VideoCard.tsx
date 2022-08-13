import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../../styles/theme";
import FavoriteIcon from "../Icons/FavoriteIcon";

interface VideoCardProps {
  image: string;
}

const VideoCardStyled = styled.div<VideoCardProps>`
  margin-top: 10px;
  width: 229.2px;
  height: 150px;
  background: url(${(props) => props.image});
  display: flex;
`;

const FooterStyled = styled.div`
  width: 229.2px;
  height: 44.91px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainerStyled = styled.div`
  padding-top: 8px;
  padding-bottom: 2px;
`;

const TitleStyled = styled.p`
  color: white;
  font-size: ${fontSize["body-small"]};
  line-height: ${lineHeight["body-small"]};
  margin: 0;
  padding-left: 14px;
`;
const DateStyled = styled.p`
  color: ${colors["light-silver"]};
  font-size: ${fontSize["extra-small"]};
  line-height: ${lineHeight["extra-small"]};
  margin: 0;
  padding-left: 14px;
`;

const VideoCard = ({ image }: VideoCardProps) => {
  const test = (x: string) => console.log(x);

  return (
    <VideoCardStyled image={image}>
      <FooterStyled>
        <TextContainerStyled>
          <TitleStyled>Meowth and walk away</TitleStyled>
          <DateStyled>Ago2020</DateStyled>
        </TextContainerStyled>
        <FavoriteIcon />
      </FooterStyled>
    </VideoCardStyled>
  );
};

export default VideoCard;
