import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
import Carousel from './Carousel';

const Landing = ({showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            <section className="bg-black container">
                <div className="header-fixed">
                    <div>
                        <img className="header-image" src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" />
                    </div>
                    <div className="header-links-container">
                        <div className="header-links">
                            <Link to="/check-your-credit-score">
                            credit score check
                            </Link>
                        </div>
                        <div className="header-links">
                            <Link to="/credit-card-bill-payment-online">
                            credit card bill payment
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-banner">
                    <div>pay credit card bill. earn guaranteed ₹200 back.</div>
                    <div>
                        <Link to="/credit-card-bill-payment-online">
                        claim now <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" />
                        </Link>
                    </div>
                </div>
                <div className="header-tag">
                    <div className="header-tag-main">
                    rewards for paying<br />credit card bills.
                    </div>
                    <div className="header-tag-sec">
                    join 7.5M+ members who win rewards and cashbacks everyday
                    </div>
                    <div onClick={showPopup} className="header-tag-download">Download CRED</div>
                </div>
            </section>
            <section id="checkin" className="bg-black section-phones">
                <div>
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" />
                </div>
            </section>
            <section className="section-rewards">
                <div className="div-text">
                    <div className="large-text">feel special more often.</div>
                    <div className="small-text">exclusive rewards for paying your bills</div>
                    <div className="desc-text">every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</div>
                    <div onClick={showPopup} className="button-text">Explore rewards</div>
                </div>
            </section>
            <section className="section-brands">
                <div>rewards from brands you love.</div>
                <div></div>
            </section>
            <section className="section-upgrade">
                <div className="div-text">
                    <div className="large-text">we take money matters seriously.</div>
                    <div className="small-text">so that you don’t have to.</div>
                    <div className="desc-text">never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</div>
                    <div onClick={showPopup} className="button-text">Experience the upgrade</div>
                </div>
            </section>
            <section className="section-parallax">
                <div></div>
            </section>
            <section className="section-member">
                <div className="div-text">
                    <div className="large-text">security first. and second.</div>
                    <div className="small-text">what’s yours remains only yours.</div>
                    <div className="desc-text">CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.</div>
                    <div onClick={showPopup} className="button-text">Become a member</div>
                </div>
            </section>
            <section className='section-story'>
                <div className='section-story-div'>
                    <div className='section-story-title'>the story of CRED begins with trust.</div>
                </div>
                <div className='section-story-div'>
                    <div className='section-story-text'>trust as a virtue has consistently played an essential role in every great human achievement. and consistently, its importance has been overlooked. not just by individuals, but by entire societies. we felt it was time someone gave it the spotlight it deserves. especially for the ones who live by this virtue: the trustworthy.
                    <br/><br/>
                    so we thought of creating a system that rewards its members for doing good and being trustworthy. this way, trust as a virtue becomes something to aspire to, just the way it should be. then we went one step ahead: we built it. we know we are on the right track because here you are.
                    <br/><br/>
                    if you make it to CRED, congratulations and welcome. we have a lot of things planned for you.</div>
                </div>

            </section>
            <section className='section-feedback'>
                <div className='section-feedback-inner'>
                    <div className='section-feedback-div'>
                        <div className='section-feedback-inner'>
                            <div className='section-feedback-rating'>4.8</div>
                            <div className='section-feedback-store'>app store</div>
                        </div>
                        <img className='section-feedback-rating-image' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" />
                        <div onClick={showPopup} className='section-feedback-button'>
                            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" />
                            <p>Download the app</p>
                        </div>
                    </div>
                    <div className='section-feedback-div'>
                        <div className='section-feedback-inner'>
                            <div className='section-feedback-rating'>4.7</div>
                            <div className='section-feedback-store'>play store</div>
                        </div>
                        <img className='section-feedback-rating-image' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" />
                        <div onClick={showPopup} className='section-feedback-button'>
                            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" />
                            <p>Download the app</p>
                        </div>
                    </div>
                </div>
                <Carousel />
            </section>
            <section className='section-about'>
                <h2>about CRED</h2>
                <p>CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</p>
                <h2>how does CRED reward their users?</h2>
                <p>CRED partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle.</p>
                <h2>how to earn rewards on CRED?</h2>
                <p>members can earn rewards in two different ways. CRED coins & gems.<br/>
                CRED Coin Rewards:<br/>
                - when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin.
                <br/>
                - you can then use earned CRED coins to claim exclusive rewards from different brands.
                <br/>
                CRED Gem Rewards:
                <br/>
                - for every person that you refer to CRED who makes a bill payment, you earn 10 gems.</p>
                <h2>how does one become a member of CRED?</h2>
                <p>you can apply to be a member by signing up on CRED with your name and valid mobile number(issued within India). CRED is India’s most trustworthy and creditworthy community. This means we are selective about the members we take. For membership an Experian credit score of 750 or above is mandatory.</p>
                <h2>how to know your credit score?</h2>
                <p>upon becoming a member, you can check and refresh your credit score with a single click. CRED then proceeds to acquire your updated credit score through a CIBIL score soft inquiry. on CRED, you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status.</p>
                <h2>banks supported on CRED</h2>
                <p>CRED supports credit card bill payment for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.</p>
            </section>
        </>
    )
};

export default Landing;