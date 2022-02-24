import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {useEffect, useState} from "react";
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Articles from './components/Articles';
import Calculators from './components/Calculators';
import Careers from './components/Careers';
import CreditScore from './components/CreditScore';
import BillPayment from './components/BillPayment';
import IPL from './components/IPL';
import CustomerCare from './components/CustomerCare';

function App() {
  let [isPopupVisible, setIsPopupVisible] = useState(false);

  const displayPopup = (val) => {
    setIsPopupVisible(val);
  }

  useEffect (() => {
    window.title = "CRED - pay your credit card bills & earn rewards";
  }, []);

  return (
    <div className="App">
      {isPopupVisible && <Popup hidePopup={() => displayPopup(false)} />}
      <Router>
        <Routes>
          <Route path="/" element={<Landing showPopup={() => displayPopup(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles title="articles" showPopup={() => displayPopup(true)} />} />
          <Route path="/blogs" element={<Articles title="blogs" showPopup={() => displayPopup(true)} />} />
          <Route path="/calculators" element={<Calculators showPopup={() => displayPopup(true)} />} />
          <Route path="/careers" element={<Careers showPopup={() => displayPopup(true)} />} />
          <Route path="/check-your-credit-score" element={<CreditScore showPopup={() => displayPopup(true)} />} />
          <Route path="/credit-card-bill-payment-online" element={<BillPayment />} />
          <Route path="/ipl" element={<IPL />} />
          <Route path="/customer-care" element={<CustomerCare showPopup={() => displayPopup(true)} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
