import React, { Component } from 'react';

export default class Toner extends Component {
  handleChange(e){
    const {context} = this.props,
          state = context.state,
          zone = this.props.zone;
    context.methods.setAppState({
      'selected_toner': {
        ...state.selected_toner,
        ['zone_'+zone]: parseInt(e.target.value,0),
        ['zone_'+zone+'_material']: e.target.querySelectorAll('option')[e.target.options.selectedIndex].getAttribute('material')
      },
    });
  }
  render() {
    const {context} = this.props,
          state = context.state,
          zone = this.props.zone;
    const list = state.data.toner.map((field, key) => {
      return (
        <option key={key} value={field.id} material={field.material}>{field.name}</option>
      )
    });
    return (
      <div>
        <select value={state.selected_toner['zone_'+zone]} onChange={this.handleChange.bind(this)}>
          {list}
        </select>
      </div>
    )
  }
}
