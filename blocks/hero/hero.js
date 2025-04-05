import { div } from '../../scripts/dom-helpers.js';

export default function decorate (block) {
  const rows = [...block.children];
  const [mediaRow, contentRow] = rows;
  mediaRow.classList.add('hero-media');
  contentRow.classList.add('hero-content');

  // unwrap the media and content (removes extra div)
  const mediaWrap = mediaRow.querySelector(':scope > div');
  const contentWrap = contentRow.querySelector(':scope > div');
  mediaWrap.replaceWith(...mediaWrap.childNodes);
  contentWrap.replaceWith(...contentWrap.childNodes);
}