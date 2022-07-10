# Paletteer Figma Plugin

Take a proactive approach to building color palettes for digital design projects.

A flexible and diverse yet constrained color palette means the color you need for a new button or text treatment is always easily at hand.

In a Figma document, select one or more objects with your project's core colors and use _Paletteer_ to generate an array of light and dark shades, create a set of color swatches in your document and save each shade to your local styles so they're easy to use.

That's it! Now you can just design and avoid decision paralysis when the time comes to choose between adding yet another color to your palette or compromising your design or accessibility.

**Features:**

- Generate color palettes from selected objects in your figma document
- Save generated color palettes to your local styles for easy use, or publish them and share with the rest of your team
- Swatches show contrast against white and black to help you make good choices for better acessibility

### Built with [Figma Plugin React Template](https://github.com/nirsky/figma-plugin-react-template)

#### Local plugin development

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).
