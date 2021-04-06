import { shallow } from "enzyme";
import DogDetailsView from "./DogDetailsView";
import DogDetails from "./DogDetails";

describe("DogDetails", () => {
  it("should render the view with the right props", () => {
    const onScoldCounter = jest.fn();
    const wrapper = shallow(
      <DogDetails
        name="Adolfo"
        image="https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg"
        onScoldCounter={onScoldCounter}
      />
    );
    expect(wrapper.type()).toBe(DogDetailsView);
    expect(wrapper.props()).toMatchObject({
      name: "Adolfo",
      image: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",
    });
  });

  /*  it("should update the counter to a new value", () => {
    const onScoldCounter = jest.fn()

    const wrapper = shallow(<DogDetails image={""} name={""} />);
    wrapper.invoke("onCount")();

    expect(wrapper.prop("scolds")).toBe(1);
  }); */

  it("should show an alert when the Bark button is clicked", () => {
    const onScoldCounter = jest.fn();

    jest.spyOn(window, "alert").mockImplementation(() => {});
    const wrapper = shallow(
      <DogDetails image={""} name={""} onScoldCounter={onScoldCounter} />
    );
    wrapper.invoke("onBark")();
    expect(window.alert).toBeCalled();
  });
});
