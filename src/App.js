import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, Sparkles, Mail, User, Globe, MapPin, Moon, Sun, Bookmark, BookmarkCheck, FileText } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function NexovaApp() {
  const [currentView, setCurrentView] = useState('landing');
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [savedTutorials, setSavedTutorials] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    country: '',
    signupMethod: ''
  });
  const [formData, setFormData] = useState({
    businessIdea: '',
    businessType: '',
    customBusinessType: '',
    skillLevel: '',
    budget: '',
    mainNeeds: [],
    timeline: '',
    currentStatus: ''
  });
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  // Load saved preferences
  useEffect(() => {
    const savedLanguage = localStorage.getItem('nexova-language');
    const savedDarkMode = localStorage.getItem('nexova-darkMode');
    const savedTutorialsData = localStorage.getItem('nexova-savedTutorials');
    
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedDarkMode) setDarkMode(savedDarkMode === 'true');
    if (savedTutorialsData) setSavedTutorials(JSON.parse(savedTutorialsData));
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('nexova-language', newLanguage);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('nexova-darkMode', newMode.toString());
  };

  const toggleSaveTutorial = (toolName, tutorialUrl) => {
    const tutorial = { toolName, tutorialUrl, savedAt: new Date().toISOString() };
    let updated;
    
    const isAlreadySaved = savedTutorials.some(t => t.tutorialUrl === tutorialUrl);
    if (isAlreadySaved) {
      updated = savedTutorials.filter(t => t.tutorialUrl !== tutorialUrl);
    } else {
      updated = [...savedTutorials, tutorial];
    }
    
    setSavedTutorials(updated);
    localStorage.setItem('nexova-savedTutorials', JSON.stringify(updated));
  };

  const isTutorialSaved = (tutorialUrl) => {
    return savedTutorials.some(t => t.tutorialUrl === tutorialUrl);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'France', 
    'Germany', 'Spain', 'Brazil', 'Mexico', 'India', 'China', 'Japan',
    'South Korea', 'Nigeria', 'South Africa', 'Kenya', 'Ghana', 'Other'
  ];

  const translations = {
    en: {
      brand: 'Empowering the Next Generation of Innovators',
      tagline: 'Turn your idea into reality with AI-powered guidance',
      startJourney: 'Start Your Journey',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      selectLanguage: 'Select Language',
      selectCountry: 'Select Your Country',
      getStarted: 'Get Started',
      orContinueWith: 'Or continue with',
      freeForever: 'Free forever. No credit card required.',
      personalized: 'Personalized',
      personalizedDesc: 'AI-tailored to your idea',
      instant: 'Instant',
      instantDesc: 'Get results in seconds',
      actionable: 'Actionable',
      actionableDesc: 'Ready-to-use toolkit',
      welcome: 'Welcome',
      step: 'Step',
      of: 'of',
      complete: 'Complete',
      back: 'Back',
      next: 'Next',
      tellUsIdea: 'Tell us about your business idea',
      ideaDescription: 'Describe your idea in detail. The more specific you are, the better recommendations we can provide.',
      ideaPlaceholder: 'Example: I want to create an online platform...',
      charactersMin: 'characters (minimum 10)',
      categoryQuestion: 'What category best describes your business?',
      describeBusiness: 'Describe your business category...',
      aboutYourself: 'Tell us about yourself',
      currentStatus: 'Your current status:',
      skillLevel: 'Your skill level:',
      budgetQuestion: 'What\'s your monthly budget for tools?',
      needsQuestion: 'What do you need help with? (Select all that apply)',
      timelineQuestion: 'What\'s your timeline to launch?',
      generateToolkit: 'Generate Toolkit',
      generating: 'Generating...',
      yourToolkit: 'Your Personalized Toolkit',
      poweredBy: 'Powered by NEXOVA AI',
      yourIdea: 'Your Idea:',
      recommendedTools: 'Recommended Tools',
      learningPath: 'Your Learning Path',
      nextSteps: 'Next Steps',
      startOver: 'Start Over',
      personalizedInsight: 'Personalized Insight:',
      priority: 'Priority',
      category: 'Category',
      difficulty: 'Difficulty',
      pricing: 'Pricing'
    },
    fr: {
      brand: 'Autonomiser la Prochaine Génération d\'Innovateurs',
      tagline: 'Transformez votre idée en réalité avec des conseils IA',
      startJourney: 'Commencez Votre Voyage',
      yourName: 'Votre Nom',
      emailAddress: 'Adresse Email',
      selectLanguage: 'Sélectionner la Langue',
      selectCountry: 'Sélectionnez Votre Pays',
      getStarted: 'Commencer',
      orContinueWith: 'Ou continuer avec',
      freeForever: 'Gratuit pour toujours. Aucune carte de crédit requise.',
      personalized: 'Personnalisé',
      personalizedDesc: 'IA adaptée à votre idée',
      instant: 'Instantané',
      instantDesc: 'Résultats en secondes',
      actionable: 'Actionnable',
      actionableDesc: 'Boîte à outils prête',
      welcome: 'Bienvenue',
      step: 'Étape',
      of: 'sur',
      complete: 'Terminé',
      back: 'Retour',
      next: 'Suivant',
      tellUsIdea: 'Parlez-nous de votre idée d\'entreprise',
      ideaDescription: 'Décrivez votre idée en détail. Plus vous êtes précis, meilleures seront nos recommandations.',
      ideaPlaceholder: 'Exemple: Je veux créer une plateforme en ligne...',
      charactersMin: 'caractères (minimum 10)',
      categoryQuestion: 'Quelle catégorie décrit le mieux votre entreprise?',
      describeBusiness: 'Décrivez votre catégorie d\'entreprise...',
      aboutYourself: 'Parlez-nous de vous',
      currentStatus: 'Votre statut actuel:',
      skillLevel: 'Votre niveau de compétence:',
      budgetQuestion: 'Quel est votre budget mensuel pour les outils?',
      needsQuestion: 'Dans quoi avez-vous besoin d\'aide? (Sélectionnez tout ce qui s\'applique)',
      timelineQuestion: 'Quel est votre calendrier de lancement?',
      generateToolkit: 'Générer la Boîte à Outils',
      generating: 'Génération...',
      yourToolkit: 'Votre Boîte à Outils Personnalisée',
      poweredBy: 'Propulsé par NEXOVA IA',
      yourIdea: 'Votre Idée:',
      recommendedTools: 'Outils Recommandés',
      learningPath: 'Votre Parcours d\'Apprentissage',
      nextSteps: 'Prochaines Étapes',
      startOver: 'Recommencer',
      personalizedInsight: 'Aperçu Personnalisé:',
      priority: 'Priorité',
      category: 'Catégorie',
      difficulty: 'Difficulté',
      pricing: 'Prix'
    },
    es: {
      brand: 'Empoderando la Próxima Generación de Innovadores',
      tagline: 'Convierte tu idea en realidad con orientación IA',
      startJourney: 'Comienza Tu Viaje',
      yourName: 'Tu Nombre',
      emailAddress: 'Correo Electrónico',
      selectLanguage: 'Seleccionar Idioma',
      selectCountry: 'Selecciona Tu País',
      getStarted: 'Comenzar',
      orContinueWith: 'O continuar con',
      freeForever: 'Gratis para siempre.',
      personalized: 'Personalizado',
      personalizedDesc: 'IA adaptada',
      instant: 'Instantáneo',
      instantDesc: 'Resultados rápidos',
      actionable: 'Accionable',
      actionableDesc: 'Kit listo',
      welcome: 'Bienvenido',
      step: 'Paso',
      of: 'de',
      complete: 'Completado',
      back: 'Atrás',
      next: 'Siguiente',
      tellUsIdea: 'Cuéntanos sobre tu idea de negocio',
      ideaDescription: 'Describe tu idea en detalle. Cuanto más específico seas, mejores recomendaciones podemos proporcionar.',
      ideaPlaceholder: 'Ejemplo: Quiero crear una plataforma en línea...',
      charactersMin: 'caracteres (mínimo 10)',
      categoryQuestion: '¿Qué categoría describe mejor tu negocio?',
      describeBusiness: 'Describe tu categoría de negocio...',
      aboutYourself: 'Cuéntanos sobre ti',
      currentStatus: 'Tu estado actual:',
      skillLevel: 'Tu nivel de habilidad:',
      budgetQuestion: '¿Cuál es tu presupuesto mensual para herramientas?',
      needsQuestion: '¿En qué necesitas ayuda? (Selecciona todas las que apliquen)',
      timelineQuestion: '¿Cuál es tu cronograma de lanzamiento?',
      generateToolkit: 'Generar Kit de Herramientas',
      generating: 'Generando...',
      yourToolkit: 'Tu Kit de Herramientas Personalizado',
      poweredBy: 'Impulsado por NEXOVA IA',
      yourIdea: 'Tu Idea:',
      recommendedTools: 'Herramientas Recomendadas',
      learningPath: 'Tu Ruta de Aprendizaje',
      nextSteps: 'Próximos Pasos',
      startOver: 'Empezar de Nuevo',
      personalizedInsight: 'Perspectiva Personalizada:',
      priority: 'Prioridad',
      category: 'Categoría',
      difficulty: 'Dificultad',
      pricing: 'Precio'
    }
  };

  const t = translations[language] || translations.en;

  const businessTypes = ['E-commerce Store', 'SaaS/Software', 'Content Creation/Blog', 'Service Business', 'Mobile App', 'Other'];
  const skillLevels = [
    { value: 'beginner', label: language === 'fr' ? 'Débutant - Je commence' : language === 'es' ? 'Principiante - Empezando' : 'Beginner - Just starting out' },
    { value: 'intermediate', label: language === 'fr' ? 'Intermédiaire - Un peu d\'expérience' : language === 'es' ? 'Intermedio - Algo de experiencia' : 'Intermediate - Some experience' },
    { value: 'advanced', label: language === 'fr' ? 'Avancé - Très expérimenté' : language === 'es' ? 'Avanzado - Muy experimentado' : 'Advanced - Very experienced' }
  ];
  const budgetOptions = [
    { value: 'free', label: language === 'fr' ? 'Outils gratuits uniquement' : language === 'es' ? 'Solo herramientas gratuitas' : 'Free tools only' },
    { value: 'low', label: language === 'fr' ? 'Jusqu\'à 50$/mois' : language === 'es' ? 'Hasta $50/mes' : 'Up to $50/month' },
    { value: 'medium', label: language === 'fr' ? '50-200$/mois' : language === 'es' ? '$50-200/mes' : '$50-200/month' },
    { value: 'high', label: language === 'fr' ? '200$+/mois' : language === 'es' ? '$200+/mes' : '$200+/month' }
  ];
  const needsOptions = language === 'fr' ? [
    'Site Web/Page de Destination', 'Marketing & SEO', 'Traitement des Paiements', 'Email Marketing', 
    'Design & Image de Marque', 'Analytique & Suivi', 'Gestion de Projet', 'Support Client'
  ] : language === 'es' ? [
    'Sitio Web/Página de Aterrizaje', 'Marketing & SEO', 'Procesamiento de Pagos', 'Email Marketing',
    'Diseño & Marca', 'Análisis & Seguimiento', 'Gestión de Proyectos', 'Soporte al Cliente'
  ] : [
    'Website/Landing Page', 'Marketing & SEO', 'Payment Processing', 'Email Marketing', 
    'Design & Branding', 'Analytics & Tracking', 'Project Management', 'Customer Support'
  ];
  const timelineOptions = [
    { value: 'asap', label: language === 'fr' ? 'Dès que possible - Lancement rapide' : language === 'es' ? 'Lo antes posible - Lanzamiento rápido' : 'ASAP - Need to launch quickly' },
    { value: 'month', label: language === 'fr' ? '1-3 mois' : language === 'es' ? '1-3 meses' : '1-3 months' },
    { value: 'quarter', label: language === 'fr' ? '3-6 mois' : language === 'es' ? '3-6 meses' : '3-6 months' },
    { value: 'flexible', label: language === 'fr' ? 'Calendrier flexible' : language === 'es' ? 'Cronograma flexible' : 'Flexible timeline' }
  ];
  const statusOptions = [
    { value: 'student', label: language === 'fr' ? 'Étudiant' : language === 'es' ? 'Estudiante' : 'Student' },
    { value: 'employed', label: language === 'fr' ? 'Actuellement Employé' : language === 'es' ? 'Actualmente Empleado' : 'Currently Employed' },
    { value: 'unemployed', label: language === 'fr' ? 'Cherche des Opportunités' : language === 'es' ? 'Buscando Oportunidades' : 'Looking for Opportunities' },
    { value: 'entrepreneur', label: language === 'fr' ? 'Déjà Entrepreneur' : language === 'es' ? 'Ya Emprendedor' : 'Already Entrepreneuring' }
  ];

  const handleUserDataChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleNeed = (need) => {
    setFormData(prev => ({
      ...prev,
      mainNeeds: prev.mainNeeds.includes(need)
        ? prev.mainNeeds.filter(n => n !== need)
        : [...prev.mainNeeds, need]
    }));
  };

  const handleSocialSignup = (provider) => {
    alert(`Social signup with ${provider} would be implemented here. For this demo, please use email signup.`);
  };

  const handleSignup = () => {
    if (userData.name && userData.email && userData.country) {
      setCurrentView('questionnaire');
    }
  };

  const generateRecommendations = async () => {
    setLoading(true);
    
    const businessTypeText = formData.businessType === 'Other' ? formData.customBusinessType : formData.businessType;

    const generateDemoData = () => {
      const skillLevelTutorials = {
        beginner: {
          en: {
            figma: { video: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", guide: "https://help.figma.com/hc/en-us", duration: "18 min" },
            notion: { video: "https://www.youtube.com/watch?v=oTahLEX3NXo", guide: "https://www.notion.so/help", duration: "12 min" },
            canva: { video: "https://www.youtube.com/watch?v=9j933omqCNE", guide: "https://www.canva.com/learn/", duration: "25 min" },
            analytics: { video: "https://www.youtube.com/watch?v=gBeMELnxdIg", guide: "https://support.google.com/analytics", duration: "15 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=M3xr7Y23-rI", guide: "https://mailchimp.com/help/", duration: "20 min" },
            stripe: { video: "https://www.youtube.com/watch?v=1r-F3FIONl8", guide: "https://stripe.com/docs", duration: "30 min" }
          },
          fr: {
            figma: { video: "https://www.youtube.com/watch?v=3q3FV65ZrUs", guide: "https://help.figma.com/hc/fr", duration: "22 min" },
            notion: { video: "https://www.youtube.com/watch?v=aA7si7AmPkY", guide: "https://www.notion.so/help", duration: "15 min" },
            canva: { video: "https://www.youtube.com/watch?v=KSW19fXS83k", guide: "https://www.canva.com/fr_fr/apprendre/", duration: "28 min" },
            analytics: { video: "https://www.youtube.com/watch?v=z6sM0mL44Hc", guide: "https://support.google.com/analytics", duration: "18 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=xKyf1jbMlys", guide: "https://mailchimp.com/help/", duration: "22 min" },
            stripe: { video: "https://www.youtube.com/watch?v=sH-Ltyctqy8", guide: "https://stripe.com/docs", duration: "35 min" }
          },
          es: {
            figma: { video: "https://www.youtube.com/watch?v=UK50JKupP8U", guide: "https://help.figma.com/hc/es", duration: "20 min" },
            notion: { video: "https://www.youtube.com/watch?v=RQ9y8EK6RfM", guide: "https://www.notion.so/help", duration: "16 min" },
            canva: { video: "https://www.youtube.com/watch?v=VQ7hGlvBpYI", guide: "https://www.canva.com/es_es/aprende/", duration: "27 min" },
            analytics: { video: "https://www.youtube.com/watch?v=BzxVGc6B8kM", guide: "https://support.google.com/analytics", duration: "17 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=yDY_wvCrxRw", guide: "https://mailchimp.com/help/", duration: "21 min" },
            stripe: { video: "https://www.youtube.com/watch?v=K5fKLHFZMyM", guide: "https://stripe.com/docs", duration: "32 min" }
          }
        },
        intermediate: {
          en: {
            figma: { video: "https://www.youtube.com/watch?v=Cx2dkpBxst8", guide: "https://www.figma.com/best-practices/", duration: "35 min" },
            notion: { video: "https://www.youtube.com/watch?v=hbxQw4LQwws", guide: "https://www.notion.so/help", duration: "40 min" },
            canva: { video: "https://www.youtube.com/watch?v=ii-PIehjMPM", guide: "https://www.canva.com/designschool/", duration: "50 min" },
            analytics: { video: "https://www.youtube.com/watch?v=mXcQ7rVn3ro", guide: "https://support.google.com/analytics", duration: "45 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=UJjZVpXpfes", guide: "https://mailchimp.com/help/", duration: "38 min" },
            stripe: { video: "https://www.youtube.com/watch?v=eYNdZHNjUIQ", guide: "https://stripe.com/docs", duration: "55 min" }
          },
          fr: {
            figma: { video: "https://www.youtube.com/watch?v=k74IrUNaJVk", guide: "https://www.figma.com/best-practices/", duration: "38 min" },
            notion: { video: "https://www.youtube.com/watch?v=gp8OPtFTE8Y", guide: "https://www.notion.so/help", duration: "42 min" },
            canva: { video: "https://www.youtube.com/watch?v=dXdNV8WBaLw", guide: "https://www.canva.com/fr_fr/apprendre/", duration: "52 min" },
            analytics: { video: "https://www.youtube.com/watch?v=OBrxefXrh6s", guide: "https://support.google.com/analytics", duration: "48 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=Tkq_Y7YxQr8", guide: "https://mailchimp.com/help/", duration: "40 min" },
            stripe: { video: "https://www.youtube.com/watch?v=hNG-OTmvBfA", guide: "https://stripe.com/docs", duration: "58 min" }
          },
          es: {
            figma: { video: "https://www.youtube.com/watch?v=BtdfKtSP1R4", guide: "https://www.figma.com/best-practices/", duration: "37 min" },
            notion: { video: "https://www.youtube.com/watch?v=QXRhfjwzmqg", guide: "https://www.notion.so/help", duration: "41 min" },
            canva: { video: "https://www.youtube.com/watch?v=dPy7vKCjcZU", guide: "https://www.canva.com/es_es/aprende/", duration: "51 min" },
            analytics: { video: "https://www.youtube.com/watch?v=bIPY7kkHm7M", guide: "https://support.google.com/analytics", duration: "46 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=NXv4_9gjfhM", guide: "https://mailchimp.com/help/", duration: "39 min" },
            stripe: { video: "https://www.youtube.com/watch?v=QEE9EXqHSrY", guide: "https://stripe.com/docs", duration: "56 min" }
          }
        },
        advanced: {
          en: {
            figma: { video: "https://www.youtube.com/watch?v=II-6dDzc-80", guide: "https://www.figma.com/best-practices/", duration: "60 min" },
            notion: { video: "https://www.youtube.com/watch?v=ONG26-2mIHU", guide: "https://www.notion.so/help", duration: "55 min" },
            canva: { video: "https://www.youtube.com/watch?v=VzV6qElyEPE", guide: "https://www.canva.com/designschool/", duration: "70 min" },
            analytics: { video: "https://www.youtube.com/watch?v=HMBZCZMZLwg", guide: "https://support.google.com/analytics", duration: "65 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=Q3wjm0b7v_k", guide: "https://mailchimp.com/help/", duration: "58 min" },
            stripe: { video: "https://www.youtube.com/watch?v=Twrqh9c1l_4", guide: "https://stripe.com/docs", duration: "75 min" }
          },
          fr: {
            figma: { video: "https://www.youtube.com/watch?v=8kPd_t0Rg4A", guide: "https://www.figma.com/best-practices/", duration: "62 min" },
            notion: { video: "https://www.youtube.com/watch?v=xNLxiCLlV4Q", guide: "https://www.notion.so/help", duration: "57 min" },
            canva: { video: "https://www.youtube.com/watch?v=rOdHdUj-P8A", guide: "https://www.canva.com/fr_fr/apprendre/", duration: "72 min" },
            analytics: { video: "https://www.youtube.com/watch?v=f3x3-kbfNJ4", guide: "https://support.google.com/analytics", duration: "68 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=b6Gh8yV9TYs", guide: "https://mailchimp.com/help/", duration: "60 min" },
            stripe: { video: "https://www.youtube.com/watch?v=PJB1q9KqJ4M", guide: "https://stripe.com/docs", duration: "78 min" }
          },
          es: {
            figma: { video: "https://www.youtube.com/watch?v=nVbN6J3z5dI", guide: "https://www.figma.com/best-practices/", duration: "61 min" },
            notion: { video: "https://www.youtube.com/watch?v=d8PxKMBOXDY", guide: "https://www.notion.so/help", duration: "56 min" },
            canva: { video: "https://www.youtube.com/watch?v=h1FKwdXJLfM", guide: "https://www.canva.com/es_es/aprende/", duration: "71 min" },
            analytics: { video: "https://www.youtube.com/watch?v=Pk8YBaETjP8", guide: "https://support.google.com/analytics", duration: "66 min" },
            mailchimp: { video: "https://www.youtube.com/watch?v=Y8VK7pNNmfM", guide: "https://mailchimp.com/help/", duration: "59 min" },
            stripe: { video: "https://www.youtube.com/watch?v=2JN8hfKhCYY", guide: "https://stripe.com/docs", duration: "76 min" }
          }
        }
      };

      const userSkill = formData.skillLevel || 'beginner';
      const userLang = ['en', 'fr', 'es'].includes(language) ? language : 'en';
      const tutorials = skillLevelTutorials[userSkill][userLang];

      return {
        overview: `Based on your ${businessTypeText} idea in ${userData.country}, here's your personalized roadmap. As a ${formData.currentStatus} with ${formData.skillLevel} experience, you're in a great position to start.`,
        tools: [
          { 
            name: "Figma", 
            category: "Design", 
            description: "Perfect for creating mockups and designs for your business idea. No coding required, great for beginners.",
            pricing: "Free tier available, Pro at $12/month", 
            difficulty: "Easy", 
            priority: "High",
            website: "https://figma.com",
            logo: "https://logo.clearbit.com/figma.com",
            tutorial: tutorials.figma.video,
            writtenGuide: tutorials.figma.guide,
            tutorialDuration: tutorials.figma.duration
          },
          { 
            name: "Notion", 
            category: "Project Management", 
            description: "Organize your business plan, tasks, and documentation all in one place.",
            pricing: "Free for personal use", 
            difficulty: "Easy", 
            priority: "High",
            website: "https://notion.so",
            logo: "https://logo.clearbit.com/notion.so",
            tutorial: tutorials.notion.video,
            writtenGuide: tutorials.notion.guide,
            tutorialDuration: tutorials.notion.duration
          },
          { 
            name: "Canva", 
            category: "Marketing", 
            description: "Create professional marketing materials, social media posts, and branding assets.",
            pricing: "Free with premium options at $13/month", 
            difficulty: "Easy", 
            priority: "Medium",
            website: "https://canva.com",
            logo: "https://logo.clearbit.com/canva.com",
            tutorial: tutorials.canva.video,
            writtenGuide: tutorials.canva.guide,
            tutorialDuration: tutorials.canva.duration
          },
          { 
            name: "Google Analytics", 
            category: "Analytics", 
            description: "Track visitor behavior and understand your audience once you launch.",
            pricing: "Free", 
            difficulty: "Medium", 
            priority: "Medium",
            website: "https://analytics.google.com",
            logo: "https://logo.clearbit.com/google.com",
            tutorial: tutorials.analytics.video,
            writtenGuide: tutorials.analytics.guide,
            tutorialDuration: tutorials.analytics.duration
          },
          { 
            name: "Mailchimp", 
            category: "Email Marketing", 
            description: "Build and manage your email list to connect with customers.",
            pricing: "Free up to 500 contacts", 
            difficulty: "Easy", 
            priority: "Medium",
            website: "https://mailchimp.com",
            logo: "https://logo.clearbit.com/mailchimp.com",
            tutorial: tutorials.mailchimp.video,
            writtenGuide: tutorials.mailchimp.guide,
            tutorialDuration: tutorials.mailchimp.duration
          },
          { 
            name: "Stripe", 
            category: "Payment Processing", 
            description: "Accept payments online securely and easily integrate with your platform.",
            pricing: "2.9% + 30¢ per transaction", 
            difficulty: "Medium", 
            priority: "High",
            website: "https://stripe.com",
            logo: "https://logo.clearbit.com/stripe.com",
            tutorial: tutorials.stripe.video,
            writtenGuide: tutorials.stripe.guide,
            tutorialDuration: tutorials.stripe.duration
          }
        ],
        learningPath: [
          { step: 1, title: "Validate Your Idea", description: "Talk to potential customers and validate demand.", estimatedTime: "1-2 weeks", resources: ["Read 'The Mom Test'", "Conduct 10-20 interviews", "Create landing page"] },
          { step: 2, title: "Create Your MVP", description: "Build the simplest version that solves the core problem.", estimatedTime: "2-4 weeks", resources: ["Learn no-code tools", "Watch MVP tutorials", "Use templates"] },
          { step: 3, title: "Get First 10 Customers", description: "Focus on manual outreach to find early adopters.", estimatedTime: "2-3 weeks", resources: ["Post in communities", "Reach out to network", "Offer discounts"] },
          { step: 4, title: "Iterate on Feedback", description: "Improve based on actual user needs.", estimatedTime: "Ongoing", resources: ["Set up feedback channels", "Track metrics", "Prioritize features"] }
        ],
        nextSteps: ["Create a landing page", "Talk to 5 potential customers", "Set up free tool accounts", "Join online communities"],
        personalizedTip: `As a ${formData.currentStatus}, focus on shipping fast and learning from real users. Done is better than perfect!`
      };
    };

    try {
      setRecommendations(generateDemoData());
      setCurrentView('results');
    } catch (error) {
      setRecommendations(generateDemoData());
      setCurrentView('results');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 6) {
      generateRecommendations();
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const canProceed = () => {
    switch(step) {
      case 1: return formData.businessIdea.length > 10;
      case 2: return formData.businessType && (formData.businessType !== 'Other' || formData.customBusinessType);
      case 3: return formData.currentStatus && formData.skillLevel;
      case 4: return formData.budget;
      case 5: return formData.mainNeeds.length > 0;
      case 6: return formData.timeline;
      default: return true;
    }
  };

  const resetAll = () => {
    setCurrentView('landing');
    setStep(1);
    setUserData({ name: '', email: '', country: '', signupMethod: '' });
    setFormData({
      businessIdea: '',
      businessType: '',
      customBusinessType: '',
      skillLevel: '',
      budget: '',
      mainNeeds: [],
      timeline: '',
      currentStatus: ''
    });
    setRecommendations(null);
  };

  // LANDING PAGE
  if (currentView === 'landing') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900' : 'bg-gradient-to-br from-orange-50 via-white to-orange-100'} flex items-center justify-center p-4 transition-colors duration-500`}>
        <div className="w-full max-w-2xl">
          {/* Top Bar with Language and Dark Mode */}
          <Analytics />
          <SpeedInsights />
          <div className="flex justify-between items-center mb-6">
            {/* Language Selector */}
            <div className="relative">
              <Globe className={`absolute left-3 top-2.5 w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'} pointer-events-none z-10`} />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={`pl-10 pr-4 py-2 ${darkMode ? 'bg-slate-800 text-white border-orange-500/30' : 'bg-white text-slate-900 border-orange-300'} border-2 rounded-lg cursor-pointer hover:border-orange-500 transition-all font-medium shadow-lg`}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className={darkMode ? 'bg-slate-800' : 'bg-white'}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800 border-orange-500/30' : 'bg-white border-orange-300'} border-2 hover:border-orange-500 transition-all shadow-lg`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon className="w-5 h-5 text-orange-600" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-2xl">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ea580c'}} />
                    <stop offset="100%" style={{stopColor: '#dc2626'}} />
                  </linearGradient>
                </defs>
                <path d="M50 10 L30 35 L40 35 L25 65 L50 40 L40 40 L55 10 Z" fill="url(#logoGradient)" stroke={darkMode ? 'white' : '#fed7aa'} strokeWidth="2"/>
              </svg>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight transition-colors`}>NEXOVA</h1>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-orange-300' : 'text-orange-700'} mb-2 transition-colors`}>{t.brand}</p>
            <p className={`text-base md:text-lg ${darkMode ? 'text-orange-400' : 'text-orange-600'} transition-colors`}>{t.tagline}</p>
          </div>

          {/* Signup Card - CENTERED ON MOBILE */}
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-2xl p-6 md:p-8 mb-8 transition-colors duration-500`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-slate-900'} transition-colors`}>
              {t.startJourney}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-2 transition-colors`}>
                  {t.yourName}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => handleUserDataChange('name', e.target.value)}
                    placeholder="John Doe"
                    className={`w-full pl-11 pr-4 py-3 border-2 ${darkMode ? 'border-slate-700 bg-slate-900 text-white placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900'} rounded-lg focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-2 transition-colors`}>
                  {t.emailAddress}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-orange-500" />
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleUserDataChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className={`w-full pl-11 pr-4 py-3 border-2 ${darkMode ? 'border-slate-700 bg-slate-900 text-white placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900'} rounded-lg focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-2 transition-colors`}>
                  {t.selectCountry}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-orange-500 pointer-events-none" />
                  <select
                    value={userData.country}
                    onChange={(e) => handleUserDataChange('country', e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 border-2 ${darkMode ? 'border-slate-700 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-900'} rounded-lg focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 cursor-pointer transition-all appearance-none`}
                  >
                    <option value="">Select your country...</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleSignup}
                disabled={!userData.name || !userData.email || !userData.country}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  userData.name && userData.email && userData.country
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg shadow-orange-500/30'
                    : `${darkMode ? 'bg-slate-700 text-slate-500' : 'bg-slate-300 text-slate-500'} cursor-not-allowed`
                }`}
              >
                {t.getStarted}
                <ArrowRight size={24} />
              </button>

              {/* Social Login */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${darkMode ? 'border-slate-700' : 'border-slate-300'} transition-colors`}></div>
                </div>
                <div className="relative flex justify-center">
                  <span className={`px-2 ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500'} text-sm transition-colors`}>{t.orContinueWith}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* Google */}
                <button
                  onClick={() => handleSocialSignup('Google')}
                  className={`p-3 border-2 ${darkMode ? 'border-slate-700 hover:border-orange-500 hover:bg-slate-700' : 'border-slate-200 hover:border-orange-400 hover:bg-orange-50'} rounded-lg transition-all flex items-center justify-center`}
                  title="Continue with Google"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                {/* GitHub */}
                <button
                  onClick={() => handleSocialSignup('GitHub')}
                  className={`p-3 border-2 ${darkMode ? 'border-slate-700 hover:border-orange-500 hover:bg-slate-700' : 'border-slate-200 hover:border-orange-400 hover:bg-orange-50'} rounded-lg transition-all flex items-center justify-center`}
                  title="Continue with GitHub"
                >
                  <svg className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-slate-900'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </button>

                {/* Microsoft */}
                <button
                  onClick={() => handleSocialSignup('Microsoft')}
                  className={`p-3 border-2 ${darkMode ? 'border-slate-700 hover:border-orange-500 hover:bg-slate-700' : 'border-slate-200 hover:border-orange-400 hover:bg-orange-50'} rounded-lg transition-all flex items-center justify-center`}
                  title="Continue with Microsoft"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#f25022" d="M1 1h10v10H1z"/>
                    <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                    <path fill="#7fba00" d="M1 13h10v10H1z"/>
                    <path fill="#ffb900" d="M13 13h10v10H13z"/>
                  </svg>
                </button>
              </div>
            </div>

            <p className={`text-center mt-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} transition-colors`}>
              {t.freeForever}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: t.personalized, desc: t.personalizedDesc },
              { icon: '⚡', title: t.instant, desc: t.instantDesc },
              { icon: '🚀', title: t.actionable, desc: t.actionableDesc }
            ].map((feature, i) => (
              <div key={i} className={`${darkMode ? 'bg-white/10 border-orange-500/20' : 'bg-white/80 border-orange-200'} backdrop-blur-sm rounded-lg p-4 text-center border transition-colors duration-500`}>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className={`${darkMode ? 'text-white' : 'text-orange-900'} font-semibold mb-1 transition-colors`}>{feature.title}</h3>
                <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'} text-sm transition-colors`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // QUESTIONNAIRE
  if (currentView === 'questionnaire') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Header */}
        <SpeedInsights />
        <div className="bg-slate-900 border-b border-blue-500/20 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                      <stop offset="100%" style={{stopColor: '#60a5fa'}} />
                    </linearGradient>
                  </defs>
                  <path d="M50 10 L30 35 L40 35 L25 65 L50 40 L40 40 L55 10 Z" fill="url(#logoGrad2)" stroke="white" strokeWidth="2"/>
                </svg>
                <span className="text-2xl font-bold text-white">NEXOVA</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-200">{t.welcome}, {userData.name}!</p>
                <p className="text-xs text-blue-300">{userData.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-200">{t.step} {step} {t.of} 6</span>
              <span className="text-sm text-blue-300">{Math.round((step / 6) * 100)}% {t.complete}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {step === 1 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {t.tellUsIdea}
                </h2>
                <p className="text-slate-600 mb-4 text-sm md:text-base">
                  {t.ideaDescription}
                </p>
                <textarea
                  value={formData.businessIdea}
                  onChange={(e) => handleInputChange('businessIdea', e.target.value)}
                  placeholder={t.ideaPlaceholder}
                  rows="6"
                  className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                />
                <p className="text-sm text-slate-500 mt-2">
                  {formData.businessIdea.length} {t.charactersMin}
                </p>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {t.categoryQuestion}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {businessTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => handleInputChange('businessType', type)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        formData.businessType === type
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-semibold text-slate-900">{type}</div>
                    </button>
                  ))}
                </div>
                {formData.businessType === 'Other' && (
                  <input
                    type="text"
                    placeholder={t.describeBusiness}
                    value={formData.customBusinessType}
                    onChange={(e) => handleInputChange('customBusinessType', e.target.value)}
                    className="mt-4 w-full p-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                )}
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">{t.aboutYourself}</h2>
                
                <div className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-slate-900">{t.currentStatus}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {statusOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange('currentStatus', option.value)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.currentStatus === option.value
                            ? 'border-blue-600 bg-blue-50 shadow-md'
                            : 'border-slate-200 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-semibold text-slate-900">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-slate-900">{t.skillLevel}</h3>
                  <div className="space-y-3">
                    {skillLevels.map(level => (
                      <button
                        key={level.value}
                        onClick={() => handleInputChange('skillLevel', level.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          formData.skillLevel === level.value
                            ? 'border-blue-600 bg-blue-50 shadow-md'
                            : 'border-slate-200 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-semibold text-slate-900">{level.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {t.budgetQuestion}
                </h2>
                <div className="space-y-3">
                  {budgetOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('budget', option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        formData.budget === option.value
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-semibold text-slate-900">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {t.needsQuestion}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {needsOptions.map(need => (
                    <button
                      key={need}
                      onClick={() => toggleNeed(need)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        formData.mainNeeds.includes(need)
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {formData.mainNeeds.includes(need) && (
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        )}
                        <span className="font-semibold text-slate-900">{need}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {t.timelineQuestion}
                </h2>
                <div className="space-y-3">
                  {timelineOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('timeline', option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        formData.timeline === option.value
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-semibold text-slate-900">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 gap-4">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all ${
                  step === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{t.back}</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!canProceed() || loading}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all ${
                  !canProceed() || loading
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="hidden sm:inline">{t.generating}</span>
                  </>
                ) : step === 6 ? (
                  <>
                    <span className="text-sm md:text-base">{t.generateToolkit}</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">{t.next}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RESULTS PAGE
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="bg-slate-900 border-b border-blue-500/20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 80 80">
              <defs>
                <linearGradient id="logoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                  <stop offset="100%" style={{stopColor: '#60a5fa'}} />
                </linearGradient>
              </defs>
              <path d="M50 10 L30 35 L40 35 L25 65 L50 40 L40 40 L55 10 Z" fill="url(#logoGrad3)" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="text-2xl font-bold text-white">NEXOVA</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">
              {t.yourToolkit}, {userData.name}!
            </h2>
            <p className="text-slate-600">{t.poweredBy}</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
            <p className="text-sm font-semibold text-blue-900 mb-1">{t.yourIdea}</p>
            <p className="text-slate-700">{formData.businessIdea}</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg mb-8 border border-blue-200">
            <p className="text-slate-700 leading-relaxed">{recommendations?.overview}</p>
          </div>

          {recommendations?.personalizedTip && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8 border border-purple-200">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="font-semibold text-purple-900 mb-1">{t.personalizedInsight}</p>
                  <p className="text-slate-700">{recommendations.personalizedTip}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">{t.recommendedTools}</h3>
            <div className="space-y-4">
              {recommendations?.tools.map((tool, index) => (
                <div key={index} className="border-2 border-slate-200 rounded-xl p-4 md:p-6 hover:border-blue-400 hover:shadow-lg transition-all bg-white">
                  {/* Tool Header with Logo */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-slate-200 bg-white flex items-center justify-center p-2">
                        <img 
                          src={tool.logo} 
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div style={{display: 'none'}} className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded items-center justify-center">
                          <span className="text-2xl font-bold text-blue-600">{tool.name.charAt(0)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tool Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{tool.name}</h4>
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs md:text-sm rounded-full font-medium">
                            {tool.category}
                          </span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <div className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                            tool.priority === 'High' ? 'bg-red-100 text-red-700' :
                            tool.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {tool.priority} {t.priority}
                          </div>
                          <div className="text-xs md:text-sm text-slate-500 px-3 py-1 bg-slate-100 rounded-full font-medium">
                            {tool.difficulty}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mb-3 text-sm md:text-base leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Pricing */}
                  <p className="text-sm text-slate-600 font-semibold mb-4 flex items-center gap-2">
                    <span className="text-green-600">💰</span>
                    {tool.pricing}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    {/* Primary Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Visit Website Button */}
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${darkMode ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-orange-600 to-red-600'} text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all shadow-md hover:shadow-lg flex-1`}
                      >
                        <span>{t.visitWebsite}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      {/* Watch Tutorial Button */}
                      {tool.tutorial && (
                        <a
                          href={tool.tutorial}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg flex-1"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          <span>{t.watchTutorial}</span>
                          {tool.tutorialDuration && (
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
                              {tool.tutorialDuration}
                            </span>
                          )}
                        </a>
                      )}
                    </div>

                    {/* Secondary Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Read Guide Button */}
                      {tool.writtenGuide && (
                        <a
                          href={tool.writtenGuide}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-4 py-2 ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} rounded-lg font-medium transition-all flex-1`}
                        >
                          <FileText className="w-4 h-4" />
                          <span>{t.readGuide}</span>
                        </a>
                      )}

                      {/* Save Tutorial Button */}
                      <button
                        onClick={() => toggleSaveTutorial(tool.name, tool.tutorial)}
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2 ${
                          isTutorialSaved(tool.tutorial)
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                            : darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        } rounded-lg font-medium transition-all flex-1`}
                      >
                        {isTutorialSaved(tool.tutorial) ? (
                          <>
                            <BookmarkCheck className="w-4 h-4" />
                            <span>{t.saved}</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-4 h-4" />
                            <span>{t.saveTutorial}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">{t.learningPath}</h3>
            <div className="space-y-4">
              {recommendations?.learningPath.map((step, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 md:p-5 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-700 mb-2 text-sm md:text-base">{step.description}</p>
                      <p className="text-sm text-blue-600 font-medium mb-2">⏱️ {step.estimatedTime}</p>
                      <div className="space-y-1">
                        {step.resources.map((resource, rIndex) => (
                          <div key={rIndex} className="text-sm text-slate-600">
                            • {resource}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mb-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{t.nextSteps}</h3>
            <ul className="space-y-2">
              {recommendations?.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm md:text-base">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={resetAll}
            className="w-full py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition-all"
          >
            {t.startOver}
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-blue-200 text-sm mb-2">
            Powered by NEXOVA - Empowering the Next Innovators
          </p>
          <p className="text-blue-300 text-xs">
            AI-generated recommendations personalized to your answers
          </p>
        </div>
      </div>
    </div>
  );
}