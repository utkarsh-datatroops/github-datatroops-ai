export interface CompanyEthicItem {
    icon: "work" | "client" | "employee";
    title: string;
    desc: string;
    points: string[];
    gradient: string;
  }
  
  export interface CompanyEthicsData {
    title: string;
    subtitle: string;
    description: string;
    values: CompanyEthicItem[];
  }
  