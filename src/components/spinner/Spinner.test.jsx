import { shallow } from "enzyme";
import Spinner from "./Spinner";
import SpinnerView from "./SpinnerView";

describe("Spinner", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.type()).toBe(SpinnerView);
  });
});
