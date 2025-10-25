import { CompanyEthicsData } from "../Types/companyEthicsTypes";

export const companyEthicsData: CompanyEthicsData = {
  title: "Our Company Ethics",
  subtitle: "What Drives Us",
  description:
    "At DataTroops, our values shape every interaction—with our work, our clients, and our team. Here's what drives us every day.",
  values: [
    {
      icon: "work",
      title: "Attitude To Work",
      desc: "We approach every project with dedication, professionalism, and a commitment to excellence.",
      points: [
        "Professional approach to every task",
        "Meeting deadlines consistently",
        "Innovative problem-solving",
        "Continuous improvement mindset",
      ],
      gradient: "from-[#7B2CBF] to-[#5A189A]",
    },
    {
      icon: "client",
      title: "Attitude To Client",
      desc: "Our clients are our partners in success, and we prioritize their needs and satisfaction.",
      points: [
        "Clear communication",
        "Transparent processes",
        "Dedicated support",
        "Value-driven solutions",
        "Long-term partnerships",
      ],
      gradient: "from-[#5A189A] to-[#7B2CBF]",
    },
    {
      icon: "employee",
      title: "Attitude To Employee",
      desc: "Our employees are our greatest asset, and we foster a culture of growth and respect.",
      points: [
        "Professional development",
        "Work-life balance",
        "Inclusive environment",
        "Career growth opportunities",
        "Recognition and rewards",
      ],
      gradient: "from-[#240046] to-[#7B2CBF]",
    },
  ],
};
