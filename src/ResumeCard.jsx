import { Link } from 'react-router-dom';

export default function ResumeCard() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800 bg-white border border-gray-200 shadow-md">
     

      {/* EXPERIENCE */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold underline">Experience</h2>
        <div className="mt-2">
          <h3 className="font-bold">Software Developer — FDM Group</h3>
          <p className="text-sm text-gray-600">Full-stack Java/React Developer</p>
          <ul className="list-disc list-inside mt-1 text-sm">
            <li>
              Built a multi-step insurance app with React front end and Spring Boot microservices back end.
            </li>
            <li>
              Implemented dynamic form validation, centralized state management, and REST integration.
            </li>
            <li>
              Contributed to Agile PODs with sprint planning, retrospectives, and code reviews.
            </li>
          </ul>
        </div>
      </section>

      {/* PERSONAL PROJECT */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold underline">Projects</h2>
        <div className="mt-2">
          <h3 className="font-bold">Learning Platform (Personal Project)</h3>
          <ul className="list-disc list-inside mt-1 text-sm">
            <li>Includes video streaming (AWS S3), drag-and-drop course editor, EC2 + RDS deployment.</li>
            <li>
              <Link to="/projects" className="text-blue-600 underline">
                See project walkthrough
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* PRIOR ENGINEERING EXPERIENCE */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold underline">Prior Engineering Experience</h2>
        <div className="mt-2">
          <h3 className="font-bold">Mechanical Test Engineer — Raytheon Technologies</h3>
          <ul className="list-disc list-inside mt-1 text-sm">
            <li>
              Developed and executed test standards, collaborated cross-functionally, applied version control practices.
            </li>
            <li>Transferred technical discipline and rigor into software development practices.</li>
          </ul>
        </div>
      </section>

      {/* COVER LETTER SNIPPET (OPTIONAL) */}
      <section className="mt-8 text-sm text-gray-700">
        <p>
          I'm passionate about building systems that create real-world impact. Let’s connect — I’d love to discuss how
          I can contribute to your team!
        </p>
      </section>
    </div>
  );
}