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
  <script src={`/main.js?cacheControl=${new Date().getTime()}`} async defer></script>
</>
}