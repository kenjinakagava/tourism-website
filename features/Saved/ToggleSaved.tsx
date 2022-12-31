interface ToggleSavedProps {
  card: { title: string; paragraph: string; image: string };
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSaved = ({ card, setIsActive, setIsSaved }: ToggleSavedProps) => {
  const isSaved = localStorage.getItem(card.title);
  if (isSaved) {
    setIsActive(false);
    setIsSaved(false);
    localStorage.removeItem(card.title);
  } else {
    setIsActive(true);
    setIsSaved(true);
    localStorage.setItem(card.title, JSON.stringify({ ...card }));
  }
};

export default ToggleSaved;
