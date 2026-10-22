// Updated and verified currency data with translations
const banknotes = [
    {
        value: {
            en: "1 Taka",
            bn: "১ টাকা",
            es: "1 Taka",
            fr: "1 Taka",
            ar: "1 تاكا",
            zh: "1塔卡",
            hi: "1 टका",
            ja: "1タカ"
        },
        inWords: {
            en: "One Taka",
            bn: "এক টাকা",
            es: "Un Taka",
            fr: "Un Taka",
            ar: "تاكا واحد",
            zh: "一塔卡",
            hi: "एक टका",
            ja: "1タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk1o_new.jpg",
        issued: "1973",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Martyrs' Monument; Back: Shapla (Water Lily)",
            bn: "সামনে: জাতীয় স্মৃতিসৌধ; পিছনে: শাপলা (পদ্মফুল)",
            es: "Frente: Monumento a los Mártires Nacionales; Atrás: Shapla (Lirio de agua)",
            fr: "Avant: Monument aux martyrs nationaux; Arrière: Shapla (Nénuphar)",
            ar: "المقدمة: النصب التذكاري للشهداء الوطنيين; الخلف: شابلا (زنبق الماء)",
            zh: "正面: 国家烈士纪念碑; 背面: 睡莲",
            hi: "सामने: राष्ट्रीय शहीद स्मारक; पीछे: शापला (वॉटर लिली)",
            ja: "表: 国立殉教者記念碑; 裏: シャプラ (スイレン)"
        },
        security: {
            en: "Watermark, Security thread, Microprinting",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, মাইক্রোপ্রিন্টিং",
            es: "Marca de agua, Hilo de seguridad, Microimpresión",
            fr: "Filigrane, Fil de sécurité, Micro-impression",
            ar: "علامة مائية، خيط أمان، طباعة دقيقة",
            zh: "水印, 安全线, 微缩文字",
            hi: "वॉटरमार्क, सुरक्षा धागा, माइक्रोप्रिंटिंग",
            ja: "透かし、セキュリティスレッド、マイクロプリント"
        },
        color: {
            en: "Blue and white",
            bn: "নীল ও সাদা",
            es: "Azul y blanco",
            fr: "Bleu et blanc",
            ar: "أزرق وأبيض",
            zh: "蓝色和白色",
            hi: "नीला और सफेद",
            ja: "青と白"
        },
        size: "100 × 60 mm"
    },
    {
        value: {
            en: "2 Taka",
            bn: "২ টাকা",
            es: "2 Taka",
            fr: "2 Taka",
            ar: "2 تاكا",
            zh: "2塔卡",
            hi: "2 टका",
            ja: "2タカ"
        },
        inWords: {
            en: "Two Taka",
            bn: "দুই টাকা",
            es: "Dos Taka",
            fr: "Deux Taka",
            ar: "تاكا اثنان",
            zh: "两塔卡",
            hi: "दो टका",
            ja: "2タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk2o_3.jpg",
        issued: "1988",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंক",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: Shahid Minar; Back: National Martyrs' Monument",
            bn: "সামনে: শহীদ মিনার; পিছনে: জাতীয় স্মৃতিসৌধ",
            es: "Frente: Shahid Minar; Atrás: Monumento a los Mártires Nacionales",
            fr: "Avant: Shahid Minar; Arrière: Monument aux martyrs nationaux",
            ar: "المقدمة: شهيد مينار; الخلف: النصب التذكاري للشهداء الوطنيين",
            zh: "正面: 烈士纪念碑; 背面: 国家烈士纪念碑",
            hi: "सामने: शहीद मीनार; पीछे: राष्ट्रीय शहीद स्मारक",
            ja: "表: シャヒド・ミナール; 裏: 国立殉教者記念碑"
        },
        security: {
            en: "Watermark, Security thread",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড",
            es: "Marca de agua, Hilo de seguridad",
            fr: "Filigrane, Fil de seguridad",
            ar: "علامة مائية، خيط أمان",
            zh: "水印, 安全线",
            hi: "वॉटरमार्क, सुरक्षा धागा",
            ja: "透かし、セキュリティスレッド"
        },
        color: {
            en: "Green and orange",
            bn: "সবুজ ও কমলা",
            es: "Verde y naranja",
            fr: "Vert et orange",
            ar: "أخضر وبرتقالي",
            zh: "绿色和橙色",
            hi: "हरा और नारंगी",
            ja: "緑とオレンジ"
        },
        size: "110 × 60 mm"
    },
    {
        value: {
            en: "5 Taka",
            bn: "৫ টাকা",
            es: "5 Taka",
            fr: "5 Taka",
            ar: "5 تاكا",
            zh: "5塔卡",
            hi: "5 टका",
            ja: "5タカ"
        },
        inWords: {
            en: "Five Taka",
            bn: "পাঁচ টাকা",
            es: "Cinco Taka",
            fr: "Cinq Taka",
            ar: "خمسة تاكا",
            zh: "五塔卡",
            hi: "पाँच टका",
            ja: "5タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk5o9o.jpg",
        issued: "1972",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: Kusumba Mosque; Back: Jatiya Sangsad Bhaban",
            bn: "সামনে: কুসুম্বা মসজিদ; পিছনে: জাতীয় সংসদ ভবন",
            es: "Frente: Mezquita Kusumba; Atrás: Jatiya Sangsad Bhaban",
            fr: "Avant: Mosquée Kusumba; Arrière: Jatiya Sangsad Bhaban",
            ar: "المقدمة: مسجد كوسومبا; الخلف: جاتيا سانغساد بهابان",
            zh: "正面: 库苏姆巴清真寺; 背面: 国民议会大厦",
            hi: "सामने: कुसुम्बा मस्जिद; पीछे: जातीय संसद भवन",
            ja: "表: クスンバ・モスク; 裏: ジャティヤ・サンサド・ババン"
        },
        security: {
            en: "Watermark, Security thread, See-through register",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, সি-থ্রু রেজিস্টার",
            es: "Marca de agua, Hilo de seguridad, Registro transparente",
            fr: "Filigrane, Fil de sécurité, Registre transparent",
            ar: "علامة مائية، خيط أمان، تسجيل شفاف",
            zh: "水印, 安全线, 透视对印",
            hi: "वॉटरमार्क, सुरक्षा धागा, सी-थ्रू रजिस्टर",
            ja: "透かし、セキュリティスレッド、シースルー・レジスター"
        },
        color: {
            en: "Orange and green",
            bn: "কমলা ও সবুজ",
            es: "Naranja y verde",
            fr: "Orange et vert",
            ar: "برتقالي وأخضر",
            zh: "橙色和绿色",
            hi: "नारंगी और हरा",
            ja: "オレンジと緑"
        },
        size: "119 × 64 mm"
    },
    {
        value: {
            en: "10 Taka",
            bn: "১০ টাকা",
            es: "10 Taka",
            fr: "10 Taka",
            ar: "10 تاكا",
            zh: "10塔卡",
            hi: "10 टका",
            ja: "10タカ"
        },
        inWords: {
            en: "Ten Taka",
            bn: "দশ টাকা",
            es: "Diez Taka",
            fr: "Dix Taka",
            ar: "عشرة تاكا",
            zh: "十塔卡",
            hi: "दस टका",
            ja: "10タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk10_15092022o.jpg",
        issued: "1972",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: Baitul Mukarram Mosque; Back: Jatiya Sangsad Bhaban",
            bn: "সামনে: বাইতুল মোকাররম মসজিদ; পিছনে: জাতীয় সংসদ ভবন",
            es: "Frente: Mezquita Baitul Mukarram; Atrás: Jatiya Sangsad Bhaban",
            fr: "Avant: Mosquée Baitul Mukarram; Arrière: Jatiya Sangsad Bhaban",
            ar: "المقدمة: مسجد بيت المكرّم; الخلف: جاتيا سانغساد بهابان",
            zh: "正面: 国家清真寺; 背面: 国民议会大厦",
            hi: "सामने: बैतुल मुकर्रम मस्जिद; पीछे: जातीय संसद भवन",
            ja: "表: バイトゥル・ムカッラム・モスク; 裏: ジャティヤ・サンサド・ババン"
        },
        security: {
            en: "Watermark, Security thread, Optically variable ink",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, অপটিক্যালি ভেরিয়েবল ইঙ্ক",
            es: "Marca de agua, Hilo de seguridad, Tinta ópticamente variable",
            fr: "Filigrane, Fil de sécurité, Encre optiquement variable",
            ar: "علامة مائية، خيط أمان، حبر متغير بصريًا",
            zh: "水印, 安全线, 光变油墨",
            hi: "वॉटरमार्क, सुरक्षा धागा, ऑप्टिकली वेरिएबल इंक",
            ja: "透かし、セキュリティスレッド、光学変化インク"
        },
        color: {
            en: "Pink and green",
            bn: "গোলাপী ও সবুজ",
            es: "Rosa y verde",
            fr: "Rose et vert",
            ar: "وردي وأخضر",
            zh: "粉色和绿色",
            hi: "गुलाबी और हरा",
            ja: "ピンクと緑"
        },
        size: "127 × 64 mm"
    },
    {
        value: {
            en: "20 Taka",
            bn: "২০ টাকা",
            es: "20 Taka",
            fr: "20 Taka",
            ar: "20 تاكا",
            zh: "20塔卡",
            hi: "20 टका",
            ja: "20タカ"
        },
        inWords: {
            en: "Twenty Taka",
            bn: "বিশ টাকা",
            es: "Veinte Taka",
            fr: "Vingt Taka",
            ar: "عشرون تاكا",
            zh: "二十塔卡",
            hi: "बीस टका",
            ja: "20タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk20o1o_2022.jpg",
        issued: "1979",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: Choto Sona Mosque; Back: Jatiya Sangsad Bhaban",
            bn: "সামনে: ছোট সোনা মসজিদ; পিছনে: জাতীয় সংসদ ভবন",
            es: "Frente: Mezquita Choto Sona; Atrás: Jatiya Sangsad Bhaban",
            fr: "Avant: Mosquée Choto Sona; Arrière: Jatiya Sangsad Bhaban",
            ar: "المقدمة: مسجد تشوتو سونا; الخلف: جاتيا سانغساد بهابان",
            zh: "正面: 小黄金清真寺; 背面: 国民议会大厦",
            hi: "सामने: छोटा सोना मस्जिद; पीछे: जातीय संसद भवन",
            ja: "表: チョト・ソナ・モスク; 裏: ジャティヤ・サンサド・ババン"
        },
        security: {
            en: "Watermark, Security thread, Hologram stripe",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, হোলোগ্রাম স্ট্রাইপ",
            es: "Marca de agua, Hilo de seguridad, Franja holográfica",
            fr: "Filigrane, Fil de sécurité, Bande holographique",
            ar: "علامة مائية، خيط أمان، شريط هولوغرام",
            zh: "水印, 安全线, 全息条带",
            hi: "वॉटरमार्क, सुरक्षा धागा, होलोग्राम स्ट्राइप",
            ja: "透かし、セキュリティスレッド、ホログラムストライプ"
        },
        color: {
            en: "Green and orange",
            bn: "সবুজ ও কমলা",
            es: "Verde y naranja",
            fr: "Vert et orange",
            ar: "أخضر وبرتقالي",
            zh: "绿色和橙色",
            hi: "हरा और नारंगी",
            ja: "緑とオレンジ"
        },
        size: "130 × 65 mm"
    },
    {
        value: {
            en: "50 Taka",
            bn: "৫০ টাকা",
            es: "50 Taka",
            fr: "50 Taka",
            ar: "50 تاكا",
            zh: "50塔卡",
            hi: "50 टका",
            ja: "50タカ"
        },
        inWords: {
            en: "Fifty Taka",
            bn: "পঞ্চাশ টাকা",
            es: "Cincuenta Taka",
            fr: "Cinquante Taka",
            ar: "خمسون تاكا",
            zh: "五十塔卡",
            hi: "पचास टका",
            ja: "50タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk50o8o.jpg",
        issued: "1976",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैংক",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: Jatiya Sangsad Bhaban; Back: Tea gardens",
            bn: "সামনে: জাতীয় সংসদ ভবন; পিছনে: চা বাগান",
            es: "Frente: Jatiya Sangsad Bhaban; Atrás: Jardines de té",
            fr: "Avant: Jatiya Sangsad Bhaban; Arrière: Jardins de thé",
            ar: "المقدمة: جاتيا سانغساد بهابان; الخلف: حدائق الشاي",
            zh: "正面: 国民议会大厦; 背面: 茶园",
            hi: "सामने: जातीय संसद भवन; पीछे: चाय बागान",
            ja: "表: ジャティヤ・サンサド・ババン; 裏: 茶畑"
        },
        security: {
            en: "Watermark, Security thread, Color-shifting ink",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, কালার-শিফটিং ইঙ্ক",
            es: "Marca de agua, Hilo de seguridad, Tinta que cambia de color",
            fr: "Filigrane, Fil de sécurité, Encre à changement de couleur",
            ar: "علامة مائية، خيط أمان، حبر متغير اللون",
            zh: "水印, 安全线, 变色油墨",
            hi: "वॉटरमार्क, सुरक्षा धागा, कलर-शिफ्टिंग इंक",
            ja: "透かし、セキュリティスレッド、カラーシフトインク"
        },
        color: {
            en: "Purple and green",
            bn: "বেগুনি ও সবুজ",
            es: "Púrpura y verde",
            fr: "Violet et vert",
            ar: "بنفسجي وأخضر",
            zh: "紫色和绿色",
            hi: "बैंगनी और हरा",
            ja: "紫と緑"
        },
        size: "140 × 70 mm"
    },
    {
        value: {
            en: "100 Taka",
            bn: "১০০ টাকা",
            es: "100 Taka",
            fr: "100 Taka",
            ar: "100 تاكا",
            zh: "100塔卡",
            hi: "100 टका",
            ja: "100タカ"
        },
        inWords: {
            en: "One Hundred Taka",
            bn: "একশত টাকা",
            es: "Cien Taka",
            fr: "Cent Taka",
            ar: "مائة تاكا",
            zh: "一百塔卡",
            hi: "एक सौ टका",
            ja: "100タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk100f19.jpg",
        issued: "1972",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Monument; Back: Jamuna Bridge",
            bn: "সামনে: জাতীয় স্মৃতিসৌধ; পিছনে: যমুনা সেতু",
            es: "Frente: Monumento Nacional; Atrás: Puente Jamuna",
            fr: "Avant: Monument National; Arrière: Pont Jamuna",
            ar: "المقدمة: النصب الوطني; الخلف: جسر جامونا",
            zh: "正面: 国家纪念碑; 背面: 贾木纳大桥",
            hi: "सामने: राष्ट्रीय स्मारक; पीछे: जमुना पुल",
            ja: "表: 国立記念碑; 裏: ジャムナ橋"
        },
        security: {
            en: "Watermark, Security thread, Hologram patch",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, হোলোগ্রাম প্যাচ",
            es: "Marca de agua, Hilo de seguridad, Parche holográfico",
            fr: "Filigrane, Fil de sécurité, Patch holographique",
            ar: "علامة مائية، خيط أمان، رقعة هولوغرام",
            zh: "水印, 安全线, 全息贴片",
            hi: "वॉटरमार्क, सुरक्षा धागा, होलोग्राम पैच",
            ja: "透かし、セキュリティスレッド、ホログラムパッチ"
        },
        color: {
            en: "Blue and green",
            bn: "নীল ও সবুজ",
            es: "Azul y verde",
            fr: "Bleu et vert",
            ar: "أزرق وأخضر",
            zh: "蓝色和绿色",
            hi: "नीला और हरा",
            ja: "青と緑"
        },
        size: "152 × 70 mm"
    },
    {
        value: {
            en: "200 Taka",
            bn: "২০০ টাকা",
            es: "200 Taka",
            fr: "200 Taka",
            ar: "200 تاكا",
            zh: "200塔卡",
            hi: "200 टका",
            ja: "200タカ"
        },
        inWords: {
            en: "Two Hundred Taka",
            bn: "দুইশত টাকা",
            es: "Doscientos Taka",
            fr: "Deux cents Taka",
            ar: "مائتا تاكا",
            zh: "两百塔卡",
            hi: "दो सौ टका",
            ja: "200タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/200com_f.jpg",
        issued: "2020",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंক",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Monument; Back: Padma Bridge",
            bn: "সামনে: জাতীয় স্মৃতিসৌধ; পিছনে: পদ্মা সেতু",
            es: "Frente: Monumento Nacional; Atrás: Puente Padma",
            fr: "Avant: Monument National; Arrière: Pont Padma",
            ar: "المقدمة: النصب الوطني; الخلف: جسر بادما",
            zh: "正面: 国家纪念碑; 背面: 帕德玛大桥",
            hi: "सामने: राष्ट्रीय स्मारक; पीछे: पद्मा पुल",
            ja: "表: 国立記念碑; 裏: パドマ橋"
        },
        security: {
            en: "Watermark, Security thread, Hologram stripe, Color-shifting ink",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, হোলোগ্রাম স্ট্রাইপ, কালার-শিফটিং ইঙ্ক",
            es: "Marca de agua, Hilo de seguridad, Franja holográfica, Tinta que cambia de color",
            fr: "Filigrane, Fil de sécurité, Bande holographique, Encre à changement de couleur",
            ar: "علامة مائية، خيط أمان، شريط هولوغرام، حبر متغير اللون",
            zh: "水印, 安全线, 全息条带, 变色油墨",
            hi: "वॉटरमार्क, सुरक्षा धागा, होलोग्राम स्ट्राइप, कलर-शिफ्टिंग इंक",
            ja: "透かし、セキュリティスレッド、ホログラムストライプ、カラーシフトインク"
        },
        color: {
            en: "Orange and blue",
            bn: "কমলা ও নীল",
            es: "Naranja y azul",
            fr: "Orange et bleu",
            ar: "برتقالي وأزرق",
            zh: "橙色和蓝色",
            hi: "नारंगी और नीला",
            ja: "オレンジと青"
        },
        size: "152 × 70 mm"
    },
    {
        value: {
            en: "500 Taka",
            bn: "৫০০ টাকা",
            es: "500 Taka",
            fr: "500 Taka",
            ar: "500 تاكا",
            zh: "500塔卡",
            hi: "500 टका",
            ja: "500タカ"
        },
        inWords: {
            en: "Five Hundred Taka",
            bn: "পাঁচশত টাকা",
            es: "Quinientos Taka",
            fr: "Cinq cents Taka",
            ar: "خمسمائة تاكا",
            zh: "五百塔卡",
            hi: "पाँच सौ टका",
            ja: "500タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk500_2022_f.jpg",
        issued: "1976",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Monument; Back: Supreme Court of Bangladesh",
            bn: "সামনে: জাতীয় স্মৃতিসৌধ; পিছনে: বাংলাদেশ সুপ্রীম কোর্ট",
            es: "Frente: Monumento Nacional; Atrás: Corte Suprema de Bangladesh",
            fr: "Avant: Monument National; Arrière: Cour suprême du Bangladesh",
            ar: "المقدمة: النصب الوطني; الخلف: المحكمة العليا في بنغلاديش",
            zh: "正面: 国家纪念碑; 背面: 孟加拉国最高法院",
            hi: "सामने: राष्ट्रीय स्मारक; पीछे: बांग्लादेश सुप्रीम कोर्ट",
            ja: "表: 国立記念碑; 裏: バングラデシュ最高裁判所"
        },
        security: {
            en: "Watermark, Security thread, Hologram patch, Microprinting",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, হোলোগ্রাম প্যাচ, মাইক্রোপ্রিন্টিং",
            es: "Marca de agua, Hilo de seguridad, Parche holográfico, Microimpresión",
            fr: "Filigrane, Fil de sécurité, Patch holographique, Micro-impression",
            ar: "علامة مائية، خيط أمان، رقعة هولوغرام، طباعة دقيقة",
            zh: "水印, 安全线, 全息贴片, 微缩文字",
            hi: "वॉटरमार्क, सुरक्षা धागा, होलोग्राम पैच, माइक्रोप्रिंटिंग",
            ja: "透かし、セキュリティスレッド、ホログラムパッチ、マイクロプリント"
        },
        color: {
            en: "Purple and orange",
            bn: "বেগুনি ও কমলা",
            es: "Púrpura y naranja",
            fr: "Violet et orange",
            ar: "بنفسجي وبرتقالي",
            zh: "紫色和橙色",
            hi: "बैंगनी और नारंगी",
            ja: "紫とオレンジ"
        },
        size: "160 × 72 mm"
    },
    {
        value: {
            en: "1000 Taka",
            bn: "১০০০ টাকা",
            es: "1000 Taka",
            fr: "1000 Taka",
            ar: "1000 تاكا",
            zh: "1000塔卡",
            hi: "1000 टका",
            ja: "1000タカ"
        },
        inWords: {
            en: "One Thousand Taka",
            bn: "এক হাজার টাকা",
            es: "Mil Taka",
            fr: "Mille Taka",
            ar: "ألف تاكا",
            zh: "一千塔卡",
            hi: "एक हज़ार टका",
            ja: "1000タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/tk10002020f.jpg",
        issued: "2008",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Monument; Back: Curzon Hall, University of Dhaka",
            bn: "সামনে: জাতীয় স্মৃতিসৌধ; পিছনে: কার্জন হল, ঢাকা বিশ্ববিদ্যালয়",
            es: "Frente: Monumento Nacional; Atrás: Curzon Hall, Universidad de Dhaka",
            fr: "Avant: Monument National; Arrière: Curzon Hall, Université de Dhaka",
            ar: "المقدمة: النصب الوطني; الخلف: قاعة كرزون، جامعة دكا",
            zh: "正面: 国家纪念碑; 背面: 达卡大学寇松大厅",
            hi: "सामने: राष्ट्रीय स्मारक; पीछे: कर्ज़न हॉल, ढाका विश्वविद्यालय",
            ja: "表: 国立記念碑; 裏: カーゾン・ホール、ダッカ大学"
        },
        security: {
            en: "Watermark, Security thread, Hologram stripe, Color-shifting ink, Microprinting",
            bn: "ওয়াটারমার্ক, সিকিউরিটি থ্রেড, হোলোগ্রাম স্ট্রাইপ, কালার-শিফটিং ইঙ্ক, মাইক্রোপ্রিন্টিং",
            es: "Marca de agua, Hilo de seguridad, Franja holográfica, Tinta que cambia de color, Microimpresión",
            fr: "Filigrane, Fil de sécurité, Bande holographique, Encre à changement de couleur, Micro-impression",
            ar: "علامة مائية، خيط أمان، شريط هولوغرام، حبر متغير اللون، طباعة دقيقة",
            zh: "水印, 安全线, 全息条带, 变色油墨, 微缩文字",
            hi: "वॉटरमार्क, सुरक्षা धागा, होलोग्राम स्ट्राइप, कलर-शिफ्टिंग इंक, माइक्रोप्रिंटिंग",
            ja: "透かし、セキュリティスレッド、ホログラムストライプ、カラーシフトインク、マイクロプリント"
        },
        color: {
            en: "Green and purple",
            bn: "সবুজ ও বেগুনি",
            es: "Verde y púrpura",
            fr: "Vert et violet",
            ar: "أخضر وبنفسجي",
            zh: "绿色和紫色",
            hi: "हरा और बैंगनी",
            ja: "緑と紫"
        },
        size: "160 × 72 mm"
    }
];

