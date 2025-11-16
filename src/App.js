import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, Sparkles, Mail, User, Globe, MapPin } from 'lucide-react';

export default function NexovaApp() {
  const [currentView, setCurrentView] = useState('landing');
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState('en');
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

  // Save language to localStorage so it persists
  useEffect(() => {
    const savedLanguage = localStorage.getItem('nexova-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('nexova-language', newLanguage);
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
      return {
        overview: `Based on your ${businessTypeText} idea in ${userData.country}, here's your personalized roadmap. As a ${formData.currentStatus} with ${formData.skillLevel} experience, you're in a great position to start.`,
        tools: [
          { name: "Figma", category: t.category, description: "Perfect for creating mockups and designs.", pricing: "Free tier, Pro at $12/month", difficulty: "Easy", priority: "High" },
          { name: "Notion", category: "Project Management", description: "Organize your business plan and tasks.", pricing: "Free for personal use", difficulty: "Easy", priority: "High" },
          { name: "Canva", category: "Marketing", description: "Create professional marketing materials.", pricing: "Free with premium at $13/month", difficulty: "Easy", priority: "Medium" },
          { name: "Google Analytics", category: "Analytics", description: "Track visitor behavior and understand your audience.", pricing: "Free", difficulty: "Medium", priority: "Medium" },
          { name: "Mailchimp", category: "Email Marketing", description: "Build and manage your email list.", pricing: "Free up to 500 contacts", difficulty: "Easy", priority: "Medium" },
          { name: "Stripe", category: "Payment", description: "Accept payments online securely.", pricing: "2.9% + 30¢ per transaction", difficulty: "Medium", priority: "High" }
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Language Selector */}
          <div className="flex justify-end mb-6">
            <div className="relative">
              <Globe className="absolute left-3 top-2.5 w-5 h-5 text-slate-400 pointer-events-none" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white cursor-pointer hover:bg-white/20 transition-all"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-slate-800">
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-2xl">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                    <stop offset="100%" style={{stopColor: '#60a5fa'}} />
                  </linearGradient>
                </defs>
                <path d="M50 10 L30 35 L40 35 L25 65 L50 40 L40 40 L55 10 Z" fill="url(#logoGradient)" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">NEXOVA</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-2">{t.brand}</p>
            <p className="text-base md:text-lg text-blue-300">{t.tagline}</p>
          </div>

          {/* Signup Card - CENTERED ON MOBILE */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-900">
              {t.startJourney}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.yourName}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => handleUserDataChange('name', e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.emailAddress}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleUserDataChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full pl-11 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.selectCountry}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <select
                    value={userData.country}
                    onChange={(e) => handleUserDataChange('country', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer transition-all appearance-none bg-white"
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
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                {t.getStarted}
                <ArrowRight size={24} />
              </button>

              {/* Social Login */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-slate-500 text-sm">{t.orContinueWith}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['Google', 'GitHub', 'Microsoft'].map((provider) => (
                  <button
                    key={provider}
                    onClick={() => handleSocialSignup(provider)}
                    className="p-3 border-2 border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-sm font-medium text-slate-700"
                  >
                    {provider}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center mt-4 text-sm text-slate-500">
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
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-500/20">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.desc}</p>
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
                <div key={index} className="border-2 border-slate-200 rounded-lg p-4 md:p-5 hover:border-blue-400 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-slate-900">{tool.name}</h4>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mt-1">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap md:text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tool.priority === 'High' ? 'bg-red-100 text-red-700' :
                        tool.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {tool.priority} {t.priority}
                      </div>
                      <div className="text-sm text-slate-500 px-3 py-1 bg-slate-100 rounded-full">{tool.difficulty}</div>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-2 text-sm md:text-base">{tool.description}</p>
                  <p className="text-sm text-slate-600 font-medium">{tool.pricing}</p>
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