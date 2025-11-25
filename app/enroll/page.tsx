import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import JoinNow from "@/components/JoinNow";

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <JoinNow />
      <FooterSection />
    </main>
  );
}