const coins = [
    {
        value: {
            en: "1 Poisha",
            bn: "১ পয়সা",
            es: "1 Poisha",
            fr: "1 Poisha",
            ar: "1 بويسها",
            zh: "1波伊沙",
            hi: "1 पोइशा",
            ja: "1ポイシャ"
        },
        inWords: {
            en: "One Poisha",
            bn: "এক পয়সা",
            es: "Un Poisha",
            fr: "Un Poisha",
            ar: "بويسها واحد",
            zh: "一波伊沙",
            hi: "एक पोइशा",
            ja: "1ポイシャ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin1po.gif",
        issued: "1973",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Aluminum",
            bn: "অ্যালুমিনিয়াম",
            es: "Aluminio",
            fr: "Aluminium",
            ar: "ألومنيوم",
            zh: "铝",
            hi: "एल्युमीनियम",
            ja: "アルミニウム"
        },
        weight: "1.3 g",
        diameter: "20 mm"
    },
    {
        value: {
            en: "5 Poisha",
            bn: "৫ পয়সা",
            es: "5 Poisha",
            fr: "5 Poisha",
            ar: "5 بويسها",
            zh: "5波伊沙",
            hi: "5 पोइशा",
            ja: "5ポイシャ"
        },
        inWords: {
            en: "Five Poisha",
            bn: "পাঁচ পয়সা",
            es: "Cinco Poisha",
            fr: "Cinq Poisha",
            ar: "خمس بويسها",
            zh: "五波伊沙",
            hi: "पाँच पोइशा",
            ja: "5ポイシャ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin5po.gif",
        issued: "1973",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Aluminum",
            bn: "অ্যালুমিনিয়াম",
            es: "Aluminio",
            fr: "Aluminium",
            ar: "ألومنيوم",
            zh: "铝",
            hi: "एल्युमीनियम",
            ja: "アルミニウム"
        },
        weight: "1.3 g",
        diameter: "22 mm"
    },
    {
        value: {
            en: "10 Poisha",
            bn: "১০ পয়সা",
            es: "10 Poisha",
            fr: "10 Poisha",
            ar: "10 بويسها",
            zh: "10波伊沙",
            hi: "10 पोइशা",
            ja: "10ポイシャ"
        },
        inWords: {
            en: "Ten Poisha",
            bn: "দশ পয়সা",
            es: "Diez Poisha",
            fr: "Dix Poisha",
            ar: "عشر بويسها",
            zh: "十波伊沙",
            hi: "दस पोइशा",
            ja: "10ポイシャ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin10po.gif",
        issued: "1973",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Aluminum",
            bn: "অ্যালুমিনিয়াম",
            es: "Aluminio",
            fr: "Aluminium",
            ar: "ألومنيوم",
            zh: "铝",
            hi: "एल्युमीनियम",
            ja: "アルミニウム"
        },
        weight: "1.5 g",
        diameter: "24 mm"
    },
    {
        value: {
            en: "25 Poisha",
            bn: "২৫ পয়সা",
            es: "25 Poisha",
            fr: "25 Poisha",
            ar: "25 بويسها",
            zh: "25波伊沙",
            hi: "25 पोइशा",
            ja: "25ポイシャ"
        },
        inWords: {
            en: "Twenty Five Poisha",
            bn: "পঁচিশ পয়সা",
            es: "Veinticinco Poisha",
            fr: "Vingt-cinq Poisha",
            ar: "خمسة وعشرون بويسها",
            zh: "二十五波伊沙",
            hi: "पच्चीस पोइशा",
            ja: "25ポイシャ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin25po.gif",
        issued: "1973",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Copper-nickel",
            bn: "কপার-নিকেল",
            es: "Cobre-níquel",
            fr: "Cuivre-nickel",
            ar: "نحاس-نيكل",
            zh: "铜镍合金",
            hi: "कॉपर-निकल",
            ja: "銅-ニッケル"
        },
        weight: "2.5 g",
        diameter: "19 mm"
    },
    {
        value: {
            en: "50 Poisha",
            bn: "৫০ পয়সা",
            es: "50 Poisha",
            fr: "50 Poisha",
            ar: "50 بويسها",
            zh: "50波伊沙",
            hi: "50 पोइशा",
            ja: "50ポイシャ"
        },
        inWords: {
            en: "Fifty Poisha",
            bn: "পঞ্চাশ পয়সা",
            es: "Cincuenta Poisha",
            fr: "Cinquante Poisha",
            ar: "خمسون بويسها",
            zh: "五十波伊沙",
            hi: "पचास पोइशा",
            ja: "50ポイシャ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin50po.gif",
        issued: "1977",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Copper-nickel",
            bn: "কপার-নিকেল",
            es: "Cobre-níquel",
            fr: "Cuivre-nickel",
            ar: "نحاس-نيكل",
            zh: "铜镍合金",
            hi: "कॉपर-निकल",
            ja: "銅-ニッケル"
        },
        weight: "3.5 g",
        diameter: "22 mm"
    },
    {
        value: {
            en: "1 Taka",
            bn: "১ টাকা",
            es: "1 Taka",
            fr: "1 Taka",
            ar: "1 تاكا",
            zh: "1塔卡",
            hi: "1 टका",
            ja: "1タカ"
        },
        inWords: {
            en: "One Taka",
            bn: "এক টাকা",
            es: "Un Taka",
            fr: "Un Taka",
            ar: "تاكا واحد",
            zh: "一塔卡",
            hi: "एक टका",
            ja: "1タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin1tkno.gif",
        issued: "1974",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación",
            fr: "Avant: Emblème National; Arrière: Dénomination",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة",
            zh: "正面: 国徽; 背面: 面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: मूल्य",
            ja: "表: 国章; 裏: 額面"
        },
        material: {
            en: "Copper-nickel",
            bn: "কপার-নিকেল",
            es: "Cobre-níquel",
            fr: "Cuivre-nickel",
            ar: "নحاس-نيكل",
            zh: "铜镍合金",
            hi: "कॉपर-निकल",
            ja: "銅-ニッケル"
        },
        weight: "5.0 g",
        diameter: "25 mm"
    },
    {
        value: {
            en: "2 Taka",
            bn: "২ টাকা",
            es: "2 Taka",
            fr: "2 Taka",
            ar: "2 تاكا",
            zh: "2塔卡",
            hi: "2 टका",
            ja: "2タカ"
        },
        inWords: {
            en: "Two Taka",
            bn: "দুই টাকা",
            es: "Dos Taka",
            fr: "Deux Taka",
            ar: "تاكا اثنان",
            zh: "两塔卡",
            hi: "दो टका",
            ja: "2タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin2tco.gif",
        issued: "2004",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination with floral design",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: ফুলের নকশা সহ মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación con diseño floral",
            fr: "Avant: Emblème National; Arrière: Dénomination avec motif floral",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة بتصميم زهري",
            zh: "正面: 国徽; 背面: 花卉图案面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: फूलों के डिजाइन के साथ मूल्य",
            ja: "表: 国章; 裏: 花のデザイン付き額面"
        },
        material: {
            en: "Copper-nickel",
            bn: "কপার-নিকেল",
            es: "Cobre-níquel",
            fr: "Cuivre-nickel",
            ar: "نحاس-نيكل",
            zh: "铜镍合金",
            hi: "कॉपर-निकल",
            ja: "銅-ニッケル"
        },
        weight: "7.0 g",
        diameter: "26 mm"
    },
    {
        value: {
            en: "5 Taka",
            bn: "৫ টাকা",
            es: "5 Taka",
            fr: "5 Taka",
            ar: "5 تاكا",
            zh: "5塔卡",
            hi: "5 टका",
            ja: "5タカ"
        },
        inWords: {
            en: "Five Taka",
            bn: "পাঁচ টাকা",
            es: "Cinco Taka",
            fr: "Cinq Taka",
            ar: "خمسة تاكا",
            zh: "五塔卡",
            hi: "पाँच टका",
            ja: "5タカ"
        },
        image: "https://www.bb.org.bd/images/currmuse/coin5tko.gif",
        issued: "1994",
        authority: {
            en: "Bangladesh Bank",
            bn: "বাংলাদেশ ব্যাংক",
            es: "Banco de Bangladesh",
            fr: "Banque du Bangladesh",
            ar: "بنك بنغلاديش",
            zh: "孟加拉银行",
            hi: "बांग्लादेश बैंक",
            ja: "バングラデシュ銀行"
        },
        design: {
            en: "Front: National Emblem; Back: Denomination with floral design",
            bn: "সামনে: জাতীয় প্রতীক; পিছনে: ফুলের নকশা সহ মূল্যমান",
            es: "Frente: Emblema Nacional; Atrás: Denominación con diseño floral",
            fr: "Avant: Emblème National; Arrière: Dénomination avec motif floral",
            ar: "المقدمة: الشعار الوطني; الخلف: الفئة بتصميم زهري",
            zh: "正面: 国徽; 背面: 花卉图案面额",
            hi: "सामने: राष्ट्रीय प्रतीक; पीछे: फूलों के डिजाइन के साथ मूल्य",
            ja: "表: 国章; 裏: 花のデザイン付き額面"
        },
        material: {
            en: "Copper-nickel",
            bn: "কপার-নিকেল",
            es: "Cobre-níquel",
            fr: "Cuivre-nickel",
            ar: "نحاس-نيكل",
            zh: "铜镍合金",
            hi: "कॉपर-निकल",
            ja: "銅-ニッケル"
        },
        weight: "9.0 g",
        diameter: "28 mm"
    }
];

