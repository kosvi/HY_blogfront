import React from 'react'

const Notification = ({ notification }) => {
  if (notification !== null) {
    return (
      <div className={notification.type}>
        {notification.message}
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default Notification