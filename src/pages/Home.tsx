import { Button } from '../components/'

const Home = () => (
  <>
    <Button text="Typescript" onClick={() => console.log('clicked')} />
    <Button text="Typescripts" onClick={() => alert('clicked')} color="red" />
  </>
)

export default Home
