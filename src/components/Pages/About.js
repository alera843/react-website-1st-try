import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

const TimelineItem = ({
	inverted=false,
	panelDisabled=false,
	imageComponent,
	imageSrc,
	imageAlt='',
	heading,
	subheading,
	body
}) => (
	<li className={inverted ? "timeline-inverted" : undefined}>
		<div className="timeline-image">
			{imageComponent ?
				imageComponent
				:
				<img className="rounded-circle img-fluid" src={imageSrc} alt={imageAlt} />
			}
		</div>
		{!panelDisabled &&
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>{heading}</h4>
					<h4 className="subheading">{subheading}</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">{body}</p>
				</div>
			</div>
		}
	</li>
);

class About extends Component {
	render() {
		return (
			<div>
				<Header
					title="About Us"
					subtitle="It's really a gerat story"
					showButton={false}
					image={image}
				/>
				<section className="page-section" id="about">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="section-heading text-uppercase">About</h2>
								<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="timeline">
									<TimelineItem
										imageSrc="img/about/1.jpg"
										heading='2009-2011'
										subheading='Our Humble Beginnings'
										body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
									/>
									<TimelineItem
										inverted
										imageSrc="img/about/2.jpg"
										heading='March 2011'
										subheading='An Agency is Born'
										body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
									/>
									<TimelineItem
										imageSrc="img/about/3.jpg"
										heading='December 2012'
										subheading='Transition to Full Service'
										body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
									/>
									<TimelineItem
										inverted
										imageSrc="img/about/4.jpg"
										heading='July 2014'
										subheading='Phase Two Expansion'
										body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
									/>
									<TimelineItem
										panelDisabled
										imageComponent={
											<h4>Be Part
												<br />Of Our
												<br />Story!
											</h4>
										}
									/>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default About;
