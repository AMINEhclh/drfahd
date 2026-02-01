## Packages
framer-motion | Animation library for smooth transitions and scroll effects
react-hook-form | Form state management
@hookform/resolvers | Zod validation adapter for forms
clsx | Utility for constructing className strings
tailwind-merge | Utility for merging Tailwind classes

## Notes
- Bilingual support (French/Arabic) requires dynamic font switching (Inter vs Cairo).
- RTL layout direction must be handled via `dir="rtl"` attribute on the root or main container.
- Smooth scrolling will be implemented using native `scrollIntoView` behavior.
- Post request to /api/inquiries needs to validate against insertInquirySchema.
