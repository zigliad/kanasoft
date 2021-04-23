import Grid from '@material-ui/core/Grid';
import 'styles/main.css';
import { useBreakpoints } from "react-use-breakpoints";
import MyButton from 'Components/Form/MyButton';
import { useHistory } from 'react-router-dom';
import { UIStore } from 'UIStore';
import { LINKS_DATA } from 'Config/config';
import Undraw from 'react-undraw';

export default function PagePreview({ title, undraw, buttonTitle = undefined, link = undefined, opposite = false }) {

    const history = useHistory();
    const linkTo = () => {
        if (link) {
            UIStore.update(s => {
                s.transparentNavbar = (link == LINKS_DATA.main.to);
            })
            history.push(link)
            window.scrollTo(0, 0)
        }
    }

    const { breakpoint } = useBreakpoints();
    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    const imagePart = (
        <Grid item xs={12} md={6} lg={5}>
            <div className="p-6">
                <Undraw name={undraw} height={`${breakPointToImageSize[breakpoint]}`} />
            </div>
        </Grid>
    );

    return (
        <Grid container justify="space-around" alignItems="center">
            {
                opposite &&
                imagePart
            }
            <Grid item xs={12} md={6} lg={5}>
                <div className="p-6 items-center md:items-start flex flex-col">
                    <p className="md:text-left h-auto text-center text-4xl lg:text-6xl font-bold break-words">{title}</p>
                    {
                        buttonTitle &&
                        <div className="mt-6">
                            <MyButton title={buttonTitle} onClick={linkTo} />
                        </div>
                    }
                </div>
            </Grid>
            {
                !opposite &&
                imagePart
            }
        </Grid>
    );
}
