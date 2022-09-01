import { createContext } from "react";

interface VideoContextProps {
  videoId: string;
  setVideoId: (newId: string) => void;
}

const VideoContext = createContext<VideoContextProps>({
  videoId: "",
  setVideoId: () => {},
});

export default VideoContext;
