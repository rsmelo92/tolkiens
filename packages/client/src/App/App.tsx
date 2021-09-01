
import { Helmet } from "react-helmet";

import Header from '../components/Header'
import Hero from '../components/Hero'
import Form from '../components/Form'
import Footer from '../components/Footer'
import LandingContent from '../components/LandingContent'

import './App.css';

const metaInfo = {
  title: 'My Design Tokens | Generate tokens for your design system',
  image: `${process.env.PUBLIC_URL}/logo_white_bg.png`,
  url: 'https://www.mydesigntokens.com/',
  description: 'Building a design system? Generate your custom design tokens from your site to many platforms like Flutter, React Native, Android.'
}


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{metaInfo.title}</title>

        <meta name="robots" content="index, follow" />
        <meta name="description" content={metaInfo.description} />

        <meta property="og:title" content={metaInfo.title} />
        <meta property="og:description" content={metaInfo.description} />
        <meta property="og:image" content={metaInfo.image} />
        <meta property="og:url" content={metaInfo.url} />
        <meta property="og:site_name" content="My Design Tokens" />

        <meta name="twitter:image:alt" content="My Design Tokens Logo" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <Hero />
      <Form />
      <LandingContent />
      <Footer />
    </div>
  );
}

export default App;
