import api from "../Services/api";
import image from "../assets/imagevideotest.svg";
import styled from "styled-components";
import { VideoCard } from "../components";
import { fontSize, lineHeight } from "../styles/theme";
import { useEffect, useState } from "react";

const BannerStyled = styled.div`
  width: 1306px;
  height: 246px;
  border: 1px dashed ${(props) => props.theme.colors.primary};
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h3 {
    width: 193px;
    height: 35.85px;
    font-style: normal;
    font-weight: 600;
    font-size: ${fontSize["heading3"]};
    line-height: ${lineHeight["heading3"]};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const AllVideosStyled = styled.div`
  width: 1306px;
  height: 409px;
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.div`
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

const ThumbnailsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then(({ data }) => {
      setVideos(data);
    });
  }, []);
  return (
    <div>
      <BannerStyled>
        <h3>Banner aqui</h3>
      </BannerStyled>
      <AllVideosStyled>
        <HeaderStyled>
          <h4>Todos os vídeos</h4>
        </HeaderStyled>
        <ThumbnailsStyled>
          {videos.map((video: any) => (
            <VideoCard
              key={video.id}
              date={video.dataPublicacao}
              image={video.thumbUrl}
              name={video.nome}
            />
          ))}
        </ThumbnailsStyled>
      </AllVideosStyled>
    </div>
  );
};

export default Home;
