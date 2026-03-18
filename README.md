# Paletteer

A powerful Figma plugin for generating beautiful, accessible color palettes with full Tailwind CSS compatibility.

## Features

🎨 **Smart Color Generation** - Generate 19-shade color palettes from any seed color  
🌈 **Tailwind Compatibility** - Perfect alignment with Tailwind CSS color scales (50-950)  
🔍 **Color Extraction** - Extract colors from your existing designs and convert to palettes  
♿ **Accessibility** - Built-in contrast ratios and accessibility indicators  
🎯 **Variable Integration** - Automatically creates Figma variables for design system workflow  
📋 **Export Options** - Export to CSS, JavaScript, or JSON formats

## How to Use

1. **Generate from Selection** - Select design elements and extract their colors into palettes
2. **Create from Seed** - Enter a hex color to generate a complete 19-shade palette  
3. **Manage Variables** - All colors are automatically saved as Figma variables
4. **Export Tokens** - Copy generated palettes as design tokens in multiple formats

## Color Scale

Paletteer generates complete color scales with 19 shades:
- **Standard**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- **Extended**: Includes 150, 250, 350, 450, 550, 650, 750, 850 for more granular control

Perfect for modern design systems and Tailwind CSS workflows.

---

## Development

This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).

### Setup

```bash
npm install
npm run build
```

### Development

```bash
npm run watch
```
