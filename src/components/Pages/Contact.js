import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';


const fields= {
	sections:[
		[
			{name: 'name', elementName: 'input', type: 'text',  placeholder: 'Your name'},
			{name: 'email', elementName: 'input', type: 'email',  placeholder: 'Your email'},
			{name: 'phone', elementName: 'input', type: 'text',  placeholder: 'Your phone number'},
		],
		[
			{name: 'message', elementName: 'textarea', type: 'text',  placeholder: 'Type your message'}
		]
	]
}

class Contact extends Component {

	render(){

		return(
			<div>
				<section className="page-section" id="contact">
				   	<div className="container">
						<div className="row">
						   	<div className="col-lg-12 text-center">
								<h2 className="section-heading text-uppercase">Contact Us</h2>
								<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					    	</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
						    		<div className="row">
								   {fields.sections.map((section, sectionIndex) => {
									   console.log("Rendering section", sectionIndex, "with", section);
									   return(
										   <div className='col-md-6' key= {sectionIndex}>
											   {section.map((field, i) => {
												   return <Field
													   {...field}
													   key={i}
													   value={this.props.values[field.name]}
													   name={field.name}
													   onChange={this.props.handleChange}
													   onBlur={this.props.handleBlur}
													   touched={(this.props.touched[field.name])}
													   errors={this.props.errors[field.name]}
												    />
											   })}
										   </div>
									   )
								   })}
									<div className="clearfix"></div>
										<div className="col-lg-12 text-center">
												<div id="success"></div>
												<button
													className="btn btn-primary btn-xl text-uppercase"
													type="submit"
													>Send Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default withFormik({
	mapPropsToValues:() => ({
		name: '',
		email: '',
		phone: '',
		message: '',
	}),
	validationSchema: Yup.object().shape({
		name: Yup.string().min(3, 'You should type at least 3 symbols').required('You must fill in your name'),
		email: Yup.string().email('This is not a valid email').required('We need your email to reply'),
		phone: Yup.string()
			.min(10, 'Please provide at least 10 digits phone number')
			.max(20, 'Your phone number is too long')
			.required('Please, add your phone number')
			.matches(/^[0-9]*$/, 'Please, use digits only'),
		message: Yup.string().min(200, 'Your message should be at least 200 symbols')
			.required('Message is required'),
	}),
	handleSubmit:(values, {setSubmitting}) => {
		alert('You submitted the form', JSON.stringify(values));
	}
})(Contact);
