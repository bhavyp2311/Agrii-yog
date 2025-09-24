import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Translation {
  // Navigation
  'nav.aiAssistant': string;
  'nav.diseaseDetection': string;
  'nav.marketHub': string;
  'nav.community': string;
  'nav.analytics': string;
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

  // Hero section
  'hero.title': string;
  'hero.subtitle': string;
  'hero.startGrowing': string;
  'hero.watchDemo': string;

  // Features
  'features.smartFarming': string;
  'features.diseaseDetection': string;
  'features.marketInsights': string;
  'features.communitySupport': string;
}

const translations: Record<string, Translation> = {
  en: {
    // Navigation
    'nav.aiAssistant': 'AI Assistant',
    'nav.diseaseDetection': 'Disease Detection',
    'nav.marketHub': 'Market Hub',
    'nav.community': 'Community',
    'nav.analytics': 'Analytics',
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

    // Hero section
    'hero.title': 'Grow Smarter with AI-Powered Agriculture',
    'hero.subtitle': 'Transform your farming with intelligent crop monitoring, disease detection, and market insights. Join thousands of farmers already growing smarter.',
    'hero.startGrowing': 'Start Growing Smarter',
    'hero.watchDemo': 'Watch Demo',

    // Features
    'features.smartFarming': 'Smart Farming Guidance',
    'features.diseaseDetection': 'Crop Health Analysis',
    'features.marketInsights': 'Market Insights',
    'features.communitySupport': 'Community Support',
  },
  hi: {
    // Navigation
    'nav.aiAssistant': 'एआई सहायक',
    'nav.diseaseDetection': 'रोग की पहचान',
    'nav.marketHub': 'बाजार केंद्र',
    'nav.community': 'समुदाय',
    'nav.analytics': 'विश्लेषण',
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

    // Hero section
    'hero.title': 'एआई-संचालित कृषि के साथ स्मार्ट खेती करें',
    'hero.subtitle': 'बुद्धिमान फसल निगरानी, रोग की पहचान और बाजार की जानकारी के साथ अपनी खेती को बदलें। हजारों किसान पहले से ही स्मार्ट खेती कर रहे हैं।',
    'hero.startGrowing': 'स्मार्ट खेती शुरू करें',
    'hero.watchDemo': 'डेमो देखें',

    // Features
    'features.smartFarming': 'स्मार्ट खेती मार्गदर्शन',
    'features.diseaseDetection': 'फसल स्वास्थ्य विश्लेषण',
    'features.marketInsights': 'बाजार की जानकारी',
    'features.communitySupport': 'समुदायिक सहायता',
  },
  pa: {
    // Navigation
    'nav.aiAssistant': 'ਏਆਈ ਸਹਾਇਕ',
    'nav.diseaseDetection': 'ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ',
    'nav.marketHub': 'ਮਾਰਕੀਟ ਹੱਬ',
    'nav.community': 'ਕਮਿਊਨਿਟੀ',
    'nav.analytics': 'ਵਿਸ਼ਲੇਸ਼ਣ',
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

    // Hero section
    'hero.title': 'ਏਆਈ-ਸੰਚਾਲਿਤ ਖੇਤੀਬਾੜੀ ਨਾਲ ਸਮਾਰਟ ਖੇਤੀ ਕਰੋ',
    'hero.subtitle': 'ਬੁੱਧੀਮਾਨ ਫਸਲ ਨਿਗਰਾਨੀ, ਬੀਮਾਰੀ ਦੀ ਪਛਾਣ ਅਤੇ ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ ਨਾਲ ਆਪਣੀ ਖੇਤੀ ਨੂੰ ਬਦਲੋ। ਹਜ਼ਾਰਾਂ ਕਿਸਾਨ ਪਹਿਲਾਂ ਹੀ ਸਮਾਰਟ ਖੇਤੀ ਕਰ ਰਹੇ ਹਨ।',
    'hero.startGrowing': 'ਸਮਾਰਟ ਖੇਤੀ ਸ਼ੁਰੂ ਕਰੋ',
    'hero.watchDemo': 'ਡੈਮੋ ਦੇਖੋ',

    // Features
    'features.smartFarming': 'ਸਮਾਰਟ ਖੇਤੀ ਮਾਰਗਦਰਸ਼ਨ',
    'features.diseaseDetection': 'ਫਸਲ ਸਿਹਤ ਵਿਸ਼ਲੇਸ਼ਣ',
    'features.marketInsights': 'ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ',
    'features.communitySupport': 'ਕਮਿਊਨਿਟੀ ਸਹਾਇਤਾ',
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