import React, { Component } from 'react';
// import '../scss/ft.scss';

export default class Footer extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
    this.modal = this.modal.bind(this);
  }
  setStep(e) {
    const {context} = this.props;
    const step = e.currentTarget.getAttribute('data-step');
    context.methods.setAppState({
      currentStep: parseInt(step, 0)
    })
  }
  modal() {
    const {context} = this.props,
          state = context.state;
    context.methods.setAppState({
      md: !state.md
    })
  }
  render() {
    const {context} = this.props,
          state = context.state;

    const step = context.state.currentStep;
    const prevStep = step - 1;
    const nextStep = step + 1;

    let prev = <button type='button' className='ft__action ft__action_prev' onClick={this.setStep} data-step={prevStep}><span>Вернуться</span></button>;

    let nextStep1 = '';
    if ( state.currentStep===1 && state.selected_toner['zone_1']===0 && state.selected_toner['zone_2']===0 && state.selected_toner['zone_3']===0 ) {
        nextStep1 = <button disabled type='button'className='ft__action ft__action_next'  onClick={this.setStep} data-step={nextStep}><span>Далее</span></button>;
    } else {
        nextStep1 = <button type='button'className='ft__action ft__action_next'  onClick={this.setStep} data-step={nextStep}><span>Далее</span></button>;
    }

    let nextStep2 = '';
    if ( state.selected_mark===0 || state.selected_model===0 || state.selected_class===0 ) {
        nextStep2 = <button disabled type='button'className='ft__action ft__action_next'  onClick={this.setStep} data-step={nextStep}><span>Далее</span></button>;
    } else {
        nextStep2 = <button type='button'className='ft__action ft__action_next'  onClick={this.setStep} data-step={nextStep}><span>Далее</span></button>;
    }

    let finish = <button type='button'className='ft__action ft__action_finish' onClick={this.modal}>Записаться</button>;

    if ( step === 1 ) {
        prev = null;
        nextStep2 = null;
    }
    if ( step > 1 ) {
        nextStep1 = null;
    }
    if ( step > 2 ) {
        nextStep2 = null;
    }
    if ( step < 3 ) {
      finish = null;
    }

    return (
      <div className="ft">
        {prev}
        {nextStep1}
        {nextStep2}
        {finish}
      </div>
    );
  }

}