// Exchange rates (simplified for demo)
const exchangeRates = {
    BDT: 1,
    USD: 0.0095,
    EUR: 0.0088,
    GBP: 0.0075,
    INR: 0.79,
    CNY: 0.068,
    JPY: 1.42,
    SAR: 0.036
};

// Language translations with added Japanese
const translations = {
    en: {
        siteTitle: "Bangladesh Currency Guide",
        siteDescription: "Discover the complete collection of Bangladeshi banknotes and coins with historical details, design specifications, and security features.",
        banknotesTitle: "Banknotes",
        coinsTitle: "Coins",
        converterTitle: "Currency Converter",
        copyright: "Copyright © 2025 - <b>Md. Rasel Hossain</b>. All Rights Reserved.",
        modalValue: "Value:",
        modalIssued: "First Issued:",
        modalAuthority: "Issuing Authority:",
        modalDesign: "Design:",
        modalSecurity: "Security Features:",
        modalColor: "Color:",
        modalSize: "Size:",
        modalCoinValue: "Value:",
        modalCoinIssued: "First Issued:",
        modalCoinAuthority: "Issuing Authority:",
        modalCoinDesign: "Design:",
        modalCoinMaterial: "Material:",
        modalCoinWeight: "Weight:",
        modalCoinDiameter: "Diameter:",
        devNameTitle: "Name:",
        devInfoTitle: "Personal Information:",
        devContactTitle: "Contact Information:",
        devSocialTitle: "Social Media:",
        developerModalTitle: "About the Developer",
        valueLabel: "Value:",
        inWordsLabel: "In words:",
        converterInfo: "Exchange rates are approximate and based on current market data.",
        detailsBtn: "Details"
    },
    bn: {
        siteTitle: "বাংলাদেশের মুদ্রা নির্দেশিকা",
        siteDescription: "ঐতিহাসিক বিবরণ, নকশার বিবরণ এবং নিরাপত্তা বৈশিষ্ট্যসহ বাংলাদেশী ব্যাংকনোট এবং কয়েনের সম্পূর্ণ সংগ্রহ আবিষ্কার করুন।",
        banknotesTitle: "ব্যাংকনোট",
        coinsTitle: "কয়েন",
        converterTitle: "মুদ্রা পরিবর্তক",
        copyright: "কপিরাইট © ২০২৫ - <b>মোঃ রাসেল হোসেন</b>। সর্বস্বত্ব সংরক্ষিত।",
        modalValue: "মূল্য:",
        modalIssued: "প্রথম ইস্যু:",
        modalAuthority: "ইস্যুকারী কর্তৃপক্ষ:",
        modalDesign: "নকশা:",
        modalSecurity: "নিরাপত্তা বৈশিষ্ট্য:",
        modalColor: "রঙ:",
        modalSize: "আকার:",
        modalCoinValue: "মূল্য:",
        modalCoinIssued: "প্রথম ইস্যু:",
        modalCoinAuthority: "ইস্যুকারী কর্তৃপক্ষ:",
        modalCoinDesign: "নকশা:",
        modalCoinMaterial: "উপাদান:",
        modalCoinWeight: "ওজন:",
        modalCoinDiameter: "ব্যাস:",
        devNameTitle: "নাম:",
        devInfoTitle: "ব্যক্তিগত তথ্য:",
        devContactTitle: "যোগাযোগের তথ্য:",
        devSocialTitle: "সোশ্যাল মিডিয়া:",
        developerModalTitle: "ডেভেলপার সম্পর্কে",
        valueLabel: "মূল্য:",
        inWordsLabel: "শব্দে:",
        converterInfo: "বিনিময় হার আনুমানিক এবং বর্তমান বাজার তথ্যের উপর ভিত্তি করে।",
        detailsBtn: "বিস্তারিত"
    },
    es: {
        siteTitle: "Guía de Moneda de Bangladesh",
        siteDescription: "Descubra la colección completa de billetes y monedas de Bangladesh con detalles históricos, especificaciones de diseño y características de seguridad.",
        banknotesTitle: "Billetes",
        coinsTitle: "Monedas",
        converterTitle: "Conversor de Moneda",
        copyright: "Derechos de autor © 2025 - <b>Md. Rasel Hossain</b>. Todos los derechos reservados.",
        modalValue: "Valor:",
        modalIssued: "Primera emisión:",
        modalAuthority: "Autoridad emisora:",
        modalDesign: "Diseño:",
        modalSecurity: "Características de seguridad:",
        modalColor: "Color:",
        modalSize: "Tamaño:",
        modalCoinValue: "Valor:",
        modalCoinIssued: "Primera emisión:",
        modalCoinAuthority: "Autoridad emisora:",
        modalCoinDesign: "Diseño:",
        modalCoinMaterial: "Material:",
        modalCoinWeight: "Peso:",
        modalCoinDiameter: "Diámetro:",
        devNameTitle: "Nombre:",
        devInfoTitle: "Información personal:",
        devContactTitle: "Información de contacto:",
        devSocialTitle: "Redes sociales:",
        developerModalTitle: "Acerca del Desarrollador",
        valueLabel: "Valor:",
        inWordsLabel: "En palabras:",
        converterInfo: "Los tipos de cambio son aproximados y se basan en datos actuales del mercado.",
        detailsBtn: "Detalles"
    },
    fr: {
        siteTitle: "Guide des Devises du Bangladesh",
        siteDescription: "Découvrez la collection complète des billets de banque et des pièces du Bangladesh avec des détails historiques, des spécifications de conception et des caractéristiques de sécurité.",
        banknotesTitle: "Billets de banque",
        coinsTitle: "Pièces de monnaie",
        converterTitle: "Convertisseur de Devises",
        copyright: "Droits d'auteur © 2025 - <b>Md. Rasel Hossain</b>. Tous droits réservés.",
        modalValue: "Valeur:",
        modalIssued: "Première émission:",
        modalAuthority: "Autorité émettrice:",
        modalDesign: "Conception:",
        modalSecurity: "Caractéristiques de sécurité:",
        modalColor: "Couleur:",
        modalSize: "Taille:",
        modalCoinValue: "Valeur:",
        modalCoinIssued: "Première émission:",
        modalCoinAuthority: "Autorité émettrice:",
        modalCoinDesign: "Conception:",
        modalCoinMaterial: "Matériau:",
        modalCoinWeight: "Poids:",
        modalCoinDiameter: "Diamètre:",
        devNameTitle: "Nom:",
        devInfoTitle: "Informations personnelles:",
        devContactTitle: "Informations de contact:",
        devSocialTitle: "Réseaux sociaux:",
        developerModalTitle: "À propos du Développeur",
        valueLabel: "Valeur:",
        inWordsLabel: "En mots:",
        converterInfo: "Les taux de change sont approximatifs et basés sur les données actuelles du marché.",
        detailsBtn: "Détails"
    },
    ar: {
        siteTitle: "دليل عملة بنغلاديش",
        siteDescription: "اكتشف المجموعة الكاملة من الأوراق النقدية والعملات المعدنية البنغلاديشية مع التفاصيل التاريخية ومواصفات التصميم وميزات الأمان.",
        banknotesTitle: "الأوراق النقدية",
        coinsTitle: "العملات المعدنية",
        converterTitle: "محول العملات",
        copyright: "حقوق النشر © 2025 - <b>Md. Rasel Hossain</b>. جميع الحقوق محفوظة.",
        modalValue: "القيمة:",
        modalIssued: "تاريخ الإصدار الأول:",
        modalAuthority: "الجهة المصدرة:",
        modalDesign: "التصميم:",
        modalSecurity: "ميزات الأمان:",
        modalColor: "اللون:",
        modalSize: "الحجم:",
        modalCoinValue: "القيمة:",
        modalCoinIssued: "تاريخ الإصدار الأول:",
        modalCoinAuthority: "الجهة المصدرة:",
        modalCoinDesign: "التصميم:",
        modalCoinMaterial: "المادة:",
        modalCoinWeight: "الوزن:",
        modalCoinDiameter: "القطر:",
        devNameTitle: "الاسم:",
        devInfoTitle: "المعلومات الشخصية:",
        devContactTitle: "معلومات الاتصال:",
        devSocialTitle: "وسائل التواصل الاجتماعي:",
        developerModalTitle: "حول المطور",
        valueLabel: "القيمة:",
        inWordsLabel: "بالكلمات:",
        converterInfo: "أسعار الصرف تقريبية وتستند إلى بيانات السوق الحالية.",
        detailsBtn: "التفاصيل"
    },
    zh: {
        siteTitle: "孟加拉国货币指南",
        siteDescription: "探索孟加拉国纸币和硬币的完整收藏，包括历史细节、设计规格和安全特性。",
        banknotesTitle: "纸币",
        coinsTitle: "硬币",
        converterTitle: "货币转换器",
        copyright: "版权所有 © 2025 - <b>Md. Rasel Hossain</b>。保留所有权利。",
        modalValue: "价值:",
        modalIssued: "首次发行:",
        modalAuthority: "发行机构:",
        modalDesign: "设计:",
        modalSecurity: "安全特性:",
        modalColor: "颜色:",
        modalSize: "尺寸:",
        modalCoinValue: "价值:",
        modalCoinIssued: "首次发行:",
        modalCoinAuthority: "发行机构:",
        modalCoinDesign: "设计:",
        modalCoinMaterial: "材质:",
        modalCoinWeight: "重量:",
        modalCoinDiameter: "直径:",
        devNameTitle: "姓名:",
        devInfoTitle: "个人信息:",
        devContactTitle: "联系信息:",
        devSocialTitle: "社交媒体:",
        developerModalTitle: "关于开发者",
        valueLabel: "价值:",
        inWordsLabel: "文字说明:",
        converterInfo: "汇率是近似值，基于当前市场数据。",
        detailsBtn: "详情"
    },
    hi: {
        siteTitle: "बांग्लादेश मुद्रा गाइड",
        siteDescription: "ऐतिहासिक विवरण, डिजाइन विशिष्टताओं और सुरक्षा सुविधाओं के साथ बांग्लादेशी बैंकनोट और सिक्कों का पूरा संग्रह खोजें।",
        banknotesTitle: "बैंकनोट",
        coinsTitle: "सिक्के",
        converterTitle: "मुद्रा परिवर्तक",
        copyright: "कॉपीराइट © 2025 - <b>Md. Rasel Hossain</b>। सर्वाधिकार सुरक्षित।",
        modalValue: "मूल्य:",
        modalIssued: "पहली बार जारी:",
        modalAuthority: "जारी करने वाला प्राधिकरण:",
        modalDesign: "डिजाइन:",
        modalSecurity: "सुरक्षा सुविधाएँ:",
        modalColor: "रंग:",
        modalSize: "आकार:",
        modalCoinValue: "मूल्य:",
        modalCoinIssued: "पहली बार जारी:",
        modalCoinAuthority: "जारी करने वाला प्राधिकरण:",
        modalCoinDesign: "डिजाइन:",
        modalCoinMaterial: "सामग्री:",
        modalCoinWeight: "वजन:",
        modalCoinDiameter: "व्यास:",
        devNameTitle: "नाम:",
        devInfoTitle: "व्यक्तिगत जानकारी:",
        devContactTitle: "संपर्क जानकारी:",
        devSocialTitle: "सोशल मीडिया:",
        developerModalTitle: "डेवलपर के बारे में",
        valueLabel: "मूल्य:",
        inWordsLabel: "शब्दों में:",
        converterInfo: "विनिमय दरें अनुमानित हैं और वर्तमान बाजार डेटा पर आधारित हैं।",
        detailsBtn: "विवरण"
    },
    ja: {
        siteTitle: "バングラデシュ通貨ガイド",
        siteDescription: "歴史的な詳細、デザイン仕様、セキュリティ機能を備えたバングラデシュの紙幣とコインの完全なコレクションを発見してください。",
        banknotesTitle: "紙幣",
        coinsTitle: "コイン",
        converterTitle: "通貨コンバーター",
        copyright: "著作権 © 2025 - <b>Md. Rasel Hossain</b>。全著作権所有。",
        modalValue: "価値:",
        modalIssued: "初回発行:",
        modalAuthority: "発行機関:",
        modalDesign: "デザイン:",
        modalSecurity: "セキュリティ機能:",
        modalColor: "色:",
        modalSize: "サイズ:",
        modalCoinValue: "価値:",
        modalCoinIssued: "初回発行:",
        modalCoinAuthority: "発行機関:",
        modalCoinDesign: "デザイン:",
        modalCoinMaterial: "素材:",
        modalCoinWeight: "重量:",
        modalCoinDiameter: "直径:",
        devNameTitle: "名前:",
        devInfoTitle: "個人情報:",
        devContactTitle: "連絡先情報:",
        devSocialTitle: "ソーシャルメディア:",
        developerModalTitle: "開発者について",
        valueLabel: "価値:",
        inWordsLabel: "言葉で:",
        converterInfo: "為替レートは近似値であり、現在の市場データに基づいています。",
        detailsBtn: "詳細"
    }
};

