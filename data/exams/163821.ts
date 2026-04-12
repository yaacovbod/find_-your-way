import type { ExamData } from '@/types/game'

export const exam163821: ExamData = {
  id: '163821',
  title: "Don't Be Late!",
  subject: 'English – Module C',
  year: 'Summer 2025',
  text: {
    title: "DON'T BE LATE!",
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'When Amy Barnett was a teenager, she was almost always late.',
          },
          {
            id: 'I-s2',
            text: 'She did not come on time for appointments with her doctor, and she usually arrived at school in the middle of the first lesson.',
          },
          {
            id: 'I-s3',
            text: 'Amy tried to be on time, but she found it very difficult.',
          },
          {
            id: 'I-s4',
            text: '"I know so many people with the same difficulty," she says.',
          },
          {
            id: 'I-s5',
            text: '"This is one reason I studied psychology in university.',
          },
          {
            id: 'I-s6',
            text: 'I wanted to find ways to help people like me."',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Amy is now a psychologist, and she gives a popular online course for people who want to stop being late.',
          },
          {
            id: 'II-s2',
            text: '"In my course, I give a lot of advice.',
          },
          {
            id: 'II-s3',
            text: 'For example, I suggest that if people do not want to arrive late, then they should try to arrive early," she says.',
          },
          {
            id: 'II-s4',
            text: '"But some people say that they hate arriving early.',
          },
          {
            id: 'II-s5',
            text: "They say that it's boring to wait to see the doctor or to wait for a bus to arrive.",
          },
          {
            id: 'II-s6',
            text: 'So I tell them to make sure that they have something to do while they wait.',
          },
          {
            id: 'II-s7',
            text: 'For example, they can text their friends or read a book.',
          },
          {
            id: 'II-s8',
            text: 'It is much easier for people to wait if they have something interesting to do."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'In her course, Amy also explains that in many cultures, arriving late is not always a problem.',
          },
          {
            id: 'III-s2',
            text: '"For example, in Brazil and in India, it is acceptable to be late to social events such as birthday parties or family dinners," she says.',
          },
          {
            id: 'III-s3',
            text: '"However, even in these countries, everyone must arrive on time for business meetings.',
          },
          {
            id: 'III-s4',
            text: 'They also must not be late for important appointments."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: "Last year, over 8,000 people took Amy's course.",
          },
          {
            id: 'IV-s2',
            text: '"I\'m very happy that my course is so popular," says Amy.',
          },
          {
            id: 'IV-s3',
            text: '"But I also want the information to be available to people who don\'t like taking online courses.',
          },
          {
            id: 'IV-s4',
            text: "So I'm planning to write a book on the subject.",
          },
          {
            id: 'IV-s5',
            text: 'I just need to find the time to write it."',
          },
        ],
      },
    ],
  },
  questions: [
    {
      id: 1,
      type: 'multi-select-options',
      paragraphId: 'I',
      instruction: 'Put a ✓ by the TWO correct answers.',
      question: 'What do we learn about Amy from paragraph I?',
      options: [
        'i) When she began studying in university.',
        'ii) How she knows so many people.',
        'iii) What was very difficult for her.',
        'iv) How her doctor helped her.',
        'v) Why her doctor was always late.',
        'vi) Where she arrived late when she was a teenager.',
      ],
      correctOptions: [2, 5],
      requiredSelections: 2,
      hint: 'One answer is about a feeling or struggle Amy had. The other is about a specific place where she was late. Read the first two sentences carefully.',
      points: 14,
    },
    {
      id: 2,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: "According to lines 7–9, why don't some people want to follow Amy's advice?",
      options: [
        "Because they don't like arriving early.",
        "Because they don't like going to the doctor.",
        "Because they don't like getting up early.",
        "Because they don't like following advice.",
      ],
      correctOption: 0,
      hint: "Amy says she suggests people try to arrive early. The next sentence tells us exactly what some people say they hate. That word is in the options.",
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: "According to Amy, why don't people like to wait for a bus or for an appointment?",
      questionPrefix: 'Because...',
      correctSentenceIds: ['II-s5'],
      hint: "Amy quotes what people say about waiting. Look for a sentence where people describe how waiting feels to them. The key word is an adjective.",
      points: 8,
    },
    {
      id: 4,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'What can people do if they arrive early for an appointment?',
      correctSentenceIds: ['II-s7'],
      hint: 'Amy gives a specific example of activities people can do while waiting. Look for the sentence that lists two concrete things.',
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'What is ONE country where people often arrive late for social events?',
      correctSentenceIds: ['III-s2'],
      hint: 'Amy gives specific country names as examples. Find the sentence that mentions countries and the types of events where being late is acceptable.',
      points: 8,
    },
    {
      id: 6,
      type: 'click-text-multi',
      paragraphId: 'III',
      instruction: 'Click on TWO sentences in the text.',
      question: 'According to Amy, when must people always arrive on time? Give TWO answers from paragraph III.',
      correctSentenceIds: ['III-s3', 'III-s4'],
      requiredSelections: 2,
      hint: "Amy says that even where lateness is common, there are two situations where being on time is required. Both sentences use the word 'must'.",
      points: 16,
    },
    {
      id: 7,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What does Amy explain in paragraph IV?',
      options: [
        'Why people should take her course.',
        'Why she wants to write a book.',
        'Why her course is so popular.',
        'Why people like taking online courses.',
      ],
      correctOption: 1,
      hint: "The paragraph mentions that her course is popular, but Amy then says 'But I also want...' — the 'but' signals a new idea. What is she planning to do?",
      points: 8,
    },
  ],
}
