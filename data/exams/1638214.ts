import type { ExamData } from '@/types/game'

export const exam1638214: ExamData = {
  id: '1638214',
  title: 'Is It Good to Be Bored?',
  subject: 'English – Module C',
  year: 'Summer 2024 (Moed Bet)',
  text: {
    title: 'IS IT GOOD TO BE BORED?',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Small children often complain that they are bored.',
          },
          {
            id: 'I-s2',
            text: 'When this happens, their parents immediately play with them or give them something to do.',
          },
          {
            id: 'I-s3',
            text: 'However, children are not the only ones who hate to be bored.',
          },
          {
            id: 'I-s4',
            text: 'Nowadays, most people want to spend all their time doing something interesting.',
          },
          {
            id: 'I-s5',
            text: "When they don't have anything interesting to do, they often take out their smartphones and watch a movie or send messages to friends.",
          },
          {
            id: 'I-s6',
            text: 'But is it always a good idea to avoid being bored?',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'New studies show that feeling bored can actually be good for us.',
          },
          {
            id: 'II-s2',
            text: 'In one experiment, for example, scientists tested two groups of people.',
          },
          {
            id: 'II-s3',
            text: 'The people in the first group did a boring activity – they wrote the same word again and again.',
          },
          {
            id: 'II-s4',
            text: 'The people in the second group did something interesting – they played a game on their smartphones.',
          },
          {
            id: 'II-s5',
            text: 'Each group did its activity for five minutes.',
          },
          {
            id: 'II-s6',
            text: 'Then the scientists gave the people in both groups a test to find out how creative they were.',
          },
          {
            id: 'II-s7',
            text: 'The results of the test showed that the people in the first group were more creative.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: '"When I read about this, I wasn\'t surprised," says brain scientist Dr. Jane Crawford.',
          },
          {
            id: 'III-s2',
            text: '"I\'ve heard interviews with famous writers, who explained how they thought of ideas for their books.',
          },
          {
            id: 'III-s3',
            text: 'Many of them said that they got their ideas when they were doing a boring activity, such as washing dishes."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'But why do boring activities help us to be creative?',
          },
          {
            id: 'IV-s2',
            text: '"It\'s because being bored has a positive effect on the brain," explains Crawford.',
          },
          {
            id: 'IV-s3',
            text: '"When we are not doing anything interesting, our brains get some rest.',
          },
          {
            id: 'IV-s4',
            text: 'This makes it much easier for us to get new ideas."',
          },
          {
            id: 'IV-s5',
            text: 'Scientists also discovered that being bored has other benefits.',
          },
          {
            id: 'IV-s6',
            text: 'After people spend time doing something boring, they can concentrate better.',
          },
          {
            id: 'IV-s7',
            text: 'Surprisingly, they can even feel less worried.',
          },
        ],
      },
      {
        id: 'V',
        sentences: [
          {
            id: 'V-s1',
            text: '"Of course, if you want these benefits, you must be willing to feel bored," says Crawford.',
          },
          {
            id: 'V-s2',
            text: '"Many people hate that feeling, but I think we should all try to spend five or ten minutes every day being bored.',
          },
          {
            id: 'V-s3',
            text: 'I\'m sure we\'ll see that it can help us."',
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
      question: 'What does the writer explain in paragraph I?',
      options: [
        'What games parents play with their children.',
        'What people often do when they are bored.',
        'What we tell our friends when we are bored.',
        'Why small children are bored all the time.',
      ],
      correctOption: 1,
      hint: "The paragraph describes a common modern habit. Look for the sentence that describes what most people do when they have nothing interesting to do.",
      points: 8,
    },
    {
      id: 2,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What did scientists learn from the experiment?',
      options: [
        'How being bored can help people.',
        'Why people get bored easily.',
        'How much time people spend on their phones.',
        'Why people want to be creative.',
      ],
      correctOption: 0,
      hint: 'The experiment compared two groups and tested them. The last sentence of the paragraph gives the result. Think about what that result shows about boredom.',
      points: 7,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'In the experiment, who were more creative?',
      questionPrefix: 'The people who did...',
      correctSentenceIds: ['II-s3'],
      hint: "The experiment had two groups. One did something boring and the other did something interesting. The more creative group is the one that did the boring activity. Find the sentence describing what they did.",
      points: 8,
    },
    {
      id: 4,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'According to interviews with writers, what happened when they did a boring activity?',
      correctSentenceIds: ['III-s3'],
      hint: 'Crawford describes what famous writers said in interviews. Look for the sentence that explains what happened to them during a boring activity. The key word is "ideas."',
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'What example of a boring activity did writers give in interviews?',
      correctSentenceIds: ['III-s3'],
      hint: "The writers gave a specific household example of a boring activity. It involves water and cleaning. Look for the sentence that says 'such as.'",
      points: 7,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What does Crawford explain in paragraph IV?',
      options: [
        'Why it is difficult to be creative.',
        'How to study the effects of being bored.',
        'Why people worry about being bored.',
        'How being bored affects the brain.',
      ],
      correctOption: 3,
      hint: "Crawford answers the question at the start of the paragraph. She talks about what happens inside the brain when we are bored. Look for the sentence with 'positive effect.'",
      points: 8,
    },
    {
      id: 7,
      type: 'click-text-multi',
      paragraphId: 'IV',
      instruction: 'Click on TWO sentences in the text.',
      question: 'What benefits can people get from being bored? Give TWO answers from lines 22–23.',
      correctSentenceIds: ['IV-s6', 'IV-s7'],
      requiredSelections: 2,
      hint: "Two sentences near the end of paragraph IV each describe one benefit. Both start with 'they can.' One is about focus, the other is about emotions.",
      points: 16,
    },
    {
      id: 8,
      type: 'multiple-choice',
      paragraphId: 'V',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from Crawford in paragraph V?',
      options: [
        'How she studied people who feel bored.',
        'How people avoid feeling bored.',
        'Why we should spend time being bored.',
        'Why people hate feeling bored.',
      ],
      correctOption: 2,
      hint: "Crawford gives advice in this paragraph. She says 'I think we should all...' and explains a recommendation. What is she encouraging everyone to do?",
      points: 8,
    },
  ],
}
