import 'styles/main.css';
import Grid from '@material-ui/core/Grid';
import { useBreakpoints } from "react-use-breakpoints";
import FadeIn from 'react-fade-in';
import Undraw from 'react-undraw';

export default function PageHeader({ title, undraw }) {

    const { breakpoint } = useBreakpoints();
    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    return (
        <div className="mb-20">
            <FadeIn transitionDuration={2000}>
                <Grid container spacing={3} justify="space-around" alignItems="center">
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <p className="md:text-left h-auto text-center text-6xl lg:text-8xl font-bold break-words mb-4 md:mb-0">{title}</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={6}>
                        <Undraw name={undraw} height={`${breakPointToImageSize[breakpoint]}`} />
                    </Grid>
                </Grid>
            </FadeIn>
        </div>
    );
}
