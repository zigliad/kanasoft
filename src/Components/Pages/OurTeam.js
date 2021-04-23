import 'styles/main.css';
import Grid from '@material-ui/core/Grid';
import FigureCard from 'Components/Other/FigureCard';
import { TEAM_DATA } from 'Config/team';
import PageHeader from 'Components/Other/PageHeader';

export default function OurTeam() {

    const figures = TEAM_DATA.map(figure => {
        return (
            <Grid item xs={12} md={6}>
                <FigureCard figure={figure} />
            </Grid>
        )
    })

    return (
        <div className="page-padding">
            <PageHeader title="Meet Our People" undraw="hang_out" />
            <Grid container spacing={4}>
                {figures}
            </Grid>
        </div>
    );
}
