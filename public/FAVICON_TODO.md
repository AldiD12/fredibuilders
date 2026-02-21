# Favicon Generation TODO

## Required Favicon Sizes

Create the following favicon files from the Fredi Builders logo:

- [ ] favicon-48x48.png (48x48px)
- [ ] favicon-96x96.png (96x96px)
- [ ] favicon-144x144.png (144x144px)
- [ ] favicon-192x192.png (192x192px) - for PWA
- [ ] favicon-512x512.png (512x512px) - for PWA

## How to Generate

1. Use the Fredi Builders logo (public/images/logo.webp)
2. Convert to PNG format
3. Resize to each required size
4. Ensure transparent background
5. Save in /public/ directory

## Tools

- Online: https://realfavicongenerator.net/
- CLI: `npm install -g sharp-cli` then use sharp to resize
- Design tool: Figma, Photoshop, or GIMP

## Verification

After generating, test:
- Browser tab icon displays correctly
- PWA install shows correct icon
- Apple touch icon works on iOS
