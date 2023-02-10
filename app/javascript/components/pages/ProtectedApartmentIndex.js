import React from "react";
import {
    Card,
    CardText,
    CardBody,
    Button,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";

  const ProtectedApartmentIndex = ({ apartments, current_user }) => {
    const userApartments = apartments?.find((apartment) => {
        return apartment.user_id === current_user.id
    })
    return (
      <main>
        <h1>My Listings</h1>
        {apartments?.map((apartment, index) => {
          return (
            <Card color="light" style={{ width: "18rem"}} key={index}>
              <img alt="Apartment Pic's" src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">${apartment.price}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Bed {apartment.bedrooms} Bath {apartment.bathrooms}
                </CardSubtitle>
                <CardText>
                  {apartment.state} {apartment.city} {apartment.street}
                </CardText>
                <Button>Rent</Button>
              </CardBody>
            </Card>
          );
        })}
      </main>
    );
  };
  
  export default ProtectedApartmentIndex;