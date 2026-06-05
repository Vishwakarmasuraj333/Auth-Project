"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import HeroSection from "../components/dashboard/HeroSection";
import AboutSection from "../components/dashboard/AboutSection";
import Aboutimgsection from "../components/dashboard/Aboutimgsection";
import SkillsSection from "../components/dashboard/SkillsSection";
import ProjectsSection from "../components/dashboard/ProjectsSection";
import ContactSection from "../components/dashboard/ContactSection";
import AISection from "../components/dashboard/AISection";
import ExperienceTimeline from "../components/dashboard/ExperienceTimeline";
import EducationSection from "../components/dashboard/EducationSection";
export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (!token || !savedUser) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <HeroSection user={user} logout={logout} />
      <Aboutimgsection />
      <AboutSection />
      <SkillsSection />
         <AISection />
      <ExperienceTimeline />
      <EducationSection />
      <ProjectsSection />

      <ContactSection />
    </main>
  );
}