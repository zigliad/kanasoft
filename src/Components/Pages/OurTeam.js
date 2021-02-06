import 'styles/main.css';
import Grid from '@material-ui/core/Grid';
import FigureCard from 'Components/Other/FigureCard';
import { TEAM_DATA } from 'Config/team';
import { UndrawHangOut } from 'react-undraw-illustrations';
import { useBreakpoints } from "react-use-breakpoints";
import PageHeader from 'Components/Other/PageHeader';

export default function OurTeam() {

    const { breakpoint, windowSize } = useBreakpoints();

    const figures = TEAM_DATA.map(figure => {
        return (
            <Grid item xs={12} md={6} lg={4}>
                <FigureCard figure={figure} />
            </Grid>
        )
    })

    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    return (
        <div className="p-16 mb-20">
            <PageHeader title="Meet Our People" undrawComponent={UndrawHangOut}/>
            <Grid container spacing={10}>
                {figures}
            </Grid>
        </div>
    );
}
