import { create } from 'zustand';

interface QuizState {
  nickname: string;
  gender: 'female' | 'male' | null;
  currentQuestion: number;
  answers: string[];
  resultType: string | null;
  lastSelectedIndex: number | null;
  
  setNickname: (name: string) => void;
  setGender: (gender: 'female' | 'male') => void;
  setCurrentQuestion: (q: number) => void;
  addAnswer: (answer: string, index: number) => void;
  goBack: () => void;
  setResultType: (type: string) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  nickname: '',
  gender: null,
  currentQuestion: 0,
  answers: [],
  resultType: null,
  lastSelectedIndex: null,
  
  setNickname: (name) => set({ nickname: name }),
  setGender: (gender) => set({ gender }),
  setCurrentQuestion: (q) => set({ currentQuestion: q }),
  addAnswer: (answer, index) => set((state) => ({ 
    answers: [...state.answers, answer],
    currentQuestion: state.currentQuestion + 1,
    lastSelectedIndex: null,
  })),
  goBack: () => set((state) => {
    if (state.currentQuestion > 0) {
      return {
        currentQuestion: state.currentQuestion - 1,
        answers: state.answers.slice(0, -1),
        lastSelectedIndex: null,
      };
    }
    return state;
  }),
  setResultType: (type) => set({ resultType: type }),
  resetQuiz: () => set({
    nickname: '',
    gender: null,
    currentQuestion: 0,
    answers: [],
    resultType: null,
    lastSelectedIndex: null,
  }),
}));
