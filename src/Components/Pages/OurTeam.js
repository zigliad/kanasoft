import 'styles/main.css';
import Grid from '@material-ui/core/Grid';
import FigureCard from 'Components/Other/FigureCard';
import { TEAM_DATA } from 'Config/team';
import { UndrawHangOut } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';

export default function OurTeam() {

    const figures = TEAM_DATA.map(figure => {
        return (
            <Grid item xs={12} md={6} lg={4}>
                <FigureCard figure={figure} />
            </Grid>
        )
    })

    return (
        <div className="p-16 mb-20">
            <PageHeader title="Meet Our People" undrawComponent={UndrawHangOut}/>
            <Grid container spacing={10}>
                {figures}
            </Grid>
        </div>
    );
}
