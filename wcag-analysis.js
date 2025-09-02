// WCAG 2.1 Color Accessibility Analysis
// Comprehensive analysis of Logicwind color palette

const colors = {
  primary: { name: 'Logicwind Blue', hex: '#0E151E', rgb: [14, 21, 30] },
  primaryText: { name: 'Pure White', hex: '#FFFFFF', rgb: [255, 255, 255] },
  secondaryText: { name: 'Blue Grey', hex: '#D2D6E5', rgb: [210, 214, 229] },
  accent: { name: 'Logicwind Red', hex: '#F04F4B', rgb: [240, 79, 75] },
  neutral: { name: 'Grey', hex: '#585E75', rgb: [88, 94, 117] }
};

// Step 1: Gamma correction function
function gammaCorrect(value) {
  const sRGB = value / 255;
  if (sRGB <= 0.03928) {
    return sRGB / 12.92;
  } else {
    return Math.pow((sRGB + 0.055) / 1.055, 2.4);
  }
}

// Step 2: Calculate relative luminance
function calculateLuminance(rgb) {
  const [r, g, b] = rgb.map(gammaCorrect);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Step 3: Calculate contrast ratio
function calculateContrastRatio(luminance1, luminance2) {
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Step 4: WCAG compliance checker
function checkWCAGCompliance(ratio) {
  return {
    AA_normal: ratio >= 4.5,
    AA_large: ratio >= 3.0,
    AAA_normal: ratio >= 7.0,
    AAA_large: ratio >= 4.5
  };
}

// Calculate luminance for all colors
const luminances = {};
for (const [key, color] of Object.entries(colors)) {
  luminances[key] = calculateLuminance(color.rgb);
  console.log(`${color.name} (${color.hex}): Luminance = ${luminances[key].toFixed(4)}`);
}

console.log('\n=== DETAILED CONTRAST RATIO ANALYSIS ===\n');

// Test all possible combinations
const combinations = [
  ['primaryText', 'primary'], // White on Blue
  ['secondaryText', 'primary'], // Blue Grey on Blue
  ['accent', 'primary'], // Red on Blue
  ['neutral', 'primary'], // Grey on Blue
  ['primary', 'primaryText'], // Blue on White
  ['secondaryText', 'primaryText'], // Blue Grey on White
  ['accent', 'primaryText'], // Red on White
  ['neutral', 'primaryText'], // Grey on White
  ['accent', 'secondaryText'], // Red on Blue Grey
  ['neutral', 'secondaryText'], // Grey on Blue Grey
  ['primaryText', 'accent'], // White on Red
  ['primary', 'accent'], // Blue on Red
  ['secondaryText', 'accent'], // Blue Grey on Red
  ['neutral', 'accent'], // Grey on Red
  ['primaryText', 'neutral'], // White on Grey
  ['primary', 'neutral'], // Blue on Grey
  ['secondaryText', 'neutral'], // Blue Grey on Grey
  ['accent', 'neutral'] // Red on Grey
];

const results = [];

combinations.forEach(([textColor, bgColor]) => {
  const ratio = calculateContrastRatio(luminances[textColor], luminances[bgColor]);
  const compliance = checkWCAGCompliance(ratio);
  
  const result = {
    combination: `${colors[textColor].name} on ${colors[bgColor].name}`,
    textHex: colors[textColor].hex,
    bgHex: colors[bgColor].hex,
    ratio: ratio,
    compliance: compliance
  };
  
  results.push(result);
  
  console.log(`${result.combination}:`);
  console.log(`  Colors: ${result.textHex} on ${result.bgHex}`);
  console.log(`  Contrast Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  WCAG AA Normal Text: ${compliance.AA_normal ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  WCAG AA Large Text: ${compliance.AA_large ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  WCAG AAA Normal Text: ${compliance.AAA_normal ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  WCAG AAA Large Text: ${compliance.AAA_large ? '✓ PASS' : '✗ FAIL'}`);
  console.log('');
});

// Analysis summary
console.log('=== ACCESSIBILITY SUMMARY ===\n');

const passingSets = results.filter(r => r.compliance.AA_normal);
const largePassing = results.filter(r => r.compliance.AA_large && !r.compliance.AA_normal);
const failing = results.filter(r => !r.compliance.AA_large);

console.log('✓ WCAG AA COMPLIANT COMBINATIONS (Normal Text):');
passingSets.forEach(r => {
  console.log(`  ${r.combination}: ${r.ratio.toFixed(2)}:1`);
});

console.log('\n⚠️ LARGE TEXT ONLY COMPLIANT:');
largePassing.forEach(r => {
  console.log(`  ${r.combination}: ${r.ratio.toFixed(2)}:1`);
});

console.log('\n✗ NON-COMPLIANT COMBINATIONS:');
failing.forEach(r => {
  console.log(`  ${r.combination}: ${r.ratio.toFixed(2)}:1`);
});

// Export results for further analysis
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { colors, luminances, results, calculateContrastRatio, calculateLuminance };
}