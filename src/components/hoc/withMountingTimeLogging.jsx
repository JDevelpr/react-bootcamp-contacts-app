import React, { Component } from "react";

const withMountingTimeLogging = (WrappedComponent) => {
	class WithMountingTimeLogging extends Component {
		constructor(props) {
			super(props);
			this.startTime = null;
		}

		componentDidMount() {
			const endTime = performance.now();
			const mountingTime = endTime - this.startTime;
			console.log(`${WrappedComponent.name} tardó ${mountingTime.toFixed(2)} ms en montarse.`);
		}

		render() {
			this.startTime = performance.now();
			return <WrappedComponent {...this.props} />;
		}
	}

	WithMountingTimeLogging.displayName = `WithMountingTimeLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

	return WithMountingTimeLogging;
};

export default withMountingTimeLogging;