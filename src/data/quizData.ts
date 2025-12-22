export interface QuizOption {
  text: string;
  type: 'D' | 'S' | 'T' | 'E';
}

export interface QuizQuestion {
  id: number;
  situation: string;
  question: string;
  options: QuizOption[];
  axis: 'DS' | 'TE';
}

export const femaleQuizQuestions: QuizQuestion[] = [
  // [STAGE 1] 광기 어린 폭주(D) vs 서늘한 단절(S) - 5 questions
  {
    id: 1,
    situation: "🪞 [거울 전쟁] 외출 전, 거울 속 내 모습이 최악일 때",
    question: "오늘따라 뭘 입어도 이상해 보인다.\n거울 속 내 모습이 마음에 안 들 때 행동은?",
    options: [
      { text: "파괴적 변신: 평소에 안하는 과감한 착장으로 변신", type: 'D' },
      { text: "사회적 단절: 가장 그럴듯한 변명으로 약속 취소", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 2,
    situation: "💼 [커리어] 상사의 업무 지적으로 자존감이 깎일 때",
    question: "상사가 내 업무를 콕 집어 지적했다.\n자존감이 바닥을 칠 때 나의 반응은?",
    options: [
      { text: "도파민 도박: 신규 프로젝트 아이디어를 내며 일 벌리기", type: 'D' },
      { text: "투명인간 모드: 메신저 알림 끄고 3시간 투명인간 모드 선택", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 3,
    situation: "📱 [카톡 실종] 연인의 카톡 미확인이 24시간째일 때",
    question: "연인이 24시간째 읽씹 중이다.\n평소라면 넘어갈 일에 불안과 짜증이 밀려올 때?",
    options: [
      { text: "수사대 가동: 무한 카톡과 SNS 감시로 기어이 찾아내 석고대죄 받기", type: 'D' },
      { text: "이별 준비: 헤어질 준비하며 앨범 속 사진 하나씩 삭제하기", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 4,
    situation: "😤 [스트레스 대응] 세상 모든 것이 짜증날 때",
    question: "아무 이유 없이 모든 게 다 거슬린다.\n이 짜증을 어떻게 해소할 것인가?",
    options: [
      { text: "탕진 쾌락: 충동적 결제로 내 자아를 위한 아이템 업그레이드", type: 'D' },
      { text: "벙커 고립: 현관문 잠그고 이불 속 잠입. 외부 자극 0에 도전", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 5,
    situation: "😴 [강제 부팅] 그날 몸이 무겁고 침대에 딱 달라붙은 아침",
    question: "몸이 납덩이처럼 무겁다.\n침대에서 일어나기 싫은 아침, 나의 선택은?",
    options: [
      { text: "고문 부팅: 샷 4개 추가 후 헬스장 직행. 근육 찢으며 생존 확인", type: 'D' },
      { text: "존재 말소: \"오늘의 나는 없다.\" 회사에 병가를 요구", type: 'S' },
    ],
    axis: 'DS',
  },
  // [STAGE 2] 지배적 통제(T) vs 뜨거운 연결(E) - 5 questions
  {
    id: 6,
    situation: "😰 [커리어 자책] 회사에서 큰 실수를 했다",
    question: "자괴감이 뇌를 점령했다.\n이 상황에서 마음을 다잡는 방법은?",
    options: [
      { text: "야망 박제: 커리어 성과를 SNS에 올리며 좀 멋진 나에 취하며 안도", type: 'T' },
      { text: "공감 구걸: 단톡방에 불행 전시 후 친구들 공감 뜯어내며 안도", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 7,
    situation: "📰 [공포의 뉴스] 여성 난소 건강 관련 불안한 기사를 봤을 때",
    question: "뉴스에 난소 건강 기사가 떴다.\n평소보다 불안감이 크게 엄습할 때 나의 반응은?",
    options: [
      { text: "완벽 지배: 몸이 감히 나를 거슬러? 즉시 검진 예약 후 계획 수립", type: 'T' },
      { text: "불안 공유: 연인 붙잡고 공포 호소. 비슷한 친구들과 공감대 형성", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 8,
    situation: "💔 [연인 대화] 연인과 갈등 폭발 중",
    question: "연인이 \"뭘 잘못했는지 말해줘\"라고 물을 때\n당신의 우선순위는?",
    options: [
      { text: "법령 제정: 육하원칙 서운함 정리. 재발 방지용 징벌 규칙 공표", type: 'T' },
      { text: "감정 포위: \"내 마음 몰라?\" 나노 단위 공감 올 때까지 대화 거부", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 9,
    situation: "📝 [피드백] \"보고서에 영혼 없다\"는 혹평을 들었을 때",
    question: "상사에게 혹평을 들었다.\n감정적 타격이 클 때 머릿속에 떠오르는 시나리오는?",
    options: [
      { text: "복수 시나리오: \"훗. 니가 감히?\" 상사에 대해 복수 시나리오 작성", type: 'T' },
      { text: "비련 시나리오: \"나 미워하나봐ㅠㅠ\" 사내 왕따 시나리오 작성", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 10,
    situation: "😢 [자기 객관화] 이유 없는 오열이 터져 나왔을 때",
    question: "'내가 왜 이러지...' 이유 없이 눈물이 날 때,\n스스로를 바라보는 시각은?",
    options: [
      { text: "화학적 오류: \"이건 내가 아니다. 호르몬 오류다.\" 논문 검색", type: 'T' },
      { text: "존재적 침잠: \"무너지는 것도 나야.\" 나에게 스스로 다독이기", type: 'E' },
    ],
    axis: 'TE',
  },
];

export const maleQuizQuestions: QuizQuestion[] = [
  // D vs S (도파민/세로토닌) - 5 questions
  {
    id: 1,
    situation: "💢 [위기] 이유 없는 짜증 폭격",
    question: "여친: (갑자기) \"아니, 오빠는 숨소리가 왜 이렇게 커? 진짜 거슬려.\"\n나: (속으로: '또 시작이다...')",
    options: [
      { text: "A. 맞불 작전: \"야, 너는 안 쉬냐? 말 좀 예쁘게 해라.\" 즉시 받아치며 감정을 쏟아낸다. (전투 모드)", type: 'D' },
      { text: "B. 방어 모드: \"미안. 내가 조용히 할게.\" 납작 엎드리고 자리를 피해버린다. (평화 유지 모드)", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 2,
    situation: "📱 [연락] 4시간째 읽씹 중",
    question: "여친이 \"기분 안 좋아, 건드리지 마\"라며 4시간째 잠수 중.\n나: (불안하고 답답하다)",
    options: [
      { text: "A. 확인 강박: 부재중 전화 5통 + 카톡 10개 \"무슨 일 있어? 왜 안 받아?\" (확인해야 직성 풀림)", type: 'D' },
      { text: "B. 자율 존중: '자나 보다. 깰 때까지 롤이나 해야지.' (그녀의 동굴 시간을 존중하며 대기)", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 3,
    situation: "📅 [데이트] 당일 취소 통보",
    question: "여친: (데이트 1시간 전)\n\"나 오늘 몸 안 좋아서 못 나가겠어.\"\n나: (이미 식당 예약금 냈는데...)",
    options: [
      { text: "A. 감정 표출: \"아... 오늘 예약했는데... 많이 아파? 진짜 못 나와?\" (아쉬움과 짜증을 티 냄)", type: 'D' },
      { text: "B. 쿨한 수용: \"알겠어. 푹 쉬어! (오히려 좋아? 자유시간 획득)\" (상황을 빠르고 긍정적으로 수용)", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 4,
    situation: "💕 [스킨십] 손끝만 닿아도 짜증",
    question: "나: (쓰담쓰담)\n여친: \"아 더워, 붙지 마. 끈적거려.\" (짜증 냄)",
    options: [
      { text: "A. 관심 구걸: \"치, 섭섭하네. 진짜 너무한 거 아냐?\" 삐진 티를 팍팍 내며 관심을 요구한다.", type: 'D' },
      { text: "B. 쾌적함 제공: \"오키! (바로 1미터 거리두기 실시)\" 에어컨을 틀어주고 쾌적한 환경을 만들어준다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 5,
    situation: "⚡ [갈등] 과거 잘못 소환",
    question: "여친: \"오빠 저번에도 그랬잖아. 3년 전에도 내 생일 때...\"\n나: (기억도 안 나는 일이다)",
    options: [
      { text: "A. 논리 반박: \"그게 지금 왜 나와? 그건 그때 다 풀었잖아. 팩트만 얘기해.\" (현재 시점으로 차단)", type: 'D' },
      { text: "B. 무조건 항복: \"(뭔지 모르지만) 내가 다 잘못했어. 그땐 내가 생각이 짧았어.\" (일단 사과하고 넘기기)", type: 'S' },
    ],
    axis: 'DS',
  },
  // T vs E (테스토스테론/에스트로겐) - 5 questions
  {
    id: 6,
    situation: "😣 [통증] \"배 아파 죽겠어...\"",
    question: "여친: (식은땀 흘리며)\n\"배가 끊어질 것 같아...\"\n나: (어떻게 해야 하지?)",
    options: [
      { text: "A. 의료진 모드: \"약 있어? 병원 갈까? 내가 약국 다녀올게.\" (해결책 즉시 제시)", type: 'T' },
      { text: "B. 보호자 모드: \"아이고 저런... 많이 아프지? ㅠㅠ\" (배를 문질러주며 고통을 함께 느낌)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 7,
    situation: "😤 [하소연] 직장 상사 욕",
    question: "여친: \"김부장 진짜 미친 거 아냐?\n오늘 나한테 @#$%...\"\n(1시간째 욕하는 중)",
    options: [
      { text: "A. 판사님 모드: \"근데 그건 김부장 입장도 들어봐야 할 것 같은데? 네가 실수한 건 없어?\" (객관적 판단)", type: 'T' },
      { text: "B. 청부업자 모드: \"와 진짜 돌았네! 그 XX 내가 묻어버릴까?\" (무지성 편들기 & 같이 욕하기)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 8,
    situation: "😢 [눈물] 이유 없는 눈물",
    question: "여친: (데이트 중 갑자기 눈물을 뚝뚝 흘린다)\n나: (당황스러움)",
    options: [
      { text: "A. 원인 분석: '무슨 일이지? 회사 일인가? 아까 내가 밥을 남겨서인가?' (머릿속으로 원인 데이터 검색)", type: 'T' },
      { text: "B. 감정 전이: '어떡해 ㅠㅠ 울지 마 ㅠㅠ (나도 모르게 눈시울이 붉어짐)' (슬픔이 전염됨)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 9,
    situation: "🍽️ [메뉴] \"아무거나 (근데 다 싫어)\"",
    question: "나: \"뭐 먹을래?\"\n여친: \"아무거나...\n근데 밀가루는 싫고 매운 건 속 쓰려.\"",
    options: [
      { text: "A. 데이터 솔루션: \"그럼 샤브샤브 어때? (지도 앱 켜서 평점 검색 & 최적 경로 계산)\" (조건에 맞는 답 도출)", type: 'T' },
      { text: "B. 고통 공감: \"진짜 고르기 힘들겠다 ㅠㅠ 입맛이 없구나... 그냥 카페 가서 쉴까?\" (메뉴보다 상태 케어 우선)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 10,
    situation: "🪞 [함정] \"나 살찐 것 같지?\"",
    question: "여친: (거울을 보며 시무룩하게)\n\"나 요즘 붓고 살찐 것 같아...\"",
    options: [
      { text: "A. 팩트 체크: \"음, 요즘 야식 좀 먹긴 했지? 내일부터 같이 운동할까?\" (건강을 위한 솔루션 제안)", type: 'T' },
      { text: "B. 생존형 립서비스: \"무슨 소리야! 완전 뼈밖에 없구만! 어디가 살쪄!\" (안전이 최우선)", type: 'E' },
    ],
    axis: 'TE',
  },
];

// Legacy export for backward compatibility
export const quizQuestions = femaleQuizQuestions;

export interface HormoneType {
  code: string;
  title: string;
  emoji: string;
  hookLine: string;
  color: string;
  villainTrait: string;
  heroTrait: string;
  careTip: string;
  partnerTip: string;
  bestMatch: string;
  worstMatch: string;
  refImage?: string;
  quote?: string;
  // Legacy fields for compatibility
  diagnosis: string;
  normalSelf: string;
  survivalTip: string;
  bfGuide: string;
}

// Female types - 8 types
export const femaleTypes: Record<string, HormoneType> = {
  T_D: {
    code: 'T_D',
    title: '쉬헐크',
    emoji: '⚔️💚',
    hookLine: '초록빛 폭주 테토녀 - 쉬헐크 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '"말대꾸는 스매쉬로 답한다."\n비효율적인 모든 것을 물리적으로 박살 내고 싶은 파괴왕입니다.\n"결론이 뭐야!"라고 포효하며 주변을 쑥대밭으로 만듭니다.',
    heroTrait: 'PMS가 지나가면, 압도적인 파괴력을 수호 능력으로 바꿉니다.\n혼돈을 전략으로 정리하고 승리로 이끄는 천부적 리더입니다.',
    careTip: '전투 엔진을 식히기 위해 마그네슘이 시급합니다.\n\'강제 종료\' 휴식을 확보하세요.',
    partnerTip: '변명하는 건 자폭 버튼입니다.\n3초 안에 결론만 보고하고 그냥 조용히 샌드백이 되어주세요.',
    bestMatch: '원칙주의 현장감독, 손발척척 로드매니저',
    worstMatch: '사슴눈망울 1호팬, 슈퍼긍정 조감독',
    refImage: '/type-refs/woman/초록빛 폭주 테토녀_쉬헐크.png',
    quote: '전 언제나 화가 나 있어요. 그게 제 비밀이에요.',
    diagnosis: '"말대꾸는 스매쉬로 답한다."\n비효율적인 모든 것을 물리적으로 박살 내고 싶은 파괴왕입니다.',
    normalSelf: '압도적인 파괴력을 수호 능력으로 바꾸는 천부적 리더입니다.',
    survivalTip: '마그네슘으로 전투 엔진을 식히고 강제 종료 휴식을 확보하세요.',
    bfGuide: '3초 안에 결론만 보고하고 조용히 샌드백이 되어주세요.',
  },
  T_S: {
    code: 'T_S',
    title: '헌트릭스 루미',
    emoji: '🏰🌙',
    hookLine: '혼문 수호자 테토녀 - 헌트릭스 루미 재질',
    color: 'from-violet to-deep-purple',
    villainTrait: '"악령의 피가 흐르는 건 비밀이야."\n자신의 금기를 들키지 않으려 타인과 철저히 거리를 두며, "너는 감당할 수 없어"라며 상대를 서늘하게 밀어냅니다.',
    heroTrait: 'PMS가 지나가면, 세상을 지키는 단단한 정의감을 보여줍니다.\n내면의 고독을 묵묵히 견디며 결국 가장 소중한 것을 지켜내는 지킴이입니다.',
    careTip: '고독하게 지친 마음을 L-테아닌으로 이완시키고, 완전한 암흑 속에서 휴식이 필요합니다.',
    partnerTip: '그녀가 필요할 땐 거리를 유지해주세요.\n그녀의 어둠까지도 사랑하는 확신을 줄 때, 비로소 성문이 열립니다.',
    bestMatch: '승부사 스턴트팀, 철벽 경호팀',
    worstMatch: '슈퍼긍정 조감독, 사슴눈망울 1호팬',
    refImage: '/type-refs/woman/혼문 수호자 테토녀_루미.png',
    quote: '악령의 피가 흐르는 건 비밀이야. 내 비밀을 캐내려고 하지마.',
    diagnosis: '자신의 금기를 들키지 않으려 타인과 철저히 거리를 두는 수호자입니다.',
    normalSelf: '내면의 고독을 묵묵히 견디며 가장 소중한 것을 지켜내는 지킴이입니다.',
    survivalTip: 'L-테아닌으로 마음을 이완시키고 완전한 암흑 속에서 휴식하세요.',
    bfGuide: '그녀의 어둠까지도 사랑하는 확신을 줄 때 성문이 열립니다.',
  },
  D_T: {
    code: 'D_T',
    title: '미란다',
    emoji: '👑✨',
    hookLine: '무결점 편집장 테토녀 - 미란다 재질',
    color: 'from-secondary to-violet',
    villainTrait: '"That\'s all. 그건 니가 알아서 맞춰야지"\n질서가 깨지는 꼴을 못 보는 통제광입니다.\n"내가 예민한 게 아니라 네가 무능한 거야"라며 기를 죽입니다.',
    heroTrait: 'PMS가 지나가면, 어떤 풍파가 와도 흔들리지 않는 설계자입니다.\n당신의 깐깐함은 재난을 막는 방패며, 주변은 당신 덕분에 안전과 번영을 누립니다.',
    careTip: '뇌가 작은 무질서도 위협으로 착각 중입니다.\n이노시톨로 뇌를 달래고, \'오늘도 무사함\'에 집중하세요.',
    partnerTip: '데이트 코스 짤 때 오차 금지.\n"시정하겠습니다!"라는 군대식 대답이 목숨을 구합니다.',
    bestMatch: '원칙주의 현장감독, 승부사 스턴트팀',
    worstMatch: '승부사 스턴트팀, 슈퍼긍정 조감독',
    refImage: '/type-refs/woman/무결점 편집장 테토녀_미란다.png',
    quote: "That's all.",
    diagnosis: '질서가 깨지는 꼴을 못 보는 통제광입니다.',
    normalSelf: '어떤 풍파가 와도 흔들리지 않는 설계자입니다.',
    survivalTip: '이노시톨로 뇌를 달래고 \'오늘도 무사함\'에 집중하세요.',
    bfGuide: '"시정하겠습니다!"라는 군대식 대답이 목숨을 구합니다.',
  },
  S_T: {
    code: 'S_T',
    title: '말레피센트',
    emoji: '🌑🐺',
    hookLine: '고독한 가시덤불 테토녀 - 말레피센트 재질',
    color: 'from-muted to-secondary',
    villainTrait: '"감히 내 날개를 훔쳐가다니, 이게 나의 저주다!"\n"내 영역에서 꺼져." 소중한 날개를 잃은 슬픔으로 스스로를 유폐시킨 채 외부의 호의를 소음으로 취급합니다.',
    heroTrait: 'PMS가 지나가면, 본질을 꿰뚫어 통찰력을 보여줍니다.\n침묵 끝에 나오는 한마디는 세상 그 무엇보다 무게감을 가집니다.',
    careTip: '인간의 배신에 대한 상실감으로 고통의 역치가 낮은 상태입니다.\n비타민 D와 오메가3로 신경계를 보호하세요.',
    partnerTip: '노크 없이 들어가는 건 자살 행위입니다.\n가시덤불 밖에서 기분이 녹을 때까지 간식만 문앞에 두세요.',
    bestMatch: '원칙주의 현장감독, 승부사 스턴트팀',
    worstMatch: '슈퍼긍정 조감독, 손발척척 로드매니저',
    refImage: '/type-refs/woman/고독한 가시덤불_말라피센트.png',
    quote: '감히 내 날개를 훔쳐가다니, 이게 나의 저주다! 받아라.',
    diagnosis: '"내 영역에서 꺼져." 스스로를 유폐시킨 채 외부의 호의를 소음으로 취급합니다.',
    normalSelf: '본질을 꿰뚫어 통찰력을 보여주는 현자입니다.',
    survivalTip: '비타민 D와 오메가3로 신경계를 보호하세요.',
    bfGuide: '가시덤불 밖에서 기분이 녹을 때까지 간식만 문앞에 두세요.',
  },
  S_E: {
    code: 'S_E',
    title: '팅커벨',
    emoji: '🧚‍♀️💕',
    hookLine: '사랑둥이 에겐녀 - 팅커벨 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '"나 안 보고 뭐해? 내 서운함에 관심도 없지?"\n박수 안 쳐주면 죽을 것 같은 사랑꾼입니다.\n사소한 행동 하나에도 \'사랑이 식었다\'며 서운함을 토로하고, "나 사랑해?"를 무한 반복합니다.',
    heroTrait: 'PMS가 지나가면, 타인의 감정을 우주에서 가장 섬세하게 읽어내는 공감 여왕입니다.\n삭막한 일상을 디즈니 영화처럼 바꿉니다.',
    careTip: '당분이 떨어지면 불안이 증폭됩니다.\n다크 초콜릿으로 \'유기 불안\' 스위치를 꺼주세요.',
    partnerTip: '논리적인 설명은 금지입니다.\n그냥 꽉 안아주고 "제일 예뻐"라고 100번 하세요.',
    bestMatch: '슈퍼긍정 조감독, 사슴눈망울 1호팬',
    worstMatch: '원칙주의 현장감독, 묵묵한 소품 스탭',
    refImage: '/type-refs/woman/사랑둥이 에겐녀_팅커벨 재질.png',
    quote: '나 안 보고 뭐해? 내 서운함에 관심도 없지?',
    diagnosis: '사소한 행동 하나에도 \'사랑이 식었다\'며 서운함을 토로하는 사랑꾼입니다.',
    normalSelf: '타인의 감정을 가장 섬세하게 읽어내는 공감 여왕입니다.',
    survivalTip: '다크 초콜릿으로 \'유기 불안\' 스위치를 꺼주세요.',
    bfGuide: '그냥 꽉 안아주고 "제일 예뻐"라고 100번 하세요.',
  },
  E_D: {
    code: 'E_D',
    title: '마리 앙투아네트',
    emoji: '☀️🛋️',
    hookLine: '노블레스 에겐녀 - 마리 앙투아네트 재질',
    color: 'from-muted to-violet',
    villainTrait: '"빵이 없으면 케익을 주면 되잖아"\n침대와 한 몸이 된 나태 빌런입니다.\n"사랑이 식었네" 가스라이팅으로 온갖 심부름을 시키는 여왕 모드 발동.',
    heroTrait: 'PMS가 지나가면, 그녀의 우아한 존재감은 주변 사람들에게 더 빛나는 순간을 꿈꾸게 하는 강력한 영감을 줍니다.',
    careTip: '몸이 젖은 솜처럼 무거운 건 정상입니다.\n림프 순환 스트레칭과 고급 에센셜 오일로 죄책감 없는 휴식에 집중하세요.',
    partnerTip: '그녀의 취향을 \'사치\'라 비난하지 마세요.\n그녀가 반짝일 때 당신의 세상도 환해집니다.\n가장 예쁜 꽃 한 송이면 마음이 녹습니다.',
    bestMatch: '섬세살뜰 밥차, 철벽 경호팀',
    worstMatch: '원칙주의 현장감독, 손발척척 로드매니저',
    refImage: '/type-refs/woman/노블레스 에겐녀_마리앙투아네트.png',
    quote: '빵이 없으면 케익을 주면 되잖아. 나를 위해 가장 우아한 순간을 준비해줘.',
    diagnosis: '침대와 한 몸이 된 나태 빌런입니다.',
    normalSelf: '우아한 존재감으로 주변에 영감을 주는 아이콘입니다.',
    survivalTip: '림프 순환 스트레칭과 고급 에센셜 오일로 죄책감 없는 휴식에 집중하세요.',
    bfGuide: '가장 예쁜 꽃 한 송이면 마음이 녹습니다.',
  },
  D_E: {
    code: 'D_E',
    title: '할리 퀸',
    emoji: '🎭💥',
    hookLine: '에너지풀 디바 에겐녀 - 할리 퀸 재질',
    color: 'from-rose to-violet',
    villainTrait: '"조커야, 다 부숴볼까? 재미없는 건 죽어도 싫거든!"\n1초 만에 감정이 널뛰는 텐션 뱅크입니다.\n웃다가 통곡하고 화내다 키스하며, 지루함을 참지 못해 멀쩡한 상황에서도 사고를 칩니다.',
    heroTrait: 'PMS가 지나가면, 지루한 세상에 활력을 불어넣는 독보적 에너지 뱅크입니다.\n일상에 지친 이들에게 시원한 카타르시스를 선물합니다.',
    careTip: '변덕은 뇌가 \'재미\'를 찾는 전략입니다.\n뇌 소모를 막아줄 비타민 B군을 충분히 보충하세요.',
    partnerTip: '기분을 이해하려 하지 마세요.\n그냥 조커처럼 같이 소리 지르며 그 미친 텐션을 즐기는 게 상책입니다.',
    bestMatch: '철벽 경호팀, 슈퍼긍정 조감독',
    worstMatch: '원칙주의 현장감독, 승부사 스턴트팀',
    refImage: '/type-refs/woman/에너지풀 디바 에겐녀_할리퀸.png',
    quote: '조커야, 다 부숴볼까? 재미없는 건 죽어도 싫거든!',
    diagnosis: '1초 만에 감정이 널뛰는 텐션 뱅크입니다.',
    normalSelf: '지루한 세상에 활력을 불어넣는 독보적 에너지 뱅크입니다.',
    survivalTip: '비타민 B군을 충분히 보충하세요.',
    bfGuide: '조커처럼 같이 소리 지르며 그 미친 텐션을 즐기세요.',
  },
  E_S: {
    code: 'E_S',
    title: '엘사',
    emoji: '🕯️💧',
    hookLine: '사연있는 공주 에겐녀 - 엘사 재질',
    color: 'from-hot-pink to-violet',
    villainTrait: '"Let it go. 나는 이제 떠날래. 그러니 다 얼려버리겠어"\n슬픔에 침잠해 주변을 얼려버리며, 세상의 가해자로 만들어 죄책감의 늪에 빠뜨리는 정서적 폭군입니다.',
    heroTrait: 'PMS가 지나가면, 세상의 투박함을 정화하는 고도의 감수성을 보여줍니다.\n고립은 더 깊은 차원의 연결을 준비하는 예술적 인내의 과정입니다.',
    careTip: '마음의 근육이 약해진 예민한 상태입니다.\n따뜻한 테아닌 차와 클래식 음악으로 영혼의 주파수를 맞춰주세요.',
    partnerTip: '그녀의 눈물은 우주급 비극입니다.\n함께 오열하며 슬픔의 정당함을 동조해 주세요.',
    bestMatch: '사슴눈망울 1호팬, 섬세살뜰 밥차',
    worstMatch: '손발척척 로드매니저, 승부사 스턴트팀',
    refImage: '/type-refs/woman/사연있는 공주 에겐녀_엘사.png',
    quote: 'Let it go. 나는 이제 떠날래. 그러니 다 얼려버리겠어.',
    diagnosis: '슬픔에 침잠해 주변을 얼려버리는 정서적 폭군입니다.',
    normalSelf: '세상의 투박함을 정화하는 고도의 감수성을 가진 예술가입니다.',
    survivalTip: '따뜻한 테아닌 차와 클래식 음악으로 영혼의 주파수를 맞춰주세요.',
    bfGuide: '함께 오열하며 슬픔의 정당함을 동조해 주세요.',
  },
};

// Male types - 8 types (파트너편: 8가지 현장 스탭 에디션)
export const maleTypes: Record<string, HormoneType> = {
  D_T: {
    code: 'D_T',
    title: '원칙주의 현장감독',
    emoji: '🎬📋',
    hookLine: '원칙주의 현장감독 - 백종원 재질',
    color: 'from-violet to-deep-purple',
    villainTrait: '"힘들었쥬?"라고 묻자마자, "자, 지금부터 해결법입니다."라며 7가지 단계별 \'감정 정리 솔루션\'을 PPT로 띄웁니다.\n당신의 눈물은 \'비효율적인 감정 낭비\'로 분류됩니다.',
    heroTrait: '현장 전체의 흐름을 장악하고 비효율을 제거하는 갈등 해결 솔루션 자판기입니다.\n여주인공의 혼란을 정리하고 최적의 솔루션을 제공하며, 휘몰아치는 감정의 파도를 잠재우는 든든한 닻이 됩니다.',
    careTip: '"정답"을 제시하기 전, "힘들었쥬?"라는 공감 매크로를 5분간 반복하세요.',
    partnerTip: '이 남자는 당신을 무시하는 게 아닙니다.\n누구보다 확실하게 문제를 해결해주고 싶어 하는 해결사입니다.',
    bestMatch: '쉬헐크, 미란다',
    worstMatch: '할리 퀸, 헌트릭스 루미',
    refImage: '/type-refs/man/원칙주의 현장감독_백종원.png',
    quote: '그게 맞쥬? 근데 왜 그렇게 했쥬? 내가 알려준 대로만 해봐유.',
    diagnosis: '울고 있는 여주에게 팩트 체크와 논리적 지적질을 합니다.',
    normalSelf: '그녀의 계획을 0.1초 오차 없이 수행하는 인간 큐시트입니다.',
    survivalTip: '공감 매크로를 5분간 반복한 후에 솔루션을 제시하세요.',
    bfGuide: '누구보다 확실하게 문제를 해결해주고 싶어 하는 해결사입니다.',
  },
  T_D: {
    code: 'T_D',
    title: '승부사 스턴트팀',
    emoji: '🏍️🔥',
    hookLine: '승부사 스턴트팀 - 덱스 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '"나 지금 너무 힘들어..."라고 하면 "각자 해결하자"며 "오늘 운동 빠지면 손해"라며 헬스장으로 쿨하게 사라집니다.',
    heroTrait: '누구에게도 굴복하지 않고 한계를 돌파하는 독립성과 자기주장이 강한 고독한 실력자입니다.\n그녀의 예민함에 휩쓸리지 않는 강철 멘탈의 쿨가이로, 서로의 영역을 침범하지 않으며 고유한 매력으로 이성적 긴장감을 유지합니다.',
    careTip: '30분만 옆에 앉아 있다가 운동하러 가도 늦지 않습니다.',
    partnerTip: '이 남자는 당신을 귀찮아하는 게 아닙니다.\n혼자서도 이겨낼 수 있는 강한 사람이라 믿는 쿨한 동료입니다.',
    bestMatch: '엘사, 말레피센트',
    worstMatch: '팅커벨, 헌트릭스 루미',
    refImage: '/type-refs/man/승부사 스턴트팀_덱스.png',
    quote: '유쾌하게 즐기다가 각자 할 거 하는 게 제일 쿨한 거 아니야?',
    diagnosis: '"나 오늘 하체 하는 날이라 헬스장 가야 해"라며 진짜 가버리는 무심함.',
    normalSelf: '독립성과 자기주장이 강한 고독한 실력자입니다.',
    survivalTip: '30분만 옆에 앉아 있다가 운동하러 가세요.',
    bfGuide: '혼자서도 이겨낼 수 있는 강한 사람이라 믿는 쿨한 동료입니다.',
  },
  S_T: {
    code: 'S_T',
    title: '묵묵한 소품 스탭',
    emoji: '🎬🎯',
    hookLine: '묵묵한 소품 스탭 - 박정민 재질',
    color: 'from-muted to-secondary',
    villainTrait: '당신을 10분 동안 말없이 관찰하다가 배려한답시고 며칠 동안 혼자두고 불안을 폭발시킵니다.',
    heroTrait: '무대 뒤에서 뒷짐지고 여주인공의 모든 순간을 관찰하고, 다음 씬의 결정적 소품을 준비하는 지략가입니다.\n혼돈 속에서도 여주인공의 가장 우아한 순간을 위해 미리 준비된 빨간 힐을 준비해 불안함 속 완벽한 확신이 되어줍니다.',
    careTip: '굿굿바이 할 땐 "필요할 때 불러"라는 말은 남기고 숨으세요.',
    partnerTip: '오히려 당신을 너무 존중해서 함부로 개입하지 못하는 관찰자입니다.\n필요할 때 먼저 손을 뻗어주세요.',
    bestMatch: '말레피센트, 엘사',
    worstMatch: '헌트릭스 루미, 할리 퀸',
    refImage: '/type-refs/man/묵묵한 소품스텝_박정민.png',
    quote: '굿굿바이. 그래도 신발은 신으세요.',
    diagnosis: '너무 멀리서 지켜보기만 해서 "나한테 관심 없지?"라는 말을 듣습니다.',
    normalSelf: '멀리서 관찰하며 최적의 거리감을 세팅하는 지략가입니다.',
    survivalTip: '"필요할 때 불러"라는 말은 남기고 숨으세요.',
    bfGuide: '필요할 때 먼저 손을 뻗어주세요.',
  },
  T_S: {
    code: 'T_S',
    title: '철벽 경호팀',
    emoji: '🛡️🪨',
    hookLine: '철벽 경호팀 - 마동석 재질',
    color: 'from-secondary to-violet',
    villainTrait: '30분간 심각한 고민을 털어놓았는데, 답변이 없습니다.\n"무슨 생각해?"라고 묻자, "어? 아까 파리가 지나갔네."라고 말하며 당신의 감정선을 무참히 끊어버립니다.',
    heroTrait: '현장의 안전과 여주인공의 안위를 끝까지 책임지는 바위 같은 가드입니다.\n무슨 일이 있어도 여주인공 곁을 사수하며 비바람을 막고, 폭발적인 감정 기복도 모두 받아내는 거대한 수용력을 발휘합니다.',
    careTip: '"그랬구나"라는 매크로 리액션이라도 돌리세요.',
    partnerTip: '뇌가 과부하 된 무뚝뚝한 방패입니다.\n"리액션 모드를 장착해달라"고 하면 기꺼이 든든한 샌드백이 됩니다.',
    bestMatch: '할리 퀸, 쉬헐크',
    worstMatch: '팅커벨, 미란다',
    refImage: '/type-refs/man/철벽 경호팀_마동석.png',
    quote: '다 때려 부숴도 돼. 어차피 내가 다 치우고 지킬 거니까.',
    diagnosis: '심각한 고민 상담 중에 로봇처럼 고개만 까딱거립니다.',
    normalSelf: '어떤 텐션 변화에도 흔들리지 않는 바위 같은 안정감을 제공합니다.',
    survivalTip: '"그랬구나"라는 매크로 리액션이라도 돌리세요.',
    bfGuide: '"리액션 모드를 장착해달라"고 하면 든든한 샌드백이 됩니다.',
  },
  D_E: {
    code: 'D_E',
    title: '슈퍼긍정 조감독',
    emoji: '📣✨',
    hookLine: '슈퍼긍정 조감독 - 황광희 재질',
    color: 'from-warning-yellow to-accent',
    villainTrait: '당신이 통곡하고 있으면 "언니! 우는 모습도 진짜 유니크해! 짤 만들어도 되겠어!"라며 폰을 들이대고 셀카를 찍습니다.\n당신의 슬픔을 \'하이텐션 콘텐츠\'로 승화시킵니다.',
    heroTrait: '비난조차 웃음으로 승화시키는 지치지 않는 인간 비타민입니다.\n현장의 분위기가 가라앉지 않도록 끊임없이 텐션을 높이며, 바닥까지 떨어진 자존감을 칭찬 세례로 순식간에 끌어올리는 기적을 보여줍니다.',
    careTip: '상대의 표정이 굳으면 일단 입을 닫고 경청 모드 돌입!',
    partnerTip: '필사적으로 밝은 에너지를 끌어오는 중입니다.\n슬프다면 "같이 슬퍼해 달라"고 정확한 가이드를 주면 맞춰줍니다.',
    bestMatch: '팅커벨, 할리 퀸',
    worstMatch: '엘사, 말레피센트',
    refImage: '/type-refs/man/슈퍼긍정 조감독_황광희.png',
    quote: '언니! 자기는 화낼 때도 너무 대박이다! 진짜 유니크해!',
    diagnosis: '여주가 진지하게 슬퍼하는데 눈치 없이 싱글벙글 웃습니다.',
    normalSelf: '무한 긍정으로 여주의 자존감을 채워주는 인간 에너지 드링크입니다.',
    survivalTip: '상대의 표정이 굳으면 일단 입을 닫고 경청 모드 돌입!',
    bfGuide: '"같이 슬퍼해 달라"고 정확한 가이드를 주면 맞춰줍니다.',
  },
  E_D: {
    code: 'E_D',
    title: '손발척척 로드매니저',
    emoji: '🚐💨',
    hookLine: '손발척척 로드매니저 - 유재석 재질',
    color: 'from-rose to-violet',
    villainTrait: '화를 내려고 입을 떼는 순간, "지금 \'짜증\' 오실 것 같아서 \'공감 대본\'을 준비했어요!"라며 여주인공의 감정 발산 \'권리\'를 침해합니다.',
    heroTrait: '숨소리만으로 기분을 파악해 선제 대응하는 센스의 달인입니다.\n배우가 가장 편안한 상태로 현장에 집중하게 돕고, 갈등이 불씨가 되기도 전에 유머와 센스로 상황을 반전시켜 평화를 유지합니다.',
    careTip: '가끔은 상대에게 감정의 주도권을 주세요.',
    partnerTip: '가장 안전한 배를 운전해주는 분입니다.\n당신의 짜증까지도 웃으며 수용할 준비가 되어 있습니다.',
    bestMatch: '쉬헐크, 미란다',
    worstMatch: '헌트릭스 루미, 말레피센트',
    refImage: '/type-refs/man/손발척척 로드매니저_지미유(유재석).png',
    quote: '지금 기분 별로죠? 내가 딱 좋아하는 간식 사 왔는데, 먹어볼래요?',
    diagnosis: '너무 완벽히 세팅해주려다 여주가 감정을 소화할 틈을 주지 않습니다.',
    normalSelf: '숨소리만으로 기분을 파악해 선제 대응하는 센스의 달인입니다.',
    survivalTip: '가끔은 상대에게 감정의 주도권을 주세요.',
    bfGuide: '당신의 짜증까지도 웃으며 수용할 준비가 되어 있습니다.',
  },
  E_S: {
    code: 'E_S',
    title: '섬세살뜰 밥차',
    emoji: '🍱💕',
    hookLine: '섬세살뜰 밥차 - 정재형 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '본인이 더 흥분해서 대화하는 편입니다.\n결국 당신의 고민은 묻히고, 그가 해준 요리 얘기로 대화가 마무리됩니다.',
    heroTrait: '정성스러운 요리와 따뜻한 대화로 지친 여배우를 힐링시키는 호스트입니다.\n요리 소리와 유쾌한 웃음소리가 날카로운 신경을 부드럽게 녹여줍니다.',
    careTip: '마이크를 상대에게 양보하세요.',
    partnerTip: '함께 와인 한 잔하며 수다를 떨면 세상 고민이 별거 아닌 게 됩니다.\n그의 우아한 리듬에 몸을 맡기세요.',
    bestMatch: '마리 앙투아네트, 팅커벨',
    worstMatch: '쉬헐크, 미란다',
    refImage: '/type-refs/man/섬세살뜰 밥차_정재형.png',
    quote: '어머어머, 이상한 놈 다 잊고, 내가 진짜 맛있는 프랑스 요리 해줄게!',
    diagnosis: '본인이 더 흥분해서 대화해 고민이 묻힙니다.',
    normalSelf: '정성스러운 요리와 따뜻한 대화로 지친 여배우를 힐링시키는 호스트입니다.',
    survivalTip: '마이크를 상대에게 양보하세요.',
    bfGuide: '그의 우아한 리듬에 몸을 맡기세요.',
  },
  S_E: {
    code: 'S_E',
    title: '사슴눈망울 1호팬',
    emoji: '🦌💧',
    hookLine: '사슴눈망울 1호팬 - 박보검 재질',
    color: 'from-violet to-deep-purple',
    villainTrait: '명백한 여주인공의 잘못에도 무릎을 꿇고 사과하며 눈물을 흘려서 여주인공을 진정한 빌런으로 만들어 버립니다.',
    heroTrait: '오직 여주인공의 빛나는 순간을 위해 맑은 마음으로 응원하는 존재 자체로 정화되는 맑고 투명한 눈망울입니다.\n투명하고 깨끗한 지지를 통해 여주인공이 스스로를 다시 사랑하게 만듭니다.',
    careTip: '당신의 과도한 \'무조건적 지지\'는 상대를 죄책감에 빠뜨립니다.',
    partnerTip: '그의 지지는 조건이 없고 투명합니다.\n그저 고맙다고 한마디만 해주세요.\n그는 당신의 영원한 편이 됩니다.',
    bestMatch: '헌트릭스 루미, 팅커벨',
    worstMatch: '쉬헐크, 미란다',
    refImage: '/type-refs/man/사슴눈망울 1호팬_박보검2.png',
    quote: '자기는 충분히 잘하고 있어요. 내가 다 봤는걸요. 자기가 빛나는 순간을 놓치지 않을게요.',
    diagnosis: '여주를 달래야 할 때 본인이 더 대성통곡해서 주객전도됩니다.',
    normalSelf: '맑은 마음으로 응원하는 영원한 1호팬입니다.',
    survivalTip: '과도한 무조건적 지지는 상대를 죄책감에 빠뜨립니다.',
    bfGuide: '그저 고맙다고 한마디만 해주세요. 그는 당신의 영원한 편이 됩니다.',
  },
};

export const calculateType = (answers: string[], _gender: 'female' | 'male'): string => {
  let D = 0, S = 0, T = 0, E = 0;
  
  answers.forEach((answer) => {
    if (answer === 'D') D++;
    if (answer === 'S') S++;
    if (answer === 'T') T++;
    if (answer === 'E') E++;
  });
  
  // Determine dominant on each axis
  const dsAxis = D >= S ? 'D' : 'S';
  const teAxis = T >= E ? 'T' : 'E';
  
  // Calculate which axis is more dominant (stronger lean)
  const dsStrength = Math.abs(D - S);
  const teStrength = Math.abs(T - E);
  
  // Main hormone is the one with stronger lean, sub is from the other axis
  let main: string, sub: string;
  
  if (teStrength >= dsStrength) {
    // TE axis is more dominant
    main = teAxis;
    sub = dsAxis;
  } else {
    // DS axis is more dominant
    main = dsAxis;
    sub = teAxis;
  }
  
  return `${main}_${sub}`;
};

export const calculateCoordinates = (answers: string[]): { x: number; y: number } => {
  let x = 0; // Positive = D, Negative = S
  let y = 0; // Positive = T, Negative = E
  
  Object.values(answers).forEach((answer) => {
    switch (answer) {
      case 'D': x += 1; break;
      case 'S': x -= 1; break;
      case 'T': y += 1; break;
      case 'E': y -= 1; break;
    }
  });
  
  // Normalize to -1 to 1 range (10 questions total: 5 DS + 5 TE)
  const normalizedX = x / 5;
  const normalizedY = y / 5;
  
  return { x: normalizedX, y: normalizedY };
};

export const getTypeData = (typeCode: string, gender: 'female' | 'male'): HormoneType => {
  const types = gender === 'female' ? femaleTypes : maleTypes;
  return types[typeCode] || types[Object.keys(types)[0]];
};
