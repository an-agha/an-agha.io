import Hero from '@/components/contact/Hero'
import { Metadata } from 'next';
import React from 'react'
 
export const metadata: Metadata = {
  title: 'Contact CITECH Blockchain Sustainability Platform',
  description:
    'Get in touch with CITECH to schedule a demo, request support, or discuss blockchain sustainability solutions that transform the construction industry.',
  alternates: {
    canonical: 'https://citech.my/contact',
  },
};

function IndexPage() {
  return (
    <main className='main-container pt-[60px] md:pt-[100px] px-10 lg:px-[100px]'>
      <Hero />
    </main>
  );
}

export default IndexPage;
