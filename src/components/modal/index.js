import { Overlay, ModalBox, Title, Button } from "./style";

export default function Modal({
  setPage,
  setStep,
  step,
  error,
  finished,
  setSucessModal,
  title,
  buttonText,
}) {
  const action = () => {
    if (error || finished) {
      setPage("onboarding");
    } else {
      setStep(step + 1);
      setSucessModal(false);
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>{title}</Title>
        <Button onClick={() => action()}>{buttonText}</Button>
      </ModalBox>
    </Overlay>
  );
}
