import React, { useCallback } from "react";
import DogDetailsView from "./DogDetailsView";

interface Props {
  image: string;
  name: string;
  onScoldCounter: () => void;
}

const DogDetails = ({ image, name, onScoldCounter }: Props) => {
  const onBark = useCallback(() => {
    alert("Woof woof woof!");
  }, []);

  return (
    <DogDetailsView
      image={image}
      name={name}
      onScoldCounter={onScoldCounter}
      onBark={onBark}
    />
  );
};

export default DogDetails;
