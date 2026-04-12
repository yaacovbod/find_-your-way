import type { ExamData } from '@/types/game'

export const exam1638213: ExamData = {
  id: '1638213',
  title: 'Should You Listen to Music While You Study?',
  subject: 'English – Module C',
  year: 'Winter 2025',
  text: {
    title: 'SHOULD YOU LISTEN TO MUSIC WHILE YOU STUDY?',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Most evenings, after dinner, Peter Scott goes to his room to do his homework.',
          },
          {
            id: 'I-s2',
            text: 'Before he begins, he turns on his favorite music.',
          },
          {
            id: 'I-s3',
            text: '"I feel much more relaxed when I listen to music, and that makes it easier for me to do my homework," says Peter.',
          },
          {
            id: 'I-s4',
            text: 'However, his parents think that he will concentrate better and get higher grades if he doesn\'t listen to music.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: "But are Peter's parents right?",
          },
          {
            id: 'II-s2',
            text: 'Recently, scientists at Dent College did two experiments to find out if it really is better to study in silence.',
          },
          {
            id: 'II-s3',
            text: 'In the first experiment, they gave two groups of students a difficult text to read.',
          },
          {
            id: 'II-s4',
            text: 'One group read the difficult text in silence.',
          },
          {
            id: 'II-s5',
            text: 'The students in the other group listened to their favorite music while they read the text.',
          },
          {
            id: 'II-s6',
            text: 'Then the scientists gave both groups a test about the text.',
          },
          {
            id: 'II-s7',
            text: 'The students in the first group got much higher scores than the students in the second group.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Then the scientists did a second experiment.',
          },
          {
            id: 'III-s2',
            text: 'It was almost the same as the first one, but this time the students read an easy text.',
          },
          {
            id: 'III-s3',
            text: 'The results were surprising.',
          },
          {
            id: 'III-s4',
            text: 'The students who listened to music got better scores on the test than the ones who read in silence.',
          },
          {
            id: 'III-s5',
            text: '"Music makes us feel relaxed.',
          },
          {
            id: 'III-s6',
            text: 'This helps us concentrate when we do an easy task," says psychologist Dr. Sally Evans.',
          },
          {
            id: 'III-s7',
            text: '"Now psychologists are trying to find out why listening to music doesn\'t help us concentrate when we do a difficult task."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'The scientists at Dent College discovered something else that was surprising.',
          },
          {
            id: 'IV-s2',
            text: 'Only certain types of music helped the students who read the easy texts.',
          },
          {
            id: 'IV-s3',
            text: 'The students got the best scores when they listened to music that had no words.',
          },
          {
            id: 'IV-s4',
            text: '"So kids have a lot to think about before they turn on music and begin to do their homework," says Dr. Evans.',
          },
        ],
      },
    ],
  },
  questions: [
    {
      id: 1,
      type: 'multiple-choice',
      paragraphId: 'I',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn about Peter Scott?',
      options: [
        'Why he does his homework after dinner.',
        'Why he listens to music while he does his homework.',
        'Why he has a lot of homework.',
        "Why his parents help him with his homework.",
      ],
      correctOption: 1,
      hint: 'Peter explains his habit in his own words. He uses the word "relaxed." What does that tell us about why he does it?',
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: "Why do Peter's parents want him to study without listening to music?",
      questionPrefix: 'They think that he will...',
      correctSentenceIds: ['I-s4'],
      hint: "Peter's parents have an opinion that is the opposite of his. Look for the sentence that starts with 'However' — it tells us exactly what they believe will happen.",
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did the scientists at Dent College do the experiments?',
      questionPrefix: 'Because they wanted to...',
      correctSentenceIds: ['II-s2'],
      hint: 'The paragraph opens with a question. The very next sentence explains why the scientists decided to do research. Look for "to find out."',
      points: 8,
    },
    {
      id: 4,
      type: 'multi-select-options',
      paragraphId: 'II',
      instruction: 'Put a ✓ by the TWO correct answers.',
      question: 'What do we learn about the first experiment that the scientists did?',
      options: [
        'i) Why the scientists enjoyed doing it.',
        'ii) What the results were.',
        'iii) How the scientists chose the students.',
        'iv) What the students thought about it.',
        'v) How many groups there were.',
        'vi) How many students were in each group.',
      ],
      correctOptions: [1, 4],
      requiredSelections: 2,
      hint: 'The paragraph describes the experiment clearly. One answer is about the structure of the experiment (groups). The other is about what happened at the end (scores). Look for concrete facts.',
      points: 14,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'How was the second experiment different from the first experiment?',
      questionPrefix: 'In the second experiment, the students...',
      correctSentenceIds: ['III-s2'],
      hint: 'The paragraph says the second experiment was "almost the same" — but something was different. Find the sentence that describes what changed.',
      points: 8,
    },
    {
      id: 6,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'When can listening to music help us concentrate?',
      questionPrefix: 'When we do...',
      correctSentenceIds: ['III-s6'],
      hint: "Dr. Evans explains the connection between music, relaxation, and concentration. Look for the sentence that gives a specific condition — a type of task — when music helps.",
      points: 8,
    },
    {
      id: 7,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'According to Dr. Evans, what do psychologists want to find out?',
      options: [
        'Which tasks are not easy for students to do.',
        'Why music helps us to feel more relaxed.',
        'What types of music people listen to when they work.',
        "Why music doesn't help us concentrate on difficult tasks.",
      ],
      correctOption: 3,
      hint: "Dr. Evans ends the paragraph with a question that scientists are still investigating. Look for 'trying to find out' — that sentence tells you exactly what they want to understand.",
      points: 8,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to lines 23–24, which type of music helped the students get the best scores?',
      questionPrefix: 'Music that...',
      correctSentenceIds: ['IV-s3'],
      hint: 'The paragraph says only certain types of music helped. The next sentence gives a specific detail about what kind of music it was. Look for what the music did NOT have.',
      points: 8,
    },
  ],
}
