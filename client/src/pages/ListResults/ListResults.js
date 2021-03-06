import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap';
import { BusinessCard, BusinessNameCard, DealCard } from "../../components/Business";
import API from "../../utils/API";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import "./ListResults.css";

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      currentDeals: [],
      deals: [],
      name: "",
      dayValue: "",
      currentDay: null
    };
    this.filterDay = this.filterDay.bind(this);
  }

  // Load all businesses from the Business collection.
  componentDidMount() {
    let today = new Date().getDay();
    this.setState({
      currentDay: today,
      dayValue: today.toString()
    })
    this.loadAllDeals()
  }

  loadAllDeals = () => {
    API.getBusinesses()
      .then(res => {
        this.setState({ businesses: res.data });
        // console.log(res.data)
        // console.log(this.state.businesses)
        const businesses = this.state.businesses;
        // console.log(businesses)
        const dayValue = this.state.dayValue;
        console.log(this.dayValue);
        businesses.forEach((business) => {
          let hasDeal = false;
          business.deals.forEach((deal) => {
            if (dayValue == deal.day) {
              hasDeal = true;
            }
          });
          business.isShown = hasDeal;
        });
      })
      .catch(err => console.log(err))
  }

  handleClickEvent = () => {
    if (this.props.loggedIn) {
      this.props.history.push("/addbusiness");
    } else {
      this.props.history.push("/login");
    }
  }

  filterDay(event) {
    const dayButton = event.target;
    const dayValue = dayButton.getAttribute('data-day-value');
    this.setState({ dayValue })
    // console.log(dayValue);

    const businesses = this.props.businesses;
    // console.log(businesses);
    businesses.forEach((business) => {
      let hasDeal = false;
      business.deals.forEach((deal) => {
        // console.log(business);
        // console.log(deal);
        if (dayValue == deal.day) {
          hasDeal = true;
        }
      });
      business.isShown = hasDeal;
      console.log(hasDeal)
    });
    const deals = businesses.deals;
    this.setState({ businesses })
    this.setState({ deals })
    console.log(businesses);
  }

  render() {
    return (
      <div className="mapHeight background">
        <div className="buttons-div">
          <div className="buttons-display">
            <Button
              color="#2296a2ff"
              className="btn filter-btn shadow-sm"
              name="dayButton"
              onClick={this.filterDay}
              data-day-value={0}
            >Sun</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={1}
            >Mon</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={2}
            >Tue</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={3}
            >Wed</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={4}
            >Thu</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={5}
            >Fri</Button>
            <Button
              color="#2296a2ff"
              className="filter-btn shadow-sm"
              onClick={this.filterDay}
              data-day-value={6}
            >Sat</Button>
          </div>
        </div>

        <Row>
          <Col sm="1" md="2" lg="2"></Col>
          <Col sm="10" md="8" lg="8">
            {this.state.businesses
              .map(business => {

                return (business.isShown) && (
                  <div>
                    <BusinessCard>
                      <h5 className="business-name">
                        <img className="beer-img" src="/assets/images/beer4.png" alt="beer-logo" />
                        <Link className="business-name-link" to={"/businessdetails/" + business.googleID}>
                          {business.name}
                        </Link>
                      </h5>

                      {business.deals
                        .filter(deals => deals.day == this.state.dayValue)
                        .map(deals => (
                          <DealCard
                            id={deals._id}
                            key={deals._id}
                            day={deals.day}
                            dayValue={deals.day}
                            beginTime={deals.beginTime}
                            endTime={deals.endTime}
                            info={deals.info}
                          />
                        ))
                      }
                    </BusinessCard>
                  </div>
                )
              })
            }

            <div className="text-center">
              <img
                className="quail-logo results-logo"
                src="/assets/images/quaillogo.png"
                alt="quail-logo"
              />
              <p className="add-location-call">
                Know something we don't? Help a pal out!
              </p>
              <Button
                color="#b66925ff"
                className="add-location-btn shadow"
                onClick={this.handleClickEvent}
              >
                Add Happy Hour
              </Button>
            </div>
          </Col>
          <Col sm="1" md="2" lg="2"></Col>
        </Row>
      </div>
    );
  }
}

export default Results;
