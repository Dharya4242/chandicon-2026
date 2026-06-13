import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "@/styles/pages/call_for_papers.module.scss";

import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

function authors({ papers }) {

    const renderPaperGrid = () => {

        const columns = 5;

        const rows = Math.ceil(
            papers.length / columns
        );

        return (
            <table className={styles.paperGrid}>
                <thead>
                    <tr>
                        {Array.from(
                            { length: columns },
                            (_, index) => (
                                <React.Fragment key={index}>
                                    <th>PAPER ID</th>
                                    <th>TYPE</th>

                                    {index !== columns - 1 && (
                                        <th className={styles.spacer}></th>
                                    )}
                                </React.Fragment>
                            )
                        )}
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: rows }, (_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from(
                                { length: columns },
                                (_, colIndex) => {

                                    const index =
                                        rowIndex +
                                        colIndex * rows;

                                    const paper = papers[index];

                                    return (
                                        <React.Fragment key={colIndex}>

                                            <td>
                                                {paper
                                                    ? paper["PAPER ID"]
                                                    : ""}
                                            </td>

                                            <td>
                                                {paper
                                                    ? paper["TYPE OF PRESENTATION"]
                                                    : ""}
                                            </td>

                                            {colIndex !== columns - 1 && (
                                                <td
                                                    className={
                                                        styles.spacer
                                                    }
                                                ></td>
                                            )}

                                        </React.Fragment>
                                    );
                                }
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <PageLayout title={"Authors | Chandicon 2026"}>
            <h1 className={styles.heading}>Authors</h1>

            <div className={styles.submission}>
                <h2>Submission Details</h2>

                <div className={styles.submission_details}>
                    Authors are requested to submit their original
                    research papers in{" "}

                    <a
                        href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                        target="_blank"
                    >
                        IEEE format
                    </a>{" "}

                    through the{" "}

                    <a
                        href="https://cmt3.research.microsoft.com/CHANDICON2026/Submission/Index"
                        target="_blank"
                    >
                        submission link.
                    </a>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Paper Specifications</h2>

                <div className={styles.submission_details}>
                    Use IEEE template to meet formatting requirements.
                    Your paper must comply with the following:

                    <ul>
                        <li>
                            <FaArrowRight />
                            Paper Length: Maximum 6 pages
                        </li>

                        <li>
                            <FaArrowRight />
                            Paper Size: US Letter (8.5&rdquo; x
                            11&rdquo;)
                        </li>

                        <li>
                            <FaArrowRight />
                            Fonts: Embed ALL fonts in your PDF file.
                            Avoid the use of Type 3 fonts.
                        </li>

                        <li>
                            <FaArrowRight />
                            File Format: PDF (.pdf)
                        </li>

                        <li>
                            <FaArrowRight />
                            Allowed File Size: 2 MB
                        </li>

                        <li>
                            <FaArrowRight />
                            DO NOT page number your paper.
                        </li>

                        <li>
                            <FaArrowRight />
                            DO NOT apply security settings to your PDF
                            file.
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
                    Use IEEE template to meet formatting requirements.
                    Your paper must comply with the following:

                    <ul>
                        <li>
                            <FaArrowRight />
                            Pay for conference registration here:
                            IEEE CHANDICON 2026 registration site
                            (link will be provided soon)
                        </li>

                        <li>
                            <FaArrowRight />
                            Final submission is REQUIRED, even if you
                            do not intend to make any changes to your
                            original submission.
                        </li>

                        <li>
                            <FaArrowRight />
                            BEFORE YOU PROCEED, carefully read the
                            Author Information page to ensure that your
                            submission meets the guidelines.
                        </li>

                        <li>
                            <FaArrowRight />
                            Prepare a copy of your paper in PDF format
                            using IEEE template.
                        </li>

                        <li>
                            <FaArrowRight />
                            MANDATORY: Make sure your PDF file meets
                            IEEE Xplore compliance by following the
                            instructions on the PDF Express page.
                            IEEE Xplore link will be provided later.
                        </li>

                        <li>
                            <FaArrowRight />
                            Log in using the same username and password
                            you created during your initial submission.
                        </li>

                        <li>
                            <FaArrowRight />
                            DO NOT apply security settings to your PDF
                            file.
                        </li>
                    </ul>

                    <p className={styles.special_note}>
                        <b>MANDATORY:</b> You must pay for conference
                        registration BEFORE you will be allowed to
                        upload your final paper. You will need your
                        registration code in order to proceed.
                        Prospective authors are requested to submit
                        full length paper no longer than six (6)
                        pages. The paper must clearly state the
                        objectives of the work, its significance in the
                        advancement of scientific and technical
                        knowledge.
                    </p>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Plagiarism Policy</h2>

                <div className={styles.submission_details}>
                    <a
                        href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/"
                        target="_blank"
                    >
                        Click here
                    </a>{" "}

                    for IEEE policy on plagiarism, guidelines for AI
                    generated text etc.

                    <br />
                    <br />

                    <b>Note</b>: Papers presented in the Conference,
                    duly accepted after peer review, will be eligible
                    for submission for further consideration of
                    publishing in the IEEE Xplore, subject to
                    maintenance of quality, and post-conference
                    scrutiny of response of Conference Organizers to
                    Technical Program of Questionnaire (TPQ) on the
                    Conference.
                </div>
            </div>

            <br />
            <br />

            <div
                id="accepted-papers"
                className={styles.submission}
            >
                <h2>
                    Presentation Type for Accepted Papers
                </h2>

                {renderPaperGrid()}
            </div>

            <br/>

            <p>
                The Microsoft CMT service is being used for managing
                the peer-reviewing process for this conference. This
                service is provided for free by Microsoft and they bear
                all expenses, including costs for Azure cloud services
                as well as for software development and support.
            </p>

            <div className={styles.paper_wrapper}>
                <div className={styles.register}>
                    <a
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    </a>
                </div>

                <div className={styles.register}>
                    <a
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    </a>
                </div>
            </div>
        </PageLayout>
    );
}

export async function getStaticProps() {
    const filePath = path.join(
        process.cwd(),
        "public",
        "ORAL and POSTER.xlsx"
    );

    const file = fs.readFileSync(filePath);

    const workbook = XLSX.read(file, {
        type: "buffer",
    });

    const sheetName = workbook.SheetNames[0];

    const papers = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetName]
    );

    return {
        props: {
            papers,
        },
    };
}

export default authors;