import React, { Component } from 'react';
// import '../scss/wf.scss';

export default class Wf extends Component {
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
      <div className='wf wf1'>
        <div className='wf__message'></div>
        <form className="wf__form" action="/submit.php" method="POST">
          <div className='wf__inner'>
            <div className='wf__markup'><p>Мы перезвоним вам в течении 5 минут</p></div>
            <div className='wf__fields'>
              <div className='wf__field wf__name'>
                <input required type='text' name='name' placeholder='Имя'/>
              </div>
              <div className='wf__field wf__phone'>
                <input required type='text' name='phone' placeholder='Телефон'/>
              </div>
              <input type='hidden' name='front' value={state.data.toner[state.selected_toner.zone_1].name} />
              <input type='hidden' name='front_side' value={state.data.toner[state.selected_toner.zone_2].name} />
              <input type='hidden' name='back' value={state.data.toner[state.selected_toner.zone_3].name} />
              <input type='hidden' name='mark' value={state.data.marks[state.selected_mark-1].name} />
              <input type='hidden' name='model' value={state.selected_toner['zone_1']===0 && state.selected_toner['zone_2']===0 && state.selected_toner['zone_3']===0 ? '-' :  state.data.marks[state.selected_mark-1].models[state.selected_model-1].name} />
              <input type='hidden' name='cost' value={state.total} />
            </div>
            <div className='wf__total'>
                <div className='b3'>
                  <div className='b3__item'>
                    <div className='b3__label'>Зона тонировки</div>
                    <div className='b3__front'>
                      <span className='b3__name'>Лобовое:</span>
                      <span className='b3__val'>{state.data.toner[state.selected_toner.zone_1].name}</span>
                    </div>
                    <div className='b3__front-side'>
                      <span className='b3__name'>Передние боковые:</span>
                      <span className='b3__val'>{state.data.toner[state.selected_toner.zone_2].name}</span>
                    </div>
                    <div className='b3__back'>
                      <span className='b3__name'>Задняя полусфера:</span>
                      <span className='b3__val'>{state.data.toner[state.selected_toner.zone_3].name}</span>
                    </div>
                  </div>
                  <div className='b3__item'>
                    <div className='b3__label'>
                      <span className='b3__name'>Марка:</span>
                      <span className='b3__val'>{state.data.marks[state.selected_mark-1].name}</span>
                    </div>
                    <div className='b3__model'>
                      <span className='b3__name'>Модель:</span>
                      <span className='b3__val'>{state.selected_toner['zone_1']===0 && state.selected_toner['zone_2']===0 && state.selected_toner['zone_3']===0 ? '-' : state.data.marks[state.selected_mark-1].models[state.selected_model-1].name}</span>
                    </div>
                  </div>
                </div>
            </div>
            <div className='wf__privacy'>Оправляя данную форму, вы соглашаетесь с политикой конфидициальности</div>
            <div className='wf__action'>
              <input type="submit" name='submit' value="Записаться"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
