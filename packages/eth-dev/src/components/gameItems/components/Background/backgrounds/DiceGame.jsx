import React from 'react'

const styles = {
  shared: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    pointerEvents: 'none'
  },
  background: {
    background: 'url(./assets/backgrounds/dice_game.png) no-repeat center center fixed',
    backgroundSize: 'cover'
  }
}

const DiceGame = () => {
  return (
    <div
      className='background-image'
      style={{
        ...styles.shared,
        ...styles.background
      }}
    />
  )
}

export default DiceGame