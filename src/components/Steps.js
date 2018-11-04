import React, { Component } from 'react';
// import '../scss/stp.scss'

export default class Steps extends Component {
  render() {
    const {context} = this.props,
          state = context.state,
          currentStep = state.currentStep;
    const list = state.steps.map((field, key) => {
      return (
        <div key={key} className={'stp__item stp__item-' + field.id + ' ' + (currentStep===key+1?'active':'none') }>
          {field.name}
        </div>
      )
    });
    return (
      <div className='stp'>
        {list}
      </div>
    );
  }
}
