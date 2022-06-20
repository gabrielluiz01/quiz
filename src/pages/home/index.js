import React, { useState } from "react";
import Modal from "../../components/modal";
import { varietyQuestion } from "../../mocks/variedades";

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

  return (
    <Container>
      {step >= varietyQuestion.length ? (
        <Modal
          setPage={setPage}
          finished
          title="Parabéns você finalizou o quiz"
          buttonText="Início"
        />
      ) : (
        <>
          <BoxQuestion>
            <h3>{varietyQuestion?.[step]?.question}</h3>
          </BoxQuestion>
          <BoxOptions>
            {varietyQuestion?.[step]?.options.map((item) => (
              <ButtonOptions
                onClick={() => responseQuestion(item)}
                isCorrect={selectedOption === varietyQuestion?.[step]?.correct}
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
