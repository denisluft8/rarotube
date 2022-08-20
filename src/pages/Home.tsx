import image from "../assets/imagevideotest.svg";
import styled from "styled-components";
import { VideoCard } from "../components";
import { colors, fontSize, lineHeight } from "../styles/theme";

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
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => (
  <div>
    <BannerStyled>
      <h3>Banner aqui</h3>
    </BannerStyled>
    <AllVideosStyled>
      <HeaderStyled>
        <h4>Todos os vídeos</h4>
      </HeaderStyled>
      <ThumbnailsStyled>
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
        <VideoCard
          date={"Ago 2020"}
          image={image}
          name={"Meowth and walk away"}
        />
      </ThumbnailsStyled>
    </AllVideosStyled>
  </div>
);

export default Home;
