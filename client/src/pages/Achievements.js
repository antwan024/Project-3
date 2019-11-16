import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Achievement extends Component {
  state = {
    achievements: [],
    type: "",
    achivementPoints: 0,
    summary: "",
    date: "",
    earned: ""
  };

  componentDidMount() {
    this.loadAchievements();
  }

  loadAchievements = () => {
    API.getAchievements()
      .then(res =>
        this.setState({ achievements: res.data, type: "", achievementPoints: 0, summary: "", date: "", earned: "" })
      )
      .catch(err => console.log(err));
  };

  deleteAchievement = id => {
    API.deleteAchievement(id)
      .then(res => this.loadAchievements())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Achievements</h1>
            </Jumbotron>
            {this.state.achievements.length ? (
              <List>
                {this.state.achievements.map(achievement => (
                  <ListItem key={achievement._id}>
                    <Link to={"/achievements/" + achievement._id}>
                      <strong>
                        Need: {achievement.achievementPoints} {achievement.type}
                        Achievement: {achievement.summary}
                      </strong>
                    </Link>
                    <h5 onClick={() => this.deleteAchievement(achievement._id)}  REDEEM />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Achievement;
