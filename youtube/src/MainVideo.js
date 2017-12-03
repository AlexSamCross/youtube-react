import React from 'react';

const MainVideo = (props) => {
	return (
			<iframe style={{display: 'block'}} width="320" height="240" src={props.mainVideo}></iframe>
	);
}

export default MainVideo;