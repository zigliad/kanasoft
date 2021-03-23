import 'styles/main.css';
import { useEffect, useRef } from 'react';
import Logo from 'Images/Other/kanasoft-logo.svg';
import { Grid } from '@material-ui/core';
import News from 'Components/Other/News';
import { FiArrowDown } from 'react-icons/fi';
import PagePreview from 'Components/Other/PagePreview';
import { UndrawInstantSupport } from 'react-undraw-illustrations';
import { UndrawArtLover } from 'react-undraw-illustrations';
import { UndrawTeamSpirit } from 'react-undraw-illustrations';
import { UndrawMessaging } from 'react-undraw-illustrations';
import { UndrawPresentation } from 'react-undraw-illustrations';
import { UndrawBusinessDeal } from 'react-undraw-illustrations';
import { UndrawBrowser } from 'react-undraw-illustrations';
import { UndrawExperts } from 'react-undraw-illustrations';
import { UndrawMobileBrowsers } from 'react-undraw-illustrations';
import FadeIn from 'react-fade-in';
import { UIStore } from 'UIStore';
import { useHistory } from 'react-router-dom';
import { LINKS_DATA, STORY_URI, COMPANY_NAME } from 'Config/config';
import { KANASOFT_STOCK_SYMBOL } from 'Config/stock';

export default function MainPage() {

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })

    const animationTransition = 3000

    UIStore.update(s => {
        s.transparentNavbar = true;
    })

    const history = useHistory();
    const toStock = () => {
        UIStore.update(s => {
            s.transparentNavbar = false;
        })
        history.push(LINKS_DATA.stock.to)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        return () => {
            console.log(history.action)
            if (history.action === "POP") {
                console.log("ASOFIAOFI")
                UIStore.update(s => {
                    s.transparentNavbar = false;
                })
            }
        }
    }, [history])

    return (
        <div>
            <div className="bg-gradient-to-br from-indigo-900 to-ks-dark-purple h-screen p-24 flex flex-col justify-center items-center w-full">
                <Grid container spacing={3} justify="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <FadeIn transitionDuration={animationTransition}>
                            <div className="text-white h-auto font-bold break-words flex flex-col justify-center items-center w-full mt-14 md:mt-0">
                                <div className="">
                                    <p className="text-4xl">We Are</p>
                                    <p className="text-6xl md:text-8xl mt-2">{COMPANY_NAME}</p>
                                    <div className="flex flex-row justify-between">
                                        <button className="pl-1 focus:outline-none focus:border-0" onClick={toStock}>
                                            <p className="text-xl font-medium text-ks-green hover:text-ks-orange transition mt-2">{KANASOFT_STOCK_SYMBOL}</p>
                                        </button>
                                        <a target="_blank" href={STORY_URI}
                                            className="text-xl font-medium text-ks-green hover:text-ks-orange transition mt-2">
                                            Our Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <FadeIn transitionDuration={animationTransition}>
                            <div className="flex flex-col justify-center items-center w-full mt-12 md:mt-0">
                                <img
                                    className="h-80 md:h-96"
                                    src={Logo}
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
            <div className="page-padding bg-gray-200 dark:bg-gray-600" ref={myRef}>
                <PagePreview title="Hi, Investors" buttonTitle="Let's talk business" link="/stock" undrawComponent={UndrawBusinessDeal} />
            </div>
            <div className="page-padding">
                <PagePreview title="Kanasoft In The Press" buttonTitle="Take a look" link="/press" undrawComponent={UndrawMobileBrowsers} opposite />
            </div>
            <div className="page-padding bg-gray-200 dark:bg-gray-600">
                <PagePreview title="Check Our Products" buttonTitle="Take a tour" link="/products" undrawComponent={UndrawArtLover} />
            </div>
            <div className="page-padding">
                <PagePreview title="Meet Our Clients" buttonTitle="Take a look" link="/clients" undrawComponent={UndrawExperts} opposite />
            </div>
            <div className="page-padding bg-gray-200 dark:bg-gray-600">
                <PagePreview title="Meet Our Heroes" buttonTitle="Our team" link="/team" undrawComponent={UndrawInstantSupport} />
            </div>
            <div className="page-padding">
                <PagePreview title="Know Us Better" buttonTitle="About us" link="/about" undrawComponent={UndrawTeamSpirit} opposite />
            </div>
            <div className="page-padding bg-gray-200 dark:bg-gray-600">
                <PagePreview title="Keep In Touch" buttonTitle="Contact us" link="/contact" undrawComponent={UndrawMessaging} />
            </div>
        </div>
    );
}
