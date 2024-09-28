import React from 'react';
import './App.css';
import './i18n'
import {LanguageSwitcher} from "./componets/i18n";
import {Contact, Education, Footer, Header, Interests, Skills, Work} from "./componets/core";



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="no-print">
          <LanguageSwitcher onLanguageChange={() => {}} onDownloadPdf={() => {}}/>
        </div>
        <div className="App-body">
          <div className="centered-div">
            <div>
              <Header />
            </div>
            <div className="conteiner">
              <div className="info-content">
                <Contact />
                <Skills />
                <Interests />
              </div>
              <div className="career-content">
                <Work />
                <Education />
              </div>
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
