import styles from "@/styles/Home.module.scss";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { getAssetName } from "@/util/githubPagesImagesUtil";
import { ANNOUNCEMENTS } from "@/data/marquee";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LaptopMac } from "@mui/icons-material";
import { BiTrophy } from "react-icons/bi";
import "react-vertical-timeline-component/style.min.css";

const events = [
    {
        title: "Last date of submission for regular papers",
        date: (
            <span style={{ color: "red", textDecoration: "line-through" }}>
                May 15, 2026
            </span>
        ),
        description: "",
        icon: <LaptopMac />,
    },
    {
        title: "Notification of regular paper acceptance",
        date: (
            <>
                <del style={{ color: "red",textDecoration: "line-through" }}>June 15, 2026</del>
                {" "}<del style={{ color: "red",textDecoration: "line-through" }}>June 12, 2026</del>
            </>
        ),
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: (
            <>
                Last Date for Camera Ready Paper Submission 
                {/* /<br /> 
                 Early Bird Registration */}
            </>
        ),
        date: (
            <>
                <del style={{ color: "red",textDecoration: "line-through"}}>June 30, 2026</del>
                {" "}<del style={{ color: "red",textDecoration: "line-through"}}>July 10, 2026</del>
            </>
        ),
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date for conference registration",
        date: (
            <>
                <del style={{ color: "red",textDecoration: "line-through"}}>July 10, 2026</del>
            </>
        ),
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Conference dates",
        date: "August 20-22, 2026",
        description: "",
        icon: <BiTrophy />,
    },
];

