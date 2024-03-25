//  import { JSDOM } from 'jsdom';

type FormDataObject = Record<string, string | Blob>;

export const formDataToObject = (formData: FormData): FormDataObject => {
  const object: FormDataObject = {};

  formData.forEach((value, key) => {
    // Convert File or Blob values to their respective URLs
    object[key] = value instanceof Blob ? URL.createObjectURL(value) : value;
  });

  return object;
};

// export function extractReadableParts(htmlBody: string): string {
//   const dom = new JSDOM(htmlBody);
//   const document = dom.window.document;

//   // Remove all hidden elements
//   const hiddenElements = document.querySelectorAll('*[hidden]');
//   hiddenElements.forEach((element) => element.remove());

//   // Remove all elements with display: none or visibility: hidden CSS properties
//   const elementsWithStyle = document.querySelectorAll('*[style]');
//   elementsWithStyle.forEach((element) => {
//     const style = element.getAttribute('style');
//     if (style && (style.includes('display: none') || style.includes('visibility: hidden'))) {
//       element.remove();
//     }
//   });

//   // Remove all empty text nodes
//   const textNodes = document.querySelectorAll('text()');
//   textNodes.forEach((textNode) => {
//     if (!textNode.textContent?.trim()) {
//       textNode.remove();
//     }
//   });

//   // Extract the visible and readable parts
//   const readableParts = Array.from(document.querySelectorAll('*'))
//     .map((element) => element.textContent?.trim())
//     .filter((text) => text && text.trim())
//     .join(' ');

//   return readableParts;
// }
