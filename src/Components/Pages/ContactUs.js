import 'styles/main.css';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { UndrawNewsletter } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';
import MyTextField from 'Components/Form/MyTextField';
import MyTextArea from 'Components/Form/MyTextArea';
import { useBreakpoints } from "react-use-breakpoints";
import MyButton from 'Components/Form/MyButton';
import FadeIn from 'react-fade-in';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from 'Config/mail';

function ContactForm() {

    const [fullname, setFullname] = useState("")
    const [from, setFrom] = useState("")
    const [message, setMessage] = useState("")

    const sendMail = () => {
        const templateParams = {
            fullname: fullname,
            from: from,
            message: message
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setFullname("")
                setFrom("")
                setMessage("")        
            }, function (error) {
                console.log('FAILED...', error);
            });
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
        <div className="p-16 w-full">
            <Grid container spacing={10} justify="center" alignItems="center">
                <Grid item xs={12} md={5} lg={6}>
                    <FadeIn transitionDuration={2000}>
                        <Grid container spacing={10} justify="center" alignItems="center">

                            <Grid item xs={12}>
                                <p className="h-auto text-center text-6xl lg:text-8xl font-bold break-words">Contact Us</p>
                            </Grid>
                            <Grid item xs={12}>
                                <UndrawNewsletter height={breakPointToImageSize[breakpoint]} />
                            </Grid>
                        </Grid>
                    </FadeIn>
                </Grid>
                <Grid item xs={12} md={7} lg={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </div>
    );
}
