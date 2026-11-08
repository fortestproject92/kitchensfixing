export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "installation" | "maintenance" | "marble" | "custom";
  categoryName: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "تركيب مطبخ مودرن ألمنيوم مع جزيرة وسطية",
    category: "installation",
    categoryName: "تركيب جديد",
    location: "حي الشاطئ، الدمام",
    image: "/images/hero-kitchen.jpg",
    description: "تركيب متكامل لمطبخ فيلا بتصميم ألماني مدمج مع خشب معالج وألمنيوم رمادي غامق وسطح رخامي فخم وإنارة مخفية.",
    tags: ["ألمنيوم", "رخام طبيعي", "جزيرة وسطية", "الدمام"]
  },
  {
    id: "g-2",
    title: "تركيب وتثبيت دواليب مطبخ بميزان ليزري",
    category: "installation",
    categoryName: "تركيب وتثبيت",
    location: "حي الفاخرية، الدمام",
    image: "/images/kitchen-installation.jpg",
    description: "عملية تثبيت ووزن الشاسيهات العلوية وتوزيع وحدات البيلت إن ومراعاة فتحات التمديد بالدقة الميليمترية.",
    tags: ["دقة ليزر", "تثبيت جداري", "أجهزة بيلت إن"]
  },
  {
    id: "g-3",
    title: "صيانة شاملة واستبدال مفصلات هيدروليك إيطالية",
    category: "maintenance",
    categoryName: "صيانة وتجديد",
    location: "حي المزروعية، الدمام",
    image: "/images/kitchen-maintenance.jpg",
    description: "إصلاح درف مطبخ متهالكة واستبدال 36 مفصلة بأخرى إيطالية هيدروليك مانعة للارتطام مع ضبط وزنية الأبواب.",
    tags: ["مفصلات إيطالي", "صيانة فورية", "سوفت كلوز"]
  },
  {
    id: "g-4",
    title: "قص وتشكيل وتركيب سطح رخام كلكتا مع حوض ساقط",
    category: "marble",
    categoryName: "رخام ومجالي",
    location: "حي الحمراء، الدمام",
    image: "/images/kitchen-marble.jpg",
    description: "تفصيل وقص دقيق لسطح رخام كوارتز أبيض عروق رمادية وتركيب حوض ستانلس ستيل مخفي (Under-mount) وعزل مانع للتسريب.",
    tags: ["قص رخام", "مجلى مخفي", "عزل سيليكون", "الدمام"]
  },
  {
    id: "g-5",
    title: "تجديد مطبخ بالكامل إلى أبيض مودرن بلمسات ذهبية",
    category: "custom",
    categoryName: "تجديد وتفصيل",
    location: "حي اليرموك، الخبر",
    image: "/images/kitchen-luxury-white.jpg",
    description: "تغيير كافة الواجهات والأبواب القديمة إلى لون أبيض فندقي مشرق مع مقابض ذهبية وجزيرة رخامية أنيقة.",
    tags: ["تجديد شامل", "أبيض وذهبي", "رخام صناعي", "الخبر"]
  },
  {
    id: "g-6",
    title: "تصميم وتنفيذ جزيرة مطبخ إضافية ووحدات تخزين ذكية",
    category: "custom",
    categoryName: "جزر وتفصيل",
    location: "حي الفيصلية، الدمام",
    image: "/images/kitchen-island.jpg",
    description: "إضافة جزيرة وسطية بإنارة LED مدمجة وخزائن سفلية ذكية لزيادة سعة التخزين وإضفاء طابع فخم على المطبخ.",
    tags: ["جزيرة مطبخ", "إنارة ليد", "تخزين ذكي"]
  }
];
