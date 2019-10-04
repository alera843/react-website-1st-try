import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/27416712847_eb8e27b1a7_k.jpg'

//re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';

class Home extends Component {

	render(){

		return (
		<div>
			<Header
				title = "Welcome to the website"
				subtitle = "It's nice to meet you!"
				buttonText = "Show me more"
				link = '/services'
				showButton =  {true}
				image = {image}
			/>
			<Services />
			<Portfolio />
			<Team />
			<Timeline />
		</div>
		)
	}
}

export default Home;
