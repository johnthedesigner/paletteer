// Utility function to convert swatch index to Tailwind scale value
export const getTailwindScale = (steps: number, index: number): number => {
  if (steps === 11) {
    // Standard Tailwind scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
    const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    return scale[index] || index;
  } else if (steps === 18) {
    // Extended Tailwind scale with additional values (missing 950)
    const scale = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900];
    return scale[index] || index;
  } else if (steps === 19) {
    // Complete Tailwind scale: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950
    const scale = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950];
    return scale[index] || index;
  } else {
    // Fallback to index for other step counts
    return index;
  }
};

// Format scale value as padded string for display
export const formatScaleValue = (scaleValue: number): string => {
  return scaleValue.toString().padStart(3, "0");
};