export interface AttributeData {
  attributeName: string;
  options: string[];
}

export interface ConfigurationData {
  productName: string;
  description: string;
  attributes: AttributeData[];
}
