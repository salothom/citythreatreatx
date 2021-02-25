

import React from 'react';
import './main.css'
import { Grid, Row, Col } from "react-bootstrap";

class Classes extends React.Component {



    render() {

        return (
            <div class="from-edge">
                <ClassElements />
                <ClassDeets />
            </div>

        )

    }
}

const classes =
    [{
        'name': 'AUDITIONING FOR THE WORKING ACTOR',
        'info': 'A fundamental and no-nonsense class teaching Austin stage actors what is needed in mastering a perfect audition. Includes discussion of different auditioning techniques and methods of preparation; ways to handle the dreaded cold reading; how to project your desired image and transforming to look the part; presentation and critique of audition material and help on finding good selections; doing your homework with contacts for headshots, updating resumes, actor networking and where to find local auditions and casting.',
        'moreInfo': ' CLASS EXTRA: Attendance of four sessions includes your invitation to participate in City Theatre’s Speak It Loud Showcase performed one Saturday afternoon each month. Invite agents, directors, fans to come take a look at your work on stage.',
        'times': 'Classes Saturday 9:30 – noon.',
        'dates': 'Beginning February 13 – Ongoing. ',
        'led': 'Led by CTC Artistic Director Andy Berkovsky.'
    },
    {
        'name': 'ACTUALLY, ACTING!',
        'info': 'A conventional approach on the discipline of acting coaching actors through monologue and scene work, handling different theatre genres and acting styles, character development, text analysis, and mastering the use of the body and voice. ',
        'times': 'N/A',
        'dates': 'Beginning February 13',
        'led': 'Led by CTC Artistic Director Andy Berkovsky.'

    }
    ]

const ClassDeets = () => {
    const deets = ['Developing body consciousness, control, and awareness',
        'Relaxing and overcoming fear of the moment',
        'Developing focus and concentration skills',
        'Creating objectives, purpose, and intentions',
        'Creating inner imagery and finding emotional triggers',
        'Creating the character’s physical life',
        'Exploring the setting',
        'Experiencing sensory work',
        'Discovering your personal discipline and practicing moment to moment living in the performance.']

    const classDetails = [];

    for (let i = 0; i < deets.length; i++) {
        classDetails.push(<ul><li>{deets[i]}</li></ul>
        )
    }
    return (
        <div>{classDetails}</div>

    )

}


const ClassElements = () => {
    const classOptions = [];
    for (let i = 0; i < classes.length; i++) {
        classOptions.push(
            <Col s={12} md={6}>
                <div class="buffer-top">
                    <Row>
                        <Col s={12} md={12}><h3 class="center" >{classes[i].name}</h3></Col>
                        <Col s={12} md={12}><div class="center" >{classes[i].dates}</div></Col>
                        <Col s={12} md={12}><div class="center" >{classes[i].times}</div></Col>
                        <Col s={12} md={12}>{classes[i].info}</Col>
                        <Col s={12} md={12}>{classes[i].moreInfo}</Col>
                        <Col s={12} md={12}><div class="center buffer-top" >{classes[i].led}</div></Col>
                    </Row>
                </div>
            </Col>

        )
    }
    return (
        <Row>{classOptions}</Row>
    )
}

export default Classes