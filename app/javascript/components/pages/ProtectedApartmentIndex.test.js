import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

describe("<ProtectedApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ProtectedApartmentIndex />
      </BrowserRouter>, 
      div
    )
  })
  it("has my listings", () => {
    render(
        <BrowserRouter>
            <ProtectedApartmentIndex />
        </BrowserRouter>,
    )
    screen.logTestingPlaygroundURL()
    const listingsHeading = screen.getByRole('heading', {
        name: /my listings:/i
      })
      expect(listingsHeading).toBeInTheDocument()
  })
})