import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import logo from '../../static/img/logo_new.png';
 
const Header = () => {
  return (
    <header className="hero">
      {/* Content */}
    </header>
  );
};
 
const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Secure Your Deployments with SecurePack</h1>
        <p className="hero__subtitle">SecurePack is a powerful buildpack solution that enhances the security and reliability of your application deployments.</p>
        <Link className="hero__button button button--primary" to="/docs/">Explore Documentation</Link>
      </div>
    </section>
  );
};
 
const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section__title">Key Features</h2>
        <div className="feature-container">
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
      </div>
    </section>
  );
};
 
const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2 className="section__title">Benefits of Using SecurePack</h2>
        <div className="benefit-container">
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
              <h3 className="benefit__title">Improved Security</h3>
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
              <h3 className="benefit__title">Easy Deployment</h3>
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
              <h3 className="benefit__title">Platform Compatibility</h3>
              <p>SecurePack is designed to be compatible with a wide range of platforms and environments, ensuring your applications can be deployed across different infrastructures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
const HomePage = () => {
  return (
    <div className="homepage">
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
  return (
    <HomePage/>
  );
}
 
export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}