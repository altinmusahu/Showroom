import Home from "./page/Home";
import Section from "./page/Section";

import Slider from "./components/Slider";
import VideoPlayer from "./components/VideoPlayer";
import MapContent from "./components/MapContent";

function App() {
  return (
    <>
    <main>
        <Home />
        <Section />
        <Slider />
        <VideoPlayer videoId="4oi-TgKBvd4"/>
        <MapContent />
    </main>
    </>
  );
}

export default App;
