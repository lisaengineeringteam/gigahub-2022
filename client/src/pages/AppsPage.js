import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from 'react-router-dom';

// antd
import { Layout, Typography, Button } from 'antd';
import { Card } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;
const { Header, Content } = Layout;

const AppsPage = (props) => {
	const history = useHistory();

	function handleClick() {
		history.push('/app-creation');
	}

	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div style={{ padding: 24, textAlign: 'center' }}>
					<div style={{ textAlign: 'right' }}>
						<Button
							type='primary'
							size='large'
							style={{ fontWeight: 'bold', borderRadius: 20 }}
						>
							Create New App
						</Button>
					</div>

					<div style={{ marginTop: 20 }}>
						<Card
							hoverable
							style={{
								width: 300,
								boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
							}}
							cover={
								<img
									alt='Data Predictor Image'
									src='https://bookdown.org/vaabe/bookdown-demo/bookdown-demo_files/figure-html/unnamed-chunk-3-1.png'
								/>
							}
						>
							<Meta
								title='Data Predictor'
								description='View your data in a value view and find the best algorithms. A good tool for ATA 21 failure prediction'
								style={{ textAlign: 'left' }}
							/>
							<div style={{ textAlign: 'right', marginTop: 20 }}>
								<Button type='primary' size='large' onClick={handleClick}>
									<PlusOutlined />
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</Content>
		</Fragment>
	);
};

AppsPage.propTypes = {};

export default AppsPage;