// DOM elements
const banknotesGrid = document.getElementById('banknotes-grid');
const coinsGrid = document.getElementById('coins-grid');
const banknoteModal = document.getElementById('banknote-modal');
const coinModal = document.getElementById('coin-modal');
const converterModal = document.getElementById('converter-modal');
const developerModal = document.getElementById('developer-modal');
const languageBtn = document.getElementById('language-btn');
const currentLanguageSpan = document.getElementById('current-language');
const languageMenu = document.getElementById('language-menu');
const converterBtn = document.getElementById('converter-btn');
const developerBtn = document.getElementById('developer-btn');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const fromAmount = document.getElementById('from-amount');
const toAmount = document.getElementById('to-amount');
const swapCurrencies = document.getElementById('swap-currencies');
const conversionResult = document.getElementById('conversion-result');
const closeConverterModal = document.getElementById('close-converter-modal');

// Current language
let currentLanguage = 'en';

// Initialize the page
function init() {
    renderBanknotes();
    renderCoins();
    setupEventListeners();
    updateExchangeRate();
    
    // Set saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
}

// Render banknotes
function renderBanknotes() {
    banknotesGrid.innerHTML = '';
    banknotes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'currency-card';
        card.innerHTML = `
            <img src="${note.image}" alt="${note.value.en}" class="currency-img">
            <div class="currency-info">
                <h3>${note.value[currentLanguage]}</h3>
                <div class="currency-value">
                    <span><strong>${translations[currentLanguage].valueLabel}</strong> ${note.value[currentLanguage]}</span>
                    <span><strong>${translations[currentLanguage].inWordsLabel}</strong> ${note.inWords[currentLanguage]}</span>
                </div>
                <button class="details-btn">${translations[currentLanguage].detailsBtn}</button>
            </div>
        `;
        card.addEventListener('click', () => openBanknoteModal(note));
        banknotesGrid.appendChild(card);
    });
}

