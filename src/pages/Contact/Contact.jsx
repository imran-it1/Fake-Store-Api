const Contact = () => {
	return (
		<div className="w-2/4 mx-auto">
			<header className="text-center py-5">
				<h1 className="text-3xl font-bold">Contact Us</h1>
			</header>
			<main className="p-8">
				<section className="bg-white rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4">
						Get in Touch
					</h2>
					<form>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 font-bold"
							>
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Name"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-bold"
							>
								Email:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your Email"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="block text-gray-700 font-bold"
							>
								Message:
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Your Message"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>
						<button
							type="submit"
							className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
						>
							Submit
						</button>
					</form>
				</section>
			</main>
			<footer className="text-center py-4">
				&copy; {new Date().getFullYear()} My Shop™
			</footer>
		</div>
	);
};

export default Contact;
