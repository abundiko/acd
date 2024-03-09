import AppLogo from "@/components/logo";
import { AppLayoutProps } from "@/utils/types/basicTypes";
import Link from "next/link";

export default function RootLayout({ children }: AppLayoutProps) {
  return (
    <main>
      <header className="app-container flex items-center py-6 border-b-4">
        <nav>
          <Link href="/">
            <div className="w-60">
              <AppLogo />
            </div>
          </Link>
        </nav>
      </header>
      <section className="py-10">
        <div className="app-container">
          <div className="md:rounded-md md:shadow-xl overflow-hidden flex justify-center items-center min-h-[500px] max-w-[500px] mx-auto">
            <div className="w-full h-fit md:p-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
