import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/**
 * Store components
 */
import reducer from './Store/Reducer';

/**
 * Internal Components
 */
import Home from './Components/Home';
import PropertyDetailPage from './Components/PropertyDetailPage';
import Page404 from './Components/Page404';

/**
 * Internal CSS components
 */
import './App.scss';

/**
 * Redux Developer tool support for chrome browser
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIN_COMPOSE__ || compose;

/**
 * [composed store]
 *
 * @param   {[type]}  reducer          [reducer description]
 * @param   {[type]}  composeEnhancer  [composeEnhancer description]
 * @param   {[type]}  applyMiddleware  [applyMiddleware description]
 * @param   {[type]}  thunk            [thunk description]
 *
 * @return  {[type]}                   [return description]
 */
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

function App() {
	return (
		<Provider store= { store } >
			<div className= "App">
				<Router>
					<Switch>
						<Route exact path= "/" component= {Home} />
						<Route exact path= "/property/:propertyId" component= {PropertyDetailPage} />
						<Route component= { Page404 } />
					</Switch>
				</Router>
			</div>
    	</Provider>
  );
}

export default App;
