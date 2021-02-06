import 'styles/main.css';
import Grid from '@material-ui/core/Grid';
import { useBreakpoints } from "react-use-breakpoints";

export default function PageHeader({ title, undrawComponent }) {

    const { breakpoint } = useBreakpoints();
    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    const UndrawComponent = undrawComponent

    return (
        <div className="mb-20">
            <Grid container spacing={10} justify="space-around" alignItems="center">
                <Grid item xs={12} sm={12} md={5} lg={4}>
                    <p className="md:text-left h-auto text-center text-8xl font-bold break-words">{title}</p>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={6}>
                    <UndrawComponent height={breakPointToImageSize[breakpoint]} />
                </Grid>
            </Grid>
        </div>
    );
}
