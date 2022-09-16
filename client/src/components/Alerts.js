import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Bootstrap
import { Alert } from 'antd';

const Alerts = ({ alerts }) => {
	return (
		<Fragment>
			{alerts !== null &&
				alerts.length > 0 &&
				alerts.map((alert) => (
					<Alert
						key={alert.id}
						message={`${alert.msg}`}
						type={`${alert.alertType}`}
					/>
				))}
		</Fragment>
	);
};

Alerts.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alerts);
