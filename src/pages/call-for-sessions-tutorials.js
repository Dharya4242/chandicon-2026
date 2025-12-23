import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/call_for_papers.module.scss";
// import { TRACKS } from "@/data/tracks";

function CallForSessions() {
    return (
        <PageLayout title={"Call for Special Session Proposals | Chandicon 2026"}>
            <h1 className={styles.heading}>Call for Special Session Proposals</h1>
            <p className={styles.subheading}>
            CHANDICON 2026 will provide an excellent forum for the dissemination 
            of the latest research and ideas in a wide range of Science, 
            Engineering and Technology. The conference is keen to disseminate 
            state-of-the-art knowledge on specialist and latest topics related 
            to the theme of the conference through dedicated Special Sessions.
            </p>
            <br/>
            <p className={styles.subheading}>
                Submission of proposals for such Special Sessions 
                for the CHANDICON 2026 are welcome.</p>
            <br/><br/>
            <h2 className={styles.subheading}>Guidelines for Special Session Proposers</h2>
            <p className={styles.subheading}>
            The Special Sessions should provide the conference attendees with 
            an insight view of research topics that are not covered by the regular tracks. 
            They can also be focused on particular research niches within the greater topic 
            of a regular track; however, it is important that such sessions offer sufficient 
            diversity from the main topic. Therefore, the proposers are invited to highlight 
            the difference between the contents of their submission and the regular tracks.
            <br/>
            Special Session Organizers are expected to operate within their 
            professional networks to promote their session and CHANDICON 2026. 
            Having an invited paper/presentation will help to attract more interest, 
            hence it is strongly encouraged. Accepted special sessions will have 
            4-6 oral presentations. A Special Session can be one of the following:
            </p>
            <br/>
            <h3 className={styles.subheading}>(a) Special Session with an invited presentation</h3>

            <p className={styles.subheading}>
            The organizers invite a leading researcher on the topic of the 
            Special Session who provides an oral presentation in the Special Session. 
            The organizers provide the name of the presenter together with an email 
            confirming their acceptance and an abstract. No full paper is requested, 
            nor will the abstract be published in IEEE Xplore.
            </p>
            <br/>
            <h3 className={styles.subheading}>(b) Special Session with an invited paper</h3>
            <p className={styles.subheading}>
            The organizers invite a leading researcher on the topic of the Special Session 
            who provides an oral presentation in the Special Session. The organizers provide 
            the name of the presenter together with an e-mail confirming their acceptance. 
            The presenter, together with possible co-authors, prepares a full paper and 
            submits it to the CHANDICON 2026 conference by the stipulated deadline. 
            The paper will be peer-reviewed and must reflect an innovation providing a 
            significant novelty to the state-of-the-art in its (sub)field. The paper, 
            if accepted and presented, will be submitted for the possible publication in IEEE Xplore.
            <br/>
            <strong>Note:</strong> No financial assistance is available from the conference to support the 
            participation of the presenter of an invited paper/presentation. 
            The Special Session Organizer and all presenters in the session are required to 
            register and pay for the conference. 
            </p>
            
            <br/><br/>
            <h2 className={styles.subheading}>Special Session Proposal Contents</h2>
            <p className={styles.subheading}>
                Special session proposals should be a maximum of 2 pages and 
                must address the items listed below:
            </p>
            <h3 className={styles.subheading}>(a) Special Session Details</h3>
            <p className={styles.subheading}>
                <ul style={{ paddingLeft: '30px' }}>
                    <li> Title of the Special Session </li>
                    <li> Significance of the topic </li>
                    <li> Special Session organizer&apos;s name, affiliation, and a brief biodata </li>
                </ul>
            </p>
            <br/>
            <h3 className={styles.subheading}>(b) Invited paper/presentation Details (optional)</h3>
            <p className={styles.subheading}>
                <ul style={{ paddingLeft: '30px' }}>
                    <li> Title </li>
                    <li> Authors and their affiliation </li>
                    <li> Abstract </li>
                </ul>
            </p>
            <br/>
            <h3 className={styles.subheading}>(c) Reviewers</h3>
            <p className={styles.subheading}>
            Please provide details of reviewers who may be able to help 
            review papers for the proposed Special Session. 
            A suitable list of willing reviewers (name, affiliation, e-mail) 
            will be required and should be provided by the Special Session organizer 
            before the start of the review process. 
            <br/>
            List of reviewers in the Special Session proposal is optional at the time of submission.

            </p>
            
            <br/><br/>
            <h2 className={styles.subheading}>Special Session Proposal Timelines and Process</h2>
            <br/>
                <ul style={{ paddingLeft: '20px' }}>
                    <li> Proposal Submission Date: <span style={{ textDecoration: 'line-through' }}>March 15, 2026</span> <span style={{ color: 'red'}}>[Extended]: April 15, 2026 </span></li>
                    <li> To submit a proposal for a Special Session, the Special Session Organizer 
                        should send their proposal by e-mail at ieeeindiscon2026@gmail.com. </li>
                </ul>
            
            <br/><br/>
            <h1 className={styles.heading}>Call for Tutorial/Workshop Proposals</h1>
            <p className={styles.subheading}>
            CHANDICON 2026 solicits proposals for Tutorials/Workshops of 90 minutes 
            (one session) that complement the regular program with clear and focused 
            coverage of new and emerging topics within the scope of the conference. 
            Tutorials/Workshops are an opportunity for researchers from academia and industry
             to learn about state-of-the-art research. 
            </p>
            
            <br/>
            <h2 className={styles.subheading}>Tutorial/Workshop Proposal Format</h2>
            <p className={styles.subheading}>
            Tutorial/Workshop proposals should have a maximum of 4 pages. 
            Proposals should address all of the sub-headings below:
            <ol style={{ paddingLeft: '20px' }}>
                <li> Title of the tutorial/workshop </li>
                <li> Abstract (200 words maximum) to publicize the tutorial on the website</li>
                <li> Length of the tutorial/workshop: maximum up to 90 minutes</li>
                <li> Names, addresses, and a short biography (up to 200 words) of each instructor(s)</li>
                <li> Novelty, that the tutorial/workshop will address, emphasizing its 
                    significance and timeliness</li>
                <li> An outline of the tutorial/workshop content</li>
                <li> Intended audience</li>
            </ol>
            </p>
            
            <br/>
            <h2 className={styles.subheading}>Tutorial/Workshop Proposal Submissions</h2>
            <p className={styles.subheading}>           
                The Proposals for tutorial/workshop should be submitted by e-mail to 
                ieeeindiscon2026@gmail.com by  <span style={{ textDecoration: 'line-through' }}>March 31, 2026</span> <span style={{ color: 'red'}}> April 15, 2026 </span>. 
            </p> 
            <br/>
            <br/>

      </PageLayout>
        
    );
}

export default CallForSessions;
