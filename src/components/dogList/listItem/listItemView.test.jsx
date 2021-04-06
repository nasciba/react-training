import { shallow } from "enzyme";
import Avatar from "@material-ui/core/Avatar";
import DogListItemView from "./listItemView";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { capitalize } from "lodash";

describe("DogListItemView", () => {
  it("should render correctly", () => {
    const selectedBreedMock = {};
    const dog = {
      name: "Akita",
      image: "imageUrl",
      scolds: 0
    };
    const onSelectDogMock = jest.fn();
    const wrapper = shallow(
      <DogListItemView
        name={dog.name}
        image={dog.image}
        onSelectDog={onSelectDogMock}
        selectedBreed={{}}
        scolds={dog.scolds}
      />
    );
    expect(
      wrapper.matchesElement(
        <ListItem
          button
          selected={selectedBreedMock?.name === dog.name}
          onClick={onSelectDogMock(dog.name)}
        >
          <ListItemAvatar>
            <Avatar alt="Dog Image" src={dog.image} />
          </ListItemAvatar>
          <ListItemText primary={capitalize(dog.name)} secondary={dog.scolds}/>
        </ListItem>
      )
    ).toBe(true);
  });
  it("should handle the onClick event", () => {
    const onSelectDogMock = jest.fn();
    const selectedBreedMock = { name: "", image: "" };
    const dog = {
      name: "Affenpinscher",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Borismindre.jpg/170px-Borismindre.jpg",
    };
    const wrapper = shallow(
      <DogListItemView
        name={dog.name}
        image={dog.image}
        selectedBreed={selectedBreedMock.name}
        onSelectDog={onSelectDogMock}
      />
    );
    wrapper.find(ListItem).simulate("click");
    expect(onSelectDogMock).toHaveBeenCalledWith(dog.name);
  });
});
