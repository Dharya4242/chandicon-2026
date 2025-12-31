import React from "react";
import styles from "@/styles/pages/sponsorship.module.scss";
import PageLayout from "@/components/layout/PageLayout";

function fellowship() {
    return (
        <PageLayout title={"Fellowship | Chandicon 2026"}>
            <h2 className={styles.heading}>Travel Grants</h2>
            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                CHANDICON 2026 is pleased to offer financial support to the
                selected IEEE student member(s) (first author only) for presenting their research
                work during the conference. The grant will be awarded
                to a limited number of applicants on a highly competitive basis.
                The grant will help to cover conference registration fees or
                partial travel of the authors for attending the conference. The
                decision regarding this grant will be taken by the Conference
                Fellowship Committee.
            </p>

            <div>
                <h4>
                    The interested IEEE student member(s) (first author only) can email at{" "}
                    <span
                        style={{
                            textDecoration: "underline",
                            color: "rgb(48, 111, 160)",
                        }}
                    >
                        ieeechandicon@gmail.com
                    </span>{" "}
                    with the following details after acceptance of the paper:
                </h4>
                Paper ID:
                <br />
                Paper Title:
                <br />
                Authors Names and Affiliations (with country name):
                <br />
                Abstract:
                <br />
                Email :<br />
                Contact Number:
                <br />
            </div>

            <h2 className={styles.heading}>Awards</h2>

            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                Best Paper/Poster Awards will be presented to author&apos;s
                whose work represents groundbreaking research. The chairs of
                each track will nominate a set of top papers for the award, and
                these nominations will be reviewed by the committee. The committee will
                consider each nominated paper, its reviewers&apos; comments, and a
                nomination statement by the chairs of the respective track for Best Paper Awards.
            </p>

            
        </PageLayout>
    );
}

export default fellowship;
