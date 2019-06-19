import greet from "./greeter"

jest.spyOn(global.console, "log")

describe("greeter", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("expects a greeting to be called", () => {
    greet()

    expect(console.log).toHaveBeenCalledWith("Hello, World!")
  })
})
