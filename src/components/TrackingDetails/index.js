import React from 'react'
import './index.css'
import {Chrono} from 'react-chrono'
import moment from 'moment' // Import moment

const TrackingDetails = ({trackingData}) => {
  let items = []

  if (Array.isArray(trackingData) && trackingData.length > 0) {
    items = trackingData.map(data => {
      const {refId, location, time, status, orderDate} = data

      const formattedOrderDate = moment(orderDate).format('MMMM Do YYYY')

      return {
        title: `${formattedOrderDate}`,
        cardTitle: status,
        cardSubtitle: `${location}`,
        cardDetailedText: `Order Date: ${formattedOrderDate} | Time: ${time}`,
      }
    })
  } else {
    return <p>No tracking data available</p>
  }

  return (
    <div className="tracking-details">
      <div className="heading-main">
        <h2>Tracking Timeline</h2>
      </div>

      <Chrono items={items} mode="VERTICAL" />
    </div>
  )
}

export default TrackingDetails
