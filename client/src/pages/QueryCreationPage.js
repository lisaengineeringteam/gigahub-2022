import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography, Button, Row, Col, Card, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;

const QueryCreationPage = (props) => {
	const [form] = Form.useForm();
	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div style={{ padding: 24, textAlign: 'center' }}>
					<Row style={{ textAlign: 'left' }}>
						<Col span={24}>
							<Card
								title={
									<label
										style={{
											fontWeight: 'bold',
											color: 'grey',
											textAlign: 'left',
										}}
									>
										Flight #1234 Log metrics on 12/16/19
									</label>
								}
								style={{
									borderRadius: 20,
									boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
								}}
							>
								<Form form={form} layout='vertical' size='large'>
									<Form.Item
										label={
											<label
												style={{
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Name
											</label>
										}
										required
									>
										<Input
											value={'Flight #1234 Log metrics on 12/16/19'}
											style={{
												borderRadius: 10,
												backgroundColor: '#d3d3d3',
												borderColor: '#d3d3d3',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Description
											</label>
										}
									>
										<Input
											value={
												'Data Set to include flight data such as speed, altitude, and bearings'
											}
											style={{
												borderRadius: 10,
												backgroundColor: '#d3d3d3',
												borderColor: '#d3d3d3',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Query
											</label>
										}
										required
									>
										<Input.TextArea
											value={`$[
													{
													  "$unwind": "$payload.measurements"
													},
													{
													  "$match": {
														"payload.measurements.timestamp": {
														  "$gte": {
															"$date": 1530396000000
														  },
														  "$lte": {
															"$date": 1532988000000
														  }
														}
													  }
													},
													{
													  "$project": {
														"_id": 0,
														"metadata": -1,
														"meter": "$payload.measurements.meter",
														"value": "$payload.measurements.value",
														"timestamp": "$payload.measurements.timestamp"
													  }
													},
													{
													  "$match": {
														"meter": "Flat 1"
													  }
													},`}
											rows={15}
											style={{
												borderRadius: 10,
												backgroundColor: '#d3d3d3',
												borderColor: '#d3d3d3',
											}}
										/>
									</Form.Item>

									<Form.Item style={{ textAlign: 'right' }}>
										<Button
											type='danger'
											style={{
												borderRadius: 10,
												fontSize: 17,
												fontWeight: 'bold',
												marginRight: 10,
											}}
										>
											Delete
										</Button>
										<Button
											type='primary'
											style={{
												borderRadius: 10,
												fontSize: 17,
												fontWeight: 'bold',
												marginLeft: 10,
											}}
										>
											Save
										</Button>
									</Form.Item>
								</Form>
							</Card>
						</Col>
					</Row>
				</div>
			</Content>
		</Fragment>
	);
};

QueryCreationPage.propTypes = {};

export default QueryCreationPage;
