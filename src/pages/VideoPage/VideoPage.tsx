import { useEffect, useState, useContext } from "react";
import sendIcon from "../../assets/send.svg";
import {
  CommentsDiv,
  CommentsFooter,
  CommentsList,
  ContainerStyled,
  RecomendedStyled,
} from "./VideoPageStyled";
import VideoContext from "../../Contexts/VideoContext";
import {
  Button,
  Comments,
  Input,
  SkeletonCard,
  VideoCard,
} from "../../components";
import apiAuth from "../../Services/apiAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import api from "../../Services/api";
import { SendIcon } from "../../components/Icons";

const VideoPage = () => {
  const [loading, setLoading] = useState(false);
  const [recVideos, setRecVideos] = useState([]);
  const [video, setVideo] = useState([]);
  const context = useContext(VideoContext);

  const loadVideo = () => {
    api.get(`videos/${context.videoId}`).then(({ data }) => {
      setVideo(data);
      console.log(video);
    });
  };

  const loadRecVideos = () => {
    apiAuth.get(`videos/${context.videoId}/recomendacoes`).then(({ data }) => {
      setRecVideos(data);
    });
  };

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      loadRecVideos();
      loadVideo();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <ContainerStyled>
      <RecomendedStyled>
        {loading && <SkeletonCard />}
        {!loading &&
          recVideos.map((video: any) => (
            <VideoCard
              key={video.id}
              date={video.dataPublicacao}
              image={video.thumbUrl}
              name={video.nome}
            />
          ))}
      </RecomendedStyled>
      {video &&
        video.map((vid: any) => (
          <VideoPlayer
            key={vid.id}
            date={vid.dataPublicacao}
            description={vid.descricao}
            title={vid.nome}
            topic={vid.topico}
            video={vid.url}
          />
        ))}

      <CommentsDiv>
        <CommentsList>
          <Comments />
        </CommentsList>
        <CommentsFooter>
          <Input
            height="40px"
            onChange={() => console.log("input")}
            placeholder="Escreva um comentário!"
            width="319px"
          />
          <Button onClick={() => console.log("send")}>
            <SendIcon />
          </Button>
        </CommentsFooter>
      </CommentsDiv>
    </ContainerStyled>
  );
};

export default VideoPage;
