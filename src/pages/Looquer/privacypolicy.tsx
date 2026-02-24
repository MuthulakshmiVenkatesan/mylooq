import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";

type InfoSectionItem = {
  title?: string;
  heading?: string;
  bullets?: string[];
  subcontent?: string[];
  description?: string;
};

type InfoSection = {
  title: string;
  description?: string;
  bullets?: string[];
  subcontent?: string[];
  items?: InfoSectionItem[];
};

const infoSections: InfoSection[] = [
  {
    title: "Information We Collect",
    description:
      "We collect various types of personal and device information from both Clients and LooQers when they interact with our Platform.",
    items: [
      {
        heading: "1. Personal Information",
        bullets: [
          "Fullname",
          "Email address",
          "Phone number",
          "Date of birth (for LooQers)",
          "Profile photos and portfolios",
          "Billing address and zip code",
        ],
      },
      {
        heading: "2. Location Information",
        bullets: [
          "Real-time GPS location (used for booking and dispatch purposes only)",
          "Address-based search history and booking destinations",
        ],
        subcontent: [
          "We collect the precise or approximate locations of users, drivers, delivery personnel, or service providers to enable different services, enable tracking and safety features, prevent and detect fraud, and comply with legal requirements. Wecollect this information when the app is running in the foreground or background of the user's mobile device",
          "Wecollect location data, such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the mobile application. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your location setting on your device. Note, however, that if you choose to opt out, you may not be able to use certain aspects of the services."
        ],
      },
      {
        heading: "3. Device and Usage Information",
        bullets: [
          "IP address",
          "Device ID and operating system",
          "Language and time zone settings",
          "App usage statistics and error logs",
        ],
      },
      {
        heading: "4. Payment Information",
        bullets: [
          "Last four digits of your payment card (via Stripe)",
          "Transaction history",
          "Payment tokens (we do not store full credit/debit card numbers)",
        ],
      },
    ],
  },
  {
    title: "User Roles",
    description:
      "We collect various types of personal and device information from both Clients and LooQers when they interact with our Platform.",
    items: [
      {
        heading: "1. Clients",
        bullets: [
          "Clients are individuals who use the Platform to book beauty and wellness services.",
        ],
      },
      {
        heading: "2. LooQers (LooQers)",
        subcontent: [
          "LooQers (referred to as \"LooQers\") are independent professionals offering services via the Platform. LooQers are responsible for providing accurate personal, professional, and portfolio information during the registration process. ",
          "Note: Although some LooQers may hold valid professional licenses, MyLooQ™ does not currently conduct license verification. Clients are encouraged to review individual LooQer profiles and make informed decisions about their bookings."
        ],
      },
    ],
  },
  {
    title: "How We Use Your Information",
    description: "We use collected data to: ",
    bullets: [
      "Facilitate service bookings and dispatches ",
      "Display LooQer availability near the Client's location ",
      "Match Clients with relevant LooQers based on service type and proximity ",
      "Communicate confirmations, updates, and promotional offers",
      "Process and secure payments via third-party processors ",
      "Monitor and improve the quality and safety of the Platform",
    ],
  },
  {
    title: "Location Access",
    description:
      "Location data is essential for:",
    bullets: [
      "Matching Clients with nearby LooQers ",
      "Calculating estimated arrival times ",
      "Managing on-demand logistics ",
    ],
    subcontent: [
      "You may disable location permissions at any time via your device settings; however, this may impair core booking functionality."
    ],
  },
  {
    title: "Payments & Third-Party Processing",
    description:
      "All payment transactions are securely processed through Stripe, Inc. or other authorized third-party gateways. MyLooQ™ does not directly store or process full payment credentials. You may be subject to Stripe's privacy policy when processing payments.",
  },
  {
    title: "Legal Status of LooQers/Orders",
    subcontent: [
      "MyLooQ™ is a marketplace platform and does not employ or endorse individual LooQers. While LooQers may list certifications, licenses, or credentials, MyLooQ™ does not verify or guarantee their authenticity unless explicitly stated otherwise.",
      "By booking through MyLooQ™, you acknowledge that: Some LooQers may be non-licensed in your jurisdiction. You are responsible for reviewing LooQer profiles and making informed choices.",
      "MyLooQ™ is not liable for service outcomes, injuries, or disputes resulting from user negligence, false claims, or misrepresented qualifications."
    ],
  },
  {
    title: "Data Sharing and Disclosure",
    description: "We may share limited user data with:",
    bullets: [
      "LooQers: to fulfill bookings and offer requested services ",
      "Stripe and similar third-party processors: for payment processing",
      "Government authorities or law enforcement: when required by law or to address fraud, safety, or legal obligations",
      "Vendors and contractors: involved in delivering our technology, communications, or customer service (bound by confidentiality agreements) ",
    ],
    subcontent: [
      "We do not sell your personal data."
    ],
  },
  {
    title: "Data Retention",
    description: "We retain user data for as long as necessary to:",
    bullets: [
      "Maintain accurate records for legal and operational purposes Comply with legal obligations (e.g., tax, regulatory compliance) Resolve disputes and enforce agreements Upon account deletion, your data will be flagged for deletion unless legal retention is required. ",
    ],
  },
  {
    title: "Security Measures",
    description: "We employ encryption, secure socket layers (SSL), firewall protections, and regular vulnerability scans to ensure the security of our systems. However, no platform is 100% immune to breaches. Users are advised to use strong passwords and report suspicious activity immediately.",
  },
  {
    title: "Your Rights and Choices",
    description: "Depending on your jurisdiction, you may have rights to: ",
    bullets: [
      "Access or correct your personal information ",
    ],
    items: [
      {
        heading: "1. Delete your account and data:",
        bullets: [
          "We retain user data for as long as necessary for the purposes described above, including to provide its services and comply with legal obligations. The user has the right to delete all personal data collected by the app. Please follow the below process to request data deletion.",
          "Steps to Request Data Deletion: Users may request deletion of their account via application only. Follow the path: 'Login into the application >> Go to Profile Section >> Find \"Account Settings\" >> Tap on \"Manage Accounts\" >> Look for the option \"Delete Account\"' to request data deletion. You will be prompted to select the reason for your decision. Once you choose the reason and submit your request, your account deletion process will begin to take effect."
        ],
      },
    ],
  },
  {
    title: "Children's Privacy",
    description: "MyLooQ is not intended for use by individuals under 18 years of age. We do not knowingly collect data from individuals under the age of 18.",
  },
  {
    title: "Changes to This Policy",
    description: "We reserve the right to update this Privacy Policy at any time. If significant changes are made, we will notify users via email or in-app alerts. Continued use of the Platform after updates constitutes agreement to the revised terms.",
  },
  {
    title: "California Privacy Rights (CCPA/CPRA Notice)",
    description: "If you are a resident of California, you may have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):",
    items: [
      {
        title: "1. Your California Rights Include:",
        bullets: [
          "Right to Know: Request information on what personal data we collect, use, and share.",
          "Right to Delete: Request deletion of your personal data, subject to legal exceptions. ",
          "Right to Correct: Request correction of inaccurate personal information. ",
          "Right to Opt-Out: You have the right to opt out of the sale or sharing of your data (we do not currently sell personal data). ",
          "Right to Limit Use of Sensitive Information: Limit how we use sensitive personal data (e.g., precise location).",
        ]
      },
      {
        title: "2. How to Exercise Your Rights",
        bullets: [
          "Email your request to: Legal@MyLooQ.com ",
        ],
        subcontent: [
          "We may verify your identity before processing your request."
        ],
      },
      {
        title: "3. Non-Discrimination",
        subcontent: [
          "We will not discriminate against you for exercising your rights to privacy. MyLooQ™. Glow Up. Vibe Up. Cash Up."
        ]
      },
    ],
  },

];

