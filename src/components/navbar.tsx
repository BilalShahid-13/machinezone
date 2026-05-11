"use client";
import { montserrat, scrollToSection } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center w-full'>
      {/* <PillNav
        logo={"/logo-1.png"}
        logoAlt="Company Logo"
        items={navbarList}
        activeHref="/"
        className={`custom-nav ${montserrat.className}`}
        ease="power2.easeOut"
        baseColor="#FCB53B"
        pillColor="#E8E2DB"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        // theme="light"
        initialLoadAnimation={true}
      /> */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 backdrop-blur-xl bg-[#0d0d00]/60 px-6 md:px-12 py-5 flex justify-between items-center text-[#f5f0e0]">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
          router.push('/')
          window.scrollTo(0, 0)

        }}>
          <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-black">M</div>
          <span className={`${montserrat.className} text-[#f5f0e0] font-black tracking-tighter text-lg uppercase`}>
            Machine <span className="text-yellow-500 italic">Zone</span>
          </span>
        </div>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">
          {['games', 'expertise', 'about'].map(id => (
            <button key={id} onClick={() => scrollToSection(id)} className="hover:text-yellow-500 transition-colors uppercase">{id}</button>
          ))}
        </div>
        <Button
          variant={'default'}
          onClick={() => scrollToSection('contact-us')}
          className="bg-yellow-500 text-black font-black hover:scale-105 hover:bg-yellow-600 transition-transform">
          CONTACT US
          {/* <a href={EMAIL_LINK}>
            </a> */}
          {/* <a href={EMAIL_LINK}>CONTACT US</a> */}
        </Button>
      </nav>
    </div>
    // <div style={{ height: '100%', position: "fixed", zIndex: 9998 }}
    //   className='w-full'>
    //   <StaggeredMenu
    //     title='Game Object'
    //     className='fixed z-999'
    //     isFixed={false}
    //     position="left"
    //     items={navbarList}
    //     // socialItems={socialItems}
    //     displaySocials={false}
    //     displayItemNumbering={true}
    //     menuButtonColor="#000000"
    //     openMenuButtonColor="#000000"
    //     changeMenuColorOnOpen={true}
    //     colors={['#fcc800', '#ff6900']}
    //     logoUrl="/logo-1.png"
    //     accentColor="#fcc800"
    //     onMenuOpen={() => console.log('Menu opened')}
    //     onMenuClose={() => console.log('Menu closed')}
    //   />
    // </div>

  )
}
