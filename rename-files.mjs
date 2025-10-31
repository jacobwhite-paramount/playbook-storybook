import { readdirSync, renameSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, 'public', 'figma-design-images', 'prime-button');

const mapping = {
  'Size=Large, Style=Primary, State=Default.png': 'prime-button-large-primary-default.png',
  'Size=Large, Style=Primary, State=Hover.png': 'prime-button-large-primary-hover.png',
  'Size=Large, Style=Primary, State=Focused.png': 'prime-button-large-primary-focused.png',
  'Size=Large, Style=Primary, State=Loading.png': 'prime-button-large-primary-loading.png',
  'Size=Large, Style=Primary, State=Disabled.png': 'prime-button-large-primary-disabled.png',
  'Size=Large, Style=Secondary, State=Default.png': 'prime-button-large-secondary-default.png',
  'Size=Large, Style=Secondary, State=Hover.png': 'prime-button-large-secondary-hover.png',
  'Size=Large, Style=Secondary, State=Focused.png': 'prime-button-large-secondary-focused.png',
  'Size=Large, Style=Secondary, State=Loading.png': 'prime-button-large-secondary-loading.png',
  'Size=Large, Style=Secondary, State=Disabled.png': 'prime-button-large-secondary-disabled.png',
  'Size=Large, Style=Tertiary, State=Default.png': 'prime-button-large-tertiary-default.png',
  'Size=Large, Style=Tertiary, State=Hover.png': 'prime-button-large-tertiary-hover.png',
  'Size=Large, Style=Tertiary, State=Loading.png': 'prime-button-large-tertiary-loading.png',
  'Size=Large, Style=Tertiary, State=Disabled.png': 'prime-button-large-tertiary-disabled.png',
  'Size=Medium, Style=Primary, State=Default.png': 'prime-button-medium-primary-default.png',
  'Size=Medium, Style=Primary, State=Hover.png': 'prime-button-medium-primary-hover.png',
  'Size=Medium, Style=Primary, State=Focused.png': 'prime-button-medium-primary-focused.png',
  'Size=Medium, Style=Primary, State=Loading.png': 'prime-button-medium-primary-loading.png',
  'Size=Medium, Style=Primary, State=Disabled.png': 'prime-button-medium-primary-disabled.png',
  'Size=Medium, Style=Secondary, State=Default.png': 'prime-button-medium-secondary-default.png',
  'Size=Medium, Style=Secondary, State=Hover.png': 'prime-button-medium-secondary-hover.png',
  'Size=Medium, Style=Secondary, State=Focused.png': 'prime-button-medium-secondary-focused.png',
  'Size=Medium, Style=Secondary, State=Loading.png': 'prime-button-medium-secondary-loading.png',
  'Size=Medium, Style=Secondary, State=Disabled.png': 'prime-button-medium-secondary-disabled.png',
  'Size=Medium, Style=Tertiary, State=Default.png': 'prime-button-medium-tertiary-default.png',
  'Size=Medium, Style=Tertiary, State=Loading.png': 'prime-button-medium-tertiary-loading.png',
  'Size=Medium, Style=Tertiary, State=Disabled.png': 'prime-button-medium-tertiary-disabled.png',
  'Size=Small, Style=Primary, State=Default.png': 'prime-button-small-primary-default.png',
  'Size=Small, Style=Primary, State=Hover.png': 'prime-button-small-primary-hover.png',
  'Size=Small, Style=Primary, State=Focused.png': 'prime-button-small-primary-focused.png',
  'Size=Small, Style=Primary, State=Loading.png': 'prime-button-small-primary-loading.png',
  'Size=Small, Style=Primary, State=Disabled.png': 'prime-button-small-primary-disabled.png',
  'Size=Small, Style=Secondary, State=Default.png': 'prime-button-small-secondary-default.png',
  'Size=Small, Style=Secondary, State=Hover.png': 'prime-button-small-secondary-hover.png',
  'Size=Small, Style=Secondary, State=Focused.png': 'prime-button-small-secondary-focused.png',
  'Size=Small, Style=Secondary, State=Loading.png': 'prime-button-small-secondary-loading.png',
  'Size=Small, Style=Secondary, State=Disabled.png': 'prime-button-small-secondary-disabled.png',
  'Size=Small, Style=Tertiary, State=Default.png': 'prime-button-small-tertiary-default.png',
  'Size=Small, Style=Tertiary, State=Loading.png': 'prime-button-small-tertiary-loading.png',
  'Size=Small, Style=Tertiary, State=Disabled.png': 'prime-button-small-tertiary-disabled.png',
};

const files = readdirSync(imagesDir);
let renamed = 0;

for (const oldName of files) {
  if (mapping[oldName]) {
    const oldPath = join(imagesDir, oldName);
    const newPath = join(imagesDir, mapping[oldName]);
    try {
      renameSync(oldPath, newPath);
      console.log(`✓ ${oldName} → ${mapping[oldName]}`);
      renamed++;
    } catch (error) {
      console.error(`✗ Failed to rename ${oldName}:`, error.message);
    }
  }
}

console.log(`\n✅ Renamed ${renamed} files successfully!`);

