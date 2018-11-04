import React, { Component } from 'react';
// import '../scss/st1.scss'
import Toner from '../components/Toner.js';
import Image from '../components/Image.js';

export default class Step1 extends Component {
  render() {
    const {context} = this.props,
          state = context.state;
    return (
      <div className='cont cont_one'>
        <h3>Выберите зону тонировки</h3>
        <div className='st1'>

          <div className={'st1__view st1__view_front front-toner-' + state.selected_toner.zone_1 }>
            <div className='st1__name'>Лобовое стекло</div>
            <div className='st1__toner'>
              <Toner zone='1' context={context} />
            </div>
            <Image zone='1' context={context} />
          </div>

          <div className={'st1__view st1__view_front-side front-side-toner-' + state.selected_toner.zone_2 + ' back-side-toner-' + state.selected_toner.zone_3 }>
            <div className='st1__name'>Передние боковые</div>
            <div className='st1__toner'>
              <Toner zone='2' context={context} />
            </div>
            <Image zone='2' context={context} />
          </div>

          <div className={'st1__view st1__view_back back-toner-' + state.selected_toner.zone_3 }>
            <div className='st1__name'>Задняя полусфера</div>
            <div className='st1__toner'>
              <Toner zone='3' context={context} />
            </div>
            <Image zone='3' context={context} />
          </div>

        </div>
      </div>
    );
  }
}
