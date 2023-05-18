import { League_Gothic, Inter } from "@next/font/google";
import "../styles/globals.css";

// importing the Work Sans font with
// the Next.js 13 Font Optimization Feature

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --leagueGothic-font: ${leagueGothic.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
