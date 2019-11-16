import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import {Dropdown, List, ListItem} from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";

class Events extends Component {
  state = {
    events: [],
    eventPoints: 0,
    summary: "",
    date: "",
    voucherCode: ""
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, eventPoints: 0, summary: "", date: "", voucherCode: "" })
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.summary) {
      API.saveEvent({
        summary: this.state.summary,
        date: this.state.date,
        voucherCode: this.state.voucherCode,
        eventPoints: this.state.eventPoints
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >Submit Book</FormBtn>

<List>
                {this.state.events.map(event => (
                  <ListItem key={event._id}>
                    <Link to={"/events/" + event._id}>
                      <strong>
                        Need: {event.eventPoints} {event.type}
                        Achievement: {event.summary}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                  </ListItem>
                ))}
              </List>
              
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Events;
