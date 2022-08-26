import { ReactElement, useState } from "react";
import VideoContext from "./VideoContext";

interface VideoContextProviderProps {
  children: ReactElement | ReactElement[];
}

const VideoContextProvider = ({ children }: VideoContextProviderProps) => {
  const [videoId, setVideoId] = useState("");
  return (
    <VideoContext.Provider
      value={{
        videoId: videoId,
        setVideoId: (newId: string) => {
          setVideoId(newId);
        },
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider