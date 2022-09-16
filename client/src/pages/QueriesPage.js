import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from 'react-router-dom';

// antd
import { Layout, Typography, Button, Row, Col, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;

const QueriesPage = (props) => {
	const history = useHistory();

	function handleClick() {
		history.push('/query-creation');
	}

	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div style={{ padding: 24, textAlign: 'center' }}>
					<Row>
						<Col span={12} style={{ textAlign: 'left' }}>
							<Title level={3}>Queries</Title>
						</Col>
						<Col span={12} style={{ textAlign: 'right' }}>
							<Button
								type='primary'
								size='large'
								style={{ fontWeight: 'bold', borderRadius: 20 }}
							>
								Create a Query
							</Button>
						</Col>
					</Row>
					<Row style={{ marginTop: 20 }}>
						<Col span={24}>
							<Card
								style={{
									borderRadius: 20,
									boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
								}}
							>
								<Card style={{ marginTop: 10, marginBottom: 10 }}>
									<Row align='middle'>
										<Col span={20} style={{ textAlign: 'left' }}>
											<Title level={5}>
												Flight #228 Log metrics on 12/16/19
											</Title>
											<Text>
												Data Set to include flight data such as speed, altitude,
												and bearings
											</Text>
										</Col>
										<Col span={4} style={{ textAlign: 'right' }}>
											<Button type='link' onClick={handleClick}>
												<EditOutlined style={{ fontSize: 24 }} />
											</Button>
										</Col>
									</Row>
								</Card>
								<Card style={{ marginTop: 10, marginBottom: 10 }}>
									<Row align='middle'>
										<Col span={20} style={{ textAlign: 'left' }}>
											<Title level={5}>
												Flight #1234 Log metrics on 12/16/19
											</Title>
											<Text>
												Data Set to include flight data such as speed, altitude,
												and bearings
											</Text>
										</Col>
										<Col span={4} style={{ textAlign: 'right' }}>
											<Button type='link'>
												<EditOutlined style={{ fontSize: 24 }} />
											</Button>
										</Col>
									</Row>
								</Card>
							</Card>
						</Col>
					</Row>
				</div>
			</Content>
		</Fragment>
	);
};

QueriesPage.propTypes = {};

export default QueriesPage;
