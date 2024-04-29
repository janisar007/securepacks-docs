import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
// import logo from '../../static/img/logo_new.png'

const Header = () => {
  return (
    <header className="custom-header">
      {/* Content */}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="custom-hero">
      <div className="hero-content">
        <h1 className="hero-title">Secure Your Deployments with SecurePack</h1>
        <p className="hero-description">SecurePack is a powerful buildpack solution that enhances the security and reliability of your application deployments.</p>
        <a href='../docs/introduction'>
        <button className="hero-button  " >Explore Documentation</button></a>
      </div>
    </section>
  );
};


const FeaturesSection = () => {
  return (
    <section id="features" className="custom-features">
      
    <div className="features-container">
      <h2 className="section-title">Key Features</h2>
      <div className="feature">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p>Secure your deployments with advanced security features</p>
      </div>
      <div className="feature">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p>Easy deployment and integration with your existing workflows</p>
      </div>
      <div className="feature">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p>Compatibility with a wide range of platforms and environments</p>
      </div>
    </div>
    {/* <div className='image-section'><img src={logo} alt="" style={{width:"50%"}} /></div> */}
  </section>
  );
};

import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="custom-benefits">
      <div className="benefits-container">
        <h2 className="section-title">Benefits of Using SecurePack</h2>
        <div className="benefit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shield"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div>
            <h3 className="benefit-title">Improved Security</h3>
            <p>SecurePack provides advanced security features to protect your applications from potential threats, ensuring your data and infrastructure remain secure.</p>
          </div>
        </div>
        <div className="benefit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-tool"
          >
            <path d="M4 21v-7l9-9 7 7-9 9z" />
          </svg>
          <div>
            <h3 className="benefit-title">Easy Deployment</h3>
            <p>With SecurePack, you can streamline your deployment process and integrate it seamlessly with your existing workflows, saving you time and effort.</p>
          </div>
        </div>
        <div className="benefit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-layers"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <div>
            <h3 className="benefit-title">Platform Compatibility</h3>
            <p>SecurePack is designed to be compatible with a wide range of platforms and environments, ensuring your applications can be deployed across different infrastructures.</p>
          </div>
        </div>
      </div>
    </section>
  );
};





const HomePage = () => {
  return (
    <div className="custom-container">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        
      </main>
      
    </div>
  );
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
   <HomePage/>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Initializ`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
   
    </Layout>
  );
}
