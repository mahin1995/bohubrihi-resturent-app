/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";
const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    val
  );

const mapDispatchToPrrops = (dispatch) => {
  return {
    restFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
  };
};

class Contact extends Component {
  handleSubmit = (values) => {
    this.props.restFeedbackForm();
    console.log(values);

    // console.dir((event.target[0].value = ""));
  };
  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{ paddingLeft: "20px", textAlign: "left" }}
        >
          <div className="col-12">
            <h3>Send us your Feedback</h3>
            <div className="col-12 col-md-7">
              <Form
                model="feedback"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <FormGroup row>
                  <Label htmlFor="firstname" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".firstname"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{ required }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: "requerd",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastname" md={2}>
                    last Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".lastname"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{ required }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required: "requerd",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="telnum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".telnum"
                      name="telnum"
                      placeholder="Tel. Number"
                      className="form-control"
                      validators={{ required, isNumber }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: "requerd",
                        isNumber: "Not a number",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                      validators={{ required, validEmail }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "requerd",
                        validEmail: " Not a vailed mail",
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Control.checkbox
                          model=".agree"
                          className="form-check-input"
                          name="agree"
                        />
                        <strong>May we Contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col md={{ size: 3, offset: 1 }}>
                    <FormGroup>
                      <Control.select
                        className="form-control"
                        model=".contactType"
                        name="contactType"
                      >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Control.select>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="message" md={2}>
                    Your Feedback
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".message"
                      row="12"
                      name="message"
                      className="form-control"
                      validators={{ required }}
                    ></Control.textarea>
                    <Errors
                      className="text-danger"
                      model=".message"
                      show="touched"
                      messages={{
                        required: "requerd",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToPrrops)(Contact);
