import 'styles/main.css';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MyTextField from 'Components/Form/MyTextField';
import MyTextArea from 'Components/Form/MyTextArea';
import MyButton from 'Components/Form/MyButton';
import FadeIn from 'react-fade-in';
import emailjs from 'emailjs-com';
import { REGEX, SERVICE_ID, TEMPLATE_ID, USER_ID } from 'Config/mail';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ContactForm() {

    const [fullname, setFullname] = useState("")
    const [from, setFrom] = useState("")
    const [message, setMessage] = useState("")

    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const sendMail = () => {
        const templateParams = {
            fullname: fullname,
            from: from,
            message: message
        };

        const [valid, errorMessage] = checkValidity()
        if (valid) {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
                .then(function (response) {
                    setFullname("")
                    setFrom("")
                    setMessage("")
                    setModalMessage("Mail sent! 💌")
                    setOpen(true)
                }, function (error) {
                    setModalMessage("Some error occured 😕")
                    setOpen(true)
                });
        } else {
            setModalMessage(String(errorMessage))
            setOpen(true)
        }
    }

    const checkValidity = () => {
        let errMessage = ""
        if (!REGEX.fullname.test(fullname)) {
            errMessage += "Your full name is invalid. "
        }
        if (!REGEX.mail.test(from.toLowerCase())) {
            errMessage += "Your email is invalid. "
        }
        if (message.length === 0) {
            errMessage += "Your message can't be empty. "
        }

        return [errMessage === "", errMessage]
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

            <Modal open={open} onClose={() => setOpen(false)} center showCloseIcon={false}>
                <h2>{modalMessage}</h2>
            </Modal>
        </form>
    );
}

export default function ContactUs() {
    return (
        <div className="page-padding w-full">
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <FadeIn transitionDuration={2000}>
                        <p className="h-auto text-center text-6xl lg:text-8xl font-bold break-words">Contact Us</p>
                    </FadeIn>
                </Grid>
                <Grid item xs={12} sm={10} md={7} lg={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </div>
    );
}
