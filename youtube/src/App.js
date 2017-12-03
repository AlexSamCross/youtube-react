import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import MainVideo from './MainVideo.js';

const API_KEY = process.env.API_KEY;
const youtubePrefix = `https://www.youtube.com/embed`;
const URL = `https://www.googleapis.com/youtube/v3/search?q=connorMcgregor&maxResults=4&part=snippet&key=${API_KEY}`;

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			mainVideoId: '',
			videos: []
		}
	}

	componentDidMount () {
		request
			.get(URL)
			.end((err, res) => {
				// console.log(res.body.items[0].id.videoId);
				err ? console.error(err) : this.setState({mainVideo: res.body.items[0].id.videoId})
			})
	}

	render () {
		return (
			<div>
				<Header />
				<SearchBar />
				<MainVideo mainVideo={`${youtubePrefix}/${this.state.mainVideo}`} />
				{/* <SuggestedVideos /> */}
			</div>
		);
	}
}

export default App;