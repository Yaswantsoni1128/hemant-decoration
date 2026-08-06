/**
 * Auto-load all decoration photos from assets folders.
 * Files follow: FolderName/FolderName_1.jpeg
 */
const modules = import.meta.glob('./**/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
});

const CATEGORY_META = {
  Birthday: { label: 'Birthday', titlePrefix: 'Birthday Setup' },
  Anniversary: { label: 'Anniversary', titlePrefix: 'Anniversary Decor' },
  BabyWelcome: { label: 'Baby Welcome', titlePrefix: 'Baby Welcome Setup' },
  IndependenceDay: { label: 'Independence Day', titlePrefix: 'Independence Day Decor' },
  MarriageSetup: { label: 'Marriage Setup', titlePrefix: 'Marriage Setup' },
  RoomDecoration: { label: 'Room Decoration', titlePrefix: 'Room Decoration' },
};

const parseAssetPath = (path) => {
  // ./Birthday/Birthday_1.jpeg
  const match = path.match(/\.\/([^/]+)\/\1_(\d+)\.(jpeg|jpg|png|webp)$/i);
  if (!match) return null;
  return { folder: match[1], id: Number(match[2]), ext: match[3] };
};

/** folder -> sorted array of image URLs */
export const ASSET_IMAGES = Object.entries(modules).reduce((acc, [path, url]) => {
  const parsed = parseAssetPath(path);
  if (!parsed) return acc;
  if (!acc[parsed.folder]) acc[parsed.folder] = [];
  acc[parsed.folder].push({ id: parsed.id, url, path });
  return acc;
}, {});

Object.values(ASSET_IMAGES).forEach((list) => list.sort((a, b) => a.id - b.id));

export const getAsset = (folder, id = 1) => {
  const list = ASSET_IMAGES[folder] || [];
  const found = list.find((item) => item.id === id) || list[0];
  return found?.url || '';
};

export const getAssets = (folder) => (ASSET_IMAGES[folder] || []).map((item) => item.url);

export const ASSET_CATEGORIES = Object.keys(CATEGORY_META);

export const buildGalleryFromAssets = () => {
  let globalId = 1;
  const items = [];

  Object.entries(CATEGORY_META).forEach(([folder, meta]) => {
    const list = ASSET_IMAGES[folder] || [];
    list.forEach((img) => {
      items.push({
        id: globalId++,
        title: `${meta.titlePrefix} ${img.id}`,
        category: meta.label,
        image: img.url,
        description: `Real ${meta.label.toLowerCase()} decoration by KhushiDecoration.`,
        folder,
        assetId: img.id,
      });
    });
  });

  return items;
};

export const GALLERY_CATEGORY_LABELS = [
  'All',
  ...Object.values(CATEGORY_META).map((m) => m.label),
];
