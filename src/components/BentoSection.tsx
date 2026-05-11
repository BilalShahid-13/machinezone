"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";
import { montserrat } from "@/lib/utils";

interface MagicBentoItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    glowColor?: string;
    accent?: React.ReactNode;
}

const MagicBentoItem = ({ title, description, icon, className, glowColor = "rgba(234, 179, 8, 0.15)", accent }: MagicBentoItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Spotlight position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Tilt effects
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Normalize mouse position to -0.5 to 0.5 for tilt
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);

        // Set CSS variables for the spotlight/glow effect
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900/80 ${className}`}
        >
            {/* Spotlight Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-yellow-500 ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                        {icon}
                    </div>
                    <h4 className={`${montserrat.className} text-2xl font-bold text-white mb-3`}>{title}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {description}
                    </p>
                </div>

                {accent && <div className="mt-8">{accent}</div>}
            </div>

            {/* Subtle Star Particles (React Bits Style) */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute h-1 w-1 rounded-full bg-white top-10 left-20 animate-pulse" />
                <div className="absolute h-1 w-1 rounded-full bg-white bottom-20 right-10 animate-pulse delay-75" />
                <div className="absolute h-1 w-1 rounded-full bg-white top-1/2 left-1/4 animate-pulse delay-150" />
            </div>
        </motion.div>
    );
};

export default function MagicBentoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* 1. Large Feature Card */}
            <MagicBentoItem
                className="md:col-span-2 md:row-span-1"
                icon={<Cpu size={24} />}
                title="High Performance Engineering"
                description="We optimize every line of code to ensure 60FPS gameplay across all device tiers, from budget smartphones to high-end flagships. Our engine-level tuning maximizes hardware potential."
                accent={
                    <div className="flex gap-2">
                        {["Vulkan", "Metal", "Optimization"].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-tighter text-zinc-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                }
            />

            {/* 2. Scaling Card (Yellow Theme) */}
            <MagicBentoItem
                className="md:col-span-1 bg-yellow-500/5 hover:bg-yellow-500/10 border-yellow-500/20"
                glowColor="rgba(234, 179, 8, 0.3)"
                icon={<TrendingUp size={24} />}
                title="User Scaling"
                description="Mastering ASO and UA to take games from zero to 5 Million+ downloads."
                accent={
                    <div className="relative h-20 w-full overflow-hidden">
                        <Zap className="absolute -bottom-4 -right-4 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors" size={100} />
                        <div className="text-3xl font-black italic text-yellow-500">5M+</div>
                    </div>
                }
            />

            {/* 3. Safety Card */}
            <MagicBentoItem
                className="md:col-span-1"
                icon={<ShieldCheck size={24} />}
                title="Fleet Safety"
                description="Advanced fleet solutions and secure infrastructure for multiplayer and data-driven simulation environments."
            />

            {/* 4. Global Community Card */}
            <MagicBentoItem
                className="md:col-span-2"
                icon={<Users size={24} />}
                title="Global Community"
                description="Managing millions of interactions daily across our diverse portfolio of mobile simulators. We build ecosystems, not just games."
                accent={
                    <div className="flex -space-x-3 mt-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500">
                                {i}
                            </div>
                        ))}
                        <div className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-yellow-500 flex items-center justify-center text-[10px] font-bold text-black">
                            +1M
                        </div>
                    </div>
                }
            />
        </div>
    );
}