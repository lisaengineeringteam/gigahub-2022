import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// antd
import { Layout, Row, Col, Card, Typography, Form, Input, Button } from 'antd';

//Redux
import { connect } from 'react-redux';
import { setAlert } from '../redux/actions/alertAction';
import { register } from '../redux/actions/userAction';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const StyledTitle = styled.div`
	font-family: 'Comfortaa', cursive;
`;

const SignUpPage = ({ setAlert, register, isAuthenticated }) => {
	const [form] = Form.useForm();

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		subdomain: '',
		purpose: '',
	});

	const { firstName, lastName, email, password, subdomain, purpose } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// register({ firstName, lastName, email, password });
		console.log(formData);
	};

	if (isAuthenticated) {
		return <Redirect to='/' />;
	}

	return (
		<Fragment>
			<Content style={{ backgroundColor: '#05042C' }}>
				<Row>
					<Col span={16}>
						<div
							style={{
								marginTop: 50,
								marginBottom: 100,
								display: 'inline-block',
							}}
						>
							<Title level={2} style={{ color: 'white' }}>
								Registration
							</Title>
							<Title level={4} style={{ color: 'white', marginTop: -10 }}>
								To register, please take the time to fill out the information
								below.
							</Title>
							<Card
								style={{
									width: 900,
									borderRadius: 20,
									backgroundColor: '#05042C',
									borderColor: '#05042C',
									color: 'white',
									marginTop: 10,
								}}
							>
								<Form
									form={form}
									layout='vertical'
									size='large'
									onSubmit={(e) => onSubmit(e)}
								>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												First Name
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your first name'
											name='firstName'
											value={firstName}
											onChange={(e) => onChange(e)}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Last Name
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your last name'
											name='lastName'
											value={lastName}
											onChange={(e) => onChange(e)}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Email
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your email'
											name='email'
											value={email}
											onChange={(e) => onChange(e)}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Password
											</label>
										}
										required
									>
										<Input.Password
											placeholder='Enter a password'
											name='password'
											value={password}
											onChange={(e) => onChange(e)}
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Enter your Subdomain
											</label>
										}
										required
									>
										<Input
											placeholder='Enter a new subdomain'
											suffix='.gigahub.io'
											name='subdomain'
											value={subdomain}
											onChange={(e) => onChange(e)}
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												What should be the purpose of gigahub?
											</label>
										}
										required
									>
										<Input.TextArea
											placeholder='Tell us your purpose for using gigahub'
											rows={5}
											name='purpose'
											value={purpose}
											onChange={(e) => onChange(e)}
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item>
										<Button
											ghost
											htmlType='submit'
											style={{
												borderRadius: 10,
												fontSize: 17,
												fontWeight: 'bold',
											}}
										>
											Submit
										</Button>
									</Form.Item>
								</Form>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<Card
							style={{
								width: 400,
								borderRadius: 20,
								backgroundColor: '#727B90',
								borderColor: '#727B90',
								color: 'white',
								marginTop: 50,
								display: 'inline-block',
							}}
						>
							<div style={{ marginBottom: 30 }}>
								<Title level={4} style={{ color: 'white', marginBottom: -40 }}>
									Welcome to
								</Title>
								<Title level={1} style={{ color: 'white' }}>
									<StyledTitle>gigahub</StyledTitle>
								</Title>
								<Title level={4} style={{ color: 'white', marginTop: -10 }}>
									Build with intelligence and integrity
								</Title>
							</div>

							<div style={{ textAlign: 'left', fontWeight: 'bold' }}>
								<ul>
									<li>
										Digitalize your company for free, no credit card required
									</li>
									<li>Access the full product catalog at your fingertips</li>
									<li>iOS, Android integration (at extra costs)</li>
									<li>Create integrated apps</li>
									<li>AI-powered data lake services</li>
									<li>Basic data analytics, and more.</li>
									<li>Build with 40+ micro-services. Learn more</li>
								</ul>
							</div>
						</Card>
					</Col>
				</Row>
			</Content>
		</Fragment>
	);
};

SignUpPage.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

const mapActionsToProps = {
	setAlert,
	register,
};

export default connect(mapStateToProps, mapActionsToProps)(SignUpPage);
