export const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    dashboard: 'لوحة التحكم',
    materials: 'المواد الدراسية',
    quizzes: 'الاختبارات',
    aiTutor: 'معلم ذكي',
    analytics: 'الإحصائيات',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    
    // Common
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    submit: 'إرسال',
    delete: 'حذف',
    edit: 'تعديل',
    save: 'حفظ',
    search: 'بحث',
    
    // Auth
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    fullName: 'الاسم الكامل',
    loginSuccess: 'تم تسجيل الدخول بنجاح',
    signupSuccess: 'تم إنشاء الحساب بنجاح',
    invalidEmail: 'بريد إلكتروني غير صحيح',
    weakPassword: 'كلمة مرور ضعيفة',
    
    // Dashboard
    welcomeBack: 'مرحباً بعودتك',
    studentDashboard: 'لوحة تحكم الطالب',
    adminDashboard: 'لوحة تحكم المسؤول',
    recentMaterials: 'المواد الحديثة',
    yourProgress: 'تقدمك',
    averageScore: 'متوسط النتيجة',
    
    // Quiz
    startQuiz: 'ابدأ الاختبار',
    quizCompleted: 'اكتمل الاختبار',
    yourScore: 'نتيجتك',
    correctAnswers: 'إجابات صحيحة',
    timeRemaining: 'الوقت المتبقي',
    question: 'السؤال',
    answer: 'الإجابة',
    
    // AI
    askQuestion: 'اسأل سؤالاً',
    uploadImage: 'رفع صورة',
    aiResponse: 'رد المعلم الذكي',
    sources: 'المصادر',
    
    // Admin
    uploadMaterial: 'رفع مادة دراسية',
    createQuiz: 'إنشاء اختبار',
    addQuestion: 'إضافة سؤال',
    studentsList: 'قائمة الطلاب',
    exportResults: 'تصدير النتائج',
  },
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    materials: 'Materials',
    quizzes: 'Quizzes',
    aiTutor: 'AI Tutor',
    analytics: 'Analytics',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    signup: 'Sign Up',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    submit: 'Submit',
    delete: 'Delete',
    edit: 'Edit',
    save: 'Save',
    search: 'Search',
    
    // Auth
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    loginSuccess: 'Login successful',
    signupSuccess: 'Account created successfully',
    invalidEmail: 'Invalid email',
    weakPassword: 'Weak password',
    
    // Dashboard
    welcomeBack: 'Welcome back',
    studentDashboard: 'Student Dashboard',
    adminDashboard: 'Admin Dashboard',
    recentMaterials: 'Recent Materials',
    yourProgress: 'Your Progress',
    averageScore: 'Average Score',
    
    // Quiz
    startQuiz: 'Start Quiz',
    quizCompleted: 'Quiz Completed',
    yourScore: 'Your Score',
    correctAnswers: 'Correct Answers',
    timeRemaining: 'Time Remaining',
    question: 'Question',
    answer: 'Answer',
    
    // AI
    askQuestion: 'Ask a Question',
    uploadImage: 'Upload Image',
    aiResponse: 'AI Response',
    sources: 'Sources',
    
    // Admin
    uploadMaterial: 'Upload Material',
    createQuiz: 'Create Quiz',
    addQuestion: 'Add Question',
    studentsList: 'Students List',
    exportResults: 'Export Results',
  },
};

export const getTranslation = (key: string, locale: string = 'ar'): string => {
  const localeTranslations = translations[locale as keyof typeof translations] || translations.ar;
  return (localeTranslations as any)[key] || key;
};
