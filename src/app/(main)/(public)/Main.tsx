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
  
  const {setEvaluationDates, setTeam, setCategories, setOrganizations, setTestimonials, setLogos} = useIndexPageState();

  useRunOnce(()=>{
    setEvaluationDates(evaluationDates)
    setTeam(team)
    setTestimonials(testimonials)
    setOrganizations(organizations)
    setCategories(categories)
    setLogos(logos)
  })
  
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
 
  {/* <script src={`/main.js?cacheControl=${new Date().getTime()}`} async defer></script> */}
  {/* <HelmetProvider>
    <Helmet>
      <script src={`/main.js`} async defer></script>
      <script>
        {`
        function loadJS() {
  // code for the image slider

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    let scroller = document.querySelectorAll(".sponsor_scroller");
    return scroller.forEach(scroll => {
      scroll.setAttribute("data-animated", true);

      let scroll_Inner = scroll.querySelector(".sponsor_images");
      let scroll_Innercontent = Array.from(scroll_Inner.children);

      scroll_Innercontent.forEach(item => {
        let duplicatedImages = item.cloneNode(true);

        duplicatedImages.setAttribute("aria-hidden", true);
        scroll_Inner.appendChild(duplicatedImages);
      });
    });
  }

  window.addEventListener("scroll", () => {
    let headerloop = document.querySelector("#head");
    if (headerloop) headerloop.classList.toggle("stick", scrollY > 40);
  });

  // accordion
  let menu = document.getElementById("mnu-btn");
  let act = menu.addEventListener("click", () => {
    let result = document.querySelector(".accordion_menu");

    result.classList.add("active");

    let accordioncloser = document.querySelector("#accordionclose");

    let closeaccordion = accordioncloser.addEventListener("click", () => {
      result.classList.remove("active");
    });

    // menuBtn.classList.remove("active")
  });

  let cross = document.querySelectorAll(".questions");
  cross.forEach(press => {
    press.addEventListener("click", () => {
      press.classList.toggle("activated");
    });
  });

  let verify = document.querySelector("#mobileaccess");
  if (verify) {
    let mobileshow = verify.addEventListener("click", () => {
      let mobileresult = document.querySelector(".verify_mobile");
      mobileresult.classList.add("mobileactivate");

      let remover = document.querySelector("#mobilecloser");
      remover.addEventListener("click", () => {
        mobileresult.classList.remove("mobileactivate");
      });
    });
  }

  if (window.location.hash)
    (() => {
      document.querySelector(window.location.hash).scrollIntoView({
        behavior: "smooth"
      });
    })();
}

loadJS();

        `}
      </script>
    </Helmet>
  </HelmetProvider> */}
 <script async defer src='/entry.js'></script>
</>
}