// Render coins
function renderCoins() {
    coinsGrid.innerHTML = '';
    coins.forEach(coin => {
        const card = document.createElement('div');
        card.className = 'currency-card';
        card.innerHTML = `
            <img src="${coin.image}" alt="${coin.value.en}" class="currency-img">
            <div class="currency-info">
                <h3>${coin.value[currentLanguage]}</h3>
                <div class="currency-value">
                    <span><strong>${translations[currentLanguage].valueLabel}</strong> ${coin.value[currentLanguage]}</span>
                    <span><strong>${translations[currentLanguage].inWordsLabel}</strong> ${coin.inWords[currentLanguage]}</span>
                </div>
                <button class="details-btn">${translations[currentLanguage].detailsBtn}</button>
            </div>
        `;
        card.addEventListener('click', () => openCoinModal(coin));
        coinsGrid.appendChild(card);
    });
}

// Open banknote modal with animation
function openBanknoteModal(note) {
    const translation = translations[currentLanguage];
    
    document.getElementById('banknote-modal-title').textContent = `${note.value[currentLanguage]} - ${note.inWords[currentLanguage]}`;
    document.getElementById('banknote-modal-img').src = note.image;
    document.getElementById('banknote-modal-img').alt = note.value[currentLanguage];
    document.getElementById('banknote-value').textContent = note.value[currentLanguage];
    document.getElementById('banknote-issued').textContent = note.issued;
    document.getElementById('banknote-authority').textContent = note.authority[currentLanguage];
    document.getElementById('banknote-design').textContent = note.design[currentLanguage];
    document.getElementById('banknote-security').textContent = note.security[currentLanguage];
    document.getElementById('banknote-color').textContent = note.color[currentLanguage];
    document.getElementById('banknote-size').textContent = note.size;
    
    // Update modal labels with current language
    document.getElementById('modal-value').textContent = translation.modalValue;
    document.getElementById('modal-issued').textContent = translation.modalIssued;
    document.getElementById('modal-authority').textContent = translation.modalAuthority;
    document.getElementById('modal-design').textContent = translation.modalDesign;
    document.getElementById('modal-security').textContent = translation.modalSecurity;
    document.getElementById('modal-color').textContent = translation.modalColor;
    document.getElementById('modal-size').textContent = translation.modalSize;
    
    banknoteModal.style.display = 'flex';
    setTimeout(() => {
        banknoteModal.style.opacity = '1';
        banknoteModal.classList.add('show');
    }, 10);
}

