import React, { useEffect } from "react";

import { themes } from "../../mocks/themesQuestion";

import { Container, Title, Description, ButtonOption } from "./style";

export default function Onboarding({
  setSelectedTheme,
  selectedTheme,
  setPage,
  setErrorModal,
}) {
  useEffect(() => {
    setErrorModal(false);
    return () => {
      setSelectedTheme("");
    };
  }, []);

  const handleTheme = (item) => {
    setSelectedTheme(item);
    setPage("home");
  };

  return (
    <Container>
      <Title>Tema das perguntas</Title>
      <Description>Clique no tema que deseja</Description>
      {themes.map((item) => (
        <ButtonOption
          onClick={() => handleTheme(item)}
          selectedTheme={item.name === selectedTheme.name}
        >
          <img src={item?.icon} alt={item.name} />
          <p>{item.name}</p>
        </ButtonOption>
      ))}
    </Container>
  );
}
