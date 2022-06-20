import Layout from "./components/Layout";
import { varietyQuestion } from "./mocks/variedades";
import Onboarding from "./pages/onboarding";
import { useState } from "react";
import Home from "./pages/home";
import Modal from "./components/modal";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [page, setPage] = useState("onboarding");
  const [step, setStep] = useState(0);
  const [errorModal, setErrorModal] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);

  const handlePage = () => {
    switch (page) {
      case "onboarding":
        return (
          <Onboarding
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
            setPage={setPage}
            setErrorModal={setErrorModal}
          />
        );
      case "home":
        return (
          <Home
            selectedTheme={selectedTheme}
            step={step}
            setErrorModal={setErrorModal}
            setPage={setPage}
            setSucessModal={setSucessModal}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {errorModal && (
        <Modal
          error
          setPage={setPage}
          title="Resposta errada"
          buttonText="Início"
        />
      )}
      {sucessModal && (
        <Modal
          setStep={setStep}
          step={step}
          setSucessModal={setSucessModal}
          title="Resposta correta!"
          buttonText="Próxima pergunta"
          setPage={setPage}
        />
      )}
      <Layout>{handlePage()}</Layout>
      {/* <div>
        <h3>{varietyQuestion?.[step]?.question}</h3>
        {varietyQuestion?.[step]?.options.map((item) => (
          <button onClick={() => responseQuestion(item)}>{item}</button>
        ))}
      </div> */}
    </div>
  );
}

export default App;
