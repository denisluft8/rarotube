import { Link } from 'react-router-dom'
import FavoriteIcon from '../Icons/FavoriteIcon'
import {
  DateStyled,
  FooterStyled,
  TextContainerStyled,
  TitleStyled,
  VideoCardStyled
} from './VideoCardStyled'

export interface VideoCardProps {
  date?: string
  filled?: boolean
  image: string
  id?: string
  name: string
  onClickFav?: any
}

const VideoCard = ({
  date,
  filled,
  id,
  image,
  name,
  onClickFav
}: VideoCardProps) => {
  return (
    <VideoCardStyled date={date} image={image} name={name} id={id}>
      <FooterStyled>
        <Link to={`/video/${id}`}>
          <TextContainerStyled>
            <TitleStyled>{name}</TitleStyled>
            {date ? (
              <DateStyled>{new Date(date).toLocaleDateString()}</DateStyled>
            ) : (
              <></>
            )}
          </TextContainerStyled>
        </Link>
        <button onClick={onClickFav}>
          <FavoriteIcon filled={filled} />
        </button>
      </FooterStyled>
    </VideoCardStyled>
  )
}

export default VideoCard
