import React, { useState } from "react";

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const PrivacyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto shadow-lg">
          <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>
          <div className="p-6 text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
            <p>
              <strong>Effective Date:</strong> October 21, 2025
            </p>
            <p>
              AirGuard ("we," "us," or "our") operates the air quality
              monitoring application. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data
              when you use our Service and the choices you have associated with
              that data.
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Information Collection and Use
            </h3>
            <p>
              We collect data to provide and improve the Service. This may
              include information about your device, location (if permitted),
              and air quality readings from your area. We do not sell personal
              information to third parties.
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Data Security
            </h3>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or electronic storage is
              100% secure. While we strive to use commercially acceptable means
              to protect your personal information, we cannot guarantee its
              absolute security.
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Changes to This Privacy Policy
            </h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Effective Date" at the top of this Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const TermsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto shadow-lg">
          <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Terms &amp; Conditions
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>
          <div className="p-6 text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
            <p>
              <strong>Effective Date:</strong> October 21, 2025
            </p>
            <p>
              These Terms and Conditions ("Terms") govern your access to and use
              of AirGuard. By using AirGuard, you agree to comply with these
              Terms. If you do not agree to any part of these Terms, you may not
              use AirGuard.
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Use License
            </h3>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on AirGuard for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempt to reverse engineer, disassemble, or decompile any
                software
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Disclaimer
            </h3>
            <p>
              The materials on AirGuard are provided on an 'as is' basis.
              AirGuard makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
              Limitations
            </h3>
            <p>
              In no event shall AirGuard or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on AirGuard.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer className="bg-slate-50 dark:bg-slate-800 border-t border-blue-100 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mb-8">
            {/* Brand Section */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/airguard-logo-clearbg.png"
                  alt="AirGuard"
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  AirGuard
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time air quality monitoring for a healthier tomorrow.
              </p>
            </div>

            {/* Let's Connect */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/johnmartinroque/airguard"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition inline-flex items-center space-x-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-slate-700"></div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} AirGuard. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500 dark:text-gray-500">
              <span>Monitoring air quality in real-time</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}

export default Footer;
