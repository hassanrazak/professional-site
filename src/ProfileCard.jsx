import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      {/* Profile Image & Name */}
      <div className="text-center p-6">
        <img
          src="/assets/profile.jpeg"
          alt="Hassan Razak"
          className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-orange-500"
        />

        <h2 className="text-3xl font-bold mt-4 text-gray-800 flex items-center justify-center space-x-2">
          <span>Hassan Razak</span>
          <a
            href="https://www.linkedin.com/in/hrazak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
            title="View my LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </h2>

        <p className="text-md text-gray-600">SOFTWARE ENGINE</p>
      </div>

      {/* Footer with Contact Info */}
      <footer
        className="w-full text-white text-sm py-6 px-4 mt-6 rounded-b-lg bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/nyc-skyline.jpg')`, // Replace with your skyline image
        }}
      >
        <div className="bg-black/60 p-4 rounded">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-row items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href="mailto:1hassan.razak1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Outlook
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGoogle} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=1hassan.razak1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Gmail
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+13478543733" className="hover:underline">
                (347) 854-3733
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/hassanrazak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/hassanrazak
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileCard;
