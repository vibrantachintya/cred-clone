import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-calculators">
                <div>
                    <Link to="/calculators">calculators:</Link>
                    <Link to="/calculators">SIP calculator</Link>
                    <Link to="/calculators">EMI calculator</Link>
                    <Link to="/calculators">PPF calculator</Link>
                    <Link to="/calculators">home loan calculator</Link>
                    <Link to="/calculators">car loan calculator</Link>
                    <Link to="/calculators">fixed deposit calculator</Link>
                    <Link to="/calculators">recurring deposit calculator</Link>
                    <Link to="/calculators">simple loan calculator</Link>
                    <Link to="/calculators">compound interest calculator</Link>
                </div>
                <div className="margin-top">
                    <Link to="/credit-card-bill-payment-online">pay credit card bill:</Link>
                    <Link to="/credit-card-bill-payment-online">American Express</Link>
                    <Link to="/credit-card-bill-payment-online">Standard Chartered</Link>
                    <Link to="/credit-card-bill-payment-online">HSBC</Link>
                    <Link to="/credit-card-bill-payment-online">HDFC</Link>
                    <Link to="/credit-card-bill-payment-online">ICICI</Link>
                    <Link to="/credit-card-bill-payment-online">SBI</Link>
                    <Link to="/credit-card-bill-payment-online">AXIS</Link>
                    <Link to="/credit-card-bill-payment-online">RBL</Link>
                    <Link to="/credit-card-bill-payment-online">PNB</Link>
                    <Link to="/credit-card-bill-payment-online">YES Bank</Link>
                </div>
            </div>
            <div className="footer-lower">
                <div className="footer-lower-1">
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png" />
                    <div>complete security. no asterisks.</div>
                    <div>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</div>
                </div>
                <div className="footer-lower-2">
                    <div>
                        <div>
                            products
                        </div>
                        <div>
                            <Link to="/credit-card-bill-payment-online">credit card bill payments</Link>
                            <Link to="/check-your-credit-score">credit card score check</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            CRED
                        </div>
                        <div>
                            <Link to="/about">about</Link>
                            <Link to="/careers">careers</Link>
                            <Link to="/ipl">IPL</Link>
                            <Link to="/customer-care">customer care</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            resources
                        </div>
                        <div>
                            <Link to="/articles">articles</Link>
                            <Link to="/blogs">blogs</Link>
                            <Link to="/calculators">calculators</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            policy
                        </div>
                        <div>
                            <Link to="">security</Link>
                            <Link to="">transaction & user verification</Link>
                            <Link to="">google API disclosure</Link>
                            <Link to="">UPI faq & grievances</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-lower-3">
                copyright © 2020-21 Dreamplug Technologies Pvt Ltd.
                </div>

                <div className="footer-lower-4">
                    <Link to="">privacy policy</Link>
                    <Link to="">terms and conditions</Link>
                    <Link to="">returns and refund</Link>
                </div>

            </div>
        </footer>
    )
};

export default Footer;