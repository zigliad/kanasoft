import 'styles/main.css';
// import { ReactComponent as Logo } from 'Images/Other/kanasoft-logo.svg';
import Logo from 'Images/Other/kanasoft-logo.svg';
import { Grid } from '@material-ui/core';
import { useBreakpoints } from "react-use-breakpoints";
import News from 'Components/Other/News';
import { FiArrowDown } from 'react-icons/fi';
import { UndrawNews } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';

export default function MainPage() {

    const { breakpoint } = useBreakpoints();
    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    return (
        <div>

            <div className="bg-gradient-to-br to-ks-dark-purple from-indigo-900 h-screen p-24 flex flex-col justify-center items-center w-full">
                <Grid container spacing={10} justify="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <div className="text-white h-auto font-bold break-words flex flex-col justify-center items-center w-full">
                            <div className="">
                                <p className="text-4xl">We Are</p>
                                <p className="text-6xl md:text-8xl mt-2">KANASOFT</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <div className="flex flex-col justify-center items-center w-full">
                            <img
                                className="h-96"
                                src={Logo}
                                alt="website logo"
                            />
                        </div>
                    </Grid>
                </Grid>
                <div className="absolute bottom-12 animate-bounce">
                    <FiArrowDown className="text-white w-6 h-6"/>
                </div>
            </div>
            <div className="p-16 mb-20">
                <PageHeader title="Press Releases" undrawComponent={UndrawNews}/>
                <News />
            </div>
        </div>
    );
}
