import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import NotFound from "./NotFound"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<NotFound />, div)
  })
  it("displays a NotFound page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const text = screen.getByText(/NotFound/i)
    expect(text).toBeInTheDocument()
  })
})
