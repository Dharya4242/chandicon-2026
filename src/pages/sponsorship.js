import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/sponsorship.module.scss";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

function Sponsorship() {
    return (
        <PageLayout title={"Sponsorship | Chandicon'26"}>
            <h1 className={styles.heading}>Sponsorship</h1>

            <p className={styles.description}>
                CHANDICON 2026 offers you a unique and focused way to showcase
                your service, technology and solutions, explore opportunities to
                outreach your potential customers and touch base with them. Our
                Sponsorship packages are provided with a set of special
                privileges and a clear focus on your promotion during the
                conference. We are excited to invite you to participate as an
                exhibitor or sponsor at our upcoming{" "}
                <span className={styles.emphasis}>
                    CHANDICON 2026 at Punjab Engineering College, Chandigarh,
                    India.
                </span>{" "}
                We encourage you to take advantage of the enclosed exhibitor and
                sponsorship opportunities while they last as we have a limited
                number of exhibitor spaces and they will be filled on a
                first-come, first-served basis. Becoming a sponsor/exhibitors
                you will become a part of one of the largest technology
                conferences in asia pacific, world&apos;s largest organization
                for technology professionals, network with 700+ participants -
                top officials from India and global tech industry;
                representatives from Several countries; strong pre/post event
                media & online coverage; multiple industry/academia partnership
                opportunities; join our team of 20+ long term industry partners.
            </p>

            <h2 className={styles.subheading}>Sponsoring Packages</h2>
            <p className={styles.description}>
                Five categories of sponsorship packages are available to suit
                your needs at CHANDICON 2026. Sponsorship packages offer you a
                unique and focused way to showcase your service, technology and
                solutions, explore opportunities to outreach your potential
                customers and touch base with them.
            </p>

            {/* <h3>Sponsorship Options</h3> */}

            <TableContainer sx={{ margin: "20px 0" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>
                                Sponsorship grade
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>
                                Amount of Contribution
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell>Title Sponsors</TableCell>
                            <TableCell>INR 5,00,000</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Platinum Sponsors</TableCell>
                            <TableCell>INR 3,00,000</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Gold Sponsors</TableCell>
                            <TableCell>INR 2,00,000</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Silver Sponsors</TableCell>
                            <TableCell>INR 1,00,000</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Academic Partners</TableCell>
                            <TableCell>INR 50,000</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Exhibitors</TableCell>
                            <TableCell>INR 50,000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <h2 className={styles.subheading}>
                Sponsorship Benefits (Grade specific)
            </h2>

            <div className={styles.sponsor_class}>
                <h3>Title sponsors</h3>
                <p>
                    Sponsorship amount: <span>Rs. 5,00,000/-</span>
                </p>

                <p>
                    Special mention &ldquo;Presented by&rdquo;, Inclusion in PR
                    Activities, Inaugural ceremony presence, 10 minutes
                    Presentation slot about the Company/Organisation, Social
                    media mentions, Main stage panels, Podium, Name of the
                    sponsor as well as its logo (Please provide a high
                    resolution jpg file in a CD at the time of the contract)
                    will appear in all announcement materials/documents
                    including banner, poster, proceedings of the conference.
                    Sponsors will be provided space (please mention your
                    requirement at the time of the contract up to 5mx5m) at the
                    very strategic place of the conference venue to showcase
                    their products. Compilmentry 10 registrations.
                </p>
            </div>

            <div className={styles.sponsor_class}>
                <h3>Platinum sponsors</h3>
                <p>
                    Sponsorship amount: <span>Rs. 3,00,000/-</span>
                </p>

                <p>
                    Main stage panels, Podium, Inaugural ceremony presence, Gala
                    dinner Invite, Social media mentions, Inclusion in PR
                    Activity, Name of the sponsor as well as its logo (Please
                    provide a high resolution jpg file in a CD at the time of
                    the contract) will appear in all announcement
                    materials/documents including banner, poster, proceedings of
                    the conference. Sponsors will be provided space (please
                    mention your requirement at the time of the contract upto
                    4mX4m) at the very strategic place of the conference venue
                    to showcase their products. Acknowledgement to the sponsors
                    during inaugural welcome/closing event of the conference.
                    Compilmentry 5 registrations.
                </p>
            </div>

            <div className={styles.sponsor_class}>
                <h3>Gold sponsors</h3>
                <p>
                    Sponsorship amount: <span>Rs. 2,00,000/-</span>
                </p>

                <p>
                    Name of the sponsor as well as its logo (Please provide a
                    high resolution jpg file in a CD at the time of the
                    contract) will appear in all announcement materials
                    including banner, poster, hoarding of the conference.
                    Sponsors will be provided space (Please mention your
                    requirement at the time of the contract upto 4mX4m) at the
                    exhibition venue of the conference to showcase their
                    products. Acknowledgement to the sponsors during inaugural
                    welcome/closing event of the conference. Compilmentry 3
                    registrations.
                </p>
            </div>

            <div className={styles.sponsor_class}>
                <h3>Silver sponsors</h3>
                <p>
                    Sponsorship amount: <span>Rs. 1,00,000/-</span>
                </p>

                <p>
                    Sponsors name will be displayed in the event banner of the
                    conference. Sponsors will be provided space (Please mention
                    your requirement at the time of the contract upto 3mX3m) at
                    the exhibition venue of the conference to showcase their
                    products. Compilmentry 2 registrations.
                </p>
            </div>

            <div className={styles.sponsor_class}>
                <h3>Academic Partners</h3>
                <p>
                    Sponsorship amount: <span>Rs. 50,000/-</span>
                </p>

                <p>
                    This option is only open to the Academic
                    institution/Colleges/Universities where IEEE Student
                    branches exist. Partner name will be displayed in the event
                    banner of the conference. Partner will be provided space
                    (Please mention your requirement at the time of the contract
                    upto 3mX3m) at the exhibition venue of the conference to
                    showcase their Activities and Innovations. Compilmentry 1
                    registration.
                </p>
            </div>

            <div className={styles.sponsor_class}>
                <h3>Exhibitors</h3>
                <p>
                    Sponsorship amount: <span>Rs. 50,000/-</span>
                </p>


                <p>
                    Exhibitors will be provided space at the exhibition venue of
                    the conference to showcase their Activities and Innovations.
                    Compilmentry 1 registration.
                </p>
            </div>

            <p className={styles.note}>
                To secure participation, please write to us at
                ieeeindiscon2026@gmail.com
            </p>
            <p></p>

            {/* <h2 className={styles.subheading}>Fellowship/Travel Grants</h2>
            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                CHANDICON 2026 is pleased to offer financial support to the
                selected IEEE student first author for presenting their research
                work during CHANDICON 2026 Conference. The grant will be awarded
                to a limited number of applicants on a highly competitive basis.
                The grant will help to cover Conference registration fees or
                partial travel of the authors for attending the Conference. The
                decision regarding this grant will be taken by the Conference
                Fellowship Committee.
            </p> */}
        </PageLayout>
    );
}

export default Sponsorship;
