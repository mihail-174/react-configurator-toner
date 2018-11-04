import React, { Component } from 'react';
import Wf from './Wf.js';
// import '../scss/md.scss';

export default class Md extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }
  close(e) {
    e.preventDefault();
      const {context} = this.props,
            state = context.state;
      context.methods.setAppState({
        md: !state.md
      })
  }
  render() {
    const {context} = this.props,
          state = context.state;
    return (
      <div className={state.md?'md active':'md'}>
        <div className='md__inner'>
          <div className='md__close' onClick={this.close}></div>
          <div className='md__ttl'>Записаться на тонировку</div>
          <div className='md__cont'>
            <Wf context={context} />
          </div>
        </div>
      </div>
    )
  }
}
