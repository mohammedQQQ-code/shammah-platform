// Authentication Types
export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'admin' | 'student';
  created_at: string;
  updated_at: string;
}

export interface AuthSession {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Material Types
export interface Material {
  id: string;
  title: string;
  description?: string;
  subject_id: string;
  type: 'video' | 'pdf' | 'file' | 'link';
  url?: string;
  file_path?: string;
  thumbnail?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface PDFChunk {
  id: string;
  material_id: string;
  content: string;
  page_number: number;
  embedding?: number[];
  created_at: string;
}

// Quiz Types
export interface Question {
  id: string;
  test_id: string;
  question_text: string;
  question_type: 'mcq' | 'true_false' | 'short_answer';
  options?: string[];
  correct_answer: string;
  explanation?: string;
  created_at: string;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  subject_id: string;
  created_by: string;
  total_questions: number;
  duration_minutes?: number;
  passing_percentage?: number;
  created_at: string;
  updated_at: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  answers: Record<string, string>;
  score: number;
  total_score: number;
  completed_at: string;
  created_at: string;
}

// Subject Types
export interface Subject {
  id: string;
  name: string;
  name_ar: string;
  description?: string;
  icon?: string;
  color?: string;
  created_at: string;
}

// Progress Types
export interface StudentProgress {
  id: string;
  user_id: string;
  subject_id: string;
  total_tests_taken: number;
  average_score: number;
  weaknesses: string[];
  last_updated: string;
}

// AI Types
export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
  created_at: string;
}

export interface AIConversation {
  id: string;
  user_id: string;
  subject_id?: string;
  messages: AIMessage[];
  created_at: string;
  updated_at: string;
}

// Common Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
