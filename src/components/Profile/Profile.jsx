import avatar from '../../assets/Avatar.png';

const Profile = () => {
	return (
		<div>
			<main className="w-1/2 mx-auto">
				<section className="rounded-lg">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Profile
					</h2>

					<img
						className="w-20 h-20 mx-auto p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
						src={avatar}
						alt="Bordered avatar"
					/>

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
								Bio:
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Write about youself.."
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>

						<div className=" flex flex-col gap-2">
							<label
								htmlFor="message"
								className="block text-gray-700 font-bold"
							>
								Social Accoutns:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Linkdin"
								className="border rounded-lg py-2 px-3 w-full"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Facebook"
								className="border rounded-lg py-2 px-3 w-full"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Instagram"
								className="border rounded-lg py-2 px-3 w-full"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="GitHub"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>
						<button
							type="submit"
							className="bg-green-500 mt-5 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
						>
							Save
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default Profile;
