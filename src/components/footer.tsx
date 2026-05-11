"use client";
import { EMAIL_LINK } from "@/lib/constant";
import { montserrat } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

const FooterColumn = ({ title, links }: any) => (
  <div>
    <p className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.2em] mb-6">{title}</p>
    <ul className="space-y-4 text-sm font-bold opacity-60">
      {links.map((link: any) => (
        <li key={link.label}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>
      ))}
    </ul>
  </div>
);

export default function GamingFooter() {
  return (
    // <footer className="relative w-full px-4 pb-8 mt-20">
    //   {/* Glassmorphism Container */}
    //   <motion.div className="max-w-7xl mx-auto rounded-[40px] border border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden p-12 flex flex-col md:flex-row justify-between items-start gap-12"
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, amount: 0.3 }}
    //     variants={containerVariants}>

    //     {/* Left Column: Branding & Socials */}
    //     <motion.div className="flex flex-col gap-6" variants={itemVariants}>
    //       <div className="flex items-center gap-2">
    //         {/* Replace with your specific bolt logo */}
    //         <div className="relative h-auto bg-white rounded-full flex items-center justify-center shadow-sm py-4 px-8 max-sm:w-full gap-3">
    //           <Image src={"/logo-1.png"} width={40} height={40} alt='logo' priority className='w-8 h-8' />
    //           <span className="text-yellow-500 font-black text-2xl max-sm:text-xl">Game Object</span>
    //         </div>
    //       </div>

    //       <div className="flex gap-4">
    //         <SocialIcon Icon={Instagram} />
    //         <SocialIcon Icon={Twitter} />
    //         <SocialIcon Icon={Linkedin} />
    //         <SocialIcon Icon={Facebook} />
    //       </div>

    //       <p className="text-gray-500 text-sm font-medium mt-4">
    //         © Game Object 2026
    //       </p>
    //     </motion.div>

    //     {/* Center Column: Navigation */}
    //     <motion.div className="flex flex-col gap-4" variants={itemVariants}>
    //       <h4 className="font-bold text-gray-900 text-lg">Home</h4>
    //       <nav className="flex flex-col gap-2">
    //         <FooterLink text="About" />
    //         <FooterLink text="Games" />
    //         <FooterLink text="Contact Us" />
    //       </nav>
    //     </motion.div>

    //     {/* Right Column: Contact */}
    //     <div className="md:text-right">
    //       <a
    //         href="mailto:hello@gamedistrict.co"
    //         className="text-gray-600 hover:text-yellow-500 font-semibold transition-colors text-lg max:sm:text-base max-sm:font-medium"
    //       >
    //         hello@gameobject.co
    //       </a>
    //     </div>
    //   </motion.div>
    // </footer>
    <footer id="about" className="bg-[#050500] text-[#f5f0e0] border-t border-white/5 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-black text-black">B</div>
            <span className={`${montserrat.className} font-extrabold text-xl tracking-tighter uppercase`}>Machine Zone</span>
          </div>
          <p className="opacity-40 max-w-sm mb-10 italic">Redefining mobile entertainment through precision and massive global scale.</p>
          <div className="flex gap-4">
            <a href={EMAIL_LINK} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <FooterColumn title="Connect" links={
            [
              { label: "Email Us", href: EMAIL_LINK },

            ]} />
          {/* <FooterColumn title="Legal" links={[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms", href: "#" }]} /> */}
          <div>
            <p className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.2em] mb-6">Privacy Policy</p>
            <Link
              href={'/privacy'}
              className="space-y-4 text-sm font-bold opacity-60">
              Privacy & Terms
            </Link>
          </div>
          <FooterColumn title="Contact" links={[{
            label: `Shed 02,Al Ghurair Centre
إمارة دبيّ
United Arab Emirates`, href: "/"
          }, { label: "+1-903-370-1444", href: "#" }]} />
        </div>
      </div>
    </footer>
  );
}
