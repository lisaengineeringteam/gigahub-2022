import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from 'react-router-dom';

// antd
import {
	Layout,
	Typography,
	Button,
	Row,
	Col,
	Card,
	Form,
	Input,
	Select,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;
const { Option } = Select;

const AppCreationPage = (props) => {
	const [form] = Form.useForm();
	const history = useHistory();

	function handleClick() {
		history.push('/apps');
	}
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
										Data Predictor
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
											placeholder='Enter a name for your app'
											style={{
												borderRadius: 10,
												backgroundColor: '#EEF1F5',
												borderColor: '#EEF1F5',
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
										<Input.TextArea
											placeholder='Enter a description for your apps'
											rows={5}
											style={{
												borderRadius: 10,
												backgroundColor: '#EEF1F5',
												borderColor: '#EEF1F5',
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
												Template
											</label>
										}
										required
									>
										<Select
											placeholder='Select a query template'
											rows={15}
											style={{
												borderRadius: 10,
												backgroundColor: '#EEF1F5',
												borderColor: '#EEF1F5',
											}}
										>
											<Option value='op1'>
												Flight #228 Log metrics on 12/16/19
											</Option>
											<Option value='op2'>
												Flight #1234 Log metrics on 12/16/19
											</Option>
										</Select>
									</Form.Item>

									<Form.Item
										label={
											<label
												style={{
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Parameters
											</label>
										}
										required
									>
										<Input.TextArea
											placeholder='Enter necessary parameters for Data Predictor app'
											rows={15}
											style={{
												borderRadius: 10,
												backgroundColor: '#EEF1F5',
												borderColor: '#EEF1F5',
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
											onClick={handleClick}
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

AppCreationPage.propTypes = {};

export default AppCreationPage;
