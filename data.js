"// Mock data for Michel Creative Studio

const businessInfo = {
  name: \"Michel Creative Studio\",
  tagline: \"Turning Ideas Into Visual Impact\",
  whatsapp: \"083181216914\",
  whatsappLink: \"https://wa.me/6283181216914\",
  email: \"hello@michelcreative.studio\",
  social: {
    instagram: \"#\",
    twitter: \"#\",
    linkedin: \"#\",
    behance: \"#\"
  }
};

const services = [
  {
    id: 1,
    title: \"Character Design\",
    description: \"Custom high-quality character design for games, novels, comics, or branding. Bring your characters to life with unique designs that capture personality and style.\",
    shortDescription: \"Custom characters for games, novels, comics, or branding\",
    startingPrice: \"$25\",
    thumbnail: \"https://images.pexels.com/photos/2218171/pexels-photo-2218171.jpeg\",
    images: [
      \"https://images.pexels.com/photos/2218171/pexels-photo-2218171.jpeg\",
      \"https://images.pexels.com/photos/3705543/pexels-photo-3705543.jpeg\",
      \"https://images.unsplash.com/photo-1580642682609-8b6ab251fbb7\"
    ],
    videoUrl: \"https://www.youtube.com/embed/dQw4w9WgXcQ\",
    benefits: [
      \"Unique character concepts tailored to your brand\",
      \"Multiple revision rounds included\",
      \"High-resolution files for all uses\",
      \"Commercial usage rights included\"
    ],
    packages: [
      {
        name: \"Basic\",
        price: \"$25\",
        features: [\"1 Character concept\", \"2 Revisions\", \"PNG/JPG files\", \"3-day delivery\"]
      },
      {
        name: \"Standard\",
        price: \"$45\",
        features: [\"2 Character concepts\", \"4 Revisions\", \"PNG/JPG + PSD files\", \"5-day delivery\", \"Commercial rights\"]
      },
      {
        name: \"Premium\",
        price: \"$75\",
        features: [\"3 Character concepts\", \"Unlimited revisions\", \"All source files\", \"3-day delivery\", \"Full commercial rights\", \"Multiple poses\"]
      }
    ]
  },
  {
    id: 2,
    title: \"AI Video Clip\",
    description: \"Cinematic AI-generated video clips for promoting novels, games, comics, or animation projects. Create stunning visual narratives that captivate your audience.\",
    shortDescription: \"Cinematic AI videos for novels, games, comics, or animation\",
    startingPrice: \"$40\",
    thumbnail: \"https://images.unsplash.com/photo-1576280314550-773c50583407\",
    images: [
      \"https://images.unsplash.com/photo-1576280314550-773c50583407\",
      \"https://images.unsplash.com/photo-1632187989763-c9c620420b4d\",
      \"https://images.pexels.com/photos/11329815/pexels-photo-11329815.jpeg\"
    ],
    videoUrl: \"https://www.youtube.com/embed/dQw4w9WgXcQ\",
    benefits: [
      \"Professional cinematic quality\",
      \"AI-powered visual effects\",
      \"Perfect for social media promotion\",
      \"Quick turnaround time\"
    ],
    packages: [
      {
        name: \"Basic\",
        price: \"$40\",
        features: [\"15-second clip\", \"HD quality\", \"1 Revision\", \"3-day delivery\"]
      },
      {
        name: \"Standard\",
        price: \"$70\",
        features: [\"30-second clip\", \"Full HD quality\", \"2 Revisions\", \"4-day delivery\", \"Background music\"]
      },
      {
        name: \"Premium\",
        price: \"$120\",
        features: [\"60-second clip\", \"4K quality\", \"3 Revisions\", \"5-day delivery\", \"Custom music\", \"Voice-over option\"]
      }
    ]
  },
  {
    id: 3,
    title: \"AI Video Ads\",
    description: \"High-converting AI video advertisements for products, brands, or social media marketing. Drive engagement and boost sales with compelling video ads.\",
    shortDescription: \"High-converting AI video ads for brands and marketing\",
    startingPrice: \"$50\",
    thumbnail: \"https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg\",
    images: [
      \"https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg\",
      \"https://images.unsplash.com/photo-1632187989763-c9c620420b4d\",
      \"https://images.pexels.com/photos/11329815/pexels-photo-11329815.jpeg\"
    ],
    videoUrl: \"https://www.youtube.com/embed/dQw4w9WgXcQ\",
    benefits: [
      \"Optimized for conversions\",
      \"Platform-specific formatting (Instagram, TikTok, YouTube)\",
      \"Attention-grabbing visuals\",
      \"Professional copywriting included\"
    ],
    packages: [
      {
        name: \"Basic\",
        price: \"$50\",
        features: [\"15-second ad\", \"1 Platform format\", \"2 Revisions\", \"3-day delivery\"]
      },
      {
        name: \"Standard\",
        price: \"$90\",
        features: [\"30-second ad\", \"3 Platform formats\", \"3 Revisions\", \"4-day delivery\", \"A/B testing variants\"]
      },
      {
        name: \"Premium\",
        price: \"$150\",
        features: [\"60-second ad\", \"All platform formats\", \"5 Revisions\", \"5-day delivery\", \"Multiple variants\", \"Strategy consultation\"]
      }
    ]
  },
  {
    id: 4,
    title: \"T-Shirt Design\",
    description: \"Unique and eye-catching T-shirt designs for brands, communities, or personal use. Stand out with custom apparel that makes a statement.\",
    shortDescription: \"Eye-catching T-shirt designs for brands and communities\",
    startingPrice: \"$20\",
    thumbnail: \"https://images.unsplash.com/photo-1621951753015-740c699ab970\",
    images: [
      \"https://images.unsplash.com/photo-1621951753015-740c699ab970\",
      \"https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg\",
      \"https://images.pexels.com/photos/2218171/pexels-photo-2218171.jpeg\"
    ],
    videoUrl: \"https://www.youtube.com/embed/dQw4w9WgXcQ\",
    benefits: [
      \"Trendy and original designs\",
      \"Print-ready files provided\",
      \"Works for any printing method\",
      \"Mockup previews included\"
    ],
    packages: [
      {
        name: \"Basic\",
        price: \"$20\",
        features: [\"1 Design concept\", \"2 Revisions\", \"PNG file\", \"2-day delivery\"]
      },
      {
        name: \"Standard\",
        price: \"$35\",
        features: [\"2 Design concepts\", \"3 Revisions\", \"Print-ready files\", \"3-day delivery\", \"Mockup previews\"]
      },
      {
        name: \"Premium\",
        price: \"$60\",
        features: [\"3 Design concepts\", \"Unlimited revisions\", \"All source files\", \"24-hour delivery\", \"Multiple mockups\", \"Print consultation\"]
      }
    ]
  }
];

const portfolioItems = [
  {
    id: 1,
    title: \"Character Design Project\",
    category: \"Character Design\",
    image: \"https://images.unsplash.com/photo-1749322642648-217cac8af126\",
    description: \"Fantasy character design for indie game\"
  },
  {
    id: 2,
    title: \"Brand Video Campaign\",
    category: \"Video Production\",
    image: \"https://images.pexels.com/photos/6567872/pexels-photo-6567872.jpeg\",
    description: \"AI-generated promotional video\"
  },
  {
    id: 3,
    title: \"Digital Illustration\",
    category: \"Character Design\",
    image: \"https://images.pexels.com/photos/7191982/pexels-photo-7191982.jpeg\",
    description: \"Custom character illustration\"
  },
  {
    id: 4,
    title: \"Product Ad Campaign\",
    category: \"Video Ads\",
    image: \"https://images.unsplash.com/photo-1580642682609-8b6ab251fbb7\",
    description: \"High-converting product advertisement\"
  },
  {
    id: 5,
    title: \"Creative Workspace\",
    category: \"T-Shirt Design\",
    image: \"https://images.unsplash.com/photo-1574100004472-e536d3b6bacc\",
    description: \"Custom apparel design collection\"
  },
  {
    id: 6,
    title: \"Digital Art Studio\",
    category: \"Character Design\",
    image: \"https://images.unsplash.com/photo-1637270873552-80d3bb9569dd\",
    description: \"Professional character artwork\"
  }
];

const testimonials = [
  {
    id: 1,
    name: \"Sarah Johnson\",
    role: \"Indie Game Developer\",
    image: \"https://ui-avatars.com/api/?name=Sarah+Johnson&background=8B5CF6&color=fff&size=80\",
    text: \"Michel's character designs brought my game to life! The attention to detail and creativity exceeded my expectations. Highly recommended!\",
    rating: 5
  },
  {
    id: 2,
    name: \"David Chen\",
    role: \"Marketing Director\",
    image: \"https://ui-avatars.com/api/?name=David+Chen&background=3B82F6&color=fff&size=80\",
    text: \"The AI video ads created by Michel significantly boosted our conversion rates. Professional quality and fast delivery!\",
    rating: 5
  },
  {
    id: 3,
    name: \"Emily Rodriguez\",
    role: \"Author & Content Creator\",
    image: \"https://ui-avatars.com/api/?name=Emily+Rodriguez&background=8B5CF6&color=fff&size=80\",
    text: \"Amazing cinematic clips for my book promotion! Michel understood my vision perfectly and delivered beyond expectations.\",
    rating: 5
  },
  {
    id: 4,
    name: \"Michael Thompson\",
    role: \"Brand Owner\",
    image: \"https://ui-avatars.com/api/?name=Michael+Thompson&background=3B82F6&color=fff&size=80\",
    text: \"The t-shirt designs are absolutely stunning. Our community loves them! Great communication and quick turnaround.\",
    rating: 5
  }
];

const avatarMessages = [
  \"Hi there! 👋 I'm here to help you find the perfect service!\",
  \"Need custom character designs? Check out our Character Design service! ✨\",
  \"Want to create viral video content? Our AI Video services are perfect for you! 🎥\",
  \"Looking for unique T-shirt designs? We've got you covered! 👕\",
  \"Have questions? Click the WhatsApp button to chat with Michel! 💬\",
  \"Don't forget to check out our portfolio for inspiration! 🎨\",
  \"Special offer: Contact us today for a free consultation! 🎁\"
];
"
