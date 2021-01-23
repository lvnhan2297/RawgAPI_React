export default function formatImageUrl(urlBgImage) {
  const IMAGE_URL = 'https://media.rawg.io/media/';
  const urlReplaced ="https://media.rawg.io/media/crop/600/400/";
  return urlBgImage?urlBgImage.replace(IMAGE_URL, urlReplaced):'https://images7.alphacoders.com/389/389072.png';
}
