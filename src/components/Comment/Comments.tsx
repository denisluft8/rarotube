import avatar from "../../assets/avatar.svg";
import Vote from "../Icons/Vote";
import {
  Comment,
  CommentDivStyled,
  Date,
  DivStyled,
  DownVote,
  Name,
  ProfilePic,
  UpVote,
} from "./CommentsStyled";

const Comments = () => {
  return (
    <CommentDivStyled>
      <ProfilePic src={avatar}></ProfilePic>
      <DivStyled>
        <Name>Dênis Augusto</Name>
        <Date>26/08/2022</Date>
        <Comment>
          <p>Muito Bom!</p>
        </Comment>
          <UpVote>
            <Vote />
            <p>15</p>
          </UpVote>
          <DownVote>
            <Vote />
            <p>13</p>
          </DownVote>
      </DivStyled>
    </CommentDivStyled>
  );
};
export default Comments;
