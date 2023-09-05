import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next'
import { Figtree } from 'next/font/google'
import { useRouter } from "next/router";
import { wrapper } from "@/redux/store";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";




const figtree = Figtree({
  style: ['normal',],
  weight: ['400', '700','900','600'],
  subsets: ['latin'],
})
 


const  App = ({ Component, pageProps }) => {
  const router = useRouter();
  const hideHeaderRoutes = ["/search"]; // Add the routes where you want to hide the header
  // Check if the current route is in the hideHeaderRoutes array
  const shouldHideHeader = hideHeaderRoutes.includes(router.pathname);

  return (
   <> 
      {<Header />}
      <main  className={figtree.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
      </>
  );
}

export default  appWithTranslation(wrapper.withRedux(App))