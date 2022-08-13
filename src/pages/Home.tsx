import { Button, Input, SkeletonCard, VideoCard } from "../components/";
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
    <Input
      height="40px"
      onBlur={() => console.log("onBlur")}
      onChange={() => console.log("onChange")}
      placeholder="Input Test"
      width="450px"
    />
  </>
);

export default Home;
