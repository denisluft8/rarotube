import { Button, SkeletonCard, VideoCard } from "../components/";
import imagevideotest from "../assets/imagevideotest.svg";

const Home = () => (
  <>
    <Button
      text="Button"
      onClick={() => console.log("clicked")}
      disabled={false}
    />
    <Button
      text="Disabled Button"
      onClick={() => console.log("clicked")}
      disabled={true}
    />
    <VideoCard image={imagevideotest} />
    <SkeletonCard />
  </>
);

export default Home;
