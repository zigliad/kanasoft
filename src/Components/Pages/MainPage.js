import 'styles/main.css';
import { useRef } from 'react';
import Logo from 'Images/Other/kanasoft-logo.svg';
import { Grid } from '@material-ui/core';
import News from 'Components/Other/News';
import { FiArrowDown } from 'react-icons/fi';
import PagePreview from 'Components/Other/PagePreview';
import { UndrawInstantSupport } from 'react-undraw-illustrations';
import { UndrawArtLover } from 'react-undraw-illustrations';
import { UndrawTeamSpirit } from 'react-undraw-illustrations';
import { UndrawMessaging } from 'react-undraw-illustrations';
import { UndrawNews } from 'react-undraw-illustrations';
import { UndrawPressPlay } from 'react-undraw-illustrations';
import FadeIn from 'react-fade-in';

export default function MainPage() {

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })

    const animationTransition = 3000

    return (
        <div>
            <div className="bg-gradient-to-br from-indigo-900 to-ks-dark-purple h-screen p-24 flex flex-col justify-center items-center w-full">
                <Grid container spacing={3} justify="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <FadeIn transitionDuration={animationTransition}>
                            <div className="text-white h-auto font-bold break-words flex flex-col justify-center items-center w-full">
                                <div className="">
                                    <p className="text-4xl">We Are</p>
                                    <p className="text-6xl md:text-8xl mt-2">KANASOFT</p>
                                </div>
                            </div>
                        </FadeIn>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <FadeIn transitionDuration={animationTransition}>
                            <div className="flex flex-col justify-center items-center w-full">
                                <img
                                    className="h-80 md:h-96"
                                    src={Logo}
                                    alt="website logo"
                                />
                            </div>
                        </FadeIn>
                    </Grid>
                </Grid>
                <div className="absolute invisible md:visible md:bottom-12 animate-bounce">
                    <button onClick={executeScroll} className="focus:outline-none focus:border-0">
                        <FiArrowDown className="text-white w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="page-padding" ref={myRef}>
                <PagePreview title="Press Releases" undrawComponent={UndrawPressPlay} />
                <News />
            </div>
            <div className="page-padding bg-gray-200 dark:bg-gray-600">
                <PagePreview title="Check Our Products" buttonTitle="Take a tour" link="/products" undrawComponent={UndrawArtLover} />
            </div>
            <div className="page-padding">
                <PagePreview title="Meet Our Heroes" buttonTitle="Our team" link="/team" undrawComponent={UndrawInstantSupport} opposite />
            </div>
            <div className="page-padding bg-gray-200 dark:bg-gray-600">
                <PagePreview title="Know Us Better" buttonTitle="About us" link="/about" undrawComponent={UndrawTeamSpirit} />
            </div>
            <div className="page-padding">
                <PagePreview title="Keep In Touch" buttonTitle="Contact us" link="/contact" undrawComponent={UndrawMessaging} opposite />
            </div>
        </div>
    );
}
