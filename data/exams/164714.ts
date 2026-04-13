import type { ExamData } from '@/types/game'

export const exam164714: ExamData = {
  id: '164714',
  title: 'Learning Languages on Your Smartphone',
  subject: 'English – Module E',
  year: 'Summer 2024 – Moed B',
  text: {
    title: 'LEARNING LANGUAGES ON YOUR SMARTPHONE',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'How do you spend your time while waiting for a bus or standing in line at the supermarket?',
          },
          {
            id: 'I-s2',
            text: 'Maybe you call a friend on your smartphone.',
          },
          {
            id: 'I-s3',
            text: 'But there is another fun way to fill those empty minutes – you could use your phone to learn a foreign language.',
          },
          {
            id: 'I-s4',
            text: 'Today, there is a large variety of apps for learning languages.',
          },
          {
            id: 'I-s5',
            text: 'However, the most popular one is Duolingo – a free app that was created by the brilliant computer scientist Luis von Ahn.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Luis was born in 1978 in Guatemala, a country in Central America where the only language taught in public schools is Spanish.',
          },
          {
            id: 'II-s2',
            text: 'Unlike most parents in Guatemala, Luis\'s parents were wealthy enough to send him to an expensive private school.',
          },
          {
            id: 'II-s3',
            text: 'There he learned to speak, read, and write excellent English, and also studied high-level math and computer science.',
          },
          {
            id: 'II-s4',
            text: 'After high school, he went on to study at a top American university.',
          },
          {
            id: 'II-s4b',
            text: 'He then began a great career in computer science.',
          },
          {
            id: 'II-s5',
            text: 'In many interviews, Luis said that his high-school education and knowledge of English gave him those wonderful opportunities.',
          },
          {
            id: 'II-s6',
            text: 'He wanted people to have similar opportunities even if they could not afford to pay for a good education.',
          },
          {
            id: 'II-s7',
            text: 'This, he thought, could help them improve their lives.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Luis believed that the solution could be smartphone apps that provide free lessons in English, math, and other subjects.',
          },
          {
            id: 'III-s2',
            text: 'In 2009, he and his student Severin Hacker started developing an app that would teach English.',
          },
          {
            id: 'III-s3',
            text: 'Three years later, they launched Duolingo.',
          },
          {
            id: 'III-s4',
            text: 'At that stage, in addition to English, the app taught three other languages – French, Spanish, and German.',
          },
          {
            id: 'III-s5',
            text: 'Today it offers 40 different languages, but most users learn English.',
          },
          {
            id: 'III-s6',
            text: 'Last year, Duolingo was used by about 500 million people, and most of them were 18 to 34 years old.',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'Even though Duolingo is free, it generates an enormous amount of money every year.',
          },
          {
            id: 'IV-s2',
            text: 'Most of the money comes from companies that pay for their ads to appear at the end of each lesson.',
          },
          {
            id: 'IV-s3',
            text: 'The rest comes from people who prefer to pay a fee to stop seeing the ads.',
          },
          {
            id: 'IV-s4',
            text: 'With this income, Luis has covered the costs of the app.',
          },
          {
            id: 'IV-s5',
            text: 'The money has also enabled him to develop two more free educational apps – one that teaches basic math and another that teaches music.',
          },
          {
            id: 'IV-s6',
            text: 'Eventually, he hopes to provide even more educational apps to adults all over the world.',
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
      question: 'What are we told in paragraph I about Duolingo?',
      options: [
        'When it was invented.',
        'How it got its name.',
        'Who invented it.',
        'Why it is free.',
      ],
      correctOption: 2,
      hint: 'The last sentence of paragraph I introduces Duolingo and gives one specific piece of information about it. What is that information?',
      points: 7,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to lines 1–2, how might you keep busy when standing in line?',
      questionPrefix: 'By',
      correctSentenceIds: ['I-s2'],
      hint: 'Lines 1–2 include a question and then one suggestion for how to pass the time. Find the sentence that gives that suggestion.',
      points: 8,
    },
    {
      id: 3,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from lines 6–8?',
      options: [
        'How Luis\'s parents helped him.',
        'Why public schools in Guatemala don\'t teach English.',
        'When Luis\'s family came to Guatemala.',
        'Why computer science is a popular subject at university.',
      ],
      correctOption: 0,
      hint: 'Lines 6–8 describe what Luis\'s parents did that was different from most parents in Guatemala. Which answer option matches that action?',
      points: 7,
    },
    {
      id: 4,
      type: 'click-text-multi',
      paragraphId: 'II',
      instruction: 'Click on TWO sentences in the text.',
      question: 'After high school, Luis had "wonderful opportunities." What were those opportunities? Give TWO answers from paragraph II.',
      correctSentenceIds: ['II-s4', 'II-s4b'],
      requiredSelections: 2,
      hint: 'Two consecutive sentences in paragraph II describe what Luis did after high school – one about his studies and one about his career. Find and click both.',
      points: 16,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did Luis want people to have opportunities like the ones he had?',
      questionPrefix: 'So that they could',
      correctSentenceIds: ['II-s7'],
      hint: 'Luis\'s motivation is stated at the end of paragraph II. Find the short sentence that explains what he believed these opportunities could do for people.',
      points: 8,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from lines 14–16 about Duolingo?',
      options: [
        'How it teaches languages.',
        'On which smartphones it works best.',
        'Why Luis needed help in developing it.',
        'How long it took to develop.',
      ],
      correctOption: 3,
      hint: 'Lines 14–16 give the start date of development and the year Duolingo launched. What can you calculate from those two dates?',
      points: 8,
    },
    {
      id: 7,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'What has Luis done with the income from Duolingo? Give ONE answer from paragraph IV.',
      questionPrefix: 'He',
      correctSentenceIds: ['IV-s4', 'IV-s5'],
      hint: 'Paragraph IV mentions two things Luis has done with the money. Either the sentence about covering costs or the sentence about new apps is a valid answer.',
      points: 8,
    },
    {
      id: 8,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What are we told in paragraph IV?',
      options: [
        'Which companies usually put ads on Duolingo.',
        'What Luis wants to do in the future.',
        'Why people like the ads on Duolingo.',
        'Why some people prefer to use other apps.',
      ],
      correctOption: 1,
      hint: 'The last sentence of paragraph IV mentions what Luis "eventually hopes" for. Which answer option matches that future plan?',
      points: 8,
    },
  ],
}
