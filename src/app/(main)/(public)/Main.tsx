'use client'

import './assets/MediaQueries/Minimessage.css';
import './assets/MediaQueries/Header.css';
import './assets/MediaQueries/Hero.css';
import './assets/MediaQueries/Sponsors.css';
import './assets/MediaQueries/expert-reviews.css';
import './assets/MediaQueries/Evaluations.css';
import './assets/MediaQueries/acessibility.css';
import './assets/MediaQueries/faq.css';
import './assets/MediaQueries/footer.css';
import './assets/MediaQueries/accordionmenu.css';
import './assets/MediaQueries/verifymobile.css';
import Script from 'next/script';
import Footer from './Footer';
import Faq from './Faq';
import TheTeam from './TheTeam';
import ApplyForEvaluation from './ApplyForEvaluation';
import Reviews from './Reviews';
import Sponsors from './Sponsors';
import BlogBar from './BlogBar';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Main() {
return <>
  <BlogBar />


   <Navbar />


  <Hero />
  <Sponsors />



  <Reviews />


  <ApplyForEvaluation />


  <TheTeam />


  <Faq />

  <Footer />
  
    <Script src='/main.js' defer />
</>
}