import { useEffect, useState, useContext } from 'react'
import apiAuth from '../../Services/apiAuth'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { SendIcon } from '../../components/Icons'
import {
  CommentsDiv,
  CommentsFooter,
  CommentsList,
  ContainerStyled,
  RecomendedStyled
} from './VideoPageStyled'
import {
  Button,
  Comments,
  Input,
  SkeletonCard,
  VideoCard
} from '../../components'
import { useParams } from 'react-router-dom'

const VideoPage = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [recVideos, setRecVideos] = useState([])
  const { videoId } = useParams()
  const [video, setVideo] = useState<VideoType>({
    id: '',
    nome: '',
    url: '',
    thumbUrl: '',
    descricao: '',
    createdAt: '',
    duracao: '',
    dataPublicacao: '',
    topico: '',
    tags: [''],
    turma: null
  })

  type VideoType = {
    id: string
    nome: string
    url: string
    thumbUrl: string
    descricao: string
    createdAt: string
    duracao: string
    dataPublicacao: string
    topico: string
    tags: Array<string>
    turma: null
  }

  const loadRecVideos = () => {
    apiAuth.get(`videos/${videoId}`).then(({ data }) => {
      setVideo(data)
    })
    apiAuth.get(`videos/${videoId}/recomendacoes`).then(({ data }) => {
      setRecVideos(data)
    })
    apiAuth.get(`videos/${videoId}/comentarios`).then(({ data }) => {
      setComments(data)
    })
  }

  const sendComment = (e: any) => {
    e.preventDefault()
    apiAuth
      .post(`videos/${videoId}/comentarios`, message)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      loadRecVideos()
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timing)
  }, [])

  console.log(video)
  console.log(videoId)
  return (
    <ContainerStyled>
      <RecomendedStyled>
        {loading && <SkeletonCard />}
        {!loading &&
          recVideos.map((video: any) => (
            <VideoCard
              key={video.id}
              image={video.thumbUrl}
              name={video.nome}
            />
          ))}
      </RecomendedStyled>

      <VideoPlayer
        key={video.id}
        date={new Date(video.dataPublicacao).toLocaleDateString()}
        description={video.descricao}
        tags={video.tags}
        title={video.nome}
        topic={video.topico}
        video={video.url}
      />

      <CommentsDiv>
        <CommentsList>
          {comments &&
            comments.map((comment: any) => (
              <Comments
                key={comment.id}
                comment={comment.texto}
                name={comment.aluno.nome}
                date={new Date(comment.createdAt).toLocaleDateString()}
                downVote={comment.downVotes}
                upVote={comment.upVotes}
                profile={comment.aluno.foto}
              />
            ))}
        </CommentsList>
        <CommentsFooter>
          <Input
            height="40px"
            onChange={(val: string) => setMessage(val)}
            placeholder="Escreva um comentário!"
            width="319px"
          />
          <Button onClick={(e: any) => sendComment(e)}>
            <SendIcon />
          </Button>
        </CommentsFooter>
      </CommentsDiv>
    </ContainerStyled>
  )
}

export default VideoPage
