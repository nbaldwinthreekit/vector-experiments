export interface AttributeData {
  attributeName: string;
  options: string[];
}

export interface ConfigurationData {
  productName: string;
  description: string;
  attributes: AttributeData[];
}

export interface VariantData {
  productName: string;
  description: string;
  variants: [Record<string, any>];
}
