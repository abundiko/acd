import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AppScript({src, body, id, appendTo='head'}:{src?:string;body?:string;id:string;appendTo?:'head'|'body'}) {
  const pathname = usePathname();
  useEffect(()=>{
    function addScript(){
      const old= document.getElementById('main-js');
      if(old){
        old.outerHTML = '';
      }
      const e = document.createElement("script");
      if (body) {
        e.innerHTML = body;
      }else{
        e.setAttribute("src", src!);
      }
    e.setAttribute("id", id);
    document.getElementsByTagName(appendTo)[0].appendChild(e);
    }

    addScript();
  }, [pathname])
return <></>;
}