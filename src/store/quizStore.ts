import { create } from 'zustand';

interface QuizState {
  nickname: string;
  gender: 'female' | 'male' | null;
  currentQuestion: number;
  answers: string[];
  resultType: string | null;
  
  setNickname: (name: string) => void;
  setGender: (gender: 'female' | 'male') => void;
  setCurrentQuestion: (q: number) => void;
  addAnswer: (answer: string) => void;
  setResultType: (type: string) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  nickname: '',
  gender: null,
  currentQuestion: 0,
  answers: [],
  resultType: null,
  
  setNickname: (name) => set({ nickname: name }),
  setGender: (gender) => set({ gender }),
  setCurrentQuestion: (q) => set({ currentQuestion: q }),
  addAnswer: (answer) => set((state) => ({ 
    answers: [...state.answers, answer],
    currentQuestion: state.currentQuestion + 1,
  })),
  setResultType: (type) => set({ resultType: type }),
  resetQuiz: () => set({
    nickname: '',
    gender: null,
    currentQuestion: 0,
    answers: [],
    resultType: null,
  }),
}));
