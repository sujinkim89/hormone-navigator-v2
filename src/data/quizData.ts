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
  // D vs S (도파민/세로토닌) - 7 questions
  {
    id: 1,
    situation: "💢 [직장] 분노 에너지 처리",
    question: "업무 중 짜증이 치솟아 집중이 안 된다. 이 파괴적인 에너지를 어떻게 다룰 것인가?",
    options: [
      { text: "A. 복수형 자극: 퇴근 후 고강도 운동이나 충동적 소비로 감정을 터뜨린다.", type: 'D' },
      { text: "B. 전략적 휴식: 1시간 동안 모든 알림을 끄고 명상하며 감정을 초기화한다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 2,
    situation: "📱 [연인] 2시간째 카톡 미확인",
    question: "연인에게 연락두절. 평소라면 넘어갈 일에 불안감과 짜증이 동시에 밀려올 때의 행동은?",
    options: [
      { text: "A. 확인 사살: 전화 폭격 + '지금 바로 통화하자'고 요구하여 상대방의 즉각적인 반응을 얻어낸다.", type: 'D' },
      { text: "B. 내적 심리전: 상대가 연락할 때까지 기다리며, 자기계발(강의 시청, 독서) 등 나를 위한 시간을 보낸다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 3,
    situation: "😩 [소비] 극강의 우울감, 보상 심리 발동",
    question: "기분이 바닥을 친다. 평소와 달리, 몸이 가장 격렬하게 원하는 보상은?",
    options: [
      { text: "A. 극단적 자극: 캡사이신 5배 마라탕이나, 충동적인 여행 티켓을 결제한다.", type: 'D' },
      { text: "B. 감각적 위안: 따뜻한 털 담요나 은은한 아로마 향 속에서, 몸이 편안해지는 아이템을 찾는다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 4,
    situation: "😴 [자기 관리] 무기력한 아침, 강제 부팅 시도",
    question: "몸이 납덩이처럼 느껴져 무기력할 때, 이 상태를 이겨내기 위한 방법은?",
    options: [
      { text: "A. 인지적 채찍질: 강력한 커피 + 찬물 세수로 뇌를 강제 각성시키고, 평소보다 더 빨리 움직여 이겨내려 한다.", type: 'D' },
      { text: "B. 시스템 다운: '더 해봐야 비효율'이라 판단하고, 미리 세운 루틴대로 1시간 휴식을 취하며 전략적 절약을 선택한다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 5,
    situation: "💕 [관계] 미묘한 스킨십",
    question: "연인이 포옹을 시도하자, '좋지만 짜증 나는' 감정이 평소와 달리 동시에 든다. 원하는 해결책은?",
    options: [
      { text: "A. 강렬한 확인: 짜증 내다가도, 이내 더 세게 안기며 \"나 사랑하는 거 맞지?\"를 확인 받는다.", type: 'D' },
      { text: "B. 명확한 경계: \"오늘은 손만 잡아줘.\"라며 단호하게 거절하고 편안한 거리감을 유지한다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 6,
    situation: "📊 [커리어] 능력 자책 (회복탄력성)",
    question: "평소와 달리 '나 왜 이렇게 일 못하지?' 자책이 들 때, 가장 빨리 회복하는 방법은?",
    options: [
      { text: "A. 증명형 위로: \"감정은 감정일 뿐.\" 지난 성과표를 확인하며 자신의 능력을 객관적인 데이터로 검증한다.", type: 'D' },
      { text: "B. 정서적 지지: \"중요한 건, 지금 내 마음이 힘들다는 거야.\" 자신의 부족한 모습도 사랑하기 위해 노력한다.", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 7,
    situation: "🥚 [미래] 불안정성 관리",
    question: "뉴스에 난소 건강 기사가 떴다. 평소보다 불안감이 크게 엄습할 때, 이를 통제하는 방식은?",
    options: [
      { text: "A. 계획 통제: \"당장 병원 검사 예약하고, 미래 계획을 점검해야겠어.\"", type: 'D' },
      { text: "B. 감정 공유: \"혹시 나도...?\" 연인이나 친구에게 걱정을 하소연하며 감정을 해소한다.", type: 'S' },
    ],
    axis: 'DS',
  },
  // T vs E (테스토스테론/에스트로겐) - 3 questions
  {
    id: 8,
    situation: "💔 [관계] 해결을 위한 대화",
    question: "연인에게 서운함 폭발. 연인이 \"구체적으로 뭘 잘못했는지 말해줘\"라고 물을 때, 당신의 우선순위는?",
    options: [
      { text: "A. 규칙 제정: \"이 문제의 원인을 찾고, 다음부터 우리가 지킬 규칙을 정하는 게 우선이야.\"", type: 'T' },
      { text: "B. 감정 정화: \"지금은 논리가 중요하지 않아. 내 감정이 얼마나 아픈지 네가 알아주는 게 먼저야.\"", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 9,
    situation: "📝 [직장] 피드백 수용",
    question: "상사에게 업무 보고서의 '논리 부족'에 대해 지적받았다. 평소보다 감정적 타격이 클 때, 당신의 반응은?",
    options: [
      { text: "A. 분석적 수용: 상처도 잠시. 상사의 비판을 객관적인 데이터로 분류한 뒤, 개선 포인트를 받아들인다.", type: 'T' },
      { text: "B. 감정적 타격: 상사의 표정과 말투에 집중하며, '나에게 악감정이 있나?'라는 생각에 사로잡혀 지난 상황을 곱씹는다.", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 10,
    situation: "😢 [자기인식] 감정의 객관화",
    question: "'내가 왜 이렇게 서럽지? 이유를 모르겠어...'라며 눈물이 날 때, 스스로를 보는 시각은?",
    options: [
      { text: "A. 과학적 통제: \"이 서러움은 호르몬의 농락이다. 일시적 감정일 뿐이야.\" (이성적 객관화)", type: 'T' },
      { text: "B. 정서적 수용: \"지금 서럽고 힘든 나도 결국 나다. 이 감정을 회피하지 않고 온전히 받아줘야 해.\" (정서적 수용)", type: 'E' },
    ],
    axis: 'TE',
  },
];

export const maleQuizQuestions: QuizQuestion[] = [
  // D vs S (도파민/세로토닌) - 5 questions
  {
    id: 1,
    situation: "💢 [위기] 이유 없는 짜증 폭격",
    question: "여친: (갑자기) \"아니, 오빠는 숨소리가 왜 이렇게 커? 진짜 거슬려.\"\n\n나: (속으로: '또 시작이다...')",
    options: [
      { text: "A. 맞불 작전: \"야, 너는 안 쉬냐? 말 좀 예쁘게 해라.\" 즉시 받아치며 감정을 쏟아낸다. (전투 모드)", type: 'D' },
      { text: "B. 방어 모드: \"미안. 내가 조용히 할게.\" 납작 엎드리고 자리를 피해버린다. (평화 유지 모드)", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 2,
    situation: "📱 [연락] 4시간째 읽씹 중",
    question: "상황: 여친이 \"기분 안 좋아, 건드리지 마\"라며 4시간째 잠수 중.\n\n나: (불안하고 답답하다)",
    options: [
      { text: "A. 확인 강박: 부재중 전화 5통 + 카톡 10개 \"무슨 일 있어? 왜 안 받아?\" (확인해야 직성 풀림)", type: 'D' },
      { text: "B. 자율 존중: '자나 보다. 깰 때까지 롤이나 해야지.' (그녀의 동굴 시간을 존중하며 대기)", type: 'S' },
    ],
    axis: 'DS',
  },
  {
    id: 3,
    situation: "📅 [데이트] 당일 취소 통보",
    question: "여친: (데이트 1시간 전) \"나 오늘 몸 안 좋아서 못 나가겠어.\"\n\n나: (이미 식당 예약금 냈는데...)",
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
    question: "여친: \"오빠 저번에도 그랬잖아. 3년 전에도 내 생일 때...\"\n\n나: (기억도 안 나는 일이다)",
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
    question: "여친: (식은땀 흘리며) \"배가 끊어질 것 같아...\"\n\n나: (어떻게 해야 하지?)",
    options: [
      { text: "A. 의료진 모드: \"약 있어? 병원 갈까? 내가 약국 다녀올게.\" (해결책 즉시 제시)", type: 'T' },
      { text: "B. 보호자 모드: \"아이고 저런... 많이 아프지? ㅠㅠ\" (배를 문질러주며 고통을 함께 느낌)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 7,
    situation: "😤 [하소연] 직장 상사 욕",
    question: "여친: \"김부장 진짜 미친 거 아냐? 오늘 나한테 @#$%...\" (1시간째 욕하는 중)",
    options: [
      { text: "A. 판사님 모드: \"근데 그건 김부장 입장도 들어봐야 할 것 같은데? 네가 실수한 건 없어?\" (객관적 판단)", type: 'T' },
      { text: "B. 청부업자 모드: \"와 진짜 돌았네! 그 XX 내가 묻어버릴까?\" (무지성 편들기 & 같이 욕하기)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 8,
    situation: "😢 [눈물] 이유 없는 눈물",
    question: "여친: (데이트 중 갑자기 눈물을 뚝뚝 흘린다)\n\n나: (당황스러움)",
    options: [
      { text: "A. 원인 분석: '무슨 일이지? 회사 일인가? 아까 내가 밥을 남겨서인가?' (머릿속으로 원인 데이터 검색)", type: 'T' },
      { text: "B. 감정 전이: '어떡해 ㅠㅠ 울지 마 ㅠㅠ (나도 모르게 눈시울이 붉어짐)' (슬픔이 전염됨)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 9,
    situation: "🍽️ [메뉴] \"아무거나 (근데 다 싫어)\"",
    question: "나: \"뭐 먹을래?\"\n여친: \"아무거나... 근데 밀가루는 싫고 매운 건 속 쓰려.\"",
    options: [
      { text: "A. 데이터 솔루션: \"그럼 샤브샤브 어때? (지도 앱 켜서 평점 검색 & 최적 경로 계산)\" (조건에 맞는 답 도출)", type: 'T' },
      { text: "B. 고통 공감: \"진짜 고르기 힘들겠다 ㅠㅠ 입맛이 없구나... 그냥 카페 가서 쉴까?\" (메뉴보다 상태 케어 우선)", type: 'E' },
    ],
    axis: 'TE',
  },
  {
    id: 10,
    situation: "🪞 [함정] \"나 살찐 것 같지?\"",
    question: "여친: (거울을 보며 시무룩하게) \"나 요즘 붓고 살찐 것 같아...\"",
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
    title: '아테나',
    emoji: '⚔️👑',
    hookLine: '장군기개 테토녀 - 미란다 편집장 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '"결론이 뭔데?" 서론이 길면 영혼까지 탈곡해버리는 인간 작두입니다. 상대방이 눈치 없이 웅얼거리면 차가운 눈빛으로 말을 자르고 "모르면 나가"라는 오라를 풍기며, 내 페이스에 못 따라오는 모든 생명체를 무능한 죄인으로 취급하는 폭군 모드에 진입합니다.',
    heroTrait: '혼돈의 전장을 정리하고 승리로 이끄는 압도적인 지략가이자 천부적인 리더입니다. 남들이 감정에 휘둘려 주저할 때, 당신의 명쾌한 판단력과 추진력은 정체된 세상을 움직이는 유일한 동력이 됩니다.',
    careTip: 'T와 코르티솔이 동시 폭주하여 뇌가 \'전시 상황\'입니다. 마그네슘과 테아닌으로 교감신경을 안정시키고, 뇌에 강제 휴전 협정을 선언할 쿨다운 시간을 반드시 가지세요.',
    partnerTip: '즉시 무릎을 꿇고 결론부터 3초 안에 보고하십시오. 변명은 사형입니다.',
    bestMatch: '메인로드 매니저, 원칙주의 현장감독',
    worstMatch: '슈퍼긍정 제작진, 눈물공감 소품팀',
    refImage: '/type-refs/athena-miranda.png',
    quote: "That's all.",
    diagnosis: '"결론이 뭔데?" 서론이 길면 영혼까지 탈곡해버리는 인간 작두입니다.',
    normalSelf: '혼돈의 전장을 정리하고 승리로 이끄는 압도적인 지략가이자 천부적인 리더입니다.',
    survivalTip: 'T와 코르티솔이 동시 폭주하여 뇌가 \'전시 상황\'입니다. 마그네슘과 테아닌으로 교감신경을 안정시키고 쿨다운 시간을 가지세요.',
    bfGuide: '즉시 무릎을 꿇고 결론부터 3초 안에 보고하십시오. 변명은 사형입니다.',
  },
  S_T: {
    code: 'S_T',
    title: '은둔귀족',
    emoji: '🏰🌙',
    hookLine: '심연의 현자 테토녀 - 말레피센트 재질',
    color: 'from-violet to-deep-purple',
    villainTrait: '"내 영역에서 꺼져." 가시덤불을 치고 스스로를 유폐시키는 어둠의 지배자입니다. 호르몬이 바닥나면 모든 인간의 목소리가 소음으로 들려 "말 걸면 저주한다"는 눈빛으로 상대를 얼려버리며, 다정한 걱정조차 침범으로 간주해 차갑게 쳐내는 냉혈한이 됩니다.',
    heroTrait: '세상의 소음을 차단하고 본질을 꿰뚫어 보는 고고한 통찰력을 가졌습니다. 당신의 침묵은 무관심이 아니라 가장 완벽한 답을 찾기 위해 자기 내면의 심연으로 파고드는 숭고한 숙고의 시간입니다.',
    careTip: '에스트로겐 하락으로 통증 역치가 낮아져 모든 자극이 쓰라리게 느껴지는 상태입니다. 비타민 D와 오메가3로 신경계를 보호하고, \'안전한 어둠\' 속에서 에너지를 보존하세요.',
    partnerTip: '동굴 입구 근처에도 가지 마십시오. "무슨 일 있어?"는 자폭 버튼입니다. 조용히 문틈으로 간식만 밀어 넣고 철수하는 것이 최고의 사랑입니다.',
    bestMatch: '베테랑 조명감독, 자유영혼 스턴트팀',
    worstMatch: '슈퍼긍정 제작진, 메인로드 매니저',
    diagnosis: '"내 영역에서 꺼져." 가시덤불을 치고 스스로를 유폐시키는 어둠의 지배자입니다.',
    normalSelf: '세상의 소음을 차단하고 본질을 꿰뚫어 보는 고고한 통찰력을 가졌습니다.',
    survivalTip: '비타민 D와 오메가3로 신경계를 보호하고, \'안전한 어둠\' 속에서 에너지를 보존하세요.',
    bfGuide: '동굴 입구 근처에도 가지 마십시오. 조용히 문틈으로 간식만 밀어 넣고 철수하세요.',
  },
  D_T: {
    code: 'D_T',
    title: '오뜨꾸뛰르',
    emoji: '👑✨',
    hookLine: '무결점 중전 테토녀 - 천서진 재질',
    color: 'from-secondary to-violet',
    villainTrait: '"내 세상에 오점은 허용 안 해." 질서가 깨지는 꼴을 못 보는 피곤한 완벽주의자입니다. 방바닥의 머리카락 한 올, 약속 시간 1분의 오차에 발광하며 주변 사람들을 쥐 잡듯 잡아 상대의 기를 완전히 죽여놓는 히스테릭 여왕입니다.',
    heroTrait: '어떤 풍파가 와도 삶의 기강을 잡는 위대한 설계자입니다. 당신의 꼼꼼함과 책임감은 불확실한 미래를 대비하는 가장 강력한 방패이며, 주변 사람들은 당신 덕분에 안전함과 질서를 누리게 됩니다.',
    careTip: 'FSH와 LH의 불균형으로 뇌가 극도의 긴장 상태입니다. 이노시톨로 호르몬 조절을 돕고, \'완벽\'보다 \'무사\'에 집중하여 뇌의 피로도를 낮추는 연습이 필요합니다.',
    partnerTip: '변명 대신 "시정하겠습니다!"라고 각 잡고 외치며 군대식 의전을 수행하십시오. 그녀의 권위를 인정하고 비위를 맞추는 것만이 가정이 평화로워지는 지름길입니다.',
    bestMatch: '원칙주의 현장감독, 베테랑 조명감독',
    worstMatch: '자유영혼 스턴트팀, 슈퍼긍정 제작진',
    diagnosis: '"내 세상에 오점은 허용 안 해." 질서가 깨지는 꼴을 못 보는 완벽주의자입니다.',
    normalSelf: '어떤 풍파가 와도 삶의 기강을 잡는 위대한 설계자입니다.',
    survivalTip: '이노시톨로 호르몬 조절을 돕고, \'완벽\'보다 \'무사\'에 집중하세요.',
    bfGuide: '변명 대신 "시정하겠습니다!"라고 각 잡고 외치며 군대식 의전을 수행하세요.',
  },
  T_S: {
    code: 'T_S',
    title: '아웃사이더',
    emoji: '🌑🐺',
    hookLine: '고고한 늑대 테토녀',
    color: 'from-muted to-secondary',
    villainTrait: '"So?" 한마디로 파트너의 영혼을 가출하게 만드는 정서적 냉동고입니다. 애착 호르몬이 증발하면 다정함이 징그럽게 느껴져, 남친의 꽃 선물에도 "식물이 죽어가는 걸 왜 보라는 거야?"라며 찬물을 끼얹는 냉소주의자입니다.',
    heroTrait: '타인의 시선이나 가면을 거부하고 오직 나만의 진실을 쫓는 독보적인 독립 영혼입니다. 당신의 차가운 지성은 거짓과 가식을 걸러내는 거름망이 되며, 삭막한 세상에서 가장 순수한 이정표가 됩니다.',
    careTip: '옥시토신 분비가 일시 중단되어 타인과의 연결을 \'스트레스\'로 인식합니다. 억지로 다정해지려 애쓰지 마세요. 혼자만의 시간을 통해 뇌의 과열을 식히는 것이 최우선입니다.',
    partnerTip: '재롱떨지 마십시오. 투명인간 취급하고 당신도 당신만의 독고다이 길을 가십시오. 아이러니하게도 당신이 무관심할수록 그녀는 당신을 흥미로운 관찰 대상으로 인식할 것입니다.',
    bestMatch: '자유영혼 스턴트팀, 무덤덤 보안팀',
    worstMatch: '슈퍼긍정 제작진, 눈물공감 소품팀',
    diagnosis: '"So?" 한마디로 파트너의 영혼을 가출하게 만드는 정서적 냉동고입니다.',
    normalSelf: '타인의 시선이나 가면을 거부하고 오직 나만의 진실을 쫓는 독보적인 독립 영혼입니다.',
    survivalTip: '억지로 다정해지려 애쓰지 마세요. 혼자만의 시간을 통해 뇌의 과열을 식히세요.',
    bfGuide: '재롱떨지 마십시오. 투명인간 취급하고 독고다이 길을 가세요.',
  },
  S_E: {
    code: 'S_E',
    title: '아티스트',
    emoji: '💎🎨',
    hookLine: '유리공예 뮤즈 에겐녀 - 징크스 재질',
    color: 'from-hot-pink to-rose',
    villainTrait: '"나 사랑해? 안 버릴 거지?"라며 끊임없이 관계에 수류탄을 던지는 자폭형 빌런입니다. 아주 작은 말투 변화도 이별의 징조로 해석해 급발진하고, 울고불고 매달리다 다 때려 부수는 감정 테러리스트입니다.',
    heroTrait: '나노 단위의 감정 흐름을 캐치해 타인의 영혼을 위로하는 공감 요정입니다. 당신의 예민함은 세상을 수만 가지 색으로 느끼는 남다른 감수성의 다른 이름이며 일상을 영화 같은 감동으로 바꿉니다.',
    careTip: '프로게스테론의 급격한 변동으로 뇌의 불안 스위치가 고장 났습니다. 세로토닌 합성을 돕는 영양소와 충분한 당 섭취로 뇌의 재난 경보를 꺼주어야 합니다.',
    partnerTip: '논리적으로 따지지 마십시오. 모든 지능을 \'찬양\'에 쏟아부으십시오. 그녀가 세상을 부수고 있어도 "자기는 부술 때도 예술이야!"라고 외치는 앵무새가 되어야 합니다.',
    bestMatch: '슈퍼긍정 제작진, 눈물공감 소품팀',
    worstMatch: '원칙주의 현장감독, 베테랑 조명감독',
    diagnosis: '"나 사랑해? 안 버릴 거지?" 끊임없이 관계에 수류탄을 던지는 자폭형 빌런입니다.',
    normalSelf: '나노 단위의 감정 흐름을 캐치해 타인의 영혼을 위로하는 공감 요정입니다.',
    survivalTip: '세로토닌 합성을 돕는 영양소와 충분한 당 섭취로 뇌의 재난 경보를 꺼주세요.',
    bfGuide: '논리적으로 따지지 마세요. "자기는 부술 때도 예술이야!"라고 외치세요.',
  },
  E_D: {
    code: 'E_D',
    title: '힐링디바',
    emoji: '☀️🛋️',
    hookLine: '로코코 마님 에겐녀 - 우르슬라 재질',
    color: 'from-muted to-violet',
    villainTrait: '"물 떠와라, 밥 차려라." 중력이 10배가 된 듯 침대와 한 몸이 되어 남친을 머슴처럼 부려먹는 나태 빌런입니다. 손가락 하나 까딱 안 하면서 잔소리를 퍼붓고, 안 들어주면 "사랑이 식었네"라며 가스라이팅을 시전합니다.',
    heroTrait: '존재만으로 사람들을 무장 해제시키는 풍요로운 대지의 여신입니다. 당신의 여유로운 템포는 바쁘게 뛰어가느라 소중한 것을 놓치는 사람들에게 \'진정한 쉼\'이 무엇인지 일깨워주는 안식처가 됩니다.',
    careTip: '프로게스테론이 정점을 찍으며 몸에 수분을 가두고 대사를 늦추고 있습니다. 억지로 움직이려 하지 말고 림프 순환을 돕는 가벼운 스트레칭과 죄책감 없는 휴식에만 집중하세요.',
    partnerTip: '"운동해" 소리는 죽고 싶을 때나 하십시오. 그녀의 다리가 되어 맛집 메뉴를 대령하고 발바닥을 주무르는 충실한 하인이 되면 그녀는 세상에서 가장 다정한 마님이 되어줄 것입니다.',
    bestMatch: '섬세살뜰 케이터링팀, 무덤덤 보안팀',
    worstMatch: '원칙주의 현장감독, 메인로드 매니저',
    diagnosis: '"물 떠와라, 밥 차려라." 침대와 한 몸이 되어 남친을 머슴처럼 부려먹는 나태 빌런입니다.',
    normalSelf: '존재만으로 사람들을 무장 해제시키는 풍요로운 대지의 여신입니다.',
    survivalTip: '림프 순환을 돕는 가벼운 스트레칭과 죄책감 없는 휴식에만 집중하세요.',
    bfGuide: '"운동해" 소리는 금지. 맛집 메뉴를 대령하고 발바닥을 주물러 주세요.',
  },
  D_E: {
    code: 'D_E',
    title: '메소드배우',
    emoji: '🎭💥',
    hookLine: '프리마돈나 에겐녀 - 할리 퀸 재질',
    color: 'from-rose to-violet',
    villainTrait: '웃다가 1초 만에 통곡하고 화내다 갑자기 키스하는 예측 불가 빌런입니다. 종잡을 수 없는 텐션으로 파트너의 멘탈을 롤러코스터에 태우며 지루함을 참지 못해 멀쩡한 현장을 난장판으로 만듭니다.',
    heroTrait: '지루한 세상에 다채로운 색깔을 입히고 활력을 불어넣는 독보적인 에너지 뱅크입니다. 당신의 투명하고 솔직한 감정 표현은 가식적인 관계에 환멸을 느낀 사람들에게 신선한 카타르시스를 줍니다.',
    careTip: '에스트로겐과 도파민이 널뛰기 중입니다. 감정의 파도를 막으려 하지 말고 흐름을 인정하되, 뇌 소모를 막아줄 비타민 B군을 보충하세요. 변덕은 뇌가 재미를 찾는 전략입니다.',
    partnerTip: '당황하지 마십시오. 그녀의 롤러코스터에 안전바 꽉 잡고 같이 소리 지르며 즐기십시오. 그녀가 미친 짓을 하면 "역시 내 여주인공!"이라며 엄지를 치켜세우는 똘끼가 필요합니다.',
    bestMatch: '무덤덤 보안팀, 슈퍼긍정 제작진',
    worstMatch: '원칙주의 현장감독, 베테랑 조명감독',
    diagnosis: '웃다가 1초 만에 통곡하고 화내다 갑자기 키스하는 예측 불가 빌런입니다.',
    normalSelf: '지루한 세상에 다채로운 색깔을 입히고 활력을 불어넣는 독보적인 에너지 뱅크입니다.',
    survivalTip: '뇌 소모를 막아줄 비타민 B군을 보충하세요. 변덕은 뇌가 재미를 찾는 전략입니다.',
    bfGuide: '"역시 내 여주인공!"이라며 엄지를 치켜세우는 똘끼가 필요합니다.',
  },
  E_S: {
    code: 'E_S',
    title: '비련여주',
    emoji: '🕯️💧',
    hookLine: '자애로운 사제 에겐녀 - 스칼렛 위치 재질',
    color: 'from-hot-pink to-violet',
    villainTrait: '"넌 다 가졌지만... 난 다 잃었어!" 온 세상 슬픔을 독점한 듯 오열하며 상대를 가해자로 만드는 오열 여왕입니다. 자신의 슬픔에 취해 주변의 숨통을 조이며 죄책감의 늪에 빠뜨리는 서글픈 폭군입니다.',
    heroTrait: '타인의 아픔을 내 일처럼 아파해주고 진심으로 위로하는 세상에서 가장 따뜻한 인류애의 상징입니다. 당신의 깊은 감수성은 삭막한 세상에 온기를 전하는 거룩한 난로와 같습니다.',
    careTip: '에스트로겐 수치 급락으로 마음의 피부가 벗겨진 것처럼 예민한 상태입니다. 타인을 챙기기보다 당신 자신의 마음 피부를 다시 단단하게 할 자가 치유와 밸런스 케어에 모든 에너지를 쏟으십시오.',
    partnerTip: '논리는 쓰레기통에 던지십시오. 닥치고 새 휴지를 대령하며 같이 오열하십시오. 그녀의 슬픔이 지금 우주 전체의 붕괴보다 심각한 사건임을 온 몸으로 공감해야 합니다.',
    bestMatch: '눈물공감 소품팀, 섬세살뜰 케이터링팀',
    worstMatch: '메인로드 매니저, 자유영혼 스턴트팀',
    diagnosis: '"넌 다 가졌지만... 난 다 잃었어!" 온 세상 슬픔을 독점한 듯 오열하는 오열 여왕입니다.',
    normalSelf: '타인의 아픔을 내 일처럼 아파해주고 진심으로 위로하는 세상에서 가장 따뜻한 인류애의 상징입니다.',
    survivalTip: '타인을 챙기기보다 당신 자신의 마음 피부를 단단하게 할 자가 치유에 집중하세요.',
    bfGuide: '논리는 쓰레기통에 던지고, 닥치고 새 휴지를 대령하며 같이 오열하세요.',
  },
};

// Male types - 8 types
export const maleTypes: Record<string, HormoneType> = {
  D_T: {
    code: 'D_T',
    title: '원칙주의 현장감독',
    emoji: '🎬📋',
    hookLine: '철두철미 테토남',
    color: 'from-violet to-deep-purple',
    villainTrait: '울고 있는 여주에게 팩트 체크와 논리적 지적질을 하다가 뺨 맞기 십상입니다.',
    heroTrait: '그녀의 계획을 0.1초 오차 없이 수행하는 \'인간 큐시트\'. 팩트와 질서로 안심시키는 이성적인 든든함. 여주가 흔들릴 때 질서의 기둥이 되어줍니다.',
    careTip: '감정이 아닌 해결책에 집중하는 습관을 잠시 내려놓으세요.',
    partnerTip: '그녀가 감정적일 때는 논리가 아닌 공감으로 다가가세요.',
    bestMatch: '오뜨꾸뛰르',
    worstMatch: '메소드배우',
    diagnosis: '울고 있는 여주에게 팩트 체크와 논리적 지적질을 합니다.',
    normalSelf: '그녀의 계획을 0.1초 오차 없이 수행하는 인간 큐시트입니다.',
    survivalTip: '감정이 아닌 해결책에 집중하는 습관을 잠시 내려놓으세요.',
    bfGuide: '',
  },
  T_D: {
    code: 'T_D',
    title: '자유영혼 스턴트팀',
    emoji: '🏍️🔥',
    hookLine: '승부사 테토남',
    color: 'from-hot-pink to-rose',
    villainTrait: '여주가 아픈데 "나 오늘 하체 하는 날이라 헬스장 가야 해"라며 진짜 가버리는 무심함.',
    heroTrait: '독립성과 자기주장이 강한 고독한 실력자. 그녀의 예민함에 휩쓸리지 않는 강철 멘탈의 쿨가이. 서로 구속하지 않는 \'쿨한 전우애\'와 팽팽한 텐션의 밀당.',
    careTip: '무심함이 배려 없음으로 보일 수 있어요. 가끔은 일정을 조정해주세요.',
    partnerTip: '쿨함과 무관심은 다릅니다. 그녀가 힘들 때는 함께 있어주세요.',
    bestMatch: '아웃사이더',
    worstMatch: '아티스트',
    diagnosis: '"나 오늘 하체 하는 날이라 헬스장 가야 해"라며 진짜 가버리는 무심함.',
    normalSelf: '독립성과 자기주장이 강한 고독한 실력자입니다.',
    survivalTip: '무심함이 배려 없음으로 보일 수 있어요. 가끔은 일정을 조정해주세요.',
    bfGuide: '',
  },
  S_T: {
    code: 'S_T',
    title: '베테랑 조명감독',
    emoji: '💡🎯',
    hookLine: '철벽방어 테토남',
    color: 'from-muted to-secondary',
    villainTrait: '너무 멀리서 지켜보기만 하다가 여주가 "나한테 관심 없지?"라고 묻게 만드는 방관자적 태도.',
    heroTrait: '멀리서 관찰하며 최적의 거리감을 세팅하는 지략가. 보이지 않는 보호의 고수. 침묵과 고독을 배려하는 세련되고 묵묵한 케어.',
    careTip: '적당한 거리감도 좋지만, 가끔은 적극적으로 다가가세요.',
    partnerTip: '그녀가 혼자 있고 싶어할 때 완벽한 파트너가 됩니다.',
    bestMatch: '은둔귀족',
    worstMatch: '비련여주',
    diagnosis: '너무 멀리서 지켜보기만 해서 "나한테 관심 없지?"라는 말을 듣습니다.',
    normalSelf: '멀리서 관찰하며 최적의 거리감을 세팅하는 지략가입니다.',
    survivalTip: '적당한 거리감도 좋지만, 가끔은 적극적으로 다가가세요.',
    bfGuide: '',
  },
  T_S: {
    code: 'T_S',
    title: '무덤덤 보안팀',
    emoji: '🛡️🪨',
    hookLine: '무덤덤 테토남',
    color: 'from-secondary to-violet',
    villainTrait: '심각한 고민 상담 중에 로봇처럼 고개만 까딱거려 "지금 벽이랑 얘기해?"라는 분노 유발.',
    heroTrait: '날뛰든 울든 무표정으로 현장을 지키는 바위 같은 가드. 롤러코스터 레일의 안전바. 어떤 텐션 변화에도 흔들리지 않는 절대적인 안정감 제공.',
    careTip: '무표정이 무관심으로 보일 수 있어요. 리액션을 의식적으로 보여주세요.',
    partnerTip: '감정 기복이 심한 그녀에게 안정적인 닻이 되어줍니다.',
    bestMatch: '메소드배우',
    worstMatch: '아티스트',
    diagnosis: '심각한 고민 상담 중에 로봇처럼 고개만 까딱거립니다.',
    normalSelf: '어떤 텐션 변화에도 흔들리지 않는 바위 같은 안정감을 제공합니다.',
    survivalTip: '무표정이 무관심으로 보일 수 있어요. 리액션을 의식적으로 보여주세요.',
    bfGuide: '',
  },
  E_D: {
    code: 'E_D',
    title: '슈퍼긍정 제작진',
    emoji: '📣✨',
    hookLine: '햇살가득 에겐남',
    color: 'from-warning-yellow to-accent',
    villainTrait: '여주가 진지하게 슬퍼하는데 눈치 없이 싱글벙글 웃다가 역효과를 내는 분위기 파악 미숙.',
    heroTrait: '세상이 무너져도 "예술입니다!" 외치는 무한 긍정 슬레이트 맨. 칭찬을 먹고 사는 인간 에너지 드링크. 여주의 바닥난 자존감을 풀로 채워주고 웃게 만드는 햇살 에너지.',
    careTip: '긍정도 TPO가 필요해요. 그녀가 슬플 때는 함께 공감해주세요.',
    partnerTip: '자존감이 바닥난 그녀에게 최고의 치료제가 됩니다.',
    bestMatch: '아티스트',
    worstMatch: '아웃사이더',
    diagnosis: '여주가 진지하게 슬퍼하는데 눈치 없이 싱글벙글 웃습니다.',
    normalSelf: '무한 긍정으로 여주의 자존감을 채워주는 인간 에너지 드링크입니다.',
    survivalTip: '긍정도 TPO가 필요해요. 그녀가 슬플 때는 함께 공감해주세요.',
    bfGuide: '',
  },
  D_E: {
    code: 'D_E',
    title: '메인로드 매니저',
    emoji: '🚐💨',
    hookLine: '눈치백단 에겐남',
    color: 'from-rose to-violet',
    villainTrait: '너무 완벽히 세팅해주려다 여주가 감정을 소화할 틈을 안 줘서 오히려 질리게 함.',
    heroTrait: '숨소리만으로 기분을 파악해 선제 대응하는 센스의 달인. 위기 관리의 천재 보좌관. \'말하지 않아도 아는\' 환상의 티키타카와 효율적인 서포트.',
    careTip: '때로는 그녀가 스스로 감정을 처리할 시간을 주세요.',
    partnerTip: '직설적인 그녀와 최고의 호흡을 자랑합니다.',
    bestMatch: '아테나',
    worstMatch: '힐링디바',
    diagnosis: '너무 완벽히 세팅해주려다 여주가 감정을 소화할 틈을 주지 않습니다.',
    normalSelf: '숨소리만으로 기분을 파악해 선제 대응하는 센스의 달인입니다.',
    survivalTip: '때로는 그녀가 스스로 감정을 처리할 시간을 주세요.',
    bfGuide: '',
  },
  E_S: {
    code: 'E_S',
    title: '섬세살뜰 케이터링팀',
    emoji: '🍱💕',
    hookLine: '섬세살뜰 에겐남',
    color: 'from-hot-pink to-rose',
    villainTrait: '다이어트 중인 여주 옆에서 "한 입만 먹어봐" 유혹해 다이어트 방해 빌런 됨.',
    heroTrait: '무기력함과 짜증을 헌신적인 맛집 공수와 수발로 승화시키는 생활 밀착형 헌신남. 엄마 같은 파트너. 생리적 고통을 가장 잘 이해하고 신체적 안락함을 제공하는 헌신.',
    careTip: '케어도 과하면 부담이 됩니다. 그녀의 의사를 먼저 물어보세요.',
    partnerTip: '편안함을 원하는 그녀에게 최고의 안식처가 됩니다.',
    bestMatch: '힐링디바',
    worstMatch: '아테나',
    diagnosis: '다이어트 중인 여주 옆에서 "한 입만 먹어봐" 유혹합니다.',
    normalSelf: '무기력함을 헌신적인 맛집 공수와 수발로 승화시키는 생활 밀착형 헌신남입니다.',
    survivalTip: '케어도 과하면 부담이 됩니다. 그녀의 의사를 먼저 물어보세요.',
    bfGuide: '',
  },
  S_E: {
    code: 'S_E',
    title: '눈물공감 소품팀',
    emoji: '🧵💧',
    hookLine: '눈물공감 에겐남',
    color: 'from-violet to-deep-purple',
    villainTrait: '여주를 달래야 할 때 본인이 더 대성통곡해서 여주가 남자를 달래게 만드는 주객전도 상황.',
    heroTrait: '그녀가 울면 자기가 더 서럽게 우는 감정 동기화 전문가. 모든 슬픔을 공유하는 영혼의 단짝. "우리는 한 팀이야"라는 강렬한 정서적 연결감과 무조건적인 편 들어주기.',
    careTip: '공감도 좋지만, 그녀를 달랠 여유도 남겨두세요.',
    partnerTip: '깊은 감정적 연결을 원하는 그녀에게 최고의 파트너입니다.',
    bestMatch: '비련여주',
    worstMatch: '아테나',
    diagnosis: '여주를 달래야 할 때 본인이 더 대성통곡해서 주객전도됩니다.',
    normalSelf: '그녀가 울면 자기가 더 서럽게 우는 감정 동기화 전문가입니다.',
    survivalTip: '공감도 좋지만, 그녀를 달랠 여유도 남겨두세요.',
    bfGuide: '',
  },
};

export const calculateType = (answers: string[], gender: 'female' | 'male'): string => {
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
