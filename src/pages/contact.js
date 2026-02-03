import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/contact.module.scss";

function Contact() {
    return (
        <PageLayout title={"Contact Us | Chandicon 2026"}>
            <h1 className={styles.heading}>Contact Us</h1>

            <div className={styles.wrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3451028948007!2d76.78419437507749!3d30.764892274568705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College!5e0!3m2!1sen!2sin!4v1704546578845!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.map}
                ></iframe>

                <div className={styles.contact_details}>
                    <p><strong>General Chair (CHANDICON 2026)</strong></p>

                    <p>Department of Electronics and Communication Engineering,</p>

                    <a
                        href="https://maps.google.com/?q=Punjab+Engineering+College,+Chandigarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.address_link}
                    >
                        Punjab Engineering College,<br />
                        (Deemed to be University),<br />
                        Sector 12, Chandigarh, India
                    </a>

                    <hr className={styles.divider} />

                    <p>
                        <strong>Dr. Ajay Kumar</strong><br />
                        Organising Secretary<br />
                        Mobile: <a href="tel:+918000847695">+91-8000847695</a>
                    </p>

                    <p>
                        <strong>Dr. Deepak Kumar Sharma</strong><br />
                        Organising Secretary<br />
                        Mobile: <a href="tel:+919389585817">+91-9389585817</a>
                    </p>

                    <p>
                        <strong>Dr. Balwinder Singh Dhaliwal</strong><br />
                        Organising Secretary<br />
                        Mobile: <a href="tel:+919814834209">+91-9814834209</a>
                    </p>

                    <hr className={styles.divider} />

                    <p className={styles.label}>Email: <a href="mailto:ieeechandicon@gmail.com">
                        ieeechandicon@gmail.com
                    </a> </p>

                    {/* <a href="mailto:ieeechandicon@gmail.com" className={styles.email_link}>
                    ieeechandicon@gmail.com
                </a> */}
                </div>
            </div>
        </PageLayout>
    );
}

export default Contact;
