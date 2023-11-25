import {Component} from 'react'
import {Link} from 'react-router-dom'

import TrackingDetails from '../TrackingDetails'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {
    trackingDetails: '',
    trackingData: null,
    array: [],
  }

  handleChange = event => {
    this.setState({trackingDetails: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {trackingDetails} = this.state

    try {
      const response = await fetch(
        `https://backendcode-production-49b4.up.railway.app/details/${trackingDetails}`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()
      const formattedData = data.map(eachItem => ({
        refId: eachItem.ref_id,
        location: eachItem.location,
        status: eachItem.status,
        orderDate: eachItem.order_date,
        time: eachItem.time,
      }))

      this.setState({trackingData: data, array: formattedData})
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({trackingData: null, array: []})
    }
  }

  render() {
    const {trackingDetails, array, trackingData} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">
              We Will Deliver Your Packages AnyWhere!
            </h1>
            <img
              src="https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg"
              alt="clothes to be noticed"
              className="home-mobile-img"
            />
            <div>
              <form className="form-cont" onSubmit={this.handleSubmit}>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Tracking Details"
                  value={trackingDetails}
                  onChange={this.handleChange}
                />
                <button className="shop-now-button" type="submit">
                  Track Now
                </button>
              </form>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/warehouse-worker-transporting-goods-freight-shipping-types-business-logistics-smart-logistics-technologies-commercial-delivery-service-concept-pinkish-coral-bluevector-isolated-illustration_335657-1728.jpg"
            alt="dresses to be noticed"
            className="home-desktop-img"
          />
        </div>
        <div>{trackingData && <TrackingDetails trackingData={array} />} </div>

        {!trackingData && (
          <div className="service-section">
            <h2>Our Services</h2>
            <div className="services-container">
              <div className="service-item">
                <img
                  src="https://img.freepik.com/free-vector/business-logistics-abstract-concept-vector-illustration-smart-logistics-technologies-commercial-delivery-service-worldwide-business-transportation-global-product-shipment-abstract-metaphor_335657-1788.jpg"
                  alt="Service 1"
                  className="service-image"
                />
                <h3>Real-time Tracking</h3>
                <p>Track your parcels in real-time</p>
              </div>
              <div className="service-item">
                <img
                  src="https://img.freepik.com/free-vector/delivery-service-with-medical-masks-concept_23-2148504161.jpg"
                  alt="Service 2"
                  className="service-image"
                />
                <h3>Secure Delivery</h3>
                <p>Ensuring secure delivery of your packages</p>
              </div>
              <div className="service-item">
                <img
                  src="https://img.freepik.com/free-vector/flat-design-international-trade-illustrated_23-2149147994.jpg"
                  alt="Service 3"
                  className="service-image"
                />
                <h3>International Shipping</h3>
                <p>Efficient handling of international shipments</p>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
