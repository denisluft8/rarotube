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

interface CommentsProps {
  name: string;
  profile: string;
  date: string;
  comment: string;
  upVote: string;
  downVote: string;
  voteUp?: () => void;
  voteDown?: () => void;
}

const Comments = ({
  name,
  profile,
  date,
  comment,
  upVote,
  downVote,
  voteUp,
  voteDown,
}: CommentsProps) => {
  return (
    <CommentDivStyled>
      <ProfilePic src={profile}></ProfilePic>
      <DivStyled>
        <Name>{name}</Name>
        <Date>{date}</Date>
        <Comment>
          <p>{comment}</p>
        </Comment>
        <UpVote onClick={voteUp}>
          <Vote />
          <p>{upVote}</p>
        </UpVote>
        <DownVote onClick={voteDown}>
          <Vote />
          <p>{downVote}</p>
        </DownVote>
      </DivStyled>
    </CommentDivStyled>
  );
};
export default Comments;
