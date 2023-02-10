import React from "react";
import {
  Card,
  CardText,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ApartmentIndex = ({ apartments }) => {
  return (
    <main>
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
                {apartment.state},
                
                 {apartment.city}
                  {apartment.street}
              </CardText>
              <Button>Learn More</Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default ApartmentIndex;
