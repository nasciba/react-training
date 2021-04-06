import React from "react";
import { DogBreed } from "../../../types/DogBreed.type";
import List from "@material-ui/core/List";
import DogListItem from "../listItem/listItem";
import { dogListStyle } from "./DogListView.styles";

interface Props {
  dogBreedList: DogBreed[];
  selectedBreed: DogBreed;
  onSelectDog: (dogsName: string) => void;
}

function DogListView({ selectedBreed, dogBreedList, onSelectDog }: Props) {
  const classes = dogListStyle();
  return (
    <List className={classes.root}>
      {dogBreedList.map((item) => {
        return (
          <DogListItem
            key={item.name}
            name={item.name}
            scolds={item.scolds}
            image={item.image}
            selectedBreed={selectedBreed}
            onSelectDog={onSelectDog}
          />
        );
      })}
    </List>
  );
}

export default DogListView;
