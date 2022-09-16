import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// antd
import { Layout, Menu, Typography } from 'antd';
import {
	SettingOutlined,
	CloudServerOutlined,
	FileDoneOutlined,
	DashboardOutlined,
	AppstoreOutlined,
	FileSearchOutlined,
	LaptopOutlined,
} from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const StyledTitle = styled.div`
	font-family: 'Epilogue', sans-serif;
`;
const StyledSubTitle = styled.div`
	font-family: 'Comfortaa', cursive;
`;

const NavBar = (props) => {
	return (
		<Fragment>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
				}}
			>
				<Title
					style={{ color: 'white', textAlign: 'center', margin: 20 }}
					level={2}
				>
					<StyledTitle>Cyber Factory</StyledTitle>
				</Title>
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
					<Menu.Item key='1' icon={<DashboardOutlined />}>
						<span>Dashboard</span>
						<Link to='/' />
					</Menu.Item>
					<Menu.Item key='2' icon={<AppstoreOutlined />}>
						<span>Apps</span>
						<Link to='/apps' />
					</Menu.Item>
					<Menu.Item key='3' icon={<FileSearchOutlined />}>
						<span>Queries</span>
						<Link to='/queries' />
					</Menu.Item>
					<Menu.Item key='4' icon={<LaptopOutlined />}>
						<span>Devices</span>
						<Link to='/devices' />
					</Menu.Item>
					<Menu.Item key='5' icon={<CloudServerOutlined />}>
						<span>Data Lake</span>
						<Link to='/data-lake' />
					</Menu.Item>
					<Menu.Item key='6' icon={<SettingOutlined />}>
						<span>Settings</span>
						<Link to='/settings' />
					</Menu.Item>
				</Menu>
				<Title
					style={{
						color: 'white',
						textAlign: 'center',
						margin: 20,
						position: 'fixed',
						bottom: 0,
						height: '7%',
					}}
					level={2}
				>
					<StyledSubTitle style={{ fontSize: 12, textAlign: 'center' }}>
						Powered By
					</StyledSubTitle>
					<StyledSubTitle style={{ textAlign: 'center' }}>
						gigahub
					</StyledSubTitle>
				</Title>
			</Sider>
		</Fragment>
	);
};

NavBar.propTypes = {};

export default NavBar;
