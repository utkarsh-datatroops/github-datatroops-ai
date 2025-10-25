export interface IntegrationStep {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof import("../icons/integrationIcons").integrationIcons;
  keyFeatures: string[];
}

export interface IntegrationProps {
    steps?: IntegrationStep[];
    title?: string;
    subtitle?: string;
  }