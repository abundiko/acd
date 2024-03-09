import { Suspense } from "react";
import "./assets/main.css";
import Main from "./Main";

export default function Page() {
  return (
    <main>
      {/* <Suspense> */}
      <Main />
      {/* </Suspense> */}
    </main>
  );
}
