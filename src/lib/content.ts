import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';

// Types for content structure
export interface PageContent {
  frontmatter: {
    title: string;
    description?: string;
    lastUpdated?: string;
    [key: string]: any;
  };
  sections: Record<string, string>;
  rawContent: string;
}

export interface CommonContent {
  frontmatter: {
    [key: string]: any;
  };
  content: string;
}

// Content directories
const CONTENT_DIR = path.join(process.cwd(), 'content');
const PAGES_DIR = path.join(CONTENT_DIR, 'pages');
const COMMON_DIR = path.join(CONTENT_DIR, 'common');
const DATA_DIR = path.join(CONTENT_DIR, 'data');

// Markdown processor
const markdownProcessor = remark()
  .use(remarkGfm)
  .use(remarkHtml, { sanitize: false });

/**
 * Parse markdown sections using HTML comments as delimiters
 * Example: <!-- HERO_SECTION --> content <!-- SOCIAL_PROOF_SECTION --> content
 */
function parseMarkdownSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  
  // Split by HTML comment pattern <!-- SECTION_NAME -->
  const sectionRegex = /<!--\s*(\w+(?:_\w+)*)\s*-->/g;
  const parts = content.split(sectionRegex);
  
  // First part is before any section marker (often empty or frontmatter)
  // Subsequent parts alternate between section names and content
  for (let i = 1; i < parts.length; i += 2) {
    const sectionName = parts[i];
    const sectionContent = parts[i + 1]?.trim() || '';
    
    if (sectionName && sectionContent) {
      sections[sectionName] = sectionContent;
    }
  }
  
  return sections;
}

/**
 * Process markdown content to HTML
 */
async function processMarkdown(content: string): Promise<string> {
  const result = await markdownProcessor.process(content);
  return result.toString();
}

/**
 * Get page content from markdown file
 */
export async function getPageContent(slug: string): Promise<PageContent> {
  const filePath = path.join(PAGES_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);
  
  // Parse sections from content
  const sections = parseMarkdownSections(content);
  
  // Process each section through markdown
  const processedSections: Record<string, string> = {};
  for (const [sectionName, sectionContent] of Object.entries(sections)) {
    processedSections[sectionName] = await processMarkdown(sectionContent);
  }
  
  return {
    frontmatter: frontmatter as PageContent['frontmatter'],
    sections: processedSections,
    rawContent: content,
  };
}

/**
 * Get service page content
 */
export async function getServiceContent(serviceSlug: string): Promise<PageContent> {
  const filePath = path.join(PAGES_DIR, 'services', `${serviceSlug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Service content file not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);
  
  const sections = parseMarkdownSections(content);
  
  // Process each section through markdown
  const processedSections: Record<string, string> = {};
  for (const [sectionName, sectionContent] of Object.entries(sections)) {
    processedSections[sectionName] = await processMarkdown(sectionContent);
  }
  
  return {
    frontmatter: frontmatter as PageContent['frontmatter'],
    sections: processedSections,
    rawContent: content,
  };
}

/**
 * Get common content (navigation, brand info, etc.)
 */
export async function getCommonContent(type: string): Promise<CommonContent> {
  const filePath = path.join(COMMON_DIR, `${type}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Common content file not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);
  
  return {
    frontmatter,
    content: await processMarkdown(content),
  };
}

/**
 * Get data content (testimonials, team, FAQ, etc.)
 */
export async function getDataContent(type: string): Promise<CommonContent> {
  const filePath = path.join(DATA_DIR, `${type}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data content file not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);
  
  return {
    frontmatter,
    content: await processMarkdown(content),
  };
}

/**
 * List all available pages
 */
export function getAvailablePages(): string[] {
  if (!fs.existsSync(PAGES_DIR)) {
    return [];
  }
  
  return fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

/**
 * List all available services
 */
export function getAvailableServices(): string[] {
  const servicesDir = path.join(PAGES_DIR, 'services');
  
  if (!fs.existsSync(servicesDir)) {
    return [];
  }
  
  return fs.readdirSync(servicesDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

/**
 * Extract raw section content without processing markdown (useful for editing)
 */
export function getRawSections(slug: string): Record<string, string> {
  const filePath = path.join(PAGES_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);
  
  return parseMarkdownSections(content);
}

/**
 * Utility function to get section content with fallback
 */
export function getSectionContent(
  sections: Record<string, string>, 
  sectionName: string, 
  fallback: string = ''
): string {
  return sections[sectionName] || fallback;
}