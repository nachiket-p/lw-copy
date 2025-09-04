// Main content exports for easy importing
export * from './types';
export * from './common/brand';
export * from './common/navigation';
export * from './common/contact';
export * from './pages/homepage';

// Re-export commonly used content
export { homepageContent as homepage } from './pages/homepage';
export { brandContent as brand } from './common/brand';
export { navigationContent as navigation } from './common/navigation';
export { contactContent as contact } from './common/contact';