import { render, screen } from "@testing-library/react";
import TextComponent from "./Text";

test("should contain h3", () => {
    const { container } = render(<TextComponent/>);

    const h3Elements = container.querySelectorAll('h3')

    expect(h3Elements.length === 1).toBeTruthy();
})
