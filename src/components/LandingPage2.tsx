"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EMAIL_LINK, WEB_NAME } from "@/lib/constant";
import { montserrat, scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import Image from "next/image";
import crazy from "../../public/hero/crazy.webp";
import drive from "../../public/hero/drive.webp";
import BentoSection from "./BentoSection";
import ContactUs from "./ContactUsForm";

const SectionHeader = ({ title, highlight, description, align = "left" }: any) => (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className={`${montserrat.className} text-5xl md:text-7xl font-black italic uppercase`}>
            {title} <span className="text-yellow-500">{highlight}</span>
        </h2>

        {description && <p className="opacity-40 mt-4 max-w-xl mx-auto">{description}</p>}
    </div>
);

const GameCard = ({ game }: { game: any }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 hover:border-yellow-500/50 transition-all duration-500"
    >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
        <div className="flex justify-between items-start mb-12">
            <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
                <Image
                    src={game.img}
                    className="object-cover rounded-3xl"
                    width={80}
                    height={80}
                    priority
                    quality={80}
                    alt={game.title}
                />
            </div>
            <div className="text-right">
                <span className="block text-3xl font-black text-yellow-500">{game.downloads}</span>
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Global Downloads</span>
            </div>
        </div>
        <h3 className={`${montserrat.className} text-3xl font-bold mb-4`}>{game.title}</h3>
        <p className="opacity-50 mb-8 text-lg leading-relaxed">{game.description}</p>
        <div className="flex gap-2 mb-10">
            {game.tags.map((t: string) => (
                <Badge key={t} variant="default" className="border-white/10 opacity-60 italic text-[10px]">{t}</Badge>
            ))}
        </div>
        <Button asChild className="w-full h-16 bg-yellow-500 text-black font-black text-lg rounded-2xl hover:bg-yellow-400">
            <a href={game.link} target="_blank" rel="noreferrer">
                DOWNLOAD <Download className="ml-2 w-5 h-5" />
            </a>
        </Button>
    </motion.div>
);

// --- MAIN PAGE ---

export default function ExpandedLandingPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    } as const;

    return (
        <div className="bg-[#0d0d00] text-[#f5f0e0] font-sans selection:bg-yellow-500/30 w-full overflow-x-hidden">

            {/* 2. HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32">
                <div className="absolute top-1/4 -left-20 w-125 h-125 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse " />
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto text-center z-10 py-4">
                    <motion.div variants={fadeUp}>
                        <Badge className="bg-white/5 border-white/10 text-yellow-500 mb-8 py-2 px-6 rounded-full tracking-widest">
                            <Star className="w-3 h-3 mr-2 fill-yellow-500" /> TOP-TIER MOBILE PUBLISHER
                        </Badge>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className={`${montserrat.className} text-6xl md:text-[110px] font-black italic uppercase leading-[0.85] tracking-tighter mb-10`}>
                        Scale <span className="text-yellow-500">Beyond</span> <br /> Limits.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-12">
                        {WEB_NAME} bridge the gap between creative game design and massive commercial success.
                        Home to <span className="text-white font-bold underline decoration-yellow-500">5 Million+ Downloads</span>.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
                        <Button onClick={() => scrollToSection('games')} className="h-16 px-10 bg-yellow-500 text-black font-black text-lg rounded-2xl">
                            VIEW PORTFOLIO
                        </Button>
                        <Button asChild variant="default" className="h-16 px-10 border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/5">
                            <a href={EMAIL_LINK}>GET IN TOUCH</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. MARQUEE */}
            <MarqueeRow
                items={[
                    'MEGA RAMP STUNTS',
                    'ASMR SATISFYING CUTS',
                    'HIGH-PERFORMANCE GAMING',
                    '5M+ DOWNLOADS',
                    'FLEET SOLUTIONS',
                    'PHYSICS SIMULATION'
                ]}
            />

            {/* 4. GAMES */}
            <section id="games" className="py-32 px-6 max-w-7xl mx-auto">
                <SectionHeader title="The" highlight="Lineup" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {GAMES_DATA.map((game, i) => <GameCard key={i} game={game} />)}
                </div>
            </section>

            {/* 5. EXPERTISE */}
            <section id="expertise" className="py-32 px-6 bg-[#0a0a00]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Our" highlight="Expertise" align="center" description={`Why major studios trust ${WEB_NAME} for development scaling.`} />
                    <BentoSection />
                </div>
            </section>

            <ContactUs />
        </div>
    );
}

// --- DATA & HELPER COMPONENTS ---

const GAMES_DATA = [
    {
        title: "Grand Jumping Ramp Car Stunts", // Link 1 Updated Title
        downloads: "1,000,000+",
        link: "https://play.google.com/store/apps/details?id=com.madcap.racinggame.rampcar.jump.stunts",
        color: "from-yellow-400 to-orange-600",
        tags: ["Mega Ramp", "Stunts", "Extreme Racing"], // More specific tags
        img: crazy,
        description: "Experience the thrill of mega ramp jumping with physics-defying car stunts and high-speed racing action."
    },
    {
        title: "Satisfying Rubber Cuts ASMR", // Link 2 Updated Title
        downloads: "100,000+", // Note: Update this based on latest Play Store count
        link: "https://play.google.com/store/apps/details?id=com.chunjhika.softsnap.satisfying.rubber.cuts",
        img: drive,
        color: "from-purple-500 to-pink-500", // Changed to match satisfying/ASMR vibes
        tags: ["ASMR", "Satisfying", "Simulation"], // Specific to the new game type
        description: "Unwind with the ultimate ASMR experience by cutting through colorful rubber bands in this oddly satisfying simulation."
    }
];

const MarqueeRow = ({ items }: { items: string[] }) => (
    <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap flex">
        {[1, 2].map((_, idx) => (
            <motion.div key={idx} animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex gap-20 items-center pr-20">
                {items.map((text, i) => (
                    <span key={i} className={`${montserrat.className} text-4xl font-black opacity-10 italic uppercase`}>{text}</span>
                ))}
            </motion.div>
        ))}
    </div>
);
