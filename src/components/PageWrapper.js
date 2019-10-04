import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({link, text}) => (
	<li className="nav-item">
		<Link className="nav-link js-scroll-trigger" to={link}>
			{text}
		</Link>
	</li>
);

class PageWrapper extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
					<div className="container">
						<Link className="navbar-brand js-scroll-trigger" to="/">My Page</Link>
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							Menu
							<i className="fas fa-bars"></i>
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav text-uppercase ml-auto">
								<NavItem link='/services' text='Services' />
								<NavItem link='/portfolio' text='Portfolio' />
								<NavItem link='/about' text='About' />
								<NavItem link='/team' text='Team' />
								<NavItem link='/contact' text='Contact' />
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default PageWrapper;
