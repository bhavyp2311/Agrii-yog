import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Translation {
  // Navigation
  'nav.aiAssistant': string;
  'nav.diseaseDetection': string;
  'nav.marketHub': string;
  'nav.community': string;
  'nav.login': string;
  'nav.signOut': string;
  'nav.welcome': string;

  // Common
  'common.loading': string;
  'common.submit': string;
  'common.cancel': string;
  'common.save': string;
  'common.search': string;
  'common.filter': string;
  'common.askAbout': string;
  'common.analyze': string;
  'common.startDiscussion': string;
  'common.joinDiscussion': string;
  'common.viewCharts': string;
  'common.manageAlerts': string;
  'common.contact': string;

  // Auth
  'auth.signIn': string;
  'auth.signUp': string;
  'auth.email': string;
  'auth.password': string;
  'auth.username': string;
  'auth.welcomeBack': string;
  'auth.joinAgriWise': string;
  'auth.createAccount': string;
  'auth.state': string;
  'auth.city': string;
  'auth.district': string;
  'auth.selectState': string;
  'auth.selectCity': string;
  'auth.selectDistrict': string;

  // Hero section
  'hero.title': string;
  'hero.subtitle': string;
  'hero.startGrowing': string;
  'hero.watchDemo': string;
  'hero.activeFarmers': string;
  'hero.yieldIncrease': string;
  'hero.satisfaction': string;

  // Features
  'features.smartFarming': string;
  'features.smartFarmingDesc': string;
  'features.diseaseDetection': string;
  'features.diseaseDetectionDesc': string;
  'features.marketInsights': string;
  'features.marketInsightsDesc': string;
  'features.communitySupport': string;
  'features.communitySupportDesc': string;

  // AI Assistant
  'ai.title': string;
  'ai.subtitle': string;
  'ai.quickQuestions': string;
  'ai.placeholder': string;
  'ai.greeting': string;

  // Disease Detection
  'disease.title': string;
  'disease.subtitle': string;
  'disease.uploadTitle': string;
  'disease.tips': string;
  'disease.analyzing': string;
  'disease.results': string;
  'disease.treatment': string;
  'disease.prevention': string;

  // Market
  'market.title': string;
  'market.subtitle': string;
  'market.currentPrices': string;
  'market.nearbyMarkets': string;
  'market.priceAlerts': string;

  // Community
  'community.title': string;
  'community.subtitle': string;
  'community.recentDiscussions': string;
  'community.expertAnswers': string;
  'community.topContributors': string;
  'community.trendingTopics': string;
}

