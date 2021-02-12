import 'styles/main.css';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { UndrawNewsletter } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';
import MyTextField from 'Components/Form/MyTextField';
import MyTextArea from 'Components/Form/MyTextArea';
import { useBreakpoints } from "react-use-breakpoints";
import MyButton from 'Components/Form/MyButton';

function ContactForm() {

    const [fullname, setFullname] = useState("")
    const [from, setFrom] = useState("")
    const [message, setMessage] = useState("")

    const sendMail = () => {
        const send = require('gmail-send')({
            user: 'kanasoft.contact@gmail.com',
            pass: 'xeQfav-rigqyg-gocju3',
            to: 'kanasoft.contact@gmail.com',
            subject: 'Contact Us',
            replyTo: from
        });

        send()
            .then(({ result, full }) => console.log(result))
            .catch((error) => console.error('ERROR', error))
            ;
    }

    return (
        <form className="w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <MyTextField label="Full Name" placehodler="John Doe" value={fullname} setValue={setFullname} containerClassName="w-full" inputClassName="w-full" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MyTextField label="Email" placehodler="johndoe@example.com" value={from} setValue={setFrom} containerClassName="w-full" inputClassName="w-full" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextArea label="Message" placehodler="Write your message here..." value={message} setValue={setMessage} containerClassName="w-full" inputClassName="w-full" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyButton title={"Send"} onClick={sendMail} className="w-full mt-4 p-5" />
                    </Grid>
                </Grid>
            </div>
        </form>
    );
}

export default function ContactUs() {

    const { breakpoint } = useBreakpoints();
    const breakPointToImageSize = {
        xs: 300,
        sm: 300,
        md: 340,
        lg: 500,
        xl: 640
    }

    return (
        <div className="p-16 mb-20 w-full">
            <Grid container spacing={10} justify="center" alignItems="center">
                <Grid item xs={12} md={5} lg={6}>
                    <Grid container spacing={10} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <p className="h-auto text-center text-6xl lg:text-8xl font-bold break-words">Contact Us</p>
                        </Grid>
                        <Grid item xs={12}>
                            <UndrawNewsletter height={breakPointToImageSize[breakpoint]} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} lg={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </div>
    );

}