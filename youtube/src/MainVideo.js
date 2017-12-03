import React, { Component } from 'react';

class MainVideo extends Component {
	render() {
		return (
			<video style={{display: 'block'}} width="320" height="240" controls ></video>
		);
	}
}

export default MainVideo;