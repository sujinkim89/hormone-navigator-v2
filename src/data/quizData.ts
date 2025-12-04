export interface QuizOption {
  text: string;
  type: 'D' | 'S' | 'T' | 'E';
}

export interface QuizQuestion {
  id: number;
  situation: string;
  question: string;
  options: QuizOption[];
  axis: 'DS' | 'TE'; // Dopamine/Serotonin or Testosterone/Estrogen
}

export const quizQuestions: QuizQuestion[] = [
  // D vs S (Dopamine/Serotonin) - 5 questions
  {
    id: 1,
    situation: "💢 직장에서 상사가 네 아이디어를 무시하고 다른 사람 의견만 칭찬함",
    question: "이때 나는...",
    options: [
      { text: "바로 반박하거나 더 좋은 아이디어로 복수한다 🔥", type: 'D' },
      { text: "속으로 삭이고 퇴근 후 혼자 분노의 야식을 먹는다 🍜", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 2,
    situation: "📱 친한 친구가 갑자기 연락이 뜸해졌다",
    question: "내 첫 반응은...",
    options: [
      { text: "바로 연락해서 \"야 왜 그래\" 직진한다 📞", type: 'D' },
      { text: "일단 기다리면서 뭔가 잘못했나 혼자 복기한다 🤔", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 3,
    situation: "🎁 오늘 하루 정말 힘들었다. 나한테 주는 보상은?",
    question: "선택은...",
    options: [
      { text: "충동 쇼핑 or 맛집 탐방! 자극이 필요해 💳", type: 'D' },
      { text: "따뜻한 목욕 + 넷플릭스 정주행 🛁", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 4,
    situation: "⚡ 새로운 프로젝트가 생겼다! 내 반응은?",
    question: "어떻게 시작하지...",
    options: [
      { text: "일단 뛰어든다! 하면서 배우지 뭐 🚀", type: 'D' },
      { text: "철저히 계획 세우고 준비 끝나면 시작한다 📋", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 5,
    situation: "😤 PMS가 심한 날, 남친/친구가 별 것 아닌 말로 건드렸다",
    question: "나의 대응은...",
    options: [
      { text: "바로 불 붙음. \"지금 나한테 그걸 말이라고 해?\" 💥", type: 'D' },
      { text: "아무 말 안 하고 조용히 방에 들어가서 문 닫음 🚪", type: 'S' },
    ],
    axis: 'DS',
  },
  // T vs E (Testosterone/Estrogen) - 5 questions
  {
    id: 6,
    situation: "📊 커리어 고민 중. 요즘 성과가 안 나온다",
    question: "내 머릿속은...",
    options: [
      { text: "분석! 원인 파악하고 액션 플랜 세운다 📈", type: 'T' },
      { text: "일단 친구 만나서 하소연하고 위로 받고 싶다 😢", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 7,
    situation: "🥚 \"30대 후반이면 난소 나이 체크해봐야 하지 않아?\"라는 말을 들었다",
    question: "내 반응은...",
    options: [
      { text: "오 맞아, 검사 예약 알아봐야겠다 (정보 수집 모드) 🔍", type: 'T' },
      { text: "갑자기 불안해지면서 막막해진다 (감정 파도) 🌊", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 8,
    situation: "💑 연인이 고민을 털어놓을 때 나는...",
    question: "주로 이렇게 반응한다",
    options: [
      { text: "해결책을 제시한다 \"그건 이렇게 해봐\" 💡", type: 'T' },
      { text: "일단 공감한다 \"진짜? 너무 힘들었겠다\" 🤗", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 9,
    situation: "😓 중요한 발표/미팅 전날 밤",
    question: "내 상태는...",
    options: [
      { text: "마지막까지 자료 점검하고 시뮬레이션 돌린다 💻", type: 'T' },
      { text: "긴장돼서 잠이 안 오고 최악의 시나리오 상상 중 😰", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 10,
    situation: "💔 친구가 이별 통보를 받았다고 연락이 왔다",
    question: "내가 먼저 하는 말은...",
    options: [
      { text: "\"뭐? 왜? 무슨 일이야?\" (상황 파악 우선) 🧐", type: 'T' },
      { text: "\"어머 괜찮아? 지금 바로 갈까?\" (감정 케어 우선) 💕", type: 'E' },
    ],
    axis: 'TE',
  },
];

export interface HormoneType {
  code: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  normalSelf: string;
  pmsSelf: string;
  survivalTip: string;
  bfGuide: string;
  bestMatch: string;
  worstMatch: string;
}

export const hormoneTypes: Record<string, HormoneType> = {
  DT: {
    code: 'DT',
    title: '번개치타',
    emoji: '⚡🐆',
    color: 'from-hot-pink to-rose',
    description: '불꽃같은 추진력의 소유자! 목표가 생기면 곧바로 돌진하는 타입.',
    normalSelf: '에너지 넘치고 리더십 있는 해결사. 주변에서 믿고 의지하는 존재.',
    pmsSelf: '작은 자극에도 폭발! \"내가 왜 참아야 해?\" 모드 돌입. 주변 사람들 조심.',
    survivalTip: '고강도 운동으로 에너지 방출하기. 논쟁 자제하고 혼자만의 시간 확보.',
    bfGuide: '자극하지 말고 조용히 물 한 잔 건네기. 해결책 제시보다 응원이 먼저!',
    bestMatch: 'SE (순둥코알라)',
    worstMatch: 'DT (번개치타) - 불붙으면 대폭발',
  },
  DE: {
    code: 'DE',
    title: '롤러코스터 토끼',
    emoji: '🎢🐰',
    color: 'from-rose to-violet',
    description: '감정의 파도를 타는 모험가! 기분 따라 하루가 천국과 지옥을 오간다.',
    normalSelf: '밝고 사교적인 분위기 메이커. 공감 능력 뛰어나 인기쟁이.',
    pmsSelf: '눈물 폭포에서 분노 화산까지. 본인도 당황하는 감정 롤러코스터.',
    survivalTip: '감정 일기 쓰기. 울고 싶을 땐 실컷 울기. 좋아하는 영상으로 기분 전환.',
    bfGuide: '그냥 안아주세요. 논리적 설명 금지. \"그랬구나, 힘들었겠다\" 무한 반복.',
    bestMatch: 'ST (꾸덕거북)',
    worstMatch: 'DT (번개치타) - 감정 소모전 시작',
  },
  ST: {
    code: 'ST',
    title: '꾸덕거북',
    emoji: '🐢✨',
    color: 'from-violet to-deep-purple',
    description: '조용하지만 강한 내면의 힘! 천천히 확실하게 목표를 향해 나아간다.',
    normalSelf: '차분하고 이성적인 전략가. 계획 세우기의 달인.',
    pmsSelf: '세상과 단절 모드. 말 걸지 마세요. 혼자 생각 정리 중.',
    survivalTip: '예정된 계획 축소하고 충분한 수면 확보. 혼자만의 공간 사수.',
    bfGuide: '혼자 있게 해주세요. 필요하면 먼저 연락 올 때까지 기다리기.',
    bestMatch: 'DE (롤러코스터 토끼)',
    worstMatch: 'DE (롤러코스터 토끼) - 감정 표현 갭 충돌',
  },
  SE: {
    code: 'SE',
    title: '순둥코알라',
    emoji: '🐨💗',
    color: 'from-secondary to-violet',
    description: '평화를 사랑하는 힐러! 갈등을 피하고 모두의 안정을 추구한다.',
    normalSelf: '다정하고 배려심 깊은 케어러. 주변을 편안하게 만드는 능력자.',
    pmsSelf: '서운함 폭발 직전까지 참다가 갑자기 눈물. \"아무도 날 몰라줘\" 모드.',
    survivalTip: '따뜻한 음식과 포근한 담요. 좋아하는 사람과 대화하기. 셀프 위로 시간.',
    bfGuide: '먼저 안부 묻기. \"오늘 힘들었어?\" 한마디가 약효 최고.',
    bestMatch: 'DT (번개치타)',
    worstMatch: 'ST (꾸덕거북) - 소통 부재로 서운함 누적',
  },
};

export const calculateType = (answers: string[]): string => {
  let D = 0, S = 0, T = 0, E = 0;
  
  answers.forEach((answer) => {
    if (answer === 'D') D++;
    if (answer === 'S') S++;
    if (answer === 'T') T++;
    if (answer === 'E') E++;
  });
  
  const firstLetter = D >= S ? 'D' : 'S';
  const secondLetter = T >= E ? 'T' : 'E';
  
  return firstLetter + secondLetter;
};

export const calculateCoordinates = (answers: string[]): { x: number; y: number } => {
  let D = 0, S = 0, T = 0, E = 0;
  
  answers.forEach((answer) => {
    if (answer === 'D') D++;
    if (answer === 'S') S++;
    if (answer === 'T') T++;
    if (answer === 'E') E++;
  });
  
  // x: D-S axis (-5 to 5), y: T-E axis (-5 to 5)
  const x = ((D - S) / 5) * 50; // Normalized to -50 to 50
  const y = ((T - E) / 5) * 50;
  
  return { x, y };
};
