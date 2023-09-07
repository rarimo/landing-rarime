const root = document.documentElement;

// Takes the viewport widths in pixels and the font sizes in rem
function clampBuilder(minWidthPx, maxWidthPx, minFontSizePx, maxFontSizePx) {
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;
  const minFontSize = minFontSizePx / pixelsPerRem;
  const maxFontSize = maxFontSizePx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  const result = `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;

  return result;
}

export const defineDesktopFontSizes = () => {
  root.style.setProperty('--p-size-medium', clampBuilder(1024, 1400, 11, 13));
  root.style.setProperty(
    '--h1-size-medium',
    clampBuilder(1024, 1400, 100, 120),
  );
  root.style.setProperty('--h2-size-medium', clampBuilder(1024, 1400, 34, 38));
  root.style.setProperty('--h3-size-medium', clampBuilder(1024, 1400, 28, 32));
  root.style.setProperty('--h4-size-medium', clampBuilder(1024, 1400, 24, 32));
};
