import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from 'react-router-dom';

// antd
import { Layout, Typography, Button, Row, Col, Card } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;

const SettingsPage = (props) => {
	const history = useHistory();

	function handleClick() {
		history.push('/login');
	}
	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div style={{ padding: 24, textAlign: 'center' }}>
					<Row>
						<Col span={12} style={{ textAlign: 'left' }}>
							<Title level={3}>Settings</Title>
						</Col>
						<Col span={12} style={{ textAlign: 'right' }}>
							<Button
								type='danger'
								size='large'
								style={{ fontWeight: 'bold', borderRadius: 20 }}
								onClick={handleClick}
							>
								Log Out
							</Button>
						</Col>
					</Row>
				</div>
			</Content>
		</Fragment>
	);
};

SettingsPage.propTypes = {};

export default SettingsPage;
