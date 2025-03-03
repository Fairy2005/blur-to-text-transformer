
// This is a mock service that would be replaced with actual OCR API integration

// Simulate processing delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock OCR function that returns predefined text for demo purposes
export const processImage = async (imageFile: File): Promise<string> => {
  // Simulate API call delay
  await delay(2000);
  
  // Return mock OCR result with better formatting for demonstration
  return `# Document Analysis Results

## Section 1: Introduction
This document provides an analysis of the image content using Optical Character Recognition technology. The processed text maintains its original structure while improving readability.

## Section 2: Key Findings
- Text has been successfully extracted from the image
- Formatting has been preserved where possible
- Special characters and symbols have been recognized
- Multi-paragraph structure has been maintained

## Section 3: Recommendations
Based on the extraction results, we recommend reviewing the text for any potential inaccuracies that might have occurred during the OCR process. While our technology is highly accurate, certain handwriting styles or image qualities may affect recognition precision.

Thank you for using our OCR tool. For any questions or feedback, please contact our support team.`;
};

// Save to history - in a real app, this would save to a database or localStorage
export const saveToHistory = (imageUrl: string, text: string): void => {
  // Implementation would go here
  console.log("Saving to history:", { imageUrl, text });
};

// Get history - in a real app, this would fetch from a database or localStorage
export const getHistory = (): Array<{ id: string; date: Date; imageSrc: string; text: string }> => {
  // Return empty array for now
  return [];
};
