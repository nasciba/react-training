import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";
import ButtonView from "./ButtonView";
import buttonStyle from "./Button.styles";

jest.mock("./Button.styles");

describe("ButtonView", () => {
  beforeEach(() => {
    buttonStyle.mockReturnValue({
      root: "root",
    });
  });

  it("should render the view with the right props", () => {
    const functionMock = jest.fn();
    const children = "Clique aqui";
    const wrapper = shallow(
      <ButtonView type="button" onClick={functionMock}>
        {children}
      </ButtonView>
    );
    expect(
      wrapper.matchesElement(
        <Button
          size="small"
          color="primary"
          type="button"
          className="root"
          onClick={functionMock}
        >
          {children}
        </Button>
      )
    ).toBe(true);
  });
  it("should handle the onClick event", () => {
    const functionMock = jest.fn();

    const wrapper = shallow(
      <ButtonView type="button" onClick={functionMock}>
        Clique aqui!
      </ButtonView>
    );
    wrapper.find(Button).simulate("click");
    expect(functionMock).toHaveBeenCalled();
  });
});
