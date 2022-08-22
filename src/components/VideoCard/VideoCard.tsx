import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../../styles/theme";
import FavoriteIcon from "../Icons/FavoriteIcon";

interface VideoCardProps {
  date: string;
  image: string;
  name: string;
}

const VideoCardStyled = styled.div<VideoCardProps>`
  background: url(${(props) => props.image});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  height: 150px;
  width: 229.2px;
`;

const FooterStyled = styled.div`
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  height: 44.91px;
  justify-content: space-between;
  margin-top: auto;
  width: 229.2px;
`;

const TextContainerStyled = styled.div`
  padding-bottom: 2px;
  padding-top: 8px;
`;

const TitleStyled = styled.p`
  color: white;
  font-size: ${fontSize["body-small"]};
  font-weight: 500;
  height: 20px;
  line-height: ${lineHeight["body-small"]};
  margin: 0;
  padding-left: 14px;
`;
const DateStyled = styled.p`
  color: ${colors["light-silver"]};
  font-size: ${fontSize["extra-small"]};
  font-weight: 400;
  height: 15px;
  line-height: ${lineHeight["extra-small"]};
  margin: 0;
  padding-left: 14px;
`;

const VideoCard = ({ image, name, date }: VideoCardProps) => {
  const test = (x: string) => console.log(x);

  return (
    <VideoCardStyled date={date} image={image} name={name}>
      <FooterStyled>
        <TextContainerStyled>
          <TitleStyled>{name}</TitleStyled>
          <DateStyled>{date}</DateStyled>
        </TextContainerStyled>
        <FavoriteIcon />
      </FooterStyled>
    </VideoCardStyled>
  );
};

export default VideoCard;
