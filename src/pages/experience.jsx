import { motion } from "framer-motion";
import { blurRevealAnim, lineAnimRigtht } from "../assets/framerMo";
import splitChar from "../assets/splitChar";

const experiences = [
  {
    company: "Recruit Nepal",
    location: "Thamel, Kathmandu",
    role: "Lead Full Stack Developer",
    period: "July 2025 - Present",
    highlights: [
      "Designed a semantic search system with vector embeddings and PostgreSQL (pgvector) to improve retrieval relevance.",
      "Built document fingerprinting and deduplication for duplicate and near-duplicate detection.",
      "Developed webhook and queue based ingestion pipelines for reliable, scalable processing.",
    ],
  },
  {
    company: "Mentor Friends (Product Based)",
    location: "Mahalaxmisthan, Lalitpur",
    role: "Full Stack Developer",
    period: "Dec 2024 - June 2025",
    highlights: [
      "Built a low-code platform to help users create applications with minimal coding effort.",
      "Worked on Node.js cache servers optimized for fast data access and geographical routing.",
      "Implemented MQTT broker/subscriber flows for real-time synchronization across nodes and clients.",
    ],
  },
  {
    company: "Navata Tech (Service Based)",
    location: "Naya Thimi, Bhaktapur",
    role: "MERN Stack Developer",
    period: "Dec 2023 - Oct 2024",
    highlights: [
      "Built and maintained team-based applications using MongoDB, Express, React, and Node.js.",
      "Handled both front-end and back-end development for stable end-to-end delivery.",
      "Supported deployment and production optimization for smooth operations.",
    ],
  },
];

export default function Experience() {
  const line =
    "-----------------------------------------------------------------------";

  return (
    <section id="experience" className="w-full text-white mt-14 scroll-mt-32">
      <div className="container mx-auto p-2 md:p-4">
        <motion.div
          className="font-semibold mainText text-center w-auto"
          variants={blurRevealAnim}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center text-nowrap px-4">
            <div className="scale-x-[-1] overflow-visible">
              {splitChar(line).map((eachLi, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={lineAnimRigtht}
                    custom={index}
                    initial="hidden"
                    className="text-right"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {eachLi}
                  </motion.span>
                );
              })}
            </div>
            <span className="mx-4 text-3xl md:text-5xl tracking-wide">
              EXPERIENCE
            </span>
            {splitChar(line).map((eachLi, index) => {
              return (
                <motion.span
                  key={index}
                  variants={lineAnimRigtht}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {eachLi}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
        <p className="text-center text-[#c3c3c3] max-w-3xl mx-auto mb-8 md:mb-10">
          Product and service-based development experience focused on scalable
          backend systems and polished user-facing applications.
        </p>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            className="project-card my-6 p-5 md:p-7 rounded-2xl border border-[#5f5f5f]"
            variants={blurRevealAnim}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 pb-4 border-b border-[#ffffff1f]">
              <div>
                <h3 className="text-xl md:text-3xl font-semibold mainText tracking-wide">
                  {experience.role}
                </h3>
                <p className="text-base md:text-lg text-[#dadada]">
                  {experience.company}
                </p>
                <p className="text-sm text-[#b8b8b8]">{experience.location}</p>
              </div>
              <p className="text-sm md:text-base text-[#d2d2d2]">
                {experience.period}
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-sm md:text-base leading-relaxed text-[#e3e3e3]">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex">
                  <span className="text-[#f0c54a] mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
