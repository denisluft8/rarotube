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
  favAdd?: any
  favRemove?: any
  favArr?: any
  image: string
  id?: string
  name: string
  onClickFav?: any
}

const VideoCard = ({
  date,
  favAdd,
  favRemove,
  favArr,
  id,
  image,
  name
}: VideoCardProps) => {
  return (
    <VideoCardStyled
      date={date}
      image={image}
      name={name}
      id={id}
      favArr={favArr}
      favAdd={favAdd}
      favRemove={favRemove}
    >
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
        <FavoriteIcon
          favArr={favArr}
          favId={id}
          favAdd={favAdd}
          favRemove={favRemove}
        />
      </FooterStyled>
    </VideoCardStyled>
  )
}

export default VideoCard
