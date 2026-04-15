"use client";
import { MdVerified, MdOutlineAssignment } from "react-icons/md";
import { BsCalendar, BsStar, BsBriefcase, BsLink45Deg, BsCheckCircle } from "react-icons/bs";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import candidateData from '../assests/data';

export default function InternshipCertificate() {
  const candidate = candidateData[0];
  const initials = candidate.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 font-sans xl:max-w-[2000px] 2xl:max-w-[2400px] lg:flex-row lg:gap-8 xl:gap-10">
      {/* LEFT PANEL */}

      <aside
        className="w-full lg:w-[430px] xl:w-[520px] 2xl:w-[600px] h-fit shrink-0 rounded-3xl border border-[rgba(255,107,0,0.2)] p-8"
        style={{
          background: "linear-gradient(135deg, rgba(255,107,0,0.02), rgba(255,107,0,0.05))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        {/* Avatar */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div
            className="w-30 h-30 rounded-full flex items-center justify-center text-white font-bold text-[48px] leading-none"
            style={{
              background: "linear-gradient(135deg, #cc5500, #ff6b00)",
              boxShadow: "0 0 32px rgba(34,197,94,0.4)",
            }}
          >
            {initials}
          </div>
          <h2 className="text-white font-bold text-[28px] leading-tight text-center">
            {candidate.name}
          </h2>
          <p className="text-[#ccc] text-[16px] text-center">{candidate.role} Intern</p>

          {/* Verified badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#22c55e]"
            style={{
              background: "rgba(15,76,44,0.8)",
              backdropFilter: "blur(4px)",
              boxShadow: "0 0 24px rgba(34,197,94,0.3)",
            }}
          >
            <MdVerified className="text-[#22c55e] text-[18px]" />
            <span className="text-[#22c55e] font-bold text-[14px]">
              {candidate.validationStatus === "Valid Certificate" ? "Verified" : candidate.validationStatus}
            </span>
          </div>
        </div>

        {/* details*/}
        <div className="flex flex-col gap-4 mb-8">
          <InfoRow label="Certificate ID" value={`CD2025-INT-000${candidate.id}`} valueClass="text-[#ff6b00] font-mono" />
          <InfoRow label="Duration" value={candidate.totalDuration} />
          <InfoRow label="Attendance" value={candidate.attendance} valueClass="text-[#22c55e] font-bold" />
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-[#888] text-[12px] uppercase tracking-[1px] mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {candidate.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] text-white text-[12px] font-medium"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col gap-6">

        {/* Timeline */}
        <Section>
          <SectionHeader icon={BsCalendar} title="Internship Timeline" iconColor="text-[#ff6b00]">
            <Badge icon={BsStar} text={candidate.recommendation} />
          </SectionHeader>
          <div className="flex gap-8 mt-4">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border-2 border-[#0b0b0b] shrink-0"
                style={{ background: "#ff6b00", boxShadow: "0 0 16px rgba(255,107,0,0.5)" }} />
              <div className="w-0.5 flex-1 min-h-12.5"
                style={{ background: "linear-gradient(to bottom, #ff6b00, #22c55e)" }} />
              <div className="w-6 h-6 rounded-full border-2 border-[#0b0b0b] shrink-0"
                style={{ background: "#22c55e", boxShadow: "0 0 16px rgba(34,197,94,0.5)" }} />
            </div>
            <div className="flex flex-col justify-between py-0.5 gap-6">
              <div>
                <p className="text-[#888] text-[12px]">Started</p>
                <p className="text-white font-bold text-[18px]">{candidate.joinedDate}</p>
              </div>
              <div>
                <p className="text-[#888] text-[12px]">Completed</p>
                <p className="text-white font-bold text-[18px]">{candidate.completionDate}</p>
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="text-[#888] text-[13px]">Total Duration</p>
              <p className="text-[#ff6b00] font-bold text-[36px] leading-tight">{candidate.totalDuration}</p>
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section>
          <SectionHeader icon={BsBriefcase} title="Featured Projects" iconColor="text-[#ff6b00]" />
          <div className="flex flex-col gap-4 mt-4">
            {candidate.projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-[rgba(255,255,255,0.1)] p-5 flex items-start justify-between gap-4"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(4px)" }}
              >
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[18px] mb-1">{project.title}</h4>
                  <p className="text-[#aaa] text-[14px] mb-3">{project.desc}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-[rgba(255,107,0,0.3)] flex items-center justify-center shrink-0 hover:bg-[rgba(255,107,0,0.2)] transition-colors"
                  style={{ background: "rgba(255,107,0,0.1)" }}
                >
                  <FiExternalLink className="text-white text-[20px]" />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Professional Links */}
        <Section>
          <SectionHeader icon={BsLink45Deg} title="Professional Links" iconColor="text-[#ff6b00]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <a href={candidate.gitLink} target="_blank" rel="noopener noreferrer" className="block">
              <LinkCard icon={FaGithub} iconBg="rgba(255,255,255,0.1)" title="GitHub" subtitle="View repositories" />
            </a>
            <a href={candidate.linkedIn} target="_blank" rel="noopener noreferrer" className="block">
              <LinkCard icon={FaLinkedin} iconBg="rgba(10,102,194,0.2)" title="LinkedIn" subtitle="View profile" />
            </a>
          </div>
        </Section>

        {/* Conduct & Performance */}
        <Section>
          <SectionHeader icon={MdOutlineAssignment} title="Conduct & Performance" iconColor="text-[#ff6b00]" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <StatCard label="Standing">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#22c55e] mt-2"
                style={{ background: "rgba(15,76,44,0.6)", backdropFilter: "blur(4px)" }}
              >
                <BsCheckCircle className="text-[#22c55e] text-[16px]" />
                <span className="text-[#22c55e] font-bold text-[14px]">{candidate.standing}</span>
              </div>
            </StatCard>
            <StatCard label="Warnings">
              <div className="flex items-baseline gap-2 justify-center mt-1">
                <span className="text-white font-bold text-[32px]">{candidate.warnings}</span>
                <span className="text-[#22c55e] font-medium text-[14px]">
                  {candidate.warnings === 0 ? "No issues" : "Issues present"}
                </span>
              </div>
            </StatCard>
            <StatCard label="Attendance">
              <p className="text-[#22c55e] font-bold text-[32px] text-center mt-1">{candidate.attendance}</p>
            </StatCard>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <p className="text-[#888] text-[13px] mb-3">Attendance Score</p>
            <div
              className="w-full h-4 rounded-full border border-[rgba(255,255,255,0.1)] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: candidate.attendance, background: "linear-gradient(90deg, #15803d, #16a34a, #22c55e)" }}
              />
            </div>
          </div>
        </Section>

      </div >
    </div >
  );
}

/* ── Sub-components ── */

function Section({ children }) {
  return (
    <div
      className="rounded-3xl border border-[rgba(255,255,255,0.1)] p-8"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, children, iconColor = "text-white" }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Icon className={`${iconColor} text-[24px]`} />
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#22c55e]"
      style={{ background: "rgba(15,76,44,0.6)", backdropFilter: "blur(4px)" }}
    >
      <Icon className="text-[#22c55e] text-[18px]" />
      <span className="text-[#22c55e] font-bold text-[14px]">{text}</span>
    </div>
  );
}

function InfoRow({ label, value, valueClass = "text-white font-medium" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#888] text-[13px]">{label}</span>
      <span className={`text-[14px] ${valueClass}`}>{value}</span>
    </div>
  );
}

function LinkCard({ icon: Icon, iconBg, title, subtitle }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-2xl border border-[rgba(255,255,255,0.1)] cursor-pointer hover:border-[rgba(255,255,255,0.2)] transition-colors"
      style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: iconBg }}>
        <Icon className="text-white text-[24px]" />
      </div>
      <div className="flex-1">
        <p className="text-white font-bold text-[16px]">{title}</p>
        <p className="text-[#888] text-[13px]">{subtitle}</p>
      </div>
      <FiArrowRight className="text-white text-[20px] opacity-60" />
    </div>
  );
}

function StatCard({ label, children }) {
  return (
    <div
      className="rounded-2xl border border-[rgba(255,255,255,0.1)] p-4 flex flex-col items-center"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <p className="text-[#888] text-[12px] uppercase tracking-[1px] text-center">{label}</p>
      {children}
    </div>
  );
}