export default function Home() {
    return (
        <>
            <PageLayout
                title={"Chandicon 2026 | Punjab Engineering College"}
                description={
                    "CHANDICON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. CHANDICON 2026 scheduled during August 20-22, 2026, is being organized by IEEE Chandigarh Subsection along with IEEE India Council. The conference will be hosted by Punjab Engineering College (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research."
                }
            >
                <Marquee className={styles.marquee_container}>
                    {ANNOUNCEMENTS.map((an, i) => (
                        <p key={i} className={styles.marquee}>
                            {an}
                        </p>
                    ))}
                </Marquee>
                
                <Marquee
                    speed={55}
                    pauseOnHover={true}
                    gradient={false}
                    className={styles.noticeMarquee}
                >
                    <span className={styles.noticeText}>
                        📢{" "}

                        <a
                            href="/Final Schedule_Chandicon 2026 v3.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.noticeLink}
                        >
                            Click Here
                        </a>

                        {" "}to view the Final Schedule

                        <span className={styles.noticeSeparator}>
                            |
                        </span>

                        <Link href="/registration#registration-button">
                            <span className={styles.noticeLink}>
                                Click Here
                            </span>
                        </Link>

                        {" "}
                        for Conference Registration.

                        <span className={styles.noticeSeparator}>
                            |
                        </span>

                        <Link href="/2026_presentation_guidelines.pdf">
                            <span className={styles.noticeLink}>
                                Click Here
                            </span>
                        </Link>
                        
                        {" "}
                        for Presentation Guidelines

                    </span>
                </Marquee>
                <main
                    className={styles.main}
                    style={{
                        backgroundImage: `url(${getAssetName(
                            "/assets/images/college/pec_chowk.png"
                        )})`,
                        // height: "80vh",
                        // width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                   <div className={styles.hero_box}>
    <p className={styles.sub_heading}>
        2026 IEEE Chandigarh Subsection International
        Conference (CHANDICON 2026)
    </p>

    {/* <h1>
      CHANDICON <span>2026</span>
    </h1>*/}

    <div
        style={{
            borderBottom: "4px solid #000",
            width: "50px",
        }}
    />
</div>
                    <h2 className={styles.theme}>
                        Theme- Emerging Technologies Shaping Tomorrow
                    </h2>
                    <div className={styles.venue_details}>
                        <div className={styles.dates}>
                            <h3>Conference Dates</h3>
                            <p>August 20-22, 2026</p>
                        </div>
                        <div className={styles.venue}>
                            <h3>Conference Venue</h3>
                            <p>Hotel Shivalikview</p>
                            <p>Sector-17, Chandigarh</p>
                            {/* <p>Chandigarh</p> */}
                            {/* <p> Sector 12, Chandigarh, India</p> */}
                        </div>
                    </div>
                </main>

                <div className={styles.info}>
                    <p>

                        IEEE CHANDICON is a flagship annual international conference
                        of IEEE Chandigarh Subsection. CHANDICON 2026 is scheduled during
                        20-22 August 2026 and is being organized by IEEE Chandigarh
                        Subsection under the guidence of IEEE India Council & IEEE Delhi Section.
                        The conference will be hosted by Punjab Engineering College
                        (Deemed to be University), Chandigarh. The conference aims to
                        provide an interdisciplinary platform for the academicians,
                        researchers, industry professionals and research scholars to exchange and
                        share their knowledge, experience & research. Papers that are selected and
                        presented at the conference will be submitted to IEEE Xplore.
                    </p>
                </div>

                <div className={styles.sponsorsSection}>
                <h2>Our Sponsors</h2>

                {/* Silver Sponsors */}
                <div className={styles.sponsorCategory}>
                    <h3>Silver Sponsors</h3>

                    <div className={styles.sponsorGrid}>
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/DRDO_logo.png")}
                                alt="DRDO"
                            />
                        </div>

                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/OPAL-RT_2.png")}
                                alt="Opal-RT"
                            />
                        </div>

                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Syngient logo.png")}
                                alt="Syngient"
                            />
                        </div>
                    </div>
                </div>

                {/* Bronze Sponsors */}
                <div className={styles.sponsorCategory}>
                    <h3>Bronze Sponsors</h3>
                    
                    <div className={styles.sponsorGrid}>
                    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/BEL.png")}
                                alt="BEL"
                            />
                        </div>
    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/QMD_LOGO.png")}
                                alt="QMD"
                            />
                        </div>
    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/AXENIC_logo.JPG")}
                                alt="AXENIC"
                            />
                        </div>
    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Ansys Synopsys logo-01.png")}
                                alt="ANSYS"
                            />
                        </div>
    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/intechadditive_logo1.jpg")}
                                alt="Intech Additive"
                            />
                        </div>
    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/BP_infratech_logo.png")}
                                alt="BP Infra"
                            />
                        </div>
                        
                        <div className={styles.sponsorCard}>
                            <img
                                className={styles.quarksLogo}
                                src={getAssetName("/assets/logos/White_Quarks.png")}
                                alt="Quarks"
                            />
                        </div>
                    </div>
                </div>

                {/* Exhibitors */}
                <div className={styles.sponsorCategory}>
                    <h3>Exhibitors</h3>

                    <div className={styles.sponsorGrid}>

                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Amigos_Rigol.png")}
                                alt="Amigos Rigol"
                            />
                        </div>

                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Silicom-Logo.jpg")}
                                alt="Silicom"
                            />
                        </div>
                                    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Verka_logo_tagline1.jpg")}
                                alt="Verka"
                            />
                        </div>

                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Scientech_Himfinity.png")}
                                alt="Scientech Himfinity"
                            />
                        </div>

                        {/*
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Himfinity_logo.png")}
                                alt="Himfinity"
                            />
                        </div>
                        */}
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/HHV_logo.jpeg")}
                                alt="HHV"
                            />
                        </div>
                        {/*
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Rigol_logo.jpeg")}
                                alt="Rigol"
                            />
                        </div>
                        */}

                    </div>
                </div>

                {/* Other Sponsors */}
                <div className={styles.sponsorCategory}>
                    <h3>Other Sponsors</h3>

                    <div className={styles.sponsorGrid}>
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Logo_nanogloabal.png")}
                                alt="Nanoglobal"
                            />
                        </div>    
                    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Agmatel Keysight Logo.png")}
                                alt="Agmatel"
                            />
                        </div>
                                    
                        <div className={styles.sponsorCard}>
                            <img
                                src={getAssetName("/assets/logos/Marine_India_logo.jpg")}
                                alt="Nanoglobal"
                            />
                        </div>
                    </div>
                </div>
            </div>

                <div className={styles.banner}>
                    <div className={styles.important_dates}>
                        {/* <h3>Important Dates</h3> */}
                    </div>
                    {/* <TableContainer
                        sx={{
                            maxWidth: "70%",
                            margin: "0 auto",
                            border: "1px solid #eee",
                        }}
                    >
                        <Table>
                            <TableBody>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of submission of regular
                                            papers
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>May 15, 2026</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of Early Bird Registration
                                        </b>
                                    </TableCell>
                                    <TableCell> May 31, 2026</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last Date for conference
                                            registration
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>June 15, 2026</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer> */}

                    {/* Coz why not a new timeline */}

                    <VerticalTimeline
                        lineColor="rgb(48, 111, 160)"
                        animate={false}
                    >
                        {events.map((event, i) => {
                            const updatedDate = (() => {
                                if (event.title === "Last date of submission for regular papers") {
                                    return (
                                        // <span>
                                        //     <del>{event.date}</del> <span style={{ color: 'red' }}>[Extended]: April 15, 2026</span>
                                        // </span>
                                        <span>{event.date}</span>
                                    );
                                }
                                if (event.title === "Last date for early bird registration") {
                                    return (
                                        // <span>
                                        //     {/* <del>{event.date}</del> <span style={{ color: 'red' }}>June 30, 2026</span> */}
                                        //     <del>{event.date}</del> <span style={{ color: 'red' }}>July 15, 2026</span>
                                        // </span>
                                        <span>{event.date}</span>
                                    );
                                }
                                if (event.title === "Last date for camera ready paper submission") {
                                    return (
                                        // <span>
                                        //     <del>{event.date}</del> <span style={{ color: 'red' }}>July 31, 2026</span>
                                        // </span>
                                        <span>{event.date}</span>
                                    );
                                }
                                if (event.title === "Last date for conference registration") {
                                    return (
                                        // <span>
                                        //     <del>{event.date}</del> <span style={{ color: 'red' }}>July 31, 2026</span>
                                        // </span>
                                        <span>{event.date}</span>
                                    );
                                }
                                return event.date;
                            })();

                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: "rgba(48, 111, 160, 0.2)",
                                        backdropFilter: "blur( 8px )",
                                        boxShadow:
                                            "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
                                        borderRadius: "10px",
                                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                                        position: "relative",
                                        zIndex: "0",
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={updatedDate}
                                    dateClassName={styles.date}
                                    iconStyle={{
                                        background: "rgb(2,36,61,0.3)",
                                        color: "#fff",
                                        backdropFilter: "blur(8px)",
                                    }}
                                    icon={event.icon}
                                >
                                    <p className={styles.description}>
                                        {event.title}
                                    </p>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>

                    <hr className={styles.divider} />

                    <div className={styles.paper_wrapper}>
                        <div className={styles.register}>
                            <a
                                href="https://force-india.com/chandicon/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>Conference Registration</button>
                            </a>
                        </div>
                        <div className={styles.register}>
                            <a
                                href="https://cmt3.research.microsoft.com/CHANDICON2026/Submission/Index"
                                // href="/INDISOCN Oral and Poster presentation guidelines.pdf"
                                //href="/List of Oral and Posters.pdf"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            // title="Will be activated soon..."
                            >
                                <button>Camera Ready Submission</button>
                                {/* <button> Oral and Poster presentation guidelines</button> */}
                                {/* <button>List of accepted papers</button>*/}
                            </a>
                        </div>
                        <div className={styles.register}>
                            <Link
                                href="/Instructions for Camera Ready Submission Guidelines.pdf"
                            >
                                <button>Camera Ready Submission Guidelines</button>
                            </Link>
                        </div>

                    </div>
                    <p>
                        The Microsoft CMT service is being used for managing the peer-reviewing
                        process for this conference. This service is provided for free by
                        Microsoft and they bear all expenses, including costs for Azure cloud
                        services as well as for software development and support.
                    </p>
                </div>

                {/* <div>
                 <p style={{ color: 'red', textAlign: 'center', fontSize: '22px' }}>
                   Click <a href="/Instructions for Camera Ready Submission Guidelines.pdf" target="_blank" style={{ color: 'blue' }}>here</a> for Camera ready paper submission guidelines. */}
                {/* and click <a href="https://web.ticketdude.app/e/72" target="_blank" style={{ color: 'blue' }}>here</a> for registration.  */}
                {/* </p>
                 </div> */}

            </PageLayout>
        </>
    );
}