function LooqerPrivacypolicy() {
  return (
    <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
      <div className="px-5 lg:px-[75px] pb-[80px] max-sm:pb-[20px]">
        <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
          <h4 className="text-[24px] font-[Bold] text-[#000] text30px">Privacy Policy</h4>
          <div>
            <Link to="/looqer/home">
              <button className="flex items-center gap-[4px] cursor-pointer">
                <ViewAllIcon className="w-[16px] h-[16px] rotate-180" />
                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="mb-[20px] flex flex-col gap-[12px]">
            <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Welcome to MyLooQ™, a mobile application and Platform operated by MyLooQ LLC ("Company," "we," "our," or "us"). This Privacy Policy explains how we collect, use, share, and protect your personal information when you use the MyLooQ™ mobile app, website, or any related services (collectively, the "Platform").</p>
            <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">By accessing or using MyLooQ™, you consent to the practices described in this Privacy Policy.</p>
          </div>
          <div className="space-y-[24px]">
            {infoSections.map((section) => (
              <div key={section.title} className="">
                <h3 className="text-[16px] font-[SemiBold] text-[#000] mb-[10px]">{section.title}</h3>
                {section.description && (
                  <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] mb-[20px]">{section.description}</p>
                )}
                {section.bullets && (
                  <ul className="list-disc list-inside space-y-[10px] pl-[20px]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-[14px] font-[Regular] text-[#000] leading-[26px]">{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.items && (
                  <div className="mt-[16px] space-y-[8px]">
                    {section.items.map((item) => {
                      const label = item.title ?? item.heading ?? "Details";
                      return (
                        <div key={label} className="mb-[20px]">
                          <h5 className="text-[14px] font-[Bold] text-[#000] mb-[10px]">{label}</h5>
                          {item.bullets && (
                            <ul className="list-disc list-inside space-y-[10px] pl-[20px]">
                              {item.bullets.map((bullet) => (
                                <li key={bullet} className="text-[14px] font-[Regular] text-[#000] leading-[22px]">{bullet}</li>
                              ))}
                            </ul>
                          )}
                          {item.subcontent && (
                            <div className="mt-[10px] space-y-[6px] ">
                              {item.subcontent.map((paragraph) => (
                                <p key={paragraph} className="text-[14px] font-[Regular] text-[#000] leading-[26px]">{paragraph}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                {section.subcontent && (
                  <div className="mt-[16px] space-y-[8px]">
                    {section.subcontent.map((paragraph) => (
                      <p key={paragraph} className="text-[14px] font-[Regular] text-[#000] leading-[26px]">{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LooqerPrivacypolicy;

