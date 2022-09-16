import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

// Pages
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

// Utils
import Routes from './utils/Routes';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/userAction';

// antd
import { Layout } from 'antd';

const StyledDiv = styled.div`
	font-family: 'Montserrat', sans-serif;
`;

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<StyledDiv className='App'>
				<Router>
					<Layout>
						<Switch>
							<Route exact path='/signup' component={SignUpPage} />
							<Route exact path='/login' component={LogInPage} />
							<Route component={Routes} />
						</Switch>
					</Layout>
				</Router>
			</StyledDiv>
		</Provider>
	);
}

export default App;
