import React, { Component } from 'react'

export default class RouletteGun extends Component {
    defaultProp = {
        bulletInChamber: 8,
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    handleButton = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    renderDisplay() {
        const { bulletInChamber } = this.defaultProp
        const { chamber, spinningTheChamber } = this.state
        if (spinningTheChamber) {
            return 'Spinning in the chamber and pulling the trigger!'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!'
        } else {
            return 'better luck next time'
        }
    }
    
    render() {
        console.log('render')
        return (
            <div className='RouletteGun'>
            <p>{this.renderDisplay()}</p>
            <button onClick = {this.handleButton}>
                Pull The Trigger ya pansy!
            </button>
            </div>
        )
    }
}