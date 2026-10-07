import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index, OFFER_URL } from "@/routes/index";

describe("Reward call to action", () => {
  it("sends both reward buttons to the partner offer link", () => {
    render(<Index />);

    const buttons = screen.getAllByRole("link", {
      name: /explore your reward|let’s take a look/i,
    });

    expect(buttons).toHaveLength(2);
    for (const button of buttons) {
      expect(button).toHaveAttribute("href", OFFER_URL);
      expect(button).toHaveAttribute("target", "_blank");
    }
  });
});
