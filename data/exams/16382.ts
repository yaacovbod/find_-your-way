import type { ExamData } from '@/types/game'

export const exam16382: ExamData = {
  id: '16382',
  title: 'A Special Kind of Library',
  subject: 'English – Module C',
  year: 'Winter 2026',
  text: {
    title: 'A SPECIAL KIND OF LIBRARY',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Last September, Jenny Briggs moved to Geneva, Switzerland, to study at the university there.',
          },
          {
            id: 'I-s2',
            text: 'She rented an apartment where she planned to live for three years.',
          },
          {
            id: 'I-s3',
            text: 'Jenny liked everything about the apartment except the color of the walls – they were bright pink.',
          },
          {
            id: 'I-s4',
            text: 'She decided to paint them white.',
          },
          {
            id: 'I-s5',
            text: 'However, she did not own paintbrushes or a ladder, and she did not want to buy them.',
          },
          {
            id: 'I-s6',
            text: 'Fortunately, there is a special library in Geneva, and she went there to borrow the things that she needed.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'The library that Jenny went to does not have any books.',
          },
          {
            id: 'II-s2',
            text: 'Instead, it has things that you don\'t expect to find in a library – for example, suitcases, toys and kitchen equipment.',
          },
          {
            id: 'II-s3',
            text: 'People pay a fee to become members of the library.',
          },
          {
            id: 'II-s4',
            text: 'Then they can borrow any item from the library and keep it for two weeks.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'This type of library is called a "sharing library," and many cities in Europe have one.',
          },
          {
            id: 'III-s2',
            text: 'Each sharing library has a website where people can see all the items in the library.',
          },
          {
            id: 'III-s3',
            text: 'They can also check when an item that they need is available.',
          },
          {
            id: 'III-s4',
            text: 'They can then reserve the item for the days that they want it.',
          },
          {
            id: 'III-s5',
            text: 'It will be ready when they go to collect it.',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'There are two main ways that a sharing library gets the items that it lends.',
          },
          {
            id: 'IV-s2',
            text: '"There are many people who own things that they don\'t want anymore.',
          },
          {
            id: 'IV-s3',
            text: 'They give them to us because they want other people to be able to use them," says Paul Keller, who works at the library in Geneva.',
          },
          {
            id: 'IV-s4',
            text: '"There are also people who own things that they don\'t use very often.',
          },
          {
            id: 'IV-s5',
            text: 'They like the idea of sharing, so they give these things to us."',
          },
        ],
      },
      {
        id: 'V',
        sentences: [
          {
            id: 'V-s1',
            text: 'When Jenny finished painting her apartment, she decided to have a party there with her friends.',
          },
          {
            id: 'V-s2',
            text: 'On the morning of the party, she went back to the library and borrowed a machine for making popcorn.',
          },
          {
            id: 'V-s3',
            text: '"We were all so happy at the party," said Jenny.',
          },
          {
            id: 'V-s4',
            text: '"We enjoyed spending time together in my new home.',
          },
          {
            id: 'V-s5',
            text: 'And everyone said the walls looked wonderful."',
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
      question: 'What do we learn about Jenny from paragraph I?',
      options: [
        'What she wanted to study in Geneva.',
        'Why she bought paintbrushes for her apartment.',
        'What books she borrowed from the library.',
        'Where she went to get a ladder.',
      ],
      correctOption: 3,
      hint: 'Jenny needed something to reach high places when painting. She did not buy it. Think about what the last sentence of the paragraph tells us she did instead.',
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did Jenny want to paint her apartment?',
      questionPrefix: 'Because she did not like...',
      correctSentenceIds: ['I-s3'],
      hint: 'Think about what Jenny noticed when she first saw the apartment. The answer is somewhere in the middle of the paragraph and involves a color.',
      points: 8,
    },
    {
      id: 3,
      type: 'multi-select-options',
      paragraphId: 'II',
      instruction: 'Select the TWO correct answers.',
      question: 'What do we learn about the library that Jenny went to?',
      options: [
        'i) What kinds of things people can borrow there.',
        'ii) How much it costs to be a member.',
        'iii) How often Jenny goes there.',
        'iv) Which items people borrow most often.',
        'v) How long it lets people keep items.',
        'vi) How many weeks it has been open.',
      ],
      correctOptions: [0, 4],
      requiredSelections: 2,
      hint: 'The paragraph mentions specific objects you can take from the library, and also a specific amount of time. Both of those things are "what we learn." Look for concrete facts.',
      points: 16,
    },
    {
      id: 4,
      type: 'click-text-multi',
      paragraphId: 'III',
      instruction: 'Click on TWO sentences in the text.',
      question: 'What can people do on the website of a sharing library? Give TWO answers from paragraph III.',
      correctSentenceIds: ['III-s2', 'III-s3', 'III-s4'],
      requiredSelections: 2,
      hint: 'Not every sentence in this paragraph is about the website. Look for sentences where people take an action. The phrase "they can" is a strong signal.',
      points: 14,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Paul, why do people give things to a sharing library? Give ONE answer.',
      questionPrefix: 'Because...',
      correctSentenceIds: ['IV-s3', 'IV-s5'],
      hint: 'Paul describes two different kinds of people who donate. Each has a reason. Look for a sentence that clearly explains a motivation – not just a description.',
      points: 8,
    },
    {
      id: 6,
      type: 'click-text',
      paragraphId: 'V',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'What did Jenny borrow for her party?',
      correctSentenceIds: ['V-s2'],
      hint: 'Jenny went to the library on a specific day before the party. That visit is described in one sentence. Find it and click it.',
      points: 8,
    },
    {
      id: 7,
      type: 'multiple-choice',
      paragraphId: 'V',
      instruction: 'Circle the number of the correct answer.',
      question: "What do we learn about Jenny's friends from paragraph V?",
      options: [
        'What they brought to her party.',
        'Why they went to the library.',
        'How they felt at her party.',
        'When they went to the library.',
      ],
      correctOption: 2,
      hint: "Jenny quotes herself speaking about the party. She uses a word that describes an emotion. What does she say about how everyone felt?",
      points: 8,
    },
  ],
}
