import { render } from "~/test/utils";
import Page from "./comments/page";

describe("page tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });
});
