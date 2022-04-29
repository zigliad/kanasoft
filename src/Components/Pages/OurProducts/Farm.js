import "styles/main.css";
import ReactPlayer from "react-player";

export default function Farm() {
	return (
		<div>
			<p className="info-text mb-8">
				The company operates on 3 parallel levels as part of its plans
				to enter the market for growing and selling medical cannabis: 1.
				The company is working to transfer the initial permit for the
				cultivation and multiplication of medical cannabis according to
				the partnership agreement with the Bzizinsky family, after its
				transfer, the company will operate for the planning and
				construction of a growing facility in Moshav Kochav Michael. 2.
				The company has completed the planning and placement of an
				internal breeding facility and has applied for a breeding and
				breeding license for this facility. 3. The company has submitted
				an application for a license to trade in medical cannabis
				"without contact with the substance" known as a constructive
				license, after receiving it the company will be able to
				implement agreements it has signed with various growers for
				marketing and sales of the company's private label. You can get
				an impression of the simulation of the internal cannabis
				facility on which the company is currently working.
			</p>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url="https://www.youtube.com/watch?v=We_sYoNiZro"
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
}
