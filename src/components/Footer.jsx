import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../logo.jpeg';
import './Footer.css';

const links = {
  Services: ['Prescription Fulfillment', 'Medication Counseling', 'Blood Pressure Checks', 'Health Consultations', 'Wellness Solutions'],
  Products: ['Prescription Medications', 'OTC Medicines', 'Vitamins & Supplements', 'Baby & Mother Care', 'Personal Care'],
  Company: ['About FS Care', 'Our Mission', 'Community Impact', 'Health Education Hub', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
            <img src={logo} alt="FS Care" className="footer-logo-img" />
          </a>
            <p className="footer-tagline">
              Your Trusted Partner in Health and Wellness. Professional pharmaceutical
              care with integrity, compassion, and excellence.
            </p>
            <div className="footer-contact-quick">
              <a href="tel:+2347054172448"><Phone size={15}/> 07031934857</a>
              <a href="mailto:firststerlingpharm@gmail.com"><Mail size={15}/> firststerlingpharm@gmail.com</a>
              <a href="https://wa.me/2347054172448" target="_blank" rel="noreferrer">
                <MessageCircle size={15} color="#10b981"/> WhatsApp Us
              </a>
              <span><MapPin size={15}/> Lagos, Nigeria</span>
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div className="footer-col" key={group}>
              <h5 className="footer-col-title">{group}</h5>
              <ul>
                {items.map(item => (
                  <li key={item}><a href="#home">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} FS Care. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
