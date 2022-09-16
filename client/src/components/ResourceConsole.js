import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Card } from 'antd';

const ResourceConsole = (props) => {
	return (
		<Fragment>
			<div style={{ textAlign: 'left' }}>
				<Card
					title={
						<label style={{ fontWeight: 'bold', color: 'grey' }}>
							Resource Console
						</label>
					}
					style={{
						borderRadius: 20,
						boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
					}}
				>
					<p>
						Number of Apps: <span style={{ fontWeight: 'bold' }}>0</span>
					</p>
					<p>
						Number of Credits Used:{' '}
						<span style={{ fontWeight: 'bold' }}>0</span>
					</p>
					<p>
						Number of Credits Available:{' '}
						<span style={{ fontWeight: 'bold' }}>0</span>
					</p>
					<p>
						Total Number of Credits Available:{' '}
						<span style={{ fontWeight: 'bold' }}>0</span>
					</p>
				</Card>
			</div>
		</Fragment>
	);
};

ResourceConsole.propTypes = {};

export default ResourceConsole;
