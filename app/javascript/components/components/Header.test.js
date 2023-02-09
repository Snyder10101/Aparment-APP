import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("has a clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const text = screen.getByText(/Home/i)
    expect(text).toBeInTheDocument()
  })
})
