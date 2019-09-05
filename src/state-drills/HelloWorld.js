import React, { Component } from 'react';

export default class HelloWorld extends Component {
    state = {
        who: 'world',
    };
    
    render() {
        return (
          <div className='HelloWorld'>
              <p>Hello, {this.state.who}</p>
              <button
                onClick={() => this.SetState({who: 'world' })}
                >
                    World
              </button>
              

              <button
              onClick={() => this.SetState({ who: 'friend' })}
              >
                Friend
              </button>
             
              <button
              onClick={() => this.SetState({ who: 'React' })}
              >
                React
              </button>
          </div>  
        )
    }
}