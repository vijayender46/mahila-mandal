
'use client'

import Hero from './components/Hero';
import Feature from './components/Features';
import TextImage from './components/TextImage';
import ParallexSection from './components/ParallexSection';
import SectionTitle from './components/SectionTitle';
import Events from './components/Events';

import featureImg from '../src/images/women-empowered-group-mahila-mandal.png';
import parallexImgSrc from '../src/images/background.png';
import charityIcon from '../src/images/charity-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../app/components/Card';


export default async function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />
      <Feature />
       
          <TextImage 
            divClass={'flex mm-featured-text-image container space-x-10 px-10 my-20 items-center'}
            imageSrc={featureImg} 
            subTitle={'Welcome to Charity Platform'}
            title={'We’re Non-profit Charity Organization'}
            quotes={'Lorem ipsum dolor sit amet consectetur convallis ultrices sociis fermentum orci convallis ultrices sociis'} 
            paragraph={'Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply.'}
            hrefText={'Discover More'}
            href={'/'}
            hrefClass={'mm-button'}
          />
          <ParallexSection 
          parallexImg={parallexImgSrc} 
          headerText={'Empowering Women: Unlocking'} 
          subHeader={'Potential | Fostering Equality | Creating Change'}
          paragraph={`We'll be sharing stories of women who've overcome challenges, defied norms, and made a real difference. From fighting for fairness to nurturing leadership abilities, we're highlighting the strength and achievements of women. Join us in exploring how empowering women isn't just about them—it's about building a better, more inclusive world for everyone.`} 
          link={'Read more'}
          customclass={'customStyles'} />
          <section className='eventsSection pt-24 pb-24 w-full py-10 min-h-[500px] relative'>
            <div className='container grid grid-cols-2 gap-10 mx-auto'>
                <div className='mt-24'>
                  <SectionTitle 
                  subTitle={'Our Latest Events'} 
                  title={'Upcoming Events'}
                  text={'Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempory.'}
                  />
                  <div className='flex mm-icon-text py-4'>
                    <div className='icon pr-5'>
                      <Image src={charityIcon} width={80} alt='women club care icon' />
                    </div>
                    <div className='text'>
                      <p>Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempory.</p>
                    </div>
                  </div>
                  <div className='flex py-5'>
                    <Link className='btn mm-button !bg-[#F3B42C] !py-5 !px-12 !text-[18px]' href='/'>Read More</Link>
                  </div>
                </div>
                <div className=''>
                  <Events limit={3} />
                </div>

                <section>
                  <Card />
                </section>
            </div>            
          </section>
    </main>
  )
}
