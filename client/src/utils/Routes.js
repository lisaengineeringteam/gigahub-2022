import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// antd
import { Layout } from 'antd';

// Pages
import DashboardPage from '../pages/DashboardPage';
import AppsPage from '../pages/AppsPage';
import QueriesPage from '../pages/QueriesPage';
import DataLakePage from '../pages/DataLakePage';
import SettingsPage from '../pages/SettingsPage';
import AppCreationPage from '../pages/AppCreationPage';
import QueryCreationPage from '../pages/QueryCreationPage';
import DevicesPage from '../pages/DevicesPage';

// Components
import NavBar from '../components/NavBar';
import Alerts from '../components/Alerts';
import PrivateRoute from '../utils/PrivateRoute';

const { Header, Content, Footer } = Layout;

const Routes = (props) => {
	return (
		<Fragment>
			<NavBar />
			<Layout className='site-layout' style={{ marginLeft: 200 }}>
				<Alerts />
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route exact path='/apps' component={AppsPage} />
					<Route exact path='/queries' component={QueriesPage} />
					<Route exact path='/data-lake' component={DataLakePage} />
					<Route exact path='/settings' component={SettingsPage} />
					<Route exact path='/app-creation' component={AppCreationPage} />
					<Route exact path='/query-creation' component={QueryCreationPage} />
					<Route exact path='/devices' component={DevicesPage} />
				</Switch>
			</Layout>
		</Fragment>
	);
};

Routes.propTypes = {};

export default Routes;
