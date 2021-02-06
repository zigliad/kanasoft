import 'styles/main.css';
import Grid from '@material-ui/core/Grid';

export default function FigureCard({ figure }) {

    return (
        // <div className="bg-gradient-to-r from-light-blue-400 to-blue-500 rounded-3xl transform rotate-6">
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl transform -rotate-0">
                <Grid container>
                    <Grid xs={12} className="flex justify-center items-center">
                        <img className="inline object-cover w-36 h-36 rounded-full ring-4 ring-light-blue-400 ring-offset-4" src={figure.image} alt="" />
                    </Grid>
                    <Grid xs={12}>
                        <div className="pt-6 md:p-8 text-center space-y-4">
                            <p className="text-lg font-semibold">
                                {figure.info}
                            </p>
                            <figcaption className="font-medium">
                                <div className="text-blue-500 dark:text-blue-300">
                                    {figure.name}
                                </div>
                                <div className="text-gray-500 dark:text-gray-200">
                                    {figure.job}
                                </div>
                            </figcaption>
                        </div>
                    </Grid>
                </Grid>
            </div>
        // </div>
    )
}
