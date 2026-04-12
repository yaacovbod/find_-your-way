import type { ExamData } from '@/types/game'

export const exam1638215: ExamData = {
  id: '1638215',
  title: 'A Big Change on the Island of Redonda',
  subject: 'English – Module C',
  year: 'Summer 2024 (Moed Aleph)',
  text: {
    title: 'A BIG CHANGE ON THE ISLAND OF REDONDA',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Redonda is an island near the east coast of America.',
          },
          {
            id: 'I-s2',
            text: 'Eight years ago, it looked like a desert.',
          },
          {
            id: 'I-s3',
            text: 'There were no trees and almost no grass.',
          },
          {
            id: 'I-s4',
            text: 'Only a few birds lived there.',
          },
          {
            id: 'I-s5',
            text: 'Today, however, Redonda is a beautiful green island that is home to many different birds.',
          },
          {
            id: 'I-s6',
            text: 'So why was the situation on the island so bad?',
          },
          {
            id: 'I-s7',
            text: 'And why did it change?',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'People first came to Redonda 150 years ago.',
          },
          {
            id: 'II-s2',
            text: 'They brought many goats with them to the island because they wanted meat and milk for everyone.',
          },
          {
            id: 'II-s3',
            text: 'The goats ate the plants that grew on the island.',
          },
          {
            id: 'II-s4',
            text: 'Over the years, the number of goats increased.',
          },
          {
            id: 'II-s5',
            text: 'Eventually, there were so many goats that they ate almost all the plants.',
          },
          {
            id: 'II-s6',
            text: 'Because they could not find enough plants to eat, most of the goats died.',
          },
          {
            id: 'II-s7',
            text: 'Then there was not enough food for the people to eat, so they left the island.',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'In 2016, a group of environmentalists decided to make Redonda green again.',
          },
          {
            id: 'III-s2',
            text: 'They began by removing the goats that were still on the island.',
          },
          {
            id: 'III-s3',
            text: 'The environmentalists did not want to hurt the goats, so they worked slowly and carefully.',
          },
          {
            id: 'III-s4',
            text: 'It took several months to catch all the goats.',
          },
          {
            id: 'III-s5',
            text: 'Then airplanes took them to a farm on a large island nearby.',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'Without the goats, Redonda began to change.',
          },
          {
            id: 'IV-s2',
            text: 'Grass and trees began to grow.',
          },
          {
            id: 'IV-s3',
            text: 'In addition, large numbers of birds came to live there.',
          },
          {
            id: 'IV-s4',
            text: '"It was amazing how quickly the island changed after we removed the goats," said Tammy Elliott, an environmentalist who studies the birds on Redonda.',
          },
          {
            id: 'IV-s5',
            text: '"Today, environmentalists are trying to help other islands that used to be green but now look like deserts."',
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
      question: 'What do we learn from paragraph I about Redonda?',
      options: [
        'How it got its name.',
        'How it became so green.',
        'What it looked like in the past.',
        'Why there are many different birds there.',
      ],
      correctOption: 2,
      hint: 'The paragraph contrasts how Redonda looks today with how it looked before. Look for the sentences that describe what the island was like years ago.',
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'In paragraph I, the writer describes the bad situation on Redonda. What was bad about the situation? Give ONE answer.',
      correctSentenceIds: ['I-s2', 'I-s3', 'I-s4'],
      hint: 'There are a few sentences that describe how bad the island looked. Any one of them is a correct answer. Look for what was missing or very limited on the island.',
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'When did people first come to Redonda?',
      correctSentenceIds: ['II-s1'],
      hint: 'The first sentence of paragraph II gives a specific time period. Look for a number.',
      points: 8,
    },
    {
      id: 4,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from paragraph II?',
      options: [
        'Why people came to Redonda.',
        'Why people brought goats to Redonda.',
        'Why the goats left Redonda.',
        'How people grew plants on Redonda.',
      ],
      correctOption: 1,
      hint: "The paragraph explains the reason people brought animals with them. Look for the sentence that says 'because they wanted.'",
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did the people leave Redonda?',
      questionPrefix: 'Because...',
      correctSentenceIds: ['II-s7'],
      hint: "The last sentence of paragraph II explains why the people left. Look for 'not enough food.'",
      points: 8,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from paragraph III?',
      options: [
        'How the environmentalists removed the goats from Redonda.',
        'Why some of the goats on Redonda got hurt.',
        'Why there is a goat farm on Redonda.',
        'How the environmentalists traveled to Redonda.',
      ],
      correctOption: 0,
      hint: 'The paragraph describes a process — what the environmentalists did step by step. Think about what the main topic of the whole paragraph is.',
      points: 8,
    },
    {
      id: 7,
      type: 'click-text-multi',
      paragraphId: 'IV',
      instruction: 'Click on TWO sentences in the text.',
      question: 'How did Redonda change after the environmentalists removed the goats? Give TWO answers from paragraph IV.',
      correctSentenceIds: ['IV-s2', 'IV-s3'],
      requiredSelections: 2,
      hint: 'Two short sentences near the beginning of paragraph IV each describe one change on the island. One is about plants and the other is about animals.',
      points: 14,
    },
    {
      id: 8,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from Tammy Elliott about environmentalists?',
      options: [
        'They have a lot more work to do on Redonda.',
        'They want to help other islands become green again.',
        "They believe that other islands don't have problems.",
        'They think there are too many birds on Redonda.',
      ],
      correctOption: 1,
      hint: "Tammy's last sentence is about what environmentalists are doing today — not just on Redonda, but more widely. Look for 'trying to help.'",
      points: 8,
    },
  ],
}
