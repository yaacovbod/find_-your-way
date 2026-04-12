import type { ExamData } from '@/types/game'

export const exam1638216: ExamData = {
  id: '1638216',
  title: 'The Amazing Memory of Jill Price',
  subject: 'English – Module C',
  year: 'Winter 2024',
  text: {
    title: 'THE AMAZING MEMORY OF JILL PRICE',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Do you remember what you did on May 4th, 2015?',
          },
          {
            id: 'I-s2',
            text: 'What about on November 13th, 2022?',
          },
          {
            id: 'I-s3',
            text: "Most people probably don't remember, unless it was their birthday or some other special occasion.",
          },
          {
            id: 'I-s4',
            text: 'However, a few people can remember exactly what they did on every day of their lives.',
          },
          {
            id: 'I-s5',
            text: 'Jill Price from California, USA, is one of these people.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Jill, who is now 60 years old, easily remembers what she did on every day of her life since she was 14 years old.',
          },
          {
            id: 'II-s2',
            text: 'She also remembers everything she saw on the news.',
          },
          {
            id: 'II-s3',
            text: 'However, this does not make her happy.',
          },
          {
            id: 'II-s4',
            text: 'First of all, it makes her very tired.',
          },
          {
            id: 'II-s5',
            text: 'In addition, some of her memories are of sad events that she wishes she could forget.',
          },
          {
            id: 'II-s6',
            text: 'About 20 years ago, Jill decided that she needed to find a way to stop remembering so much.',
          },
          {
            id: 'II-s7',
            text: 'She sent an email describing her problem to Dr. James McGaugh, a famous brain scientist.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Dr. McGaugh invited Jill to his office and tested her memory.',
          },
          {
            id: 'III-s2',
            text: 'In his office, he had a large book with a list of all the important things that were in the news on each day of the 20th century.',
          },
          {
            id: 'III-s3',
            text: 'He chose a few dates between 1980 and 2000 and asked Jill what happened in the news on those days.',
          },
          {
            id: 'III-s4',
            text: 'To his surprise, Jill knew all the answers.',
          },
          {
            id: 'III-s5',
            text: 'One time, she said something different from what was in the book.',
          },
          {
            id: 'III-s6',
            text: 'Dr. McGaugh checked the information and discovered something amazing.',
          },
          {
            id: 'III-s7',
            text: 'Jill was right and the book was wrong!',
          },
          {
            id: 'III-s8',
            text: 'Dr. McGaugh did not understand how it was possible to remember so much.',
          },
          {
            id: 'III-s9',
            text: 'He asked Jill to help him do research on her special ability.',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'Jill has worked with Dr. McGaugh for many years.',
          },
          {
            id: 'IV-s2',
            text: "He discovered that she doesn't remember many things she learned in school.",
          },
          {
            id: 'IV-s3',
            text: 'For example, she forgot facts she learned in history lessons.',
          },
          {
            id: 'IV-s4',
            text: "Jill's strongest memories are about her daily life, but it is not clear how she remembers all the details.",
          },
          {
            id: 'IV-s5',
            text: 'Dr. McGaugh is still trying to find out why Jill cannot forget anything that happens to her.',
          },
          {
            id: 'IV-s6',
            text: 'He believes that forgetting is important because it helps us have a happier life.',
          },
          {
            id: 'IV-s7',
            text: 'Jill agrees.',
          },
          {
            id: 'IV-s8',
            text: '"I wish I could forget things," she says.',
          },
          {
            id: 'IV-s9',
            text: '"It would improve my life."',
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
      question: 'What are we told about Jill Price in paragraph I?',
      options: [
        'How she is different from most other people.',
        'Which dates are important in her life.',
        'When her birthday is.',
        'What she likes to do every day.',
      ],
      correctOption: 0,
      hint: "The paragraph opens with questions about memory that most people can't answer. The last two sentences introduce Jill and what makes her special. What sets her apart from most people?",
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to paragraph I, why might some people remember what happened on May 4th, 2015? Give ONE answer.',
      questionPrefix: 'Because it was...',
      correctSentenceIds: ['I-s3'],
      hint: "The paragraph says most people don't remember a random date — but gives an exception. Look for the sentence with 'unless.'",
      points: 8,
    },
    {
      id: 3,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What makes Jill tired?',
      options: [
        'Trying to remember happy things.',
        'Feeling sad very often.',
        'Remembering so much of her life.',
        'Writing many emails.',
      ],
      correctOption: 2,
      hint: "Paragraph II lists the negative effects of Jill's memory. The first effect mentioned uses the phrase 'First of all.' What does it say?",
      points: 8,
    },
    {
      id: 4,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did Jill write to Dr. McGaugh about her problem?',
      questionPrefix: 'Because she wanted to...',
      correctSentenceIds: ['II-s6'],
      hint: "Jill made a decision before contacting Dr. McGaugh. Look for the sentence that describes what she decided she needed to do. It starts with 'About 20 years ago.'",
      points: 8,
    },
    {
      id: 5,
      type: 'multi-select-options',
      paragraphId: 'III',
      instruction: 'Put a ✓ by the TWO correct answers.',
      question: 'How did Jill surprise Dr. McGaugh?',
      options: [
        'i) She remembered where his office was.',
        'ii) She remembered the news on all the dates he chose.',
        'iii) She did not enjoy answering his questions.',
        'iv) She knew a fact that was wrong in the book.',
        'v) She knew a lot about the brain.',
        'vi) She did not enjoy talking about her life.',
      ],
      correctOptions: [1, 3],
      requiredSelections: 2,
      hint: 'Two things surprised Dr. McGaugh. One was that Jill answered all his questions correctly. The other was that she corrected a mistake in his book. Find the answers that match these two facts.',
      points: 14,
    },
    {
      id: 6,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: "Jill doesn't remember many things she learned in school. According to line 23, what did Jill forget?",
      questionPrefix: 'She forgot...',
      correctSentenceIds: ['IV-s3'],
      hint: "Dr. McGaugh discovered a gap in Jill's memory. The paragraph gives a specific example from school. Look for 'For example.'",
      points: 8,
    },
    {
      id: 7,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to line 25, what does Dr. McGaugh want to know about Jill?',
      questionPrefix: 'He wants to know why she...',
      correctSentenceIds: ['IV-s5'],
      hint: "Dr. McGaugh is still researching one specific question about Jill. Look for 'trying to find out.'",
      points: 8,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why does Jill want to forget things?',
      questionPrefix: 'Because...',
      correctSentenceIds: ['IV-s9'],
      hint: "Jill explains in her own words why she wishes she could forget. Look for the short sentence at the very end of the text where she says what forgetting would do for her.",
      points: 8,
    },
  ],
}
