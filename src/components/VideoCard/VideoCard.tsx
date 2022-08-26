import { Link } from "react-router-dom";
import FavoriteIcon from "../Icons/FavoriteIcon";
import {
  DateStyled,
  FooterStyled,
  TextContainerStyled,
  TitleStyled,
  VideoCardStyled,
} from "./VideoCardStyled";

export interface VideoCardProps {
  date: string;
  image: string;
  name: string;
  onClickFav?: any;
  onClickVid?: any;
}

const VideoCard = ({
  image,
  name,
  date,
  onClickFav,
  onClickVid,
}: VideoCardProps) => {
  return (
    <VideoCardStyled date={date} image={image} name={name}>
      <FooterStyled>
        <Link to="/video" onClick={onClickVid}>
          <TextContainerStyled>
            <TitleStyled>{name}</TitleStyled>
            <DateStyled>{new Date(date).toLocaleDateString()}</DateStyled>
          </TextContainerStyled>
        </Link>
        <button onClick={onClickFav}>
          <FavoriteIcon />
        </button>
      </FooterStyled>
    </VideoCardStyled>
  );
};

export default VideoCard;
