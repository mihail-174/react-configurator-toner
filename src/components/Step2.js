import React, { Component } from 'react';
// import '../scss/st2.scss'
// import '../scss/b1.scss'

export default class Step2 extends Component {
  changeMerks(e){
    const {context} = this.props;
    context.methods.setAppState({
      selected_mark: parseInt(e.target.value, 0),
      selected_model: 0,
      arr_class: [],
      selected_class: 0,
      val1: e.target.options.selectedIndex,
      val2: 0,
      val3: 0
    });
    // console.log( 'вы выбрали марку index: ' + parseInt(e.target.value, 0) );
  }
  changeModels(e){
    const {context} = this.props,
          state = context.state;
    context.methods.setAppState({
      selected_model: parseInt(e.target.value, 0),
      arr_class: state.data.marks[ state.selected_mark-1 ].models[ e.target.value-1 ].classis,
      selected_class: 0,
      val2: e.target.options.selectedIndex,
      val3: 0
    });
    // console.log( 'вы выбрали модель index: ' + parseInt(e.target.value, 0) );
  }
  changeTypes(e){
    const {context} = this.props;
    context.methods.setAppState({
        val3: e.target.options.selectedIndex,
        selected_class: parseInt( e.target.querySelectorAll('option')[e.target.options.selectedIndex].getAttribute('classis'), 0)
    });
    // console.log( 'вы выбрали кузов index: ' + parseInt(e.target.value, 0) );
  }
  render() {
    const {context} = this.props,
          state = context.state;

    const marks = state.data.marks.map((field, key) => {
      return (
        <option key={key+1} value={key+1}>{field.name}</option>
      );
    });

    let models = '';
    if ( state.selected_mark !== 0 ) {
        models = state.data.marks[ state.selected_mark-1 ].models.map((field, key) => {
            return (
                <option key={key+1} value={key+1}>{field.name}</option>
            )
        });
    } else {
        models = '';
    }

    let listClass, types, name, classis;
    listClass = Object.values(state.arr_class).map((klasAvto, index) => {
        types = state.data.type.map((field, key) => {
            if ( parseInt(field.classis, 0) === parseInt(klasAvto, 0) ) {
                name = field.name;
                classis = field.classis;
            }
            return false
        });
        return (
            <option key={index} value={index+1} classis={classis}>{name}</option>
        )
    });

    return (
      <div className='cont cont_two'>
        <h3>Выберите марку и модель автомобиля</h3>

        <div className='st2'>

            <div className='b1 b1_mark'>
                <div className='b1__name'>Марка</div>
                <div className='b1__select'>
                    <select defaultValue={state.val1} onChange={this.changeMerks.bind(this)}>
                        <option disabled value='0'>Выберите марку...</option>
                        {marks}
                    </select>
                </div>
            </div>

            <div className='b1 b1_model'>
              <div className='b1__name'>Модель</div>
              <div className='b1__select'>
                <select defaultValue={state.val2} onChange={this.changeModels.bind(this)} disabled={state.selected_mark!==0?false:true}>
                    <option disabled value='0'>Выберите модель...</option>
                  {models}
                </select>
              </div>
            </div>

            <div className='b1 b1_type'>
              <div className='b1__name'>Тип кузова</div>
              <div className='b1__select'>
                <select defaultValue={state.val3} onChange={this.changeTypes.bind(this)} disabled={state.selected_model!==0?false:true}>
                    <option disabled value='0'>Выберите тип...</option>
                  {listClass}
                </select>
              </div>
            </div>

        </div>
      </div>
    )
  }
}
