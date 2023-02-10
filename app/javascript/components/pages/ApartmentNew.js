import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
Form, 
Row, 
Col, 
FormGroup,
Label,
Input, 
Button
} from "reactstrap"
const ApartmentNew = ({createApartment}) => {
const navigate = useNavigate()
const [newApartment, setNewApartment] = useState({
  Street: "",
  City: "",
  State: "",
  Price: "",
  Bedrooms: "",
  Bathrooms: "",
  Pets: "",
  ImageURL: "",
  Manager: "",

  
})
const handleChange = (e) => {
  setNewApartment({...newApartment, [e.target.name]: e.target.value})
}
const handleSubmit = () => {
  createApartment(newApartment)
  navigate("/apartmentindex")
}
  return (
    <>
      <h3>New Listing</h3>
      <Form>
      <Row>
        <Col md={5}>
        <FormGroup>
          <Label for="Street">
          Street
          </Label>
          <Input
          id="Street"
          name="Street"
          type="text"
          onChange={handleChange}
          value={newApartment.Street}
          />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="City">
          City
        </Label>
        <Input
          id="City"
          name="City"
          type="text"
          onChange={handleChange}
          value={newApartment.City}
        />
      </FormGroup>
    </Col>
  
  <Col md={2}>
    <FormGroup>
      <Label for="State">
      State
      </Label>
      <Input
      id="State"
      name="State"
      text="text"
      onChange={handleChange}
      value={newApartment.State}
    />
    </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="Price">
          Price
        </Label>
        <Input
          id="Price"
          name="Price"
          text="text"
          onChange={handleChange}
          value={newApartment.Price}
        />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="Bedrooms">
          Bedrooms
        </Label>
        <Input
          id="Bedrooms"
          name="Bedrooms"
          text="integer"
          onChange={handleChange}
          value={newApartment.Bedrooms}
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="Bathrooms">
          Bathrooms
        </Label>
        <Input
          id="Bathrooms"
          name="Bathrooms"
          onChange={handleChange}
          value={newApartment.Bathrooms}
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={5}>
      <FormGroup>
        <Label for="Pets">
          Pets
        </Label>
        <Input
          id="Pets"
          name="Pets"
          onChange={handleChange}
          value={newApartment.Pets}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="ImageURL">
        Image URL
        </Label>
        <Input
          id="ImageURL"
          name="ImageURL"
          onChange={handleChange}
          value={newApartment.ImageURL}
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="Manager">
          Manager
        </Label>
        <Input
          id="Manager"
          name="Manager"
          text="text"
          onChange={handleChange}
          value={newApartment.Manager}
        />
      </FormGroup>
    </Col>
    <Col md={5}>
      <FormGroup>
        <Label for="Email">
          Email
        </Label>
        <Input
          id="Email"
          name="Email"
          text="text"
          onChange={handleChange}
          value={newApartment.Email}
        />
      </FormGroup>
    </Col>
  </Row>
  <Button onClick={handleSubmit}>
    Create
  </Button>
</Form>
    </>
  )
}

export default ApartmentNew