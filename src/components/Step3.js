import React, { Component } from 'react';
// import '../scss/b2.scss'
import Md from './Md.js';

export default class Step3 extends Component {
  componentDidMount() {
    const {context} = this.props,
          state = context.state;

    const zone = Object.values(state.selected_toner).map((field, key)=>{
      return key
    })

    let total=0;
    for (var i = 1; i <= zone.length-1; i++) {
      if ( state.selected_toner['zone_'+i+'_material'] ) {
        total += parseInt( state.data[ state.selected_toner['zone_'+i+'_material'] ][state.selected_class-1].toner[state.zone[i-1].name] , 0);
      }
    }

    context.methods.setAppState({
      'total': total
    });
  }
  render() {
    const {context} = this.props,
          state = context.state;
    return (
      <div className='cont cont_three'>
        <h3>Стоимость тонировки</h3>
        <div className='b2'>
          <div className='b2__value'>{state.total}</div>
          <div className='b2__prefix'> рублей</div>
        </div>
        <Md context={context} />
      </div>
    );
  }
}
