# Fresh Market Hub - Deployment Guide

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:8080`

## Production Build

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory

## Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Automatic Deployment**: Connect your GitHub repository to Netlify
2. **Manual Deployment**: Upload the `dist` folder to Netlify
3. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

The `netlify.toml` file is already configured with the correct settings.

## Features

- ✅ No Lovable AI references
- ✅ Custom fresh market favicon
- ✅ Responsive design
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS styling
- ✅ Production-ready build
- ✅ Netlify deployment ready

## Browser Compatibility

The app works on all modern browsers including:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
