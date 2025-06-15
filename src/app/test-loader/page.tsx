'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function TestLoaderPage() {
  // Simulate a slow loading page
  useEffect(() => {
    // This is just to simulate a page that takes time to load
    const startTime = Date.now();
    console.log('Test loader page mounted at', new Date().toISOString());
    
    return () => {
      const duration = Date.now() - startTime;
      console.log(`Test loader page unmounted after ${duration}ms`);
    };
  }, []);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-playfair mb-6">Progress Loader Test Page</h1>
      
      <div className="flex flex-col gap-4">
        <p className="mb-4">
          This page is used to test the progress loader. Click on the links below to navigate between pages and observe the loader.
        </p>
        
        <div className="flex flex-col gap-2">
          <Link 
            href="/"
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors w-fit"
          >
            Go to Home Page
          </Link>
          
          <Link 
            href="/about"
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors w-fit"
          >
            Go to About Page
          </Link>
          
          <Link 
            href="/menu"
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors w-fit"
          >
            Go to Menu Page
          </Link>
          
          <Link 
            href="/gallery"
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors w-fit"
          >
            Go to Gallery Page
          </Link>
          
          <Link 
            href="/visit-us"
            className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors w-fit"
          >
            Go to Visit Us Page
          </Link>
        </div>
        
        <div className="mt-8">
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-heritage text-white rounded hover:bg-heritage/90 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    </main>
  );
} 