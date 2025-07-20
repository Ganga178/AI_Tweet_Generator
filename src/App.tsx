import React from 'react';
import Header from './components/Header';
import TweetGenerator from './components/TweetGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <TweetGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;