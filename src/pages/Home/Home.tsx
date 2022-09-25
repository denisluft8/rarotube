import apiAuth from '../../Services/apiAuth'
import { SkeletonCard, VideoCard } from '../../components'
import { useEffect, useState } from 'react'
import {
  AllVideosStyled,
  BannerStyled,
  FavoritesStyled,
  FavVideosStyled,
  HeaderStyled,
  SortStyled,
  ThumbnailsStyled
} from './HomeStyled'
import api from '../../Services/api'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])
  const [sort, setSort] = useState('nome')
  const [fav, setFav] = useState([])

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      loadVideos(sort)
      setLoading(false)
      favVideos()
    }, 1500)
    return () => clearTimeout(timing)
  }, [])

  const loadVideos = (sort: string) => {
    api.get(`videos?orderBy=${sort}`).then(({ data }) => {
      setVideos(data)
    })
  }

  const favVideos = () => {
    apiAuth.get('videos/favoritos').then(({ data }) => {
      setFav(data)
      console.log(data)
    })
  }

  const removeFavVideo = (videoId: string) => {
    apiAuth.delete(`videos/${videoId}/favoritos`).then(({ data }) => {
      console.log(data)
    })
  }

  const addFavVideos = (videoID: string) => {
    apiAuth
      .post(`videos/${videoID}/favoritos`)
      .then(({ data }) => {})
      .catch(error => console.log(error))
  }

  return (
    <>
      <BannerStyled>
        <h3>Banner aqui</h3>
      </BannerStyled>
      <FavoritesStyled>
        <h4>Favoritos</h4>
        <FavVideosStyled>
          {fav &&
            fav.map((video: any) => (
              <VideoCard
                date={video.dataPublicacao}
                id={video.id}
                key={video.id}
                image={video.thumbUrl}
                name={video.nome}
                onClickFav={() => removeFavVideo(video.id)}
              />
            ))}
        </FavVideosStyled>
      </FavoritesStyled>
      <AllVideosStyled>
        <HeaderStyled>
          <h4>Todos os vídeos</h4>
          <SortStyled name="sorting" onChange={e => loadVideos(e.target.value)}>
            <option value="nome">Título</option>
            <option value="dataPublicacao">Data</option>
          </SortStyled>
        </HeaderStyled>
        <ThumbnailsStyled>
          {loading && <SkeletonCard />}
          {!loading &&
            videos.length > 0 &&
            videos.map((video: any) => (
              <VideoCard
                date={video.dataPublicacao}
                image={video.thumbUrl}
                id={video.id}
                key={video.id}
                name={video.nome}
                onClickFav={() => addFavVideos(video.id)}
              />
            ))}
        </ThumbnailsStyled>
      </AllVideosStyled>
    </>
  )
}

export default Home
