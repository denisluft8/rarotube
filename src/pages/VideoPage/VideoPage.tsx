import { useEffect, useState, useContext } from "react";
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
  const [comments, setComments] = useState([]);
  const context = useContext(VideoContext);
  const videoId = context.videoId;

  const loadRecVideos = () => {
    apiAuth.get(`videos/${videoId}`).then(({ data }) => {
      setVideo(data);
    });
    apiAuth.get(`videos/${videoId}/recomendacoes`).then(({ data }) => {
      setRecVideos(data);
    });
    apiAuth.get(`videos/${videoId}/comentarios`).then(({ data }) => {
      setComments(data);
    });
  };

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      loadRecVideos();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timing);
  }, []);

  console.log(video);
  console.log(videoId);
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
            tags={vid.tags}
            title={vid.nome}
            topic={vid.topico}
            video={vid.url}
          />
        ))}

      <CommentsDiv>
        <CommentsList>
          {comments &&
            comments.map((comment: any) => (
              <Comments
                key={comment.id}
                comment={comment.texto}
                name={comment.aluno.nome}
                date={new Date(comment.createdAt).toLocaleDateString()}
                downVote={comment.downVotes}
                upVote={comment.upVotes}
                profile={comment.aluno.foto}
              />
            ))}
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
