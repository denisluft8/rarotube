import ReactPlayer from "react-player/lazy";
import { FavoriteIcon } from "../Icons";
import DownloadIcon from "../Icons/DownloadIcon";
import {
  DescriptionStyled,
  DivStyled,
  IconsStyled,
  InfoContainerStyled,
  TitleContainer,
  VideoContainerStyled,
} from "./VideoPlayerStyled";

interface VideoPlayerProps {
  date: string;
  description: string;
  title: string;
  topic: string;
  video: string;
}

const VideoPlayer = ({
  date,
  description,
  title,
  topic,
  video,
}: VideoPlayerProps) => {
  return (
    <>
      <VideoContainerStyled>
        <ReactPlayer
          width="100%"
          height="100%"
          url={video}
         
        />
        <TitleContainer>
          <h4>{title}</h4>
          <IconsStyled>
            <DownloadIcon />
            <FavoriteIcon />
          </IconsStyled>
        </TitleContainer>
        <InfoContainerStyled>
          <DescriptionStyled>{description}</DescriptionStyled>
          <DivStyled>
            <div>tags</div>
            <div>
              <p>{topic}</p>
              <p>{new Date(date).toLocaleDateString()}</p>
            </div>
          </DivStyled>
        </InfoContainerStyled>
      </VideoContainerStyled>
    </>
  );
};

export default VideoPlayer;
