import React, { useState } from "react";
import Modal from "../../components/modal";
import { varietyQuestion } from "../../mocks/variedades";
import { geographyQuestion } from "../../mocks/geography";

import { Container, BoxQuestion, BoxOptions, ButtonOptions } from "./style";

export default function Home({ step, setSucessModal, setErrorModal, setPage }) {
  const [selectedOption, setSelectedOption] = useState("");

  const responseQuestion = (item) => {
    if (item === varietyQuestion?.[step]?.correct) {
      setSelectedOption(item);
      setSucessModal(true);
    } else {
      setErrorModal(true);
    }
  };

  const theme = localStorage.getItem("theme");

  console.log("theme", theme);

  const questionTheme = () => {
    switch (theme) {
      case "Geografia":
        return geographyQuestion;
      case "Variedades":
        return varietyQuestion;
      default:
        return null;
    }
  };

  return (
    <Container>
      {step >= questionTheme().length ? (
        <Modal
          setPage={setPage}
          finished
          title="Parabéns você finalizou o quiz"
          buttonText="Início"
        />
      ) : (
        <>
          <BoxQuestion>
            <h3>{questionTheme()?.[step]?.question}</h3>
          </BoxQuestion>
          <BoxOptions>
            {questionTheme()?.[step]?.options.map((item) => (
              <ButtonOptions
                onClick={() => responseQuestion(item)}
                isCorrect={selectedOption === questionTheme()?.[step]?.correct}
              >
                {item}
              </ButtonOptions>
            ))}
          </BoxOptions>
        </>
      )}
    </Container>
  );
}
