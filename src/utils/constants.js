// Application constants

export const ROLES = {
  ADMIN: 'admin',
  STUDENT: 'student'
};

export const GRADES = {
  'A': { color: '#10b981', minScore: 90 },
  'A-': { color: '#10b981', minScore: 85 },
  'B+': { color: '#3b82f6', minScore: 80 },
  'B': { color: '#3b82f6', minScore: 75 },
  'B-': { color: '#3b82f6', minScore: 70 },
  'C+': { color: '#f59e0b', minScore: 65 },
  'C': { color: '#f59e0b', minScore: 60 },
  'C-': { color: '#f59e0b', minScore: 55 },
  'D': { color: '#ef4444', minScore: 50 },
  'F': { color: '#dc2626', minScore: 0 }
};

export const SUBJECTS = [
  'Mathematics',
  'Physics',
  'Computer Science',
  'English',
  'Chemistry',
  'History',
  'Biology',
  'Geography',
  'Economics',
  'Art'
];

export const CLASSES = [
  '10A', '10B', '10C',
  '11A', '11B', '11C',
  '12A', '12B', '12C'
];

export const EXAM_TYPES = [
  'Midterm',
  'Final',
  'Quiz',
  'Assignment',
  'Project',
  'Lab'
];

export const REPORT_TYPES = [
  { id: 'academic', name: 'Academic Performance', icon: '📚' },
  { id: 'attendance', name: 'Attendance Summary', icon: '✅' },
  { id: 'financial', name: 'Financial Reports', icon: '💰' },
  { id: 'progress', name: 'Progress Reports', icon: '📈' },
  { id: 'behavioral', name: 'Behavioral Reports', icon: '👥' },
];

export const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];