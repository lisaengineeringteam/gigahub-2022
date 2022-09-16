import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography, Button, Row, Col, Card, Upload } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Header, Content } = Layout;

const DataLakePage = (props) => {
	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div style={{ padding: 24, textAlign: 'center' }}>
					<Row>
						<Col span={12} style={{ textAlign: 'left' }}>
							<Title level={3}>Data Lake</Title>
						</Col>
						<Col span={12} style={{ textAlign: 'right' }}>
							<Upload>
								<Button
									type='primary'
									size='large'
									style={{ fontWeight: 'bold', borderRadius: 20 }}
								>
									Upload Data
								</Button>
							</Upload>
						</Col>
					</Row>
					<Row style={{ marginTop: 20 }}>
						<Col span={24}>
							<Card
								style={{
									borderRadius: 20,
									boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
								}}
								title={
									<label
										style={{
											fontWeight: 'bold',
											color: 'grey',
											textAlign: 'left',
										}}
									>
										<Row>
											<Col span={4}>Name</Col>
											<Col span={4}>Received Date</Col>
											<Col span={4}>Byte Size</Col>
											<Col span={4}>Type</Col>
											<Col span={4}>Tags</Col>
											<Col span={4}>Actions</Col>
										</Row>
									</label>
								}
							>
								<div style={{ textAlign: 'left' }}>
									<Row align='middle'>
										<Col span={4}>Flight 228 Data Logs</Col>
										<Col span={4}>2020-09-01 19:42:20.328</Col>
										<Col span={4}>75 KB</Col>
										<Col span={4}>application/zip</Col>
										<Col style={{ color: 'green' }} span={4}>
											OK
										</Col>
										<Col span={4}>
											<Button type='link'>
												<CloudDownloadOutlined style={{ fontSize: 24 }} />
											</Button>
										</Col>
									</Row>
									<Row align='middle'>
										<Col span={4}>Flight 1233 Data Logs</Col>
										<Col span={4}>2020-09-01 19:42:20.328</Col>
										<Col span={4}>75 KB</Col>
										<Col span={4}>application/zip</Col>
										<Col style={{ color: 'green' }} span={4}>
											OK
										</Col>
										<Col span={4}>
											<Button type='link'>
												<CloudDownloadOutlined style={{ fontSize: 24 }} />
											</Button>
										</Col>
									</Row>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</Content>
		</Fragment>
	);
};

DataLakePage.propTypes = {};

export default DataLakePage;
