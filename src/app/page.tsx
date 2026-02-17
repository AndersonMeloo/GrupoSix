import React, { Suspense } from 'react';
import { Footer } from "./components/Footer";
import HomeContent from "./components/Home";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="py-12 px-4 text-center">Carregando...</div>}>
        <HomeContent />
        <Footer />
      </Suspense>
    </>
  );
}
