import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

// Redux
import { connect } from 'react-redux';

// antd
import { Layout, Typography, Divider, Button, Card } from 'antd';

// Components
import ResourceConsole from '../components/ResourceConsole';

const { Title } = Typography;
const { Header, Content } = Layout;

const DashboardPage = ({ isAuthenticated }) => {
	const data = {
		labels: [
			'14:25',
			'14:26',
			'14:27',
			'14:28',
			'14:28',
			'14:30',
			'14:31',
			'14:32',
			'14:33',
			'14:34',
			'14:35',
			'14:36',
			'14:37',
			'14:38',
			'14:39',
			'14:40',
			'14:41',
			'14:42',
			'14:43',
			'14:44',
			'14:45',
			'14:46',
			'14:47',
			'14:48',
			'14:49',
			'14:50',
		],
		datasets: [
			{
				label: 'Angle',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					41,
					42,
					44,
					42,
					43,
					44,
					45,
					45,
					45,
					46,
					45,
					44,
					43,
					42,
					42,
					42,
					41,
					43,
					44,
					45,
					46,
					47,
					48,
					46,
					45,
					45,
					44,
					44,
				],
			},
			{
				label: 'Pressure',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(255,160,122,0.4)',
				borderColor: 'rgba(255,160,122,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(255,160,122,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(255,160,122,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					65,
					63,
					61,
					60,
					61,
					61,
					62,
					63,
					64,
					67,
					65,
					65,
					66,
					67,
					67,
					68,
					69,
					70,
					70,
					70,
					68,
					68,
					69,
					69,
					69,
					72,
				],
			},
			{
				label: 'Speed',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(0,0,139,0.4)',
				borderColor: 'rgba(0,0,139,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(0,0,139,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(0,0,139,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					13,
					14,
					15,
					13,
					12,
					12,
					14,
					15,
					16,
					17,
					17,
					16,
					15,
					16,
					18,
					19,
					20,
					18,
					16,
					15,
					15,
					15,
					17,
					16,
					18,
					15,
					15,
					14,
					13,
					10,
					9,
					9,
					9,
					8,
					10,
					12,
				],
			},
		],
	};

	const history = useHistory();

	function handleClick() {
		history.push('/apps');
	}

	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<ResourceConsole />
				<Divider>App DashBoard</Divider>
				<div style={{ textAlign: 'right' }}>
					<Button
						type='primary'
						size='large'
						style={{ fontWeight: 'bold', borderRadius: 20 }}
						onClick={handleClick}
					>
						Add App
					</Button>
				</div>
				<Card
					title={
						<label style={{ fontWeight: 'bold', color: 'grey' }}>
							Data Predictor for Flight 228
						</label>
					}
					style={{
						borderRadius: 20,
						boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
						marginTop: 20,
						textAlign: 'left',
					}}
				>
					<p>
						This App is used to track and predict the angle, pressure, and speed
						data set coming from the Flight 228
					</p>
					<p>
						<Line data={data} />
					</p>
				</Card>
			</Content>
		</Fragment>
	);
};

DashboardPage.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(DashboardPage);
