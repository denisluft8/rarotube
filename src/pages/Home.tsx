import { Button } from "../components/";
import { GlobalStyle } from "../styles/theme";

const Home = () => (
  <>
    <Button text="Button" onClick={() => console.log("clicked")} disabled={false} />
    <Button text="Disabled Button" onClick={() => console.log("clicked")} disabled={true}/>
  </>
);

export default Home;
