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
import AppScript from '@/components/AppScript';
import Script from 'next/script';

type PageProps = {
  evaluationDates: ApiEvaluationData[];
  team: ApiTeamData[];
  categories: ApiCategoryData[];
  organizations: ApiOrganizationData[];
  testimonials: ApiTestimonialData[];
  logos: ApiLogoData[];
}

export default function Main({
  evaluationDates, team , testimonials, organizations, categories, logos
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
  <Footer />
  </main>
  <VerifyModal />
  <script
  async
  defer
  id='compatibility-script'
>{`
  console.log('aww')
  
    (function(){
        var s    = document.createElement('script');
        var h    = document.querySelector('head') || document.body;
        s.src    = 'https://acsbapp.com/apps/app/dist/js/app.js';
        s.async  = true;
        s.onload = function(){
            acsbJS.init({
                statementLink    : '',
                footerHtml       : '',
                hideMobile       : false,
                hideTrigger      : false,
                disableBgProcess : false,
                language         : 'en',
                position         : 'right',
                leadColor        : '#146FF8',
                triggerColor     : '#146FF8',
                triggerRadius    : '50%',
                triggerPositionX : 'right',
                triggerPositionY : 'bottom',
                triggerIcon      : 'people',
                triggerSize      : 'bottom',
                triggerOffsetX   : 20,
                triggerOffsetY   : 20,
                mobile           : {
                    triggerSize      : 'small',
                    triggerPositionX : 'right',
                    triggerPositionY : 'bottom',
                    triggerOffsetX   : 10,
                    triggerOffsetY   : 10,
                    triggerRadius    : '20'
                }
            });
        };
        h.appendChild(s);
    })();
  `}</script>
   
</>
}