const Account = () => {
	return (
		<div className="w-2/4 mx-auto">
			<form>
				<header className="text-center py-5">
					<h1 className="text-3xl font-bold">Sign Up</h1>
				</header>
				<div className="mb-6">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your email
					</label>
					<input
						type="email"
						id="email"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						placeholder="example@.com"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Your password
					</label>
					<input
						type="password"
						id="password"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="repeat-password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Repeat password
					</label>
					<input
						type="password"
						id="repeat-password"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required
					/>
				</div>
				<div className="flex items-start mb-6">
					<div className="flex items-center h-5">
						<input
							id="terms"
							type="checkbox"
							value=""
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						I agree with the{' '}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							terms and conditions
						</a>
					</label>
				</div>
				<button
					type="submit"
					className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
				>
					Register New Account
				</button>
			</form>
		</div>
	);
};

export default Account;
