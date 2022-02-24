import React, {useEffect} from "react";
import styles from "../styles/customercare.module.css";
import {Link} from "react-router-dom";


const CustomerCare = ({showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <header>
            <div className={styles.header_inner}>
                <Link to="/">
                    <svg width="49" height="66" viewBox="0 0 49 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="hetllu-4 eXRORu"><path opacity="0.95" fill-rule="evenodd" clip-rule="evenodd" d="M42.9266 63.2562H41.1755L41.1847 56.0206L42.9266 56.0187C44.8916 56.0187 46.2489 57.4613 46.2489 59.6309C46.2489 61.8002 44.8916 63.2562 42.9266 63.2562ZM42.9266 53.3034H38.3174V65.9581H42.9266C46.3741 65.9581 49 63.2103 49 59.6309C49 56.0514 46.3741 53.3034 42.9266 53.3034ZM19.6 59.2885H17.4497V56.0239H19.6C20.3885 56.0239 21.0336 56.7312 21.0336 57.6562C21.0336 58.5812 20.3885 59.2885 19.6 59.2885ZM21.5891 61.3379C22.9691 60.6305 23.9009 59.2159 23.9009 57.6562C23.9009 55.244 21.9834 53.3034 19.6 53.3034H14.5824V65.999H17.4497V61.8276H18.8116L21.1771 65.999H24.2592L21.5891 61.3379ZM35.1828 63.2561V65.9714H27.038V53.3034H35.1828V56.0187H29.899V58.1897H34.5498V60.9404H29.899V63.2561H35.1828ZM0 59.6517C0 56.0589 2.63666 53.3034 6.27265 53.3034C8.46116 53.3034 10.3912 54.4021 11.4424 56.1286L9.06438 57.524C8.53021 56.5823 7.49623 56.0241 6.27265 56.0241C4.13581 56.0241 2.7572 57.4717 2.7572 59.6517C2.7572 61.8317 4.13581 63.2794 6.27265 63.2794C7.49623 63.2794 8.5473 62.7213 9.06438 61.7795L11.4424 63.1747C10.4085 64.9013 8.47842 66 6.27265 66C2.63666 66 0 63.2445 0 59.6517ZM18.6354 19.4297V25.8682L24.47 29.1762L30.9191 25.5395L32.0052 27.5058L25.0117 31.4496C24.843 31.5448 24.6558 31.5924 24.4686 31.5924C24.2806 31.5924 24.0926 31.5444 23.9234 31.4483L16.9759 27.5094C16.6244 27.3102 16.4067 26.9348 16.4067 26.5275V19.4297H18.6354ZM10.8189 29.8369V12.3888C10.8189 11.767 11.3179 11.2629 11.9333 11.2629H30.0404V13.5148H13.0476V29.1749L24.4684 35.5933L35.8956 29.1621V22.2445H38.1243V29.8237C38.1243 30.2323 37.9053 30.6087 37.5522 30.8075L25.0108 37.8654C24.8424 37.9603 24.6555 38.0077 24.4686 38.0077C24.282 38.0077 24.0954 37.9604 23.927 37.8657L11.3916 30.8209C11.0382 30.6223 10.8189 30.2457 10.8189 29.8369ZM35.8929 7.87805H16.111V5.62615H37.0072C37.6226 5.62615 38.1215 6.13032 38.1215 6.75213V16.6148H35.8929V7.87805ZM41.5272 32.4815L24.4694 41.914L7.47264 32.4826V2.25196H41.5272V32.4815ZM42.6416 0H6.35825C5.7429 0 5.24392 0.504171 5.24392 1.12598V33.1488C5.24392 33.5596 5.46537 33.9379 5.82175 34.1356L23.9321 44.1849C24.0992 44.2776 24.2839 44.324 24.4686 44.324C24.6528 44.324 24.837 44.2779 25.0035 44.1857L43.1765 34.1365C43.5336 33.939 43.7559 33.5603 43.7559 33.1488V1.12598C43.7559 0.504171 43.2569 0 42.6416 0Z" fill="white"></path></svg>
                </Link>
                <div>
                    <div onClick={showPopup} className={styles.header_download}>
                        Download CRED
                    </div>
                </div>
            </div>
        </header>
        <section className={styles.section_main}>
            <div className={styles.main_container}>
                <div className={styles.main_bold}>get support on-demand. via the app.</div>
                <div className={styles.main_text}>CRED doesn’t have a customer phone line but we do have experts on stand-by to help resolve any problems you might be facing. all you need to get in touch is follow the steps shown below.</div>
                <video autoplay muted loop playsinline controls>
                    <source src="https://web-images.credcdn.in/_next/assets/videos/customer-care/customer_care.mp4" type="video/mp4"></source>
                </video>
            </div>
        </section>
        <section className={styles.section_protect}>
            <div>
                <div className={styles.protect_bold}>protect yourself from fraudsters. follow these safe practises.</div>
                <div className={styles.protect_text}>never share your bank account number, UPI pin, CVV, OTP, and other such sensitive information with anyone even if they claim to be from CRED</div>
            </div>
        </section>
        <section className={styles.section_bottom}>
            <div>
                <div className={styles.bottom_bold}>contact CRED customer support</div>
                <div className={styles.bottom_text}>CRED is an exclusive members-only credit card management and bill payments platform that rewards users for paying their credit card bills on time. with CRED you can manage your multiple cards under one roof. you can pay your credit card bills, view your credit card statement, generate autopay requests for your credit card bills, and much more. and if you face any issues while using our services, we have in place an incredible customer care team that is always ready to resolve all your queries instantly.<br /><br />CRED does not have any customer care phone number, however, you can reach out to our customer care support through in-app chat or email. CRED customer care is just a click away to help you at every stage. be it answering your queries, addressing grievances/complaints, or collecting feedback, our customer care team is available round-the-clock to help you.<br /><br />CRED has set up multiple channels through which you can contact the customer care team. you can reach out to the CRED customer care team for any queries related to credit cards, credit card payments, credit card autopay debit, reward points, payment status, etc. you can contact CRED customer care through email, direct messages on Facebook, LinkedIn, Instagram and Twitter, and also through our in-app chat support. here are some of the different ways to contact the CRED customer care team:</div>
            </div>
        </section>
        </>
    )
};

export default CustomerCare;