// Open coin modal with animation
function openCoinModal(coin) {
    const translation = translations[currentLanguage];
    
    document.getElementById('coin-modal-title').textContent = `${coin.value[currentLanguage]} - ${coin.inWords[currentLanguage]}`;
    document.getElementById('coin-modal-img').src = coin.image;
    document.getElementById('coin-modal-img').alt = coin.value[currentLanguage];
    document.getElementById('coin-value').textContent = coin.value[currentLanguage];
    document.getElementById('coin-issued').textContent = coin.issued;
    document.getElementById('coin-authority').textContent = coin.authority[currentLanguage];
    document.getElementById('coin-design').textContent = coin.design[currentLanguage];
    document.getElementById('coin-material').textContent = coin.material[currentLanguage];
    document.getElementById('coin-weight').textContent = coin.weight;
    document.getElementById('coin-diameter').textContent = coin.diameter;
    
    // Update modal labels with current language
    document.getElementById('modal-coin-value').textContent = translation.modalCoinValue;
    document.getElementById('modal-coin-issued').textContent = translation.modalCoinIssued;
    document.getElementById('modal-coin-authority').textContent = translation.modalCoinAuthority;
    document.getElementById('modal-coin-design').textContent = translation.modalCoinDesign;
    document.getElementById('modal-coin-material').textContent = translation.modalCoinMaterial;
    document.getElementById('modal-coin-weight').textContent = translation.modalCoinWeight;
    document.getElementById('modal-coin-diameter').textContent = translation.modalCoinDiameter;
    
    coinModal.style.display = 'flex';
    setTimeout(() => {
        coinModal.style.opacity = '1';
        coinModal.classList.add('show');
    }, 10);
}

