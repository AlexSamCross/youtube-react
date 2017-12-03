import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import MainVideo from './MainVideo.js';

const API_KEY = process.env.API_KEY;
const URL = `https://www.googleapis.com/youtube/v3/search?q=connorMcgregor&maxResults=4&part=snippet&key=${API_KEY}`;

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			videos: []
		}
	}

	componentDidMount () {
		request
			.get(URL)
			.end((err, res) => {
				console.log(res.body.items);
			})
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar />
				<MainVideo />
				{/* <SuggestedVideos /> */}
			</div>
		);
	}
}

export default App;