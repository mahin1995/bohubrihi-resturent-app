/* eslint-disable array-callback-return */
import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreator";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  console.log("mapStatetoProps: ", state);
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};
const mapDispatchToPrrops = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};
class Menu extends Component {
  state = {
    selectDish: null,
    modalOpen: false,
  };
  ondishSelect = (dish) => {
    this.setState({ selectDish: dish, modalOpen: !this.state.modalOpen });
    // this.toggleModal()
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <MenuItem
            dish={item}
            key={item.id}
            DishSelect={() => this.ondishSelect(item)}
          />
        );
      });
      let dishDetail = null;
      if (this.state.selectDish != null) {
        const comments = this.props.comments.filter((comment) => {
          return comment.dishId === this.state.selectDish.id;
        });
        dishDetail = (
          <DishDetail
            dish={this.state.selectDish}
            comments={comments}
            addComment={this.props.addComment}
          />
        );
      }
      return (
        <div className="container">
          <div className="row">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetail}</ModalBody>
              <ModalFooter>
                <Button className="secondary" onClick={this.toggleModal}>
                  close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPrrops)(Menu);
