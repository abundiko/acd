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
import { ApiCategoryData, ApiEvaluationData, ApiLogoData, ApiOrganizationData, ApiStoryData, ApiTeamData } from '@/utils/types/companyTypes';
<<<<<<< HEAD
=======
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
>>>>>>> next-js

type PageProps = {
  evaluationDates: ApiEvaluationData[];
  team: ApiTeamData[];
  categories: ApiCategoryData[];
  organizations: ApiOrganizationData[];
  stories: ApiStoryData[];
  logos: ApiLogoData[];
}

export default function Main({
  evaluationDates, team , stories, organizations, categories, logos
}:PageProps) {
<<<<<<< HEAD
=======
  const [scriptId, setScriptId] = useState('1');
  const pathname = usePathname()

  useEffect(()=>{
    setScriptId(_=>_+'1');
  }, [pathname]);
>>>>>>> next-js
  
  const {setEvaluationDates, setTeam, setCategories, setOrganizations, setStories, setLogos} = useIndexPageState();

  useRunOnce(()=>{
    setEvaluationDates(evaluationDates)
    setTeam(team)
    setStories(stories)
    setOrganizations(organizations)
    setCategories(categories)
    setLogos(logos)
  })
  
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
<<<<<<< HEAD
  <script src={`/main.js?cacheControl=${new Date().getTime()}`} async defer></script>
=======
  <Script key={scriptId} id={"script"}>
    {`
          function loadJS() {
        // code for the image slider
        let scroller = document.querySelectorAll(".sponsor_scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }

        function addAnimation() {
          scroller.forEach(scroll => {
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
  </Script>
  {/* <script src={`/main.js?cacheControl=${new Date().getTime()}`} async defer></script> */}
>>>>>>> next-js
</>
}