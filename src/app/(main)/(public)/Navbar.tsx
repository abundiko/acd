import CheckVisits from "@/components/CheckVisits";
import AppLogo from "@/components/logo";
import Link from "next/link";

export default function Navbar() {
return <>
 <div className="sticky_header" id="head">
        <header className="container">
            <div className="logo">
                <AppLogo />
                

            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><a  target="_blank"  href="https://inclusivefriends.org/resources/publications/">Our Research</a></li>
                        <li><Link  target="_blank"  href="/dashboard" className="compliance">
                                Compliance Dashboard
                                <img src="/ASSETS/Icons/vctrswoosh.svg" alt="dashboard"/></Link></li>
                        <li><a href="#apply-for-evaluation" className="evaluation [padding:8px!important] block">Apply for Evaluation<sup>New</sup></a></li>
                    </ul>
                </nav>
            </div>
            <div className="disability-btn">
                <a href="/disability-act.pdf" download target="_blank">
                    <img src="/ASSETS/Icons/Book.svg" alt="disability book"/>
                    <p>Disability Act, 2018</p>
                </a>
            </div>

            <menu id="mnu-btn">
                <div></div>
                <div></div>
                <div></div>
            </menu>
    </header>
    </div>

    <div className="accordion_menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="accordionclose"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <ul>
            <li><a  href="https://inclusivefriends.org/resources/publications/" target="_blank">Our Research</a></li>
            <li>
              <Link href="/dashboard" target="_blank" className="compliance">
                    Compliance Dashboard
                    <img src="/ASSETS/Icons/vctrswoosh.svg" alt="dashboard"/>
                    </Link>
                    </li>
            <li><a href="#apply-for-evaluation" className="evaluation">Apply for Evaluation<sup className="[padding:8px!important] -top-3 block bg-primary text-white">New</sup></a></li>
        </ul>
    </div>
    <CheckVisits />
</>;
}