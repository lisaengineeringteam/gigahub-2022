import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography, Button, Row, Col, Card } from 'antd';
import { SettingOutlined, LaptopOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;

const DevicesPage = (props) => {
	return (
		<Fragment>
			<Fragment>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div style={{ padding: 24, textAlign: 'center' }}>
						<Row>
							<Col span={12} style={{ textAlign: 'left' }}>
								<Title level={3}>Devices</Title>
							</Col>
							<Col span={12} style={{ textAlign: 'right' }}>
								<Button
									type='primary'
									size='large'
									style={{ fontWeight: 'bold', borderRadius: 20 }}
								>
									Add a Device
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
													<span>
														<LaptopOutlined style={{ fontSize: 20 }} /> Default
													</span>
												</Title>
											</Col>
											<Col span={4} style={{ textAlign: 'right' }}>
												<Button type='link'>
													<SettingOutlined style={{ fontSize: 24 }} />
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
		</Fragment>
	);
};

DevicesPage.propTypes = {};

export default DevicesPage;
