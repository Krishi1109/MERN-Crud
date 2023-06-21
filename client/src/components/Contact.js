import React from "react";

const Contact = () => {
  return (
    <div>
        
		{/* <div className="container mb-5">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center">
					<h2 className="heading-section"> Us</h2>
				</div>
			</div>
			<div className="row ">
            <div className="row">
				<div className="col-md-4 p-3">
					<div className="form-group text-center">
						<h4>Name</h4> 
					</div>
				</div>
				<div className="col-md-4 p-3 p-3">
					<div className="form-group">
						<h4>Email</h4>
					</div>
				</div>
                <div className="col-md-4 p-3 p-3">
					<div className="form-group">
						<h4>Phone</h4>
					</div>
				</div>
											
			</div>
		</div>
        </div> */}



      <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center">
					<h2 className="heading-section">Contact Us</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="">
								<div className="contact-wrap ">
									<h3 className="mb-4"></h3>
									<div id="form-message-warning" className="mb-4"></div>
									<div id="form-message-success" className="mb-4">
										{/* Your message was sent, thank you! */}
									</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6 p-3">
												<div className="form-group">
													<label className="label" for="name"></label>
													<input type="text" className="form-control" name="name" id="name"
														placeholder="Name" />
												</div>
											</div>
											<div className="col-md-6 p-3 p-3">
												<div className="form-group">
													<label className="label" for="email"></label>
													<input type="email" className="form-control" name="email" id="email"
														placeholder="Email" />
												</div>
											</div>
											<div className="col-md-12 p-3">
												<div className="form-group">
													<label className="label" for="subject"></label>
													<input type="text" className="form-control" name="subject" id="subject"
														placeholder="Subject" />
												</div>
											</div>
											<div className="col-md-12 p-3">
												<div className="form-group">
													<label className="label" for="#"></label>
													<textarea name="message" className="form-control" id="message" cols="30"
														rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12 p-3">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary" />
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
};

export default Contact;
