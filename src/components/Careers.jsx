import React, {useEffect} from "react";
import Header from "./Header";
import styles from "../styles/careers.module.css";

const Careers = ({showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            <Header displayPopup={showPopup} />
            <section className={styles.section_top}>
                <div className={styles.section_top_bold}>
                    opportunities are infinite.
                </div>
                <div className={styles.section_top_button}>find yours <img src="/assets/images/Arrow.png" /></div>
            </section>
            <section>
                <div className={styles.images_div}>
                    <img src="/assets/images/landingPage_1.jpeg" style={{width: "200px", height: "381px"}} />
                    <img src="/assets/images/landingPage_2.jpeg" style={{width: "180px", height: "253px", marginTop: "125px", marginLeft: "23px"}} />
                    <img src="/assets/images/landingPage_3.jpeg" style={{width: "500px", height: "313px", marginTop: "65px", marginLeft: "23px"}} />
                </div>
                <div className={styles.images_div}>
                    <img src="/assets/images/landingPage_4.jpeg" style={{width: "347px", height: "218px"}} />
                    <img src="/assets/images/landingPage_5.jpeg" style={{width: "364px", height: "230px", marginLeft: "23px"}} />
                    <img src="/assets/images/landingPage_6.jpeg" style={{width: "173px", height: "160px", marginLeft: "23px"}} />
                </div>
            </section>
            <section className={styles.section_whycred}>
                <div className={styles.whycred_container}>
                    <div className={styles.whycred_head}>why CRED?</div>
                    <div className={styles.whycred_text}>simply because, CRED is the nucleus of all great minds at work. to elaborate more on the why, here’s a thought experiment for you:</div>
                    <div className={styles.whycred_circle}>1</div>
                    <div className={styles.whycred_text}>put a group of incredibly passionate, driven individuals together.</div>
                    <div className={styles.whycred_circle}>2</div>
                    <div className={styles.whycred_text}>give them the complete freedom to chase down their goals in a complete uninhibited manner.</div>
                    <div className={styles.whycred_circle}>3</div>
                    <div className={styles.whycred_text}>you will have CRED.</div>
                    <div className={styles.whycred_text}>the CRED manifesto is crowd sourced from these very people, all rooted in different backgrounds but sharing the same ethos; to continuously push oneself and in the process, the community.</div>
                </div>
            </section>
            <section className={styles.section_workcred}>
                <div className={styles.workcred_div1}>
                    <div className={styles.workcred_div1_head}>want to know what it's like to work at CRED?</div>
                    <div className={styles.workcred_div1_text}>hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself.</div>
                </div>
                <div className={styles.workcred_grid}>
                    <div>
                        <img src="/assets/images/workcred1.png" />
                        <div>
                            <div>kill deadlines, not your appetite.</div>
                            <div>a stacked pantry with an all you can eat lunch & dinner.</div>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/workcred2.png" />
                        <div>
                            <div>we have your back...and your health.</div>
                            <div>paid sick leaves, because your health comes first.</div>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/workcred3.png" />
                        <div>
                            <div>remember, you can’t respawn in real life.</div>
                            <div>a comprehensive health insurance, so you can focus on the healing instead of never ending hospital bills.</div>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/workcred4.png" />
                        <div>
                            <div>what einstein said about time.</div>
                            <div>no work timings. because you can’t time a creative process.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_video}>
                <div className={styles.video_head}>listen to thier stories</div>
                <video className={styles.video} autoplay="" muted width="890" height="500" controls>
                    <source src="https://careers.cred.club/Videos/1.mp4" type="video/mp4" />
                </video>    
            </section>
        </>
    );
};

export default Careers;