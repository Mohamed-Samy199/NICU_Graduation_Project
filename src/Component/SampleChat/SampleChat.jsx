import React from 'react'
import { useState } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
    background: "#fff",
    fontFamily: 'Helvetica Neue',
    headerBgColor: "#30cab0",
    headerFontColor: "#fff",
    headerFontSize: "30px",
    botBubbleColor: "#30cab0",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#30cab0",
};
const steps = [
    {
        id: "BOT/intro",
        message: "Hello, Welcome to Nicu Care",
        trigger: "CHOICES/intro",
    },
    {
        id: "CHOICES/intro",
        options: [
            { label: "Good Morning", trigger: "BOT/pleasantry" },
            { label: "Good Evening", trigger: "BOT/pleasantry" }],
    },
    {
        id: "BOT/pleasantry",
        message: "Lovely to Meet You!",
        trigger: "BOT/introduce-self",
    },
    {
        id: "BOT/introduce-self",
        message: "I'm a Simple ChatBot To Help You.",
        trigger: "BOT/ask-question",
    },

    {
        id: "BOT/ask-question",
        message: "Please Enter Your Name!",
        trigger: "2",
    },
    {
        id: "2",
        user: true,
        trigger: "3",
    },
    {
        id: "3",
        message: "Hi {previousValue}",
        trigger: "4",
    },
    {
        id: "4",
        message: "Please Tell Me What You Want from this Nicu",
        trigger: "choose",
    },
    {
        id: "choose",
        options: [
            {
                value: "Medical consultation with a doctor",
                label: "Medical consultation with a doctor",
                trigger: "Medical consultation with a doctor",
            },
            {
                value: "Book a nicu for a sick child now",
                label: "Book a nicu for a sick child now",
                trigger: "Book a nicu for a sick child now",
            },
            {
                value: "Follow-up of the health status of one of the children",
                label: "Follow-up of the health status of one of the children",
                trigger: "Follow-up of the health status of one of the children"
            },
        ],
    },
    {
        id: "Medical consultation with a doctor",
        message:
            "All staff are available to serve your needs. A phone call will be made with you within an hour from now, so keep an eye on your phone to speak directly with one of the doctors.",
        end: true,
    },
    {
        id: "Book a nicu for a sick child now",
        message:
            "Thank you for trusting us, and we promise you full health care for your child under the leaders of the medical team cadres in a morning and night shift work cycle, as you have the full ability to check on your child with the latest means.",
        end: true,
    },
    {
        id: "Follow-up of the health status of one of the children",
        message:
            "We provide you and the children with all means of care and complete reassurance 24 hours a day through artificial intelligence devices and medical equipment related to the child’s medical condition sensors and sending messages to follow up wherever you are.",
        end: true,
    },
]

const SampleChat = () => {
    const [currentMessage, setCurrentMessage] = useState(steps);

    const handleNewMessage = (message) => {
        setCurrentMessage(message);
    };
    return (
        <ThemeProvider theme={theme} >

            <ChatBot steps={currentMessage} handleNewUserMessage={handleNewMessage} headerTitle="Store Chat" width="350px" floating='true' placeholder='Write the Message ...' />
        </ThemeProvider>
    )
}

export default SampleChat