const translations: Record<string, Translation> = {
  en: {
    // Navigation
    'nav.aiAssistant': 'AI Assistant',
    'nav.diseaseDetection': 'Disease Detection',
    'nav.marketHub': 'Market Hub',
    'nav.community': 'Community',
    'nav.login': 'Login',
    'nav.signOut': 'Sign Out',
    'nav.welcome': 'Welcome',

    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.askAbout': 'Ask about crops, weather, markets, or any farming question...',
    'common.analyze': 'Analyze Image',
    'common.startDiscussion': 'Start Discussion',
    'common.joinDiscussion': 'Join Discussion',
    'common.viewCharts': 'View Charts',
    'common.manageAlerts': 'Manage Alerts',
    'common.contact': 'Contact',

    // Auth
    'auth.signIn': 'Sign In',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.username': 'Username',
    'auth.welcomeBack': 'Welcome Back',
    'auth.joinAgriWise': 'Join AgriWise',
    'auth.createAccount': 'Create Account',
    'auth.state': 'State',
    'auth.city': 'City',
    'auth.district': 'District',
    'auth.selectState': 'Select your state',
    'auth.selectCity': 'Select your city',
    'auth.selectDistrict': 'Select your district',

    // Hero section
    'hero.title': 'Grow Smarter with AI-Powered Agriculture',
    'hero.subtitle': 'Transform your farming with intelligent crop monitoring, disease detection, and market insights. Join thousands of farmers already growing smarter.',
    'hero.startGrowing': 'Start Growing Smarter',
    'hero.watchDemo': 'Watch Demo',
    'hero.activeFarmers': 'Active Farmers',
    'hero.yieldIncrease': 'Yield Increase',
    'hero.satisfaction': 'Satisfaction Rate',

    // Features
    'features.smartFarming': 'Smart Farming Guidance',
    'features.smartFarmingDesc': 'Get personalized recommendations based on your crops, soil, and weather conditions.',
    'features.diseaseDetection': 'Crop Health Analysis',
    'features.diseaseDetectionDesc': 'AI-powered disease detection from crop photos with treatment recommendations.',
    'features.marketInsights': 'Market Insights',
    'features.marketInsightsDesc': 'Real-time crop prices and market trends to maximize your profits.',
    'features.communitySupport': 'Community Support',
    'features.communitySupportDesc': 'Connect with fellow farmers and agricultural experts for knowledge sharing.',

    // AI Assistant
    'ai.title': 'Ask Me Anything About Farming',
    'ai.subtitle': 'Get instant answers to your agricultural questions, from planting schedules to market insights.',
    'ai.quickQuestions': 'Quick Questions',
    'ai.placeholder': 'Ask about crops, weather, markets, or any farming question...',
    'ai.greeting': "Hello! I'm your AI farming assistant. I'm here to help you with crop advice, weather insights, market trends, and any farming questions you have. How can I help you today?",

    // Disease Detection
    'disease.title': 'AI-Powered Crop Health Analysis',
    'disease.subtitle': 'Upload or capture photos of your crops to get instant disease identification and treatment recommendations.',
    'disease.uploadTitle': 'Upload Crop Image',
    'disease.tips': 'Photography Tips',
    'disease.analyzing': 'AI is examining your crop for potential diseases...',
    'disease.results': 'Detection Results',
    'disease.treatment': 'Treatment Recommendations',
    'disease.prevention': 'Prevention for Future',

    // Market
    'market.title': 'Real-Time Agricultural Markets',
    'market.subtitle': 'Stay updated with current prices, market trends, and find the best places to sell your produce.',
    'market.currentPrices': 'Current Market Prices',
    'market.nearbyMarkets': 'Nearby Markets',
    'market.priceAlerts': 'Price Alerts',

    // Community
    'community.title': 'Connect, Learn, and Grow Together',
    'community.subtitle': 'Join thousands of farmers sharing knowledge, experiences, and solutions for modern agriculture.',
    'community.recentDiscussions': 'Recent Discussions',
    'community.expertAnswers': 'Expert Answers',
    'community.topContributors': 'Top Contributors',
    'community.trendingTopics': 'Trending Topics',
  },
  hi: {
    // Navigation
    'nav.aiAssistant': 'एआई सहायक',
    'nav.diseaseDetection': 'रोग की पहचान',
    'nav.marketHub': 'बाजार केंद्र',
    'nav.community': 'समुदाय',
    'nav.login': 'लॉगिन',
    'nav.signOut': 'साइन आउट',
    'nav.welcome': 'स्वागत',

    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सेव करें',
    'common.search': 'खोजें',
    'common.filter': 'फ़िल्टर',
    'common.askAbout': 'फसल, मौसम, बाजार या किसी भी खेती के सवाल के बारे में पूछें...',
    'common.analyze': 'चित्र का विश्लेषण करें',
    'common.startDiscussion': 'चर्चा शुरू करें',
    'common.joinDiscussion': 'चर्चा में शामिल हों',
    'common.viewCharts': 'चार्ट देखें',
    'common.manageAlerts': 'अलर्ट प्रबंधन',
    'common.contact': 'संपर्क',

    // Auth
    'auth.signIn': 'साइन इन',
    'auth.signUp': 'साइन अप',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.username': 'उपयोगकर्ता नाम',
    'auth.welcomeBack': 'वापसी पर स्वागत है',
    'auth.joinAgriWise': 'एग्रीवाइज़ में शामिल हों',
    'auth.createAccount': 'खाता बनाएं',
    'auth.state': 'राज्य',
    'auth.city': 'शहर',
    'auth.district': 'जिला',
    'auth.selectState': 'अपना राज्य चुनें',
    'auth.selectCity': 'अपना शहर चुनें',
    'auth.selectDistrict': 'अपना जिला चुनें',

    // Hero section
    'hero.title': 'एआई-संचालित कृषि के साथ स्मार्ट खेती करें',
    'hero.subtitle': 'बुद्धिमान फसल निगरानी, रोग की पहचान और बाजार की जानकारी के साथ अपनी खेती को बदलें। हजारों किसान पहले से ही स्मार्ट खेती कर रहे हैं।',
    'hero.startGrowing': 'स्मार्ट खेती शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.activeFarmers': 'सक्रिय किसान',
    'hero.yieldIncrease': 'उत्पादन वृद्धि',
    'hero.satisfaction': 'संतुष्टि दर',

    // Features
    'features.smartFarming': 'स्मार्ट खेती मार्गदर्शन',
    'features.smartFarmingDesc': 'अपनी फसलों, मिट्टी और मौसम की स्थिति के आधार पर व्यक्तिगत सुझाव प्राप्त करें।',
    'features.diseaseDetection': 'फसल स्वास्थ्य विश्लेषण',
    'features.diseaseDetectionDesc': 'उपचार सुझावों के साथ फसल की तस्वीरों से एआई-संचालित रोग की पहचान।',
    'features.marketInsights': 'बाजार की जानकारी',
    'features.marketInsightsDesc': 'अपने मुनाफे को अधिकतम करने के लिए रीयल-टाइम फसल की कीमतें और बाजार के रुझान।',
    'features.communitySupport': 'समुदायिक सहायता',
    'features.communitySupportDesc': 'ज्ञान साझाकरण के लिए साथी किसानों और कृषि विशेषज्ञों से जुड़ें।',

    // AI Assistant
    'ai.title': 'खेती के बारे में कुछ भी पूछें',
    'ai.subtitle': 'रोपण कार्यक्रम से लेकर बाजार की जानकारी तक, अपने कृषि प्रश्नों के तुरंत उत्तर प्राप्त करें।',
    'ai.quickQuestions': 'त्वरित प्रश्न',
    'ai.placeholder': 'फसल, मौसम, बाजार या किसी भी खेती के सवाल के बारे में पूछें...',
    'ai.greeting': 'नमस्ते! मैं आपका एआई खेती सहायक हूं। मैं यहां आपकी फसल की सलाह, मौसम की जानकारी, बाजार के रुझान और किसी भी खेती के सवालों में मदद करने के लिए हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',

    // Disease Detection
    'disease.title': 'एआई-संचालित फसल स्वास्थ्य विश्लेषण',
    'disease.subtitle': 'तुरंत रोग की पहचान और उपचार की सिफारिशें प्राप्त करने के लिए अपनी फसलों की तस्वीरें अपलोड करें या खींचें।',
    'disease.uploadTitle': 'फसल की तस्वीर अपलोड करें',
    'disease.tips': 'फोटोग्राफी सुझाव',
    'disease.analyzing': 'एआई संभावित बीमारियों के लिए आपकी फसल की जांच कर रहा है...',
    'disease.results': 'पहचान परिणाम',
    'disease.treatment': 'उपचार की सिफारिशें',
    'disease.prevention': 'भविष्य के लिए रोकथाम',

    // Market
    'market.title': 'रीयल-टाइम कृषि बाजार',
    'market.subtitle': 'वर्तमान कीमतों, बाजार के रुझान के साथ अपडेट रहें और अपनी उपज बेचने के लिए सबसे अच्छे स्थान खोजें।',
    'market.currentPrices': 'वर्तमान बाजार मूल्य',
    'market.nearbyMarkets': 'नजदीकी बाजार',
    'market.priceAlerts': 'मूल्य अलर्ट',

    // Community
    'community.title': 'जुड़ें, सीखें और एक साथ बढ़ें',
    'community.subtitle': 'आधुनिक कृषि के लिए ज्ञान, अनुभव और समाधान साझा करने वाले हजारों किसानों से जुड़ें।',
    'community.recentDiscussions': 'हाल की चर्चाएं',
    'community.expertAnswers': 'विशेषज्ञ उत्तर',
    'community.topContributors': 'शीर्ष योगदानकर्ता',
    'community.trendingTopics': 'ट्रेंडिंग विषय',
  },
  pa: {
    // Navigation
    'nav.aiAssistant': 'ਏਆਈ ਸਹਾਇਕ',
    'nav.diseaseDetection': 'ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ',
    'nav.marketHub': 'ਮਾਰਕੀਟ ਹੱਬ',
    'nav.community': 'ਕਮਿਊਨਿਟੀ',
    'nav.login': 'ਲਾਗਇਨ',
    'nav.signOut': 'ਸਾਈਨ ਆਊਟ',
    'nav.welcome': 'ਜੀ ਆਇਆਂ ਨੂੰ',

    // Common
    'common.loading': 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    'common.submit': 'ਜਮ੍ਹਾਂ ਕਰੋ',
    'common.cancel': 'ਰੱਦ ਕਰੋ',
    'common.save': 'ਸੇਵ ਕਰੋ',
    'common.search': 'ਖੋਜ',
    'common.filter': 'ਫਿਲਟਰ',
    'common.askAbout': 'ਫਸਲਾਂ, ਮੌਸਮ, ਮਾਰਕੀਟ ਜਾਂ ਕਿਸੇ ਵੀ ਖੇਤੀ ਦੇ ਸਵਾਲ ਬਾਰੇ ਪੁੱਛੋ...',
    'common.analyze': 'ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
    'common.startDiscussion': 'ਚਰਚਾ ਸ਼ੁਰੂ ਕਰੋ',
    'common.joinDiscussion': 'ਚਰਚਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ',
    'common.viewCharts': 'ਚਾਰਟ ਦੇਖੋ',
    'common.manageAlerts': 'ਅਲਰਟ ਪ੍ਰਬੰਧਨ',
    'common.contact': 'ਸੰਪਰਕ',

    // Auth
    'auth.signIn': 'ਸਾਈਨ ਇਨ',
    'auth.signUp': 'ਸਾਈਨ ਅਪ',
    'auth.email': 'ਈਮੇਲ',
    'auth.password': 'ਪਾਸਵਰਡ',
    'auth.username': 'ਉਪਭੋਗਤਾ ਨਾਮ',
    'auth.welcomeBack': 'ਵਾਪਸੀ ਤੇ ਜੀ ਆਇਆਂ ਨੂੰ',
    'auth.joinAgriWise': 'ਐਗਰੀਵਾਈਜ਼ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ',
    'auth.createAccount': 'ਖਾਤਾ ਬਣਾਓ',
    'auth.state': 'ਰਾਜ',
    'auth.city': 'ਸ਼ਹਿਰ',
    'auth.district': 'ਜ਼ਿਲ੍ਹਾ',
    'auth.selectState': 'ਆਪਣਾ ਰਾਜ ਚੁਣੋ',
    'auth.selectCity': 'ਆਪਣਾ ਸ਼ਹਿਰ ਚੁਣੋ',
    'auth.selectDistrict': 'ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',

    // Hero section
    'hero.title': 'ਏਆਈ-ਸੰਚਾਲਿਤ ਖੇਤੀਬਾੜੀ ਨਾਲ ਸਮਾਰਟ ਖੇਤੀ ਕਰੋ',
    'hero.subtitle': 'ਬੁੱਧੀਮਾਨ ਫਸਲ ਨਿਗਰਾਨੀ, ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ ਅਤੇ ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ ਨਾਲ ਆਪਣੀ ਖੇਤੀ ਨੂੰ ਬਦਲੋ। ਹਜ਼ਾਰਾਂ ਕਿਸਾਨ ਪਹਿਲਾਂ ਹੀ ਸਮਾਰਟ ਖੇਤੀ ਕਰ ਰਹੇ ਹਨ।',
    'hero.startGrowing': 'ਸਮਾਰਟ ਖੇਤੀ ਸ਼ੁਰੂ ਕਰੋ',
    'hero.watchDemo': 'ਡੈਮੋ ਦੇਖੋ',
    'hero.activeFarmers': 'ਸਰਗਰਮ ਕਿਸਾਨ',
    'hero.yieldIncrease': 'ਉਪਜ ਵਾਧਾ',
    'hero.satisfaction': 'ਸੰਤੁਸ਼ਟੀ ਦਰ',

    // Features
    'features.smartFarming': 'ਸਮਾਰਟ ਖੇਤੀ ਮਾਰਗਦਰਸ਼ਨ',
    'features.smartFarmingDesc': 'ਆਪਣੀ ਫਸਲਾਂ, ਮਿੱਟੀ ਅਤੇ ਮੌਸਮੀ ਹਾਲਾਤ ਦੇ ਆਧਾਰ ਤੇ ਵਿਅਕਤੀਗਤ ਸਿਫਾਰਿਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।',
    'features.diseaseDetection': 'ਫਸਲ ਸਿਹਤ ਵਿਸ਼ਲੇਸ਼ਣ',
    'features.diseaseDetectionDesc': 'ਇਲਾਜ ਦੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ ਦੇ ਨਾਲ ਫਸਲ ਦੀਆਂ ਤਸਵੀਰਾਂ ਤੋਂ ਏਆਈ-ਸੰਚਾਲਿਤ ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ।',
    'features.marketInsights': 'ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ',
    'features.marketInsightsDesc': 'ਆਪਣੇ ਮੁਨਾਫੇ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨ ਲਈ ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਦੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਮਾਰਕੀਟ ਦੇ ਰੁਝਾਨ।',
    'features.communitySupport': 'ਕਮਿਊਨਿਟੀ ਸਹਾਇਤਾ',
    'features.communitySupportDesc': 'ਗਿਆਨ ਸਾਂਝਾਕਰਨ ਲਈ ਸਾਥੀ ਕਿਸਾਨਾਂ ਅਤੇ ਖੇਤੀਬਾੜੀ ਮਾਹਿਰਾਂ ਨਾਲ ਜੁੜੋ।',

    // AI Assistant
    'ai.title': 'ਖੇਤੀ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ',
    'ai.subtitle': 'ਬੀਜਾਈ ਸਮਾਸੂਚੀ ਤੋਂ ਲੈ ਕੇ ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ ਤੱਕ, ਆਪਣੇ ਖੇਤੀਬਾੜੀ ਸਵਾਲਾਂ ਦੇ ਤੁਰੰਤ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ।',
    'ai.quickQuestions': 'ਤੇਜ਼ ਸਵਾਲ',
    'ai.placeholder': 'ਫਸਲਾਂ, ਮੌਸਮ, ਮਾਰਕੀਟ ਜਾਂ ਕਿਸੇ ਵੀ ਖੇਤੀ ਦੇ ਸਵਾਲ ਬਾਰੇ ਪੁੱਛੋ...',
    'ai.greeting': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਖੇਤੀ ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਇੱਥੇ ਤੁਹਾਡੀ ਫਸਲ ਦੀ ਸਲਾਹ, ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ, ਮਾਰਕੀਟ ਦੇ ਰੁਝਾਨ ਅਤੇ ਕਿਸੇ ਵੀ ਖੇਤੀ ਦੇ ਸਵਾਲਾਂ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',

    // Disease Detection
    'disease.title': 'ਏਆਈ-ਸੰਚਾਲਿਤ ਫਸਲ ਸਿਹਤ ਵਿਸ਼ਲੇਸ਼ਣ',
    'disease.subtitle': 'ਤੁਰੰਤ ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ ਅਤੇ ਇਲਾਜ ਦੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਆਪਣੀ ਫਸਲਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅੱਪਲੋਡ ਕਰੋ ਜਾਂ ਖਿੱਚੋ।',
    'disease.uploadTitle': 'ਫਸਲ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ',
    'disease.tips': 'ਫੋਟੋਗ੍ਰਾਫੀ ਸੁਝਾਅ',
    'disease.analyzing': 'ਏਆਈ ਸੰਭਾਵਿਤ ਬੀਮਾਰੀਆਂ ਲਈ ਤੁਹਾਡੀ ਫਸਲ ਦੀ ਜਾਂਚ ਕਰ ਰਿਹਾ ਹੈ...',
    'disease.results': 'ਪਛਾਣ ਨਤੀਜੇ',
    'disease.treatment': 'ਇਲਾਜ ਦੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ',
    'disease.prevention': 'ਭਵਿੱਖ ਲਈ ਰੋਕਥਾਮ',

    // Market
    'market.title': 'ਰੀਅਲ-ਟਾਈਮ ਖੇਤੀਬਾੜੀ ਮਾਰਕੀਟ',
    'market.subtitle': 'ਮੌਜੂਦਾ ਕੀਮਤਾਂ, ਮਾਰਕੀਟ ਦੇ ਰੁਝਾਨਾਂ ਦੇ ਨਾਲ ਅਪਡੇਟ ਰਹੋ ਅਤੇ ਆਪਣੀ ਉਪਜ ਵੇਚਣ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਥਾਨ ਲੱਭੋ।',
    'market.currentPrices': 'ਮੌਜੂਦਾ ਮਾਰਕੀਟ ਕੀਮਤਾਂ',
    'market.nearbyMarkets': 'ਨੇੜਲੇ ਮਾਰਕੀਟ',
    'market.priceAlerts': 'ਕੀਮਤ ਅਲਰਟ',

    // Community
    'community.title': 'ਜੁੜੋ, ਸਿੱਖੋ ਅਤੇ ਇਕੱਠੇ ਵਧੋ',
    'community.subtitle': 'ਆਧੁਨਿਕ ਖੇਤੀਬਾੜੀ ਲਈ ਗਿਆਨ, ਤਜਰਬੇ ਅਤੇ ਹੱਲ ਸਾਂਝਾ ਕਰਨ ਵਾਲੇ ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ।',
    'community.recentDiscussions': 'ਹਾਲ ਦੀਆਂ ਚਰਚਾਵਾਂ',
    'community.expertAnswers': 'ਮਾਹਿਰਾਂ ਦੇ ਜਵਾਬ',
    'community.topContributors': 'ਚੋਟੀ ਦੇ ਯੋਗਦਾਨਕਰਤਾ',
    'community.trendingTopics': 'ਚਰਚਾ ਵਿੱਚ ਵਿਸ਼ੇ',
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof Translation) => string;
  availableLanguages: { code: string; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const availableLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof Translation): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}