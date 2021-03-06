import React, {useRef, useEffect} from "react";
import styles from "../styles/creditscore.module.css";
import {Link} from "react-router-dom";

const CreditScore = ({showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <>
        <header className={styles.header}>
            <div className={styles.header_inner}>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.2" height="52.8" viewBox="0 0 49 66"><defs></defs><path fill="#FFF" fill-rule="evenodd" d="M42.9266349 63.2561842h-1.7511798l.0091994-7.2355399 1.7419804-.0019918c1.9649772 0 3.3223133 1.4426777 3.3223133 3.6122472 0 2.1692677-1.3573361 3.6252845-3.3223133 3.6252845zm0-9.9527982h-4.60922v12.6547255h4.60922C46.3740965 65.9581115 49 63.2103121 49 59.6308997c0-3.5795332-2.6259035-6.3275137-6.0733651-6.3275137zm-23.326623 5.9851025h-2.15034v-3.2645849h2.15034c.7885238 0 1.4335601.7073358 1.4335601 1.6322623 0 .9250472-.6450363 1.6323226-1.4335601 1.6323226zm1.9891109 2.0493967c1.3799763-.7073962 2.3117485-2.121947 2.3117485-3.6817193 0-2.4121484-1.9174866-4.3527799-4.3008594-4.3527799h-5.0175796v12.6955879h2.8672396v-4.1713436h1.3619358l2.3654517 4.1713436h3.082172l-2.6701086-4.6610887zm13.5936713 1.9182386v2.7152665H27.038001V53.303386h8.1447931v2.7152665H29.899028v2.1710784h4.6507369v2.7506363H29.899028v2.3157566h5.2837661zM0 59.6517232c0-3.5928119 2.63665611-6.3483372 6.27264659-6.3483372 2.18851179 0 4.11860281 1.0987576 5.16978861 2.8252388l-2.37805616 1.3954174c-.5341651-.9417664-1.56814672-1.4998972-2.79173245-1.4998972-2.13683959 0-3.51544192 1.4475064-3.51544192 3.6275782 0 2.1800114 1.37860233 3.6276988 3.51544192 3.6276988 1.22358573 0 2.27465203-.5581307 2.79173245-1.4999574l2.37805616 1.3952362C10.4084536 64.9013027 8.47842227 66 6.27264659 66 2.63665611 66 0 63.2444747 0 59.6517232zm18.6354443-40.2220499v6.4385724l5.834538 3.3079824 6.4491087-3.6367526 1.086072 1.9662837-6.9934888 3.9437938c-.1686962.095245-.3558512.1428071-.5430658.1428071-.1879912 0-.3759825-.0479846-.5452164-.1440142l-6.9474915-3.9389049c-.3515501-.1992419-.5691707-.5746688-.5691707-.9819045v-7.0978632h2.2287145zm-7.8165402 10.4072338V12.3888484c0-.6218085.4989802-1.1259791 1.1143871-1.1259791h18.1070737v2.2518978H13.0476186v15.6601331l11.4207508 6.4183525 11.4272621-6.4311484v-6.9175738h2.2286549v7.5792186c0 .4085031-.2189946.7849562-.5720979.9837152l-12.5413506 7.0579666c-.1683976.0948224-.3553135.1422638-.5422295.1422638-.1866173 0-.3732346-.0472603-.5416322-.1419621l-12.5353769-7.0448085c-.353402-.1986383-.5726952-.575212-.5726952-.984017zM35.8928837 7.87805117H16.1110334V5.62615332h20.8961777c.6154069 0 1.1143274.50417065 1.1143274 1.1259791v9.86268368h-2.2286548V7.87805117zm5.6343007 24.60344313l-17.0577397 9.432512-16.99680835-9.4314255V2.25195821H41.5271844V32.4814943zM42.6415716 0H6.3582492c-.61534719 0-1.1143274.50417065-1.1143274 1.1259791v32.0228336c0 .4107968.22144375.7890606.57783258.9867935L23.9321136 44.1848565c.1670834.0927703.3517891.1391253.5364948.1391253.1842278 0 .3683959-.0461135.5348819-.1382803l18.1729632-10.0492503c.3571654-.1974915.5794455-.5761174.5794455-.9876385V1.1259791C43.755899.50417065 43.2569188 0 42.6415716 0z" opacity=".94999999"></path></svg>
                    </Link>
                    <div>
                        <div onClick={showPopup} className={styles.header_download}>
                            Download CRED
                        </div>
                    </div>
                </div>
        </header>
        <section className={styles.section_main}>
            <div>
                <div>
                    <h1>find your credit score. for free.</h1>
                    <p>check your latest score instantly and find out if you're good for your money</p>
                    <div onClick={executeScroll}>Check credit score</div>
                </div>
                <div><img src="/assets/images/credit_score.png" /></div>
            </div>
        </section>
        <section ref={myRef} className={styles.section_form}>
            <div className={styles.section_container}>
                <div className={styles.form_head}>tell us about yourself</div>
                <div className={styles.form_text}>we only use this information to find your credit score from the official bureau.</div>
                <div className={styles.form_container}>
                    <div className={styles.input_container}>
                        <input type="text" />
                        <label>first name</label>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" />
                        <label>last name</label>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.input_container}>
                        <input type="text" />
                        <label>phone number</label>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" />
                        <label>email</label>
                    </div>
                </div>
                <div>
                    <div className={styles.confirm_button}>Confirm</div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default CreditScore;