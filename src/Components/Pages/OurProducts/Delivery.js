import Carousel from 'react-multi-carousel';
import 'styles/main.css';

import Img1 from 'Images/Delivery/ks-delivery-1.jpg';
import Img2 from 'Images/Delivery/ks-delivery-2.jpg';
import Img3 from 'Images/Delivery/ks-delivery-3.jpg';
import Img4 from 'Images/Delivery/ks-delivery-4.jpg';
import Img5 from 'Images/Delivery/ks-delivery-5.jpg';

export default function Delivery() {

    const responsive = {
        xl: {
            breakpoint: { max: 3000, min: 1600 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1600, min: 600 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        }
    };

    const data = [Img1, Img2, Img3, Img4, Img5]
    const content = data.map((theImage, index) => <img src={theImage} className="pointer-events-none"/>)

    return (
        <div>
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