// Open currency converter modal with animation
function openConverterModal() {
    const translation = translations[currentLanguage];
    
    document.getElementById('converter-modal-title').textContent = translation.converterTitle;
    document.querySelector('.converter-info').textContent = translation.converterInfo;
    
    converterModal.style.display = 'flex';
    setTimeout(() => {
        converterModal.style.opacity = '1';
        converterModal.classList.add('show');
    }, 10);
}

// Open developer modal with animation
function openDeveloperModal() {
    const translation = translations[currentLanguage];
    
    document.getElementById('developer-modal-title').textContent = translation.developerModalTitle;
    document.getElementById('dev-name-title').textContent = translation.devNameTitle;
    document.getElementById('dev-info-title').textContent = translation.devInfoTitle;
    document.getElementById('dev-contact-title').textContent = translation.devContactTitle;
    document.getElementById('dev-social-title').textContent = translation.devSocialTitle;
    
    developerModal.style.display = 'flex';
    setTimeout(() => {
        developerModal.style.opacity = '1';
        developerModal.classList.add('show');
    }, 10);
}

// Close modals with animation
function closeModals() {
    banknoteModal.style.opacity = '0';
    coinModal.style.opacity = '0';
    converterModal.style.opacity = '0';
    developerModal.style.opacity = '0';
    
    setTimeout(() => {
        banknoteModal.classList.remove('show');
        coinModal.classList.remove('show');
        converterModal.classList.remove('show');
        developerModal.classList.remove('show');
        banknoteModal.style.display = 'none';
        coinModal.style.display = 'none';
        converterModal.style.display = 'none';
        developerModal.style.display = 'none';
    }, 300);
}

