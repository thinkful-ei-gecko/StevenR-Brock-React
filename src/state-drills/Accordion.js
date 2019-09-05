import React, { Component } from 'react';

export default class Accordion extends Component {
    static defaultProps = {
        sections: [
            {
                title: 'Section 1',
                content: 'asdf',
            },
            {
                title: 'Section 2',
                content: 'fdsa',
            },
            {
                title: 'Section 3',
                content: 'hjkl',
            },

        ]
        

    };

    state = {
        activeSectionIndex: null,
    }

    handleClick = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

   render() {
       return (
           <ul>
              {this.props.sections.map((value, index)=>(
                  <li>
                      <button
                      onClick={() => this.handleClick(index)}>click</button>
                      {(this.state.activeSectionIndex === index) && <p>{value.title}</p>}
                  </li>
              ))} 
           </ul>
       )
   }


}
