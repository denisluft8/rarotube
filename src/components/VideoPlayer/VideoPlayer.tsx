import ReactPlayer from "react-player/lazy";
import { FavoriteIcon } from "../Icons";
import DownloadIcon from "../Icons/DownloadIcon";
import {
  DateTopic,
  DescriptionStyled,
  DivStyled,
  IconsStyled,
  InfoContainerStyled,
  Tags,
  TitleContainer,
  VideoContainerStyled,
} from "./VideoPlayerStyled";

const tagColors = ["#B5B3E6", "#7A75D1", "#4E47C2", "#343090", "#292772"];

interface VideoPlayerProps {
  date: string;
  description: string;
  tags: any;
  title: string;
  topic: string;
  video: string;
}

const VideoPlayer = ({
  date,
  description,
  tags,
  title,
  topic,
  video,
}: VideoPlayerProps) => {
  return (
    <>
      <VideoContainerStyled>
        <ReactPlayer width="100%" height="100%" url={video} />
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
            <Tags>
              {tags.map((tag: any) => (
                <p
                  style={{
                    backgroundColor: `${
                      tagColors[Math.floor(Math.random() * tagColors.length)]
                    }`,
                  }}
                >
                  {tag}
                </p>
              ))}
            </Tags>
            <DateTopic>
              <p>{topic}</p>
              <p>{new Date(date).toLocaleDateString()}</p>
            </DateTopic>
          </DivStyled>
        </InfoContainerStyled>
      </VideoContainerStyled>
    </>
  );
};

export default VideoPlayer;
