import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "@/styles/pages/call_for_papers.module.scss";

function authors() {
    return (
        <PageLayout title={"Authors | Chandicon 2026"}>
            <h1 className={styles.heading}>Authors</h1>
            <div className={styles.submission}>
                <h2>Submission Details</h2>
                <div className={styles.submission_details}>
                    Authors are requested to submit their original research
                    papers in{" "}
                    <a
                        href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                        target="_blank"
                    >
                        IEEE format
                    </a>{" "}
                    through the{" "}
                    <a
                        href="https://cmt3.research.microsoft.com/INDISCON2026/"
                        target="_blank"
                    >
                        submission link
                    </a>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Paper Specifications</h2>
                <div className={styles.submission_details}>
                    Use IEEE template to meet formatting requirements. Your
                    paper must comply with the following:
                    <ul>
                        <li>
                            <FaArrowRight /> Paper Length: Maximum 6 pages
                        </li>
                        <li>
                            <FaArrowRight /> Paper Size: US Letter (8.5&rdquo; x
                            11&rdquo;)
                        </li>
                        <li>
                            <FaArrowRight />
                            Fonts: Embed ALL fonts in your PDF file. Avoid the
                            use of Type 3 fonts.
                        </li>
                        <li>
                            <FaArrowRight /> File Format: Adobe PDF (.pdf)
                        </li>
                        <li>
                            <FaArrowRight /> Allowed File Size: 2.0Mb
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT page number your paper.
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT apply security settings to
                            your PDF file.
                        </li>
                    </ul>
                    <p className={styles.special_note}>
                        <b>Note:</b> Deviations from the above paper
                        specifications will result in rejection of your
                        submission.
                    </p>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Final Submission Procedure</h2>
                <div className={styles.submission_details}>
                    Use IEEE template to meet formatting requirements. Your
                    paper must comply with the following:
                    <ul>
                        <li>
                            <FaArrowRight /> Pay for conference registration
                            here: IEEE CHANDICON 2026 registration site
                        </li>
                        <li>
                            <FaArrowRight /> Final submission is REQUIRED, even
                            if you do not intend to make any changes to your
                            original submission.
                        </li>
                        <li>
                            <FaArrowRight />
                            BEFORE YOU PROCEED, carefully read the Author
                            Information page to ensure that your submission
                            meets the guidelines.
                        </li>
                        <li>
                            <FaArrowRight /> Prepare a copy of your paper in PDF
                            format using our templates
                        </li>
                        <li>
                            <FaArrowRight /> MANDATORY: Make sure your PDF file
                            meets IEEE Xplore compliance by following the
                            instructions on the PDF Express page. IEEE Xplore
                            link will be provided later.
                        </li>
                        <li>
                            <FaArrowRight /> Log in using the same username and
                            password you created during your initial submission.
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT apply security settings to
                            your PDF file.
                        </li>
                    </ul>
                    <p className={styles.special_note}>
                        <b>MANDATORY:</b> You must pay for conference
                        registration BEFORE you will be allowed to upload your
                        final paper. You will need your registration code in
                        order to proceed. Prospective authors are requested to
                        submit full length paper no longer than six (6) pages.
                        The paper must clearly state the objectives of the work,
                        its significance in the advancement of scientific and
                        technical knowledge.
                    </p>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Plagiarism Policy</h2>
                <div className={styles.submission_details}>
                    <a
                        href=" https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/"
                        target="_blank"
                    >
                        Click here
                    </a>{" "}
                    for IEEE policy on plagiarism, guidelines for AI generated
                    text etc.
                    <br />
                    <br />
                    <b>Note</b>: Papers presented in the Conference, duly accepted after peer review, will be eligible for submission for further consideration of publishing in the IEEE Xplore, subject to maintenance of quality, and post-conference scrutiny of response of Conference Organizers to Technical Program of Questionnaire (TPQ) on the Conference.
                </div>
            </div>
        <br/>
         <br/>               
            <div className={styles.submission}>
                <h2>Camera Ready Paper Submission Guidelines</h2>
                <div className={styles.submission_details}>
                    Authors are requested to carefully read the guidelines before submitting
                        Camera ready paper. Click {" "}
                    <a
                        href="/Instructions for Camera Ready Submission Guidelines.pdf"
                        target="_blank"
                    >
                        here
                    </a>{" "}
                    for the guidelines.
                </div>
            </div>
                            
            <div className={styles.paper_wrapper}>
                <div className={styles.register}>
                    <a
                        href="https://cmt3.research.microsoft.com/INDISCON2026/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <button>Submit your Camera Ready paper</button>
                    </a>
                </div>
                <div className={styles.register}>
                    <a
                        href="https://web.ticketdude.app/e/72"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <button>Conference Registration</button>
                    </a>
                </div>
            </div>
        </PageLayout>
    );
}

export default authors;
