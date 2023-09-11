import { League_Gothic, Inter, Albert_Sans } from "@next/font/google";
import "../styles/globals.css";

// importing the Work Sans font with
// the Next.js 13 Font Optimization Feature

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const albertSans = Albert_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --leagueGothic-font: ${leagueGothic.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
          --albertSans-font: ${albertSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
