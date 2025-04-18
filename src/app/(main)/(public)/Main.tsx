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
import Footer from './Footer';
import Faq from './Faq';
import TheTeam from './TheTeam';
import ApplyForEvaluation from './ApplyForEvaluation';
import Reviews from './Reviews';
import Sponsors from './Sponsors';
import BlogBar from './BlogBar';
import Navbar from './Navbar';
import Hero from './Hero';
import { useIndexPageState } from '@/state/indexStore';
import useRunOnce from '@/hooks/useRunOnce';
import { ApiCategoryData, ApiEvaluationData, ApiLogoData, ApiOrganizationData, ApiTestimonialData, ApiTeamData } from '@/utils/types/companyTypes';
import {HelmetProvider, Helmet} from 'react-helmet-async'
import VerifyModal from './VerifyModal';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Partners from './Partners';

type PageProps = {
  evaluationDates: ApiEvaluationData[];
  team: ApiTeamData[];
  categories: ApiCategoryData[];
  organizations: ApiOrganizationData[];
  testimonials: ApiTestimonialData[];
  logos: ApiLogoData[];
  partners: ApiLogoData[];
}

export default function Main({
  evaluationDates, team , testimonials, organizations, categories, logos, partners
}:PageProps) {
  const pathname = usePathname()
  
  const {setEvaluationDates, setTeam, setCategories, setOrganizations, setTestimonials, setLogos} = useIndexPageState();

  useRunOnce(()=>{
    setEvaluationDates(evaluationDates)
    setTeam(team)
    setTestimonials(testimonials)
    setOrganizations(organizations)
    setCategories(categories)
    setLogos(logos)
  })

  useEffect(()=>{
    function addScript(){
      const old= document.getElementById('main-js');
      if(old){
        old.outerHTML = '';
      }
      const e = document.createElement("script");
    e.setAttribute("id", "main-js");
  e.setAttribute("src", "/main.js");
  document.getElementsByTagName("head")[0].appendChild(e);
    }
    if(pathname == '/'){
      addScript();
    }
  }, [pathname])
  
return <>
  <main className="z-0 relative">
    <BlogBar />
   <Navbar />
  <Hero />
  <Sponsors />
  <Reviews />
  <ApplyForEvaluation />
  <TheTeam />
  <Faq />
  <Partners data={partners} />
  <Footer />
  </main>
  <VerifyModal />
   
</>
}