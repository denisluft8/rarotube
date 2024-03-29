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
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timing)
  }, [])

  useEffect(() => {
    loadVideos(sort)
    favVideos()
  }, [fav])

  const loadVideos = (sort: string) => {
    api.get(`videos?orderBy=${sort}`).then(({ data }) => {
      setVideos(data)
    })
  }

  const favVideos = () => {
    apiAuth.get('videos/favoritos').then(({ data }) => {
      setFav(data)
    })
  }

  const removeFavVideo = (videoId: string) => {
    apiAuth.delete(`videos/${videoId}/favoritos`).then(({ data }) => {})
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
      {fav.length !== 0 ? (
        <FavoritesStyled>
          <h4>Favoritos</h4>
          <FavVideosStyled>
            {fav &&
              fav.map((video: any) => (
                <VideoCard
                  date={video.dataPublicacao}
                  favArr={fav}
                  id={video.id}
                  key={video.id}
                  image={video.thumbUrl}
                  name={video.nome}
                  favAdd={() => addFavVideos(video.id)}
                  favRemove={() => removeFavVideo(video.id)}
                />
              ))}
          </FavVideosStyled>
        </FavoritesStyled>
      ) : (
        <></>
      )}
      <AllVideosStyled>
        <HeaderStyled>
          <h4>Todos os vídeos</h4>
          <SortStyled name="sorting" onChange={e => loadVideos(e.target.value)}>
            <option value="nome">Título</option>
            <option value="dataPublicacao">Data</option>
          </SortStyled>
        </HeaderStyled>
        <ThumbnailsStyled>
          {loading &&
            videos.map((video: any) => <SkeletonCard key={video.id} />)}
          {!loading &&
            videos &&
            videos.map((video: any) => (
              <VideoCard
                date={video.dataPublicacao}
                favArr={fav}
                image={video.thumbUrl}
                id={video.id}
                key={video.id}
                name={video.nome}
                favAdd={() => addFavVideos(video.id)}
                favRemove={() => removeFavVideo(video.id)}
              />
            ))}
        </ThumbnailsStyled>
      </AllVideosStyled>
    </>
  )
}

export default Home
