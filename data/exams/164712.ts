import type { ExamData } from '@/types/game'

export const exam164712: ExamData = {
  id: '164712',
  title: 'Preventing Floods in Cities',
  subject: 'English – Module E',
  year: 'Summer 2025',
  text: {
    title: 'PREVENTING FLOODS IN CITIES',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'In recent years, cities all over the world have suffered badly from the effects of climate change.',
          },
          {
            id: 'I-s2',
            text: 'One of the worst effects is the powerful storms that can occur at any time of the year.',
          },
          {
            id: 'I-s3',
            text: 'Huge amounts of rain fall in a very short time, causing serious floods.',
          },
          {
            id: 'I-s4',
            text: 'As a result, cities are left without electricity for days or weeks, homes and businesses are destroyed, and lives are endangered.',
          },
          {
            id: 'I-s5',
            text: 'According to experts, as climate change continues, storms will become more frequent and bring even greater amounts of rain.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Cities normally rely on drains to carry all the rain away from the streets.',
          },
          {
            id: 'II-s2',
            text: 'However, the drains are not built to cope with enormous amounts of rain that suddenly fill the streets.',
          },
          {
            id: 'II-s3',
            text: '"Sometimes you get the amount of rain of several weeks in only a few hours," says engineer Anna Cooper.',
          },
          {
            id: 'II-s4',
            text: '"And when rain cannot flow into the drains, it has nowhere else to go.',
          },
          {
            id: 'II-s5',
            text: 'This is because pavements and roads in most cities are made from concrete and asphalt.',
          },
          {
            id: 'II-s6',
            text: 'These surfaces prevent rain from passing through them into the earth below, and the water that remains on them floods the streets and buildings."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Cities have therefore begun to use more effective methods of removing rain from the streets.',
          },
          {
            id: 'III-s2',
            text: 'One such method is to build roads and pavements using new materials with tiny holes in them.',
          },
          {
            id: 'III-s3',
            text: 'Through these holes, water can flow down into the earth below.',
          },
          {
            id: 'III-s4',
            text: '"Today many cities are digging up old asphalt and concrete surfaces, and replacing them with the new materials," says Cooper.',
          },
          {
            id: 'III-s5',
            text: '"This means that roads are closed for weeks or even months.',
          },
          {
            id: 'III-s6',
            text: 'Obviously, residents hate the noise, the dust and the traffic jams.',
          },
          {
            id: 'III-s7',
            text: 'But they know that when the work is finished, they\'ll be better protected against a very serious risk."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'Some cities are also planting "rain gardens" – gardens that are specifically designed to absorb large amounts of rain quickly.',
          },
          {
            id: 'IV-s2',
            text: 'Cities such as Portland in the USA have planted gardens in all available spaces.',
          },
          {
            id: 'IV-s3',
            text: 'Other cities, such as Wuhan in China, use another method to achieve the same goal: They have covered the roofs of many buildings with earth and planted grass there.',
          },
          {
            id: 'IV-s4',
            text: '"All these \'green\' roofs and rain gardens also attract birds and insects and help them survive in the urban environment," says Cooper.',
          },
          {
            id: 'IV-s5',
            text: '"And of course, green spaces are beautiful.',
          },
          {
            id: 'IV-s6',
            text: 'So residents not only get greater safety but can also enjoy their city more."',
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
      question: 'What do we learn from paragraph I about storms?',
      options: [
        'How to prevent them.',
        'Which cities have the worst storms.',
        'How experts study them.',
        'Why they will get worse.',
      ],
      correctOption: 3,
      hint: 'The last sentence of the paragraph mentions experts and what they predict about future storms. Which answer option matches that prediction and its cause?',
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Give ONE possible result of floods from paragraph I.',
      questionPrefix: 'Floods can',
      correctSentenceIds: ['I-s4'],
      hint: 'One sentence in paragraph I lists several specific things that happen to cities as a direct result of floods. Look for "As a result."',
      points: 8,
    },
    {
      id: 3,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What are we told in paragraph II about drains?',
      options: [
        'Why they cannot always prevent floods.',
        'How cities are improving them.',
        'What materials they are made from.',
        'Why they are difficult to build.',
      ],
      correctOption: 0,
      hint: 'The paragraph explains a specific limitation of drains – what they were not built to handle. Which answer option describes that limitation?',
      points: 8,
    },
    {
      id: 4,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Cooper, what amount of rain can fall in a few hours?',
      questionPrefix: 'The same as the amount that usually falls in',
      correctSentenceIds: ['II-s3'],
      hint: 'Cooper gives a direct comparison between the amount of rain that falls during a storm and a normal period of time. Find the sentence with her exact words.',
      points: 7,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why do concrete and asphalt surfaces cause floods during storms?',
      questionPrefix: 'Because water',
      correctSentenceIds: ['II-s6'],
      hint: 'The last sentence in paragraph II explains what these surfaces do to rainwater – what they prevent it from doing and what happens as a result.',
      points: 8,
    },
    {
      id: 6,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why are cities using new materials for roads and pavements? Base your answer on lines 14–16.',
      questionPrefix: 'In order to',
      correctSentenceIds: ['III-s1', 'III-s3'],
      hint: 'Lines 14–16 contain two relevant answers: one states the general goal of the new methods, and another explains what the holes in the new materials allow water to do.',
      points: 8,
    },
    {
      id: 7,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'What can we understand about the residents of cities where surfaces of roads are being replaced?',
      options: [
        'They are not sure the change will help.',
        'They want more information about the new materials.',
        'They realize that the work is important.',
        'They often manage to avoid the traffic jams.',
      ],
      correctOption: 2,
      hint: 'Despite hating the noise and disruption, residents feel a certain way about the work. Find the sentence that says what they "know" about the future result.',
      points: 8,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'In which city have rain gardens been planted?',
      correctSentenceIds: ['IV-s2'],
      hint: 'One sentence in paragraph IV names a specific city in the USA where gardens have been planted. Find it and click it.',
      points: 7,
    },
    {
      id: 9,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'In line 24, the writer refers to "the same goal." What is that goal?',
      options: [
        'To build more rain gardens.',
        'To ensure that rain is absorbed quickly.',
        'To plant grass on all rooftops.',
        'To attract more wildlife to the city.',
      ],
      correctOption: 1,
      hint: 'The "same goal" is the goal of rain gardens, which are described just before line 24. What are rain gardens specifically designed to do?',
      points: 8,
    },
  ],
}