// Toggle language menu
function toggleLanguageMenu() {
    languageMenu.classList.toggle('show');
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    const translation = translations[lang];
    
    // Update current language display
    currentLanguageSpan.textContent = lang.toUpperCase();
    
    // Update all UI elements with translations
    document.getElementById('site-title').textContent = translation.siteTitle;
    document.getElementById('site-description').textContent = translation.siteDescription;
    document.getElementById('banknotes-title').textContent = translation.banknotesTitle;
    document.getElementById('coins-title').textContent = translation.coinsTitle;
    document.getElementById('converter-modal-title').textContent = translation.converterTitle;
    document.getElementById('copyright').innerHTML = translation.copyright;
    document.getElementById('developer-modal-title').textContent = translation.developerModalTitle;
    document.querySelector('.converter-info').textContent = translation.converterInfo;
    
    // Update modal labels
    document.getElementById('modal-value').textContent = translation.modalValue;
    document.getElementById('modal-issued').textContent = translation.modalIssued;
    document.getElementById('modal-authority').textContent = translation.modalAuthority;
    document.getElementById('modal-design').textContent = translation.modalDesign;
    document.getElementById('modal-security').textContent = translation.modalSecurity;
    document.getElementById('modal-color').textContent = translation.modalColor;
    document.getElementById('modal-size').textContent = translation.modalSize;
    
    document.getElementById('modal-coin-value').textContent = translation.modalCoinValue;
    document.getElementById('modal-coin-issued').textContent = translation.modalCoinIssued;
    document.getElementById('modal-coin-authority').textContent = translation.modalCoinAuthority;
    document.getElementById('modal-coin-design').textContent = translation.modalCoinDesign;
    document.getElementById('modal-coin-material').textContent = translation.modalCoinMaterial;
    document.getElementById('modal-coin-weight').textContent = translation.modalCoinWeight;
    document.getElementById('modal-coin-diameter').textContent = translation.modalCoinDiameter;
    
    // Update developer modal
    document.getElementById('dev-name-title').textContent = translation.devNameTitle;
    document.getElementById('dev-info-title').textContent = translation.devInfoTitle;
    document.getElementById('dev-contact-title').textContent = translation.devContactTitle;
    document.getElementById('dev-social-title').textContent = translation.devSocialTitle;
    
    // Re-render currency cards with new language
    renderBanknotes();
    renderCoins();
    
    // Close language menu
    languageMenu.classList.remove('show');
}

// Update exchange rate
function updateExchangeRate() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(fromAmount.value) || 1;
    
    const rate = exchangeRates[to] / exchangeRates[from];
    const convertedAmount = (amount * rate).toFixed(4);
    
    toAmount.value = convertedAmount;
    conversionResult.textContent = `1 ${from} = ${(1 * rate).toFixed(4)} ${to}`;
}

// Swap currencies
function swapCurrenciesHandler() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    updateExchangeRate();
}

// Setup event listeners
function setupEventListeners() {
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target === banknoteModal || e.target === coinModal || 
            e.target === converterModal || e.target === developerModal) {
            closeModals();
        }
    });
    
    // Close modals with buttons
    document.getElementById('close-banknote-modal').addEventListener('click', closeModals);
    document.getElementById('close-coin-modal').addEventListener('click', closeModals);
    closeConverterModal.addEventListener('click', closeModals);
    document.getElementById('close-developer-modal').addEventListener('click', closeModals);
    
    // Language selector
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguageMenu();
    });
    
    // Language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            changeLanguage(e.target.dataset.lang);
        });
    });
    
    // Converter button
    converterBtn.addEventListener('click', openConverterModal);
    
    // Developer button
    developerBtn.addEventListener('click', openDeveloperModal);
    
    // Currency converter
    fromCurrency.addEventListener('change', updateExchangeRate);
    toCurrency.addEventListener('change', updateExchangeRate);
    fromAmount.addEventListener('input', updateExchangeRate);
    swapCurrencies.addEventListener('click', swapCurrenciesHandler);
    
    // Close language menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageMenu.contains(e.target) && e.target !== languageBtn) {
            languageMenu.classList.remove('show');
        }
    });
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', init);