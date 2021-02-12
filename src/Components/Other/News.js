import 'styles/main.css';
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NEWS_URI } from 'Config/config';
import axios from 'axios';

function NewsCard(props) {
    const { title, message, link, imgUri } = props.data
    return (
        <div className="bg-white rounded-xl shadow-xl w-full max-h-96 overflow-auto">
            {
                imgUri &&
                <div className="h-44 rounded-t-xl">
                    <img src={imgUri}
                        className="max-w-full max-h-full min-w-full min-h-full rounded-t-xl object-cover" />
                </div>
            }
            <div className="p-8">
                {
                    title &&
                    <p className="text-2xl font-medium">{title}</p>
                }
                {
                    message &&
                    <p className="text-lg mt-2">{message}</p>
                }
                {
                    link &&
                    <div className="mt-6">
                        <a target="_blank" href={link}
                            className="no-underline hover:underline text-ks-purple font-medium">
                            Read more
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default function News() {

    const [data, setData] = useState([])

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
        }
    };

    const newsCards = data.map((news, index) => <NewsCard data={news} key={index} />)

    useEffect(() => {
        const init = async () => {
            axios({
                url: NEWS_URI, //your url
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                response.data.text().then(text => {
                    try {
                        setData(JSON.parse(text))
                    } catch { }
                })
            });
        }
        init()
    }, [])

    return (
        <div className="">
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
                itemClass="p-6 mb-8"
            >
                {newsCards}
            </Carousel>
        </div>
    );
}
