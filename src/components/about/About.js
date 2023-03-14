import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile-picture/profile.png';

const useStyles = makeStyles((theme) => ({
    main: {
        maxWidth: '100vw',
        marginTop: '3em',
        marginBottom: "auto",
    },
}));

export const About = () => {
    const classes = useStyles();
    const greetings = "Hi there 👋🏽";
    const aboutme = `My name is ${FirstName} and I am a Software Developer living in Berlin. 
  Excited about creating things and making a social impact.

  `;

    return (
        <section id="about">
            <Container component="main" className={classes.main} maxWidth="md">
                <div className="about">
                    <div className="_img"
                        style={{
                            background: "url(" + profile + ")",
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                    <div className="_content_wrapper">
                        <Typography component='h2' variant="h5">
                            <TextDecrypt text={`${greetings}`} />
                        </Typography>
                        <p className="aboutme">
                            {aboutme}
                        </p>
                        <a href="#contact" className="contact-btn">
                            <i className="fas fa-terminal"></i>
                            <Typography component='span'> Send me a message.</Typography>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
