// Helper functions

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const calculateGrade = (score, maxScore = 100) => {
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 90) return 'A';
  if (percentage >= 85) return 'A-';
  if (percentage >= 80) return 'B+';
  if (percentage >= 75) return 'B';
  if (percentage >= 70) return 'B-';
  if (percentage >= 65) return 'C+';
  if (percentage >= 60) return 'C';
  if (percentage >= 55) return 'C-';
  if (percentage >= 50) return 'D';
  return 'F';
};

export const getGradeColor = (grade) => {
  const gradeColors = {
    'A': '#10b981',
    'A-': '#10b981',
    'B+': '#3b82f6',
    'B': '#3b82f6',
    'B-': '#3b82f6',
    'C+': '#f59e0b',
    'C': '#f59e0b',
    'C-': '#f59e0b',
    'D': '#ef4444',
    'F': '#dc2626'
  };
  return gradeColors[grade] || '#6b7280';
};

export const calculateGPA = (scores) => {
  if (!scores || scores.length === 0) return 0;
  
  const gradePoints = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D': 1.0, 'F': 0.0
  };
  
  let totalPoints = 0;
  let totalSubjects = 0;
  
  scores.forEach(score => {
    const grade = calculateGrade(score.score, score.maxScore || 100);
    totalPoints += gradePoints[grade] || 0;
    totalSubjects++;
  });
  
  return totalSubjects > 0 ? (totalPoints / totalSubjects).toFixed(2) : '0.00';
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};