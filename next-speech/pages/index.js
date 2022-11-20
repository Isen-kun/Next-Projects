import SpeechRecognition from "../components/SpeechRecognition";
import SpeechSynthesis from "../components/SpeechSynthesis";

const Landing = () => {
  return (
    <>
      <h3>react-speech-kit</h3>
      <SpeechSynthesis />
      <hr />
      <SpeechRecognition />
      <hr />
    </>
  );
};

export default Landing;
