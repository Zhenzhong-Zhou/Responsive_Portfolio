import {useRef, useState} from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Phone from "../../assets/icons/phone.png";
import Email from "../../assets/icons/email.png";
import Address from "../../assets/icons/address.png";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(process.env.REACT_APP_SERVER_ID,
			process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
			.then((result) => {
				console.log(result.text);
				setDone(true);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<div className={"contact"}>
			<div className={"contact-bg"}/>
			<div className={"contact-wrapper"}>
				<div className={"contact-left"}>
					<h1 className={"contact-title"}>Let's discuss your project</h1>
					<div className={"contact-info"}>
						<div className={"contact-info-item"}>
							<img src={Phone} alt={"Info Icon"} className={"contact-icon"}/>
							+ 1 123 456 7890
						</div>
						<div className={"contact-info-item"}>
							<img src={Email} alt={"Info Icon"} className={"contact-icon"}/>
							contact@gmail.com
						</div>
						<div className={"contact-info-item"}>
							<img src={Address} alt={"Info Icon"} className={"contact-icon"}/>
							123 Right Street, Saskatoon, SK, S1A 0B2, Canada
						</div>
					</div>
				</div>
				<div className={"contact-right"}>
					<p className={"contact-desc"}>
						<b>What's your story?</b> Get in touch.
						Always available for contacting if right job comes along.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input type={"text"} placeholder={"Name"} name={"user_name"}/>
						<input type={"text"} placeholder={"Subject"} name={"user_subject"}/>
						<input type={"text"} placeholder={"Email"} name={"user_email"}/>
						<textarea rows={"5"} placeholder={"Message"} name={"message"}/>
						<button>Submit</button>
						{done && "Thank you!"}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;