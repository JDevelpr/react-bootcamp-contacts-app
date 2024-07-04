import React, { Component } from "react";

const withMountingTimeLogging = (WrappedComponent) => {
	return class extends Component {
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
	};
};

export default withMountingTimeLogging;