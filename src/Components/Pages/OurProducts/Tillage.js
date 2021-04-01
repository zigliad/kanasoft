import 'styles/main.css';
import Carousel from 'react-multi-carousel';

import Img1 from 'Images/Knowledge/knowledge_1.png';
import Img2 from 'Images/Knowledge/knowledge_2.png';
import Img3 from 'Images/Knowledge/knowledge_3.png';
import Img4 from 'Images/Knowledge/knowledge_4.png';

export default function Tillage() {

    const responsive = {
        xl: {
            breakpoint: { max: 3000, min: 1600 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1600, min: 600 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        }
    };

    const data = [Img1, Img2, Img3, Img4]
    const content = data.map((theImage, index) => <img src={theImage} className="pointer-events-none" />)

    return (
        <div>
            <p className="info-text mb-8">
                Everyone today knows that agriculture is an exact science.
                The more information you have the better crop you are going to get, so we decided to combine the joined knowledge of thousands of growers throughout the world, to provide the best results.
                Our growing recommendation system is a machine learning powered platform that learns from each grower. We do that by automatically receiving information about the growing process from all
                growers, using the system to allow our machine learning algorithm to fine tune the growing process to an exact formula for success.
                We give growers a recommendation program including irrigation cycles, fertilization recommendations, lighting cycles and growth milestones.
            </p>
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
                    itemClass="p-2 md:p-6 mb-8"
                >
                    {content}
                </Carousel>
            </div>
        </div>
    );
}
