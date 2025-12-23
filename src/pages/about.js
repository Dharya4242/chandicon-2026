/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "@/styles/pages/about.module.scss";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { getAssetName } from "@/util/githubPagesImagesUtil";

const prevEditionData = [
    {
        name: "IEEE CHANDICON 2023",
        venue: "GSSS Institute of Engineering & Technology for Women, Mysuru",
        dates: "August 5-7, 2023",
        theme: "Computational Intelligence and Learning Systems",
        link: "https://ieeexplore.ieee.org/xpl/conhome/10269798/proceeding",
    },
    {
        name: "IEEE CHANDICON 2022",
        venue: "KIIT Deemed to be University, Bhubaneswar",
        dates: "July 15-17, 2022",
        theme: "Impactful Innovations for Benefits of Society and Industry",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9862528/proceeding",
    },
    {
        name: "IEEE CHANDICON 2021",
        venue: "Visvesvaraya National Institute of Technology, Nagpur",
        dates: "August 27-29, 2021",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9581282/proceeding",
        theme: "Impactful innovations for the benefit of industry and society",
    },
    {
        name: "IEEE CHANDICON 2020",
        venue: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
        dates: "October 3-4, 2020",
        theme: "Smart and Sustainable Systems - Decade Ahead",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9344449/proceeding",
    },
];

