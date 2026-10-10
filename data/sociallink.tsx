import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593753193935",
    icon: <FaFacebookF size={18} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/social.happyhomes/",
    icon: <FaInstagram size={20} />,
  },
  {
    label: "Twitter",
    href: "https://x.com/Happyhomesocial",
    icon: <FaTwitter size={19} />,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@social.happyhomes",
    icon: <FaThreads size={19} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/happy-homes-properties/",
    icon: <FaLinkedinIn size={19} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Social.Happyhomes",
    icon: <FaYoutube size={22} />,
  },
];
