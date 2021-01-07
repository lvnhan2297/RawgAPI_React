export default function formatImageUrl(urlBgImage) {
  const IMAGE_URL = 'https://media.rawg.io/media/';
  const urlReplaced ="https://media.rawg.io/media/crop/600/400/";
  return urlBgImage.replace(IMAGE_URL, urlReplaced);
}
