import "styles/main.css";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
	DOCUMENT_CATEGORIES,
	NEWS_URI,
	YAHOO_FINANCE_PRESSES,
} from "Config/config";
import axios from "axios";

function NewsCard(props) {
	const { title, message, link, imgUri } = props.data;
	return (
		<div className="bg-gray-200 rounded-xl shadow-lg w-full max-h-96 overflow-auto relative">
			{imgUri && (
				<div className="h-44 rounded-t-xl">
					<img
						src={imgUri}
						className="max-w-full max-h-full min-w-full min-h-full rounded-t-xl object-cover"
					/>
				</div>
			)}
			<div className="p-8">
				{link && (
					<div className="mb-6">
						<a
							target="_blank"
							href={link}
							className="no-underline hover:underline text-ks-purple font-medium"
						>
							Read the article
						</a>
					</div>
				)}
				{title && <p className="text-2xl font-medium">{title}</p>}
				{message && <p className="text-lg mt-2">{message}</p>}
			</div>
		</div>
	);
}

export default function News() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const newsCards = data.map((news, index) => (
		<NewsCard data={news} key={index} />
	));

	useEffect(() => {
		const init = async () => {
			setLoading(true);
			const result = await axios.get(YAHOO_FINANCE_PRESSES);
			if (result && result.data) {
				const finalData = result.data.list
					.filter(
						(record) =>
							DOCUMENT_CATEGORIES.indexOf(
								record.document_category
							) >= 0
					)
					.map((record) => {
						return {
							title: "Continuous Disclosure",
							link: record.url,
							message: new Date(
								record.public_date
							).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							}),
						};
					});
				setData(finalData);
			}
			setLoading(false);
		};
		init();
	}, []);

	if (loading) {
		return <div></div>;
	} else {
		return (
			<div className="">
				{data.length === 0 && (
					<div className="w-full flex flex-col items-center">
						<p className="text-3xl font-medium text-center">Oops</p>
						<p className="text-2xl font-medium text-center">
							We don't have any press releases yet, but please
							keep in touch!
						</p>
					</div>
				)}
				{data.length > 0 && (
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={true}
						responsive={responsive}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={4000}
						keyBoardControl={true}
						transitionDuration={500}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						dotListClass=""
						itemClass="p-2 md:p-6 mb-8"
					>
						{newsCards}
					</Carousel>
				)}
			</div>
		);
	}
}