function About() {
    return (
        <PageLayout title={"About Chandicon 2026 | Punjab Engineering College"}>
            <h1 className={styles.heading}>About us</h1>
            <div className={styles.about}>
                <div className={styles.description}>
                    <p className={styles.about_text}>
                        <span className={styles.emphasize}>CHANDICON</span> is 
                        1st annual international conference of IEEE Chandigarh Subsection.
                        CHANDICON 2026 scheduled during{" "}
                        <span className={styles.emphasize}>
                            August 20-22, 2026
                        </span>
                        , is being organized by IEEE Chandigarh Subsection along
                        with IEEE Delhi Section. The
                        conference will be hosted by{" "}
                        <span className={styles.emphasize}>
                            {" "}
                            Punjab Engineering College (Deemed to be
                            University), Chandigarh
                        </span>
                        . The conference aims to provide an interdisciplinary
                        platform for the academicians, researchers, industry
                        professionals and research scholars to exchange and
                        share their knowledge, experience & research.
                        Previous events organised by PEC & IEEE Chandigarh Subsection are:
                    </p>
                    {/* <a href="https://ieeexplore.ieee.org/xpl/conhome/1839985/all-proceedings">
                        Previous events organised by PEC & IEEE Chandigarh Subsection are: 
                         <FaExternalLinkAlt />{" "} 
                    </a> */}
                </div>

                {/* <div className={styles.img_wrapper}> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                        src={getAssetName("/assets/logos/chandicon-new-logo-withoutbg.png")}
                    <img
                        src={getAssetName(
                            "/assets/logos/chandicon-new-logo-withoutbg.png"
                        )}
                        alt="chandicon 2026"
                    />
                </div> */}
            </div>

            <div className={styles.spacer} />
            {/*
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="center"
                                colSpan={1}
                                style={{ fontWeight: "800" }}
                            >
                                Previous Edition
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                style={{ fontWeight: "800" }}
                            >
                                Dates
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                style={{ fontWeight: "800" }}
                            >
                                Venue
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                style={{ fontWeight: "800" }}
                            >
                                Theme
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prevEditionData.map((data, i) => (
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={data.name}
                            >
                                <TableCell
                                    align="center"
                                    colSpan={1}
                                    style={{ fontWeight: "400" }}
                                >
                                    <a
                                        className={styles.link}
                                        href={data.link}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        {data.name}
                                    </a>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan={1}
                                    style={{ fontWeight: "400" }}
                                >
                                    {data.dates}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan={1}
                                    style={{ fontWeight: "400" }}
                                >
                                    {data.venue}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan={1}
                                    style={{ fontWeight: "400" }}
                                >
                                    {data.theme}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            */}
            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>IEEE India Council</h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        IEEE is the world&apos;s largest professional
                        association dedicated to advancing technological
                        innovation and excellence for the benefit of humanity.
                        IEEE and its members inspire a global community through
                        IEEE&apos;s highly cited publications, conferences,
                        technology standards, and professional & educational
                        activities. IEEE India Council is the umbrella
                        organisation which coordinates IEEE activities in India.
                        Its primary aim is to assist and coordinate the
                        activities of local &ldquo;Sections&rdquo;, in order to
                        benefit mutually, and avoid duplication of effort and
                        resources. IEEE India Council was established on May 20,
                        1976 and is one of the five councils in the Asia Pacific
                        Region (Region #10 of IEEE).
                    </p>{" "}
                    <a
                        href="https://ieeeindiacouncil.org/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>

            <div className={styles.spacer} />

            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>IEEE Delhi Section</h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        The IEEE Delhi Section, established on May 13 1976 
                        (after being a Sub-section since 1974), is a major 
                        regional unit of IEEE Region 10 (Asia-Pacific) 
                        covering the northern part of India—including Rajasthan, 
                        Haryana, Punjab, Himachal Pradesh, the National Capital 
                        Territory of Delhi, and the Union Territories of Chandigarh, 
                        Jammu & Kashmir, and Ladakh. It supports a large 
                        professional community with thousands of active members
                        and organizes a wide range of activities-technical, 
                        professional, non-technical, humanitarian, and 
                        STEM programs-through its Section, subsections, 
                        technical chapters, affinity groups 
                        (like WIE and Young Professionals), and student 
                        branches, and in 2025 alone has recorded nearly 
                        2,000 events reported in vTools. The Section also 
                        celebrates its Golden Jubilee year, engages students 
                        and professionals in conferences such as DELCON, and 
                        fosters knowledge exchange and professional development 
                        across engineering and technology disciplines.
                    </p>{" "}
                    <a
                        href="https://ieeeindiacouncil.org/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>
            
            <div className={styles.spacer} />

            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>
                    IEEE Chandigarh Subsection
                </h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        IEEE Chandigarh Subsection is a technical society that
                        was established on June 18, 2005, under IEEE Delhi
                        Section of IEEE India Council. It provides a platform
                        for the students to enhance their technical skills and
                        professional growth. The subsection organizes various
                        events and technical extravaganzas, such as Techadroit,
                        which is an annual event organized by IEEE PEC Student
                        Branch in association with IEEE Chandigarh Subsection
                        for students. In 2020, the subsection organized the
                        first-ever Chandigarh Subsection Congress with the
                        participation of more than 1700 delegates.
                    </p>{" "}
                    <a
                        href="https://ewh.ieee.org/r10/delhi/chandi.html#:~:text=The%20Chandigarh%20Subsection%20of%20IEEE,Committee%20of%20Subsection%20was%20constituted"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>

            <div className={styles.spacer} />

            <h1 className={styles.college_heading}>
                Punjab Engineering College
            </h1>
            <div className={styles.college_description}>
                Punjab Engineering College (Deemed to be University) having its
                roots in Lahore as Mugalpura Engineering College since 1921,
                moved to its present campus in 1953 as PEC affiliated to Panjab
                University. The institute became Deemed University in 2003
                through a MHRD notification and rechristened as PEC University
                of Technology in 2009. It is a Grant-in-Aid institution under
                administration of Union Territory of Chandigarh, Government of
                India. The institute has a 146 acres sprawling and pious campus
                and is house of Chandigarh College of Architecture also. The
                academic and administrative processes are similar to IITs in the
                country. The institute governance is through a vibrant Board of
                Governors, chaired by a renowned industrialist, Sh. Rajinder
                Gupta. The institute offers 8 Undergraduate B. Tech. Programmes
                and 14 Post graduate M. Tech. Programmes in various disciplines
                of engineering and technology. After becoming University, the
                institute has also started PhD programme in various disciplines
                of engineering, science, management, humanities and social
                sciences. There are 9 academic departments and 2 centers of
                excellence. The faculty of academic departments and centers is
                involved in cutting edge research and development works. The
                institute collaborates very closely with research organisations,
                industries, alumni and other academic institutions both India
                and abroad, and has signed MoUs to pursue joint research in
                niche areas. With a history of more than 100 Years now, the
                institute has produced a number of alumni who have earned name
                and fame both for themselves and the institute. For more
                details, visit{" "}
                <a
                    href="https://pec.ac.in/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    website <FaExternalLinkAlt />{" "}
                </a>{" "}
                of the institute.
            </div>
            <div className={styles.spacer} />

            <div className={styles.college_photos}>
                <img
                    src={getAssetName("/assets/images/college/helicopter.jpeg")}
                    alt="Helicopter PEC"
                />
                <img
                    src={getAssetName("/assets/images/college/chowk.jpeg")}
                    alt="Helicopter PEC"
                />
            </div>

            <div className={styles.college_photos}>
                <img
                    src={getAssetName("/assets/images/college/century.jpeg")}
                    alt="Helicopter PEC"
                />
                <img
                    src={getAssetName("/assets/images/college/audi.jpeg")}
                    alt="Helicopter PEC"
                />
            </div>
        </PageLayout>
    );
}

export default About;
