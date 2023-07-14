import {Button} from "..";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
describe("Button test", () => {
  let getButton = () => {
    return screen.getByRole<HTMLButtonElement>("button");
  };
  test("create", () => {
    render(() => <Button type="primary">TEST</Button>);
    let button = getButton();

    expect(button.className.includes("el-button--primary")).toBeTruthy();
    expect(button.textContent).toBe("TEST");
  });
  test("icon", () => {
    render(() => <Button icon="el-icon-search">TEST</Button>);
    let button = getButton();
    let icon = button.querySelector(".el-icon-search");

    expect(icon).toBeDefined();
    expect(icon?.tagName).toBe("I");
  });
  test("nativeType", () => {
    render(() => <Button nativeType="submit">TEST</Button>);
    let button = getButton();

    expect(button.type).toBe("submit");
  });

  test("loading", () => {
    render(() => <Button loading>TEST</Button>);
    let button = getButton();
    let icon = button.querySelector(".el-icon-loading");

    expect(icon).toBeDefined();
    expect(button.className.includes("is-loading")).toBeTruthy();
  });
  test("disabled", () => {
    render(() => <Button disabled={true}>TEST</Button>);
    let button = getButton();
    expect(button.className.includes("is-disabled")).toBeTruthy();
  });
  test("size", () => {
    render(() => <Button size="medium">TEST</Button>);
    let button = getButton();

    expect(button.className.includes("el-button--medium")).toBeTruthy();
  });

  test("plain", () => {
    render(() => <Button plain>TEST</Button>);
    let button = getButton();

    expect(button.className.includes("is-plain")).toBeTruthy();
  });

  test("round", () => {
    render(() => <Button round>TEST</Button>);
    let button = getButton();

    expect(button.className.includes("is-round")).toBeTruthy();
  });

  test("circle", () => {
    render(() => <Button circle>TEST</Button>);
    let button = getButton();

    expect(button.className.includes("is-circle")).toBeTruthy();
  });

  test("click", () => {
    let handleClick = vi.fn(() => 0);
    render(() => <Button onClick={handleClick}>TEST</Button>);
    let button = getButton();
    button.click();

    expect(handleClick).toBeCalledTimes(1);
  });

  test("click inside", () => {
    let handleClick = vi.fn(() => 0);
    render(() => (
      <Button onClick={handleClick}>
        <span class="inner-slot"></span>
      </Button>
    ));
    let button = getButton();
    let span = button.querySelector<HTMLSpanElement>(".inner-slot");
    span?.click();

    expect(handleClick).toBeCalledTimes(1);
  });

  test("loading implies disabled", () => {
    let handleClick = vi.fn(() => 0);
    render(() => (
      <Button onClick={handleClick} loading>
        <span class="inner-slot"></span>
      </Button>
    ));
    let button = getButton();
    let span = button.querySelector<HTMLSpanElement>(".inner-slot");
    span?.click();

    expect(handleClick).toBeCalledTimes(0);
  });
});
