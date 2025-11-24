"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const team = [
  {
    name: "Mr's. Anupama",
    role: "CEO / Founder",
    bio: "Anupama founded AV Academy with one mission to guide students, nurture their talent, and help them build strong careers in the digital and creative industries.",
    image: "/anupama.png",
    linkedin: "https://www.linkedin.com/in/virendra-singh",
    portfolio: "https://virendrasingh.com",
  },
  {
    name: "Mr. Virendra",
    role: "Director",
    bio: "Virendra, the Director of AV Academy, brings deep expertise in Video Editing and VFX mentoring students to craft high-impact visuals and develop professional storytelling skills.",
    image: "/virendra.png",
    linkedin: "https://www.linkedin.com/in/shubham-sharma/",
    portfolio: "https://shubhamsharma.dev",
  },
  {
    name: "Mr. Shubham",
    role: "Team Lead / Senior SDE",
    bio: "Shubham is the backbone of our tech team a Senior Software Engineer with 13 years of experience and a mentor who teaches technical courses and digital marketing with unmatched clarity and real-world skill.",
    image: "/shubham.png",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-69958232a",
    portfolio: "https://behance.net/dheeraj",
  },
  {
    name: "Mr. Swapnil",
    role: "3D Designer",
    bio: "Swapnil blends technical mastery with artistic vision a 3D Designer skilled in Unreal & Unity and a faculty mentor who helps students bring worlds, characters, and interactive experiences to life.",
    image: "/swapnil.png",
    linkedin: "https://www.linkedin.com/in/swapnilsoni9264",
    portfolio: "https://www.artstation.com/swapnilsoni",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="inline-block bg-[#48F4DC] text-[14px] px-3 py-1 rounded-full font-medium text-black mb-3">
              Who you work with
            </span>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Our team
            </h2>
            <p className="mt-3 text-gray-600">
              Meet the team behind our success
            </p>
          </div>

          <div className="hidden md:block">
            <a href="/about#team">
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
                All team members
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-100 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{member.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="flex items-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#48F4DC] text-black px-2 py-1 rounded-full text-sm hover:bg-[#33d6c1] transition"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon fontSize="small" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#48F4DC] text-black px-2 py-1 rounded-full text-sm hover:bg-[#33d6c1] transition"
                      aria-label={`${member.name} portfolio`}
                    >
                      <AssignmentIndIcon fontSize="small" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* mobile CTA */}
        <div className="mt-8 md:hidden flex justify-center">
          <a href="/about#team">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              All team members
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
