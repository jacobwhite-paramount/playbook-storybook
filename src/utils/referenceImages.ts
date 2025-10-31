/**
 * Helper utility to map PrimeButtons variant props to reference image paths
 * Used for Chromatic visual regression testing
 */

export type ButtonSize = 'Large' | 'Medium' | 'Small';
export type ButtonStyle = 'Primary' | 'Secondary' | 'Tertiary';
export type ButtonState = 'Default' | 'Hover' | 'Focused' | 'Loading' | 'Disabled';

/**
 * Get the reference image path for a given button variant
 * @param size - Button size (Large, Medium, Small)
 * @param style - Button style (Primary, Secondary, Tertiary)
 * @param state - Button state (Default, Hover, Focused, Loading, Disabled)
 * @returns Path to the reference image in the public folder
 */
export function getReferenceImagePath(
  size: ButtonSize,
  style: ButtonStyle,
  state: ButtonState
): string {
  const sizeLower = size.toLowerCase();
  const styleLower = style.toLowerCase();
  const stateLower = state.toLowerCase();
  return `/prime_buttons_images/prime-button-${sizeLower}-${styleLower}-${stateLower}.png`;
}

/**
 * Get all available reference image paths for PrimeButtons
 * Useful for listing all variants available for testing
 */
export function getAllReferenceImagePaths(): Array<{
  size: ButtonSize;
  style: ButtonStyle;
  state: ButtonState;
  path: string;
}> {
  const sizes: ButtonSize[] = ['Large', 'Medium', 'Small'];
  const styles: ButtonStyle[] = ['Primary', 'Secondary', 'Tertiary'];
  const states: ButtonState[] = ['Default', 'Hover', 'Focused', 'Loading', 'Disabled'];

  const paths: Array<{
    size: ButtonSize;
    style: ButtonStyle;
    state: ButtonState;
    path: string;
  }> = [];

  sizes.forEach((size) => {
    styles.forEach((style) => {
      states.forEach((state) => {
        // Skip combinations that don't have reference images
        // (Some Tertiary variants don't have Hover/Focused)
        if (style === 'Tertiary' && (state === 'Hover' || state === 'Focused')) {
          return;
        }
        paths.push({
          size,
          style,
          state,
          path: getReferenceImagePath(size, style, state),
        });
      });
    });
  });

  return paths;
}

