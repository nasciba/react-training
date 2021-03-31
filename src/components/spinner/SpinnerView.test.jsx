import { shallow } from "enzyme";
import SpinnerView from "./SpinnerView";
import CircularProgress from "@material-ui/core/CircularProgress";
import { spinnerStyle } from "./SpinnerView.styles";

jest.mock("./SpinnerView.styles.ts");

describe("Spinner", () => {
  
  beforeEach(() => {
    (spinnerStyle).mockReturnValue({
      root: "root",
    });
  });

  it("should render correctly", () => {
    const wrapper = shallow(<SpinnerView />);
    expect(wrapper
      .matchesElement(
        <div className="root">
          <CircularProgress />
        </div>
      ))
      .toBe(true);
  });
});
