import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/registration.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BANK_DETAILS } from "@/data/bank";

const ieeeColumns = [
    {
        align: "center",
        id: "name",
        label: "Category of Authors/Attendees (IEEE Member)",
        // minWidth: 170,
    },
    {
        id: "ieeeStudentEarly",
        align: "center",
        label: "IEEE Student Members",
        // minWidth: 100,
    },
    {
        id: "ieeeEarly",
        label: "IEEE Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeStudentLate",
        label: "IEEE Student Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeLate",
        label: "IEEE Members",
        // minWidth: 170,
        align: "center",
    },
];

const nonIeeeColumns = [
    {
        id: "name",
        label: "Category of Authors/Attendees (Non-IEEE Member)",
        align: "center",
        // minWidth: 170,
    },
    {
        id: "ieeeStudentEarly",
        label: "Non-IEEE Student Members",
        align: "center",
        // minWidth: 100,
    },
    {
        id: "ieeeEarly",
        label: "Non-IEEE Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeStudentLate",
        label: "Non-IEEE Student Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeLate",
        label: "Non-IEEE Members",
        minWidth: 170,
        align: "center",
    },
];

function createData(
    name,
    ieeeStudentEarly,
    ieeeEarly,
    ieeeStudentLate,
    ieeeLate
) {
    return { name, ieeeStudentEarly, ieeeEarly, ieeeStudentLate, ieeeLate };
}

const ieeeRows = [
    createData("Indian Participant", "₹5,000", "₹6,500", "₹6,000", "₹8,000"),
    createData("Foriegn Participant", "$150", "$250", "$250", "$300"),
];

const nonIeeeRows = [
    createData("Indian Participant", "₹6,000", "₹8,500", "₹7,500", "₹10,000"),
    createData("Foriegn Participant", "$200", "$350", "$400", "$450"),
];

function Registration() {
    return (
        <PageLayout title={"Registration | Chandicon 2026"}>
            <h1 className={styles.heading}>Registration</h1>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}></TableCell>
                            <TableCell
                                align="center"
                                colSpan={2}
                                style={{ fontWeight: "800" }}
                            >
                                Early Bird Registration
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={3}
                                style={{ fontWeight: "800" }}
                            >
                                Late Registration
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {ieeeColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                        fontWeight: "600",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ieeeRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                >
                                    {ieeeColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                        <TableRow>
                            {nonIeeeColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                        fontWeight: "600",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        {nonIeeeRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                >
                                    {nonIeeeColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <h5 style={{ marginTop: "10px" }}>
                * The registration fee does not include GST or any other taxes.
            </h5>

            <div className={styles.register}>
                <a
                    href="https://web.ticketdude.app/e/72"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <button>Conference Registration</button>
                </a>
            </div>
            <p style={{ margin: "20px 0", textAlign: 'center', fontWeight: "600" }}>
                        Note: Download the receipt and deposit a copy at
                        conference venue.
                    </p>


            <div className={styles.rules}>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>FOR AUTHORS</h2>
                    <ol className={styles.section_details}>
                        <li>
                            At least one of the authors of every accepted paper
                            must register for the conference as author and
                            present the paper in order for it to be included in
                            the conference proceedings of CHANDICON 2026, and
                            subsequent submission to IEEE Xplore digital
                            library.
                        </li>
                        <li>
                            If more than one author of an accepted paper wishes
                            to attend the conference, all such authors need to
                            be registered separately by paying applicable
                            registration fee.
                        </li>
                        <li>
                            Additional authors (other than those who are
                            included in the manuscript submitted for review)
                            cannot be added to the camera-ready paper.
                        </li>
                        <li>
                            Non-refundable registration fee must be paid prior
                            to uploading the final IEEE formatted, Camera-ready
                            version of the paper and e-copyright form.
                        </li>
                    </ol>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>FOR ATTENDEES</h2>
                    <ol className={styles.section_details}>
                        <li>
                            All participants need to be registered to attend the
                            CHANDICON 2026 by paying the requisite registration
                            fee.
                        </li>
                        <li>
                            The registration fee include the conference kit,
                            access/admission to tutorials &amp; technical
                            sessions, lunch on all conference days, morning and
                            evening refreshments, banquet dinner,
                            access/admission to cultural events as part of the
                            conference.
                        </li>
                        <li>
                            Please note that the fee shown above are exclusive
                            of all taxes and levies. Any gateway charges along
                            with applicable taxes or levies, if any, will have
                            to be borne by the registrant.
                        </li>
                        <li>
                            IEEE members are requested to upload IEEE membership
                            details during the online registration process, if
                            registering under IEEE category.
                        </li>
                        <li>
                            Students are requested to upload valid student ID
                            card (front and back side) during the online
                            registration process, if registering under that
                            student category.
                        </li>
                        <li>
                            Please keep a copy of the transaction ID, generated
                            by the payment gateway as well as by your bank. You
                            may need these later if you need to track your
                            payment/registration.
                        </li>
                        <li>
                            All correspondence regarding registration for
                            CHANDICON 2026 should contain Paper ID as well as
                            registration confirmation number.
                        </li>
                        <li>
                            Please note that CHANDICON 2026, or the organizing
                            institute, represented by the Organizing Committee
                            as well as the IEEE India Council or IEEE Delhi
                            Section or IEEE Chandigarh Subsection, will not be
                            responsible for any loss, financial or otherwise,
                            caused by improper transactions conducted online.
                            While organizers have taken all reasonable
                            precautions to ensure a safe online transaction, it
                            is the registrant&apos;s responsibility, while
                            paying the registration fee, to secure their user
                            IDs, passwords, Paper ID, etc.{" "}
                        </li>
                    </ol>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>No Show Policy</h2>
                    <p className={styles.section_details}>
                        Any accepted paper included in the final program is
                        expected to have at least one author attend and present
                        the paper at the conference. Non-presented paper will
                        not be submitted to IEEE Xplore digital library as per
                        IEEE no-show policy.
                    </p>
                </div>
                {/* <div className={styles.section}> */}
                    {/* <h2 className={styles.section_heading}>Fee details</h2> */}
                    {/* <h3>
                        Registration and fee payment for Indian Authors Steps:
                    </h3> */}
                    
                    {/* <br/><br/><br/>
                    <p style={{ color: 'red', textAlign: 'left', fontSize: '22px' }}>
                        <br/>Click <a href="https://web.ticketdude.app/e/72" target="_blank" style={{ color: 'blue' }}>here</a> for paper registration and fee payment. 
                    </p> */}


                    {/* <p>
                        <br/>Click on the following link for paper registration and
                        fee payment: To be provided soon
                    </p> */}
                    {/* <p style={{ margin: "20px 0", fontWeight: "600" }}>
                        Note: Download the receipt and deposit a copy at
                        conference venue.
                    </p> */}
                    {/* <p>
                        For Foreign Authors only:- Deposit the registration fees
                        through NEFT/RTGS/IMPS/Bank Transfer to the below given
                        bank account and send transaction details to{" "}
                        <b
                            style={{
                                color: "rgb(48, 111, 160)",
                                textDecoration: "underline",
                            }}
                        >
                            ieeeindiscon2026@gmail.com
                        </b>
                    </p>
                    <TableContainer sx={{ marginTop: "20px" }}>
                        <Table>
                            <TableBody>
                                {Object.keys(BANK_DETAILS).map((key, i) => {
                                    return (
                                        <TableRow key={i} hover>
                                            <TableCell>{key}</TableCell>
                                            <TableCell>
                                                {BANK_DETAILS[key]}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                {/* </div> */}
            </div>
        </PageLayout>
    );
}

export default Registration;
