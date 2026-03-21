const siteData = {
    whatsappNumber: "6283181216914", // 
    
    // Pesan untuk Avatar
    guideMessages: [
        "Halo! Lagi cari jasa kreatif? Aku bisa bantu 👀",
        "Coba cek bagian jasa, itu yang paling penting 🔥",
        "Portofolionya juga keren lho, scroll ke bawah ya!",
        "Kalau sudah cocok, langsung klik tombol WhatsApp ya 😉"
    ],

    // Data Jasa
    services: [
        {
            id: "char-design",
            title: "Character Design",
            startPrice: "$25",
            thumb: "Image_th90lrth90lrth90.png",
            preview: "Image_th90lrth90lrth90.png",
            headline: "Visualkan Karakter Impian Anda",
            desc: "Desain karakter unik untuk maskot brand, game, atau cerita Anda. Saya membantu menerjemahkan kepribadian menjadi desain visual yang kuat dan mudah diingat audiens.",
            packages: { basic: "$25", standard: "$45", premium: "$75" }
        },
        {
            id: "video-ai",
            title: "Video Klip AI",
            startPrice: "$40",
            thumb: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=200&auto=format&fit=crop",
            preview: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop",
            headline: "Bawa Musik Anda ke Dimensi Baru",
            desc: "Pembuatan video musik menggunakan teknologi AI generatif terkini. Visual yang menyesuaikan beat dan mood lagu Anda untuk pengalaman sinematik.",
            packages: { basic: "$40", standard: "$80", premium: "$150" }
        },
        {
            id: "ads-ai",
            title: "Video Iklan AI",
            startPrice: "$50",
            thumb: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=200&auto=format&fit=crop",
            preview: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop",
            headline: "Tingkatkan Konversi dengan Video Modern",
            desc: "Video promosi (Reels/TikTok/Ads) yang dirancang khusus untuk menarik perhatian dalam 3 detik pertama. Kualitas tinggi tanpa perlu biaya produksi mahal.",
            packages: { basic: "$50", standard: "$100", premium: "$200" }
        },
        {
            id: "tshirt",
            title: "Desain Kaos / T-Shirt",
            startPrice: "$20",
            thumb: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&auto=format&fit=crop",
            preview: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
            headline: "Merchandise yang Ingin Dipakai Semua Orang",
            desc: "Desain tipografi, ilustrasi, atau gaya streetwear untuk brand clothing Anda. File siap cetak resolusi tinggi.",
            packages: { basic: "$20", standard: "$35", premium: "$60" }
        }
    ],

    // Data Portofolio
    portfolio: [
        { img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop", title: "Cyberpunk Art" },
        { img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&auto=format&fit=crop", title: "3D Rendering" },
        { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop", title: "Retro Synthwave" }
    ],

    // Data Testimoni
    testimonials: [
        { name: "Budi S.", role: "Game Developer", text: "Hasil desain karakternya luar biasa! Jauh melampaui ekspektasi saya. Pengerjaan cepat dan komunikasinya sangat enak.", avatar: "https://ui-avatars.com/api/?name=Budi&background=random" },
        { name: "Siska M.", role: "Brand Owner", text: "Video iklan AI-nya berhasil ningkatin konversi penjualan toko saya sampai 40%. Sangat direkomendasikan!", avatar: "https://ui-avatars.com/api/?name=Siska&background=random" }
    ]
};
