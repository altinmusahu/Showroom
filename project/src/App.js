import Home from "./page/Home";
import Section from "./page/Section";

import Slider from "./components/Slider";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
                    {/* <audio autoPlay controls>
                    <source src={sound} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio> */}

    <main>
        <Home />
        <Section />
        <Slider />
        <VideoPlayer videoId="4oi-TgKBvd4"/>
    </main>
    </>
  );
}

export default App;
