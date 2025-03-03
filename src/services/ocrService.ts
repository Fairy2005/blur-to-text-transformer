
// This is a mock service that would be replaced with actual OCR API integration

// Simulate processing delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock OCR function that returns predefined text for demo purposes
export const processImage = async (imageFile: File): Promise<string> => {
  // Simulate API call delay
  await delay(2000);
  
  // Return mock OCR result
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.

Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.

Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.`;
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
