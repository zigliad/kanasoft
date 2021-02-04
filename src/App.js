import './styles/main.css'

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-white">
			<div className="h-96 w-2/3 bg-gradient-to-r from-green-400 to-green-500  rounded-3xl">
				<div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 rounded-3xl transform -rotate-2">
					{/* <p className="text-white text-8xl font-sans">
						CannaSoft
					</p> */}
				</div>
			</div>
			{/* <div className="flex flex-col items-center bg-gradient-to-r from-green-400 to-green-500 h-screen">
				<div className="bg-white h-4/5 w-1/3 rounded-full">

				</div>
				<p className="font-sans text-8xl py-4 text-white">
					We are CannaSoft.
				</p>
			</div> */}
		</div>
	);
}

export default App;
