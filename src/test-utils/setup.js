import "@testing-library/jest-dom";
import { expect, afterEach, describe, it, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../test-utils/test-utils";

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

//define global functions for use in all tests
globalThis.describe = describe;
globalThis.it = it;
globalThis.expect = expect;
globalThis.screen = screen;
globalThis.renderWithRouter = renderWithRouter;
globalThis.beforeEach = beforeEach;
