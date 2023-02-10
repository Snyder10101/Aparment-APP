import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"

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
    // screen.logTestingPlaygroundURL()
    // const listingsHeading = screen.getByRole('heading', {
    //     name: /my listings:/i
    //   })
      expect(screen.getByText(/listings/i)).toBeInTheDocument()
  })
})