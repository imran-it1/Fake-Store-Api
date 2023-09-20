import editlogo from '../../assets/EditProfile.png';

const EditProfile = () => {
	return (
		<div>
			<main className="w-1/2 mx-auto">
				<section className="rounded-lg">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Edit Profile
					</h2>

					<div className="relative w-28 h-28 bg-gradient-to-tl from-green-400 via-violet-600 to-indigo-600 rounded-full mx-auto">
						<div className="absolute bottom-5 left-16">
							<img
								className=" w-6"
								src={editlogo}
								alt="edit -icon"
							/>
						</div>
					</div>
					<h2 className="text-base font-semibold mb-4 text-center">
						Change Profile
					</h2>

					<form>
						<div className="mb-5">
							<label
								htmlFor="email"
								className="block text-gray-700 font-bold"
							>
								Change Your Mail
							</label>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-bold"
							>
								Previous Email:
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
								htmlFor="email"
								className="block text-gray-700 font-bold"
							>
								New Email:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your Email"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>

						<div className="mb-5">
							<label
								htmlFor="email"
								className="block text-gray-700 font-bold"
							>
								Change username:
							</label>

							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your username"
								className="border rounded-lg py-2 px-3 w-full"
							/>
						</div>

						<button
							type="submit"
							className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
						>
							Confirm
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default EditProfile;
