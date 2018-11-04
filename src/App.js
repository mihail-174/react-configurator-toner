import React, { Component } from 'react';
import Loading from './components/Loading.js';
import Steps from './components/Steps';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Ft from './components/Ft.js';
// import './scss/App.scss';
// import './scss/b3.scss';
const Context = React.createContext()

let initialState = {
  currentStep: 1,
  selected_toner: {
    zone_1: 0,
    zone_1_material: '',
    zone_2: 0,
    zone_2_material: '',
    zone_3: 0,
    zone_3_material: ''
  },
  selected_mark: 0,
  selected_model: 0,
  arr_class: [],
  selected_class: 0,
  val1: 0,
  val2: 0,
  val3: 0,
  total: 0,
  steps: [
    { id: 1, name: "Шаг 1" },
    { id: 2, name: "Шаг 2" },
    { id: 3, name: "Шаг 3" }
  ],
  zone: [
    { id: 1, name: 'front' },
    { id: 2, name: 'front_side' },
    { id: 3, name: 'back' }
  ]
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ...initialState,
		error: null,
		isLoaded: false,
		data: [],
    };
    this.setAppState = this.setAppState.bind(this);
  }
  setAppState(newState) {
    this.setState(newState);
  }
  render() {
	  const { error, isLoaded } = this.state;
	  if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <Loading />;
	  } else {
		  return (
			  <Context.Provider value={{
				  state: this.state,
				  methods: {
					  setAppState: (value) => this.setState(value)
				  }
			  }}>
			  <Context.Consumer>{context => (

				  <div className='app__inner'>
				  <div className='app__title'>Рассчитать стоимость</div>
				  <Steps context={context} />
				  {context.state.currentStep===1 && <Step1 context={context}/>}
				  {context.state.currentStep===2 && <Step2 context={context}/>}
				  {context.state.currentStep===3 && <Step3 context={context}/>}
				  {<Ft context={context} />}
				  </div>
			  )}</Context.Consumer>

			  {/*
				  <pre>
				  {JSON.stringify(this.state, "", 4)}
				  </pre>
			  */}
			  {this.props.children}
			  </Context.Provider>
		  );
	  }
  }

  componentDidMount() {
	  fetch(`dataCalculator.json`)
	  .then(res => res.json())
	  .then(
		  (result) => {
			  this.setState({
				  isLoaded: true,
				  data: result
			  });
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			  this.setState({
				  isLoaded: true,
				  error
			  });
		  }
	  )
  }

}
