import 'styles/main.css';
import Grid from '@material-ui/core/Grid';

export default function FigureCard({ figure }) {

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <Grid container>
                <Grid item xs={12} className="flex justify-center items-center">
                    <img className="inline object-cover w-36 h-36 rounded-full ring-4 ring-ks-purple ring-offset-4" src={figure.image} alt="" />
                </Grid>
                <Grid item xs={12}>
                    <div className="pt-6 md:p-8 text-center space-y-4">
                        <p className="text-lg font-semibold">
                            {figure.info}
                        </p>
                        <figcaption className="font-medium">
                            <div className="text-ks-purple font-semibold">
                                {figure.name}
                            </div>
                            <div className="text-gray-500">
                                {figure.job}
                            </div>
                        </figcaption>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
