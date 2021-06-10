import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
      {" "}
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: "0.5" }}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle
              style={{
                cursor: "pointer",
                fontSize: "15px",
                color: "black",
                fontWeight: "bolder",
              }}
              // onClick={() => props.DishSelect(props.dish)}
              onClick={props.DishSelect}
            >
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
