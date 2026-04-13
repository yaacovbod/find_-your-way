import type { ExamData } from '@/types/game'

export const exam164711: ExamData = {
  id: '164711',
  title: 'A New Way to Fight Climate Change',
  subject: 'English – Module E',
  year: 'Summer 2025 – Moed B',
  text: {
    title: 'A NEW WAY TO FIGHT CLIMATE CHANGE',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'In 2015, an important document was signed in Paris by almost all countries of the world.',
          },
          {
            id: 'I-s2',
            text: 'Known as the Paris Agreement (PA), it includes details of actions that governments must take to deal with the problem of climate change.',
          },
          {
            id: 'I-s3',
            text: 'And indeed, many of the goals of the PA have been achieved.',
          },
          {
            id: 'I-s4',
            text: 'For example, wealthy countries pay 100 billion dollars annually to help poorer ones cope with the terrible effects of climate change.',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Many countries have introduced their own policies to help stop climate change from getting worse.',
          },
          {
            id: 'II-s2',
            text: 'Most importantly, energy sources that damage the environment have been replaced with green energy, such as wind power and solar power.',
          },
          {
            id: 'II-s3',
            text: 'Major industrial nations, such as China and Germany, are investing billions of dollars in green energy.',
          },
          {
            id: 'II-s4',
            text: 'Even tiny island nations in the Pacific Ocean are switching to solar power.',
          },
          {
            id: 'II-s5',
            text: 'But according to climate scientist Donna Parker, more needs to be done.',
          },
          {
            id: 'II-s6',
            text: '"We must also get as many people involved as possible," she says.',
          },
          {
            id: 'II-s7',
            text: '"Every person and every family should be made aware of the dangers, and do what they can to help."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'There have been many attempts to encourage people to adopt a way of life that is more environmentally friendly – for example, to use less electricity.',
          },
          {
            id: 'III-s2',
            text: 'However, these attempts have often failed.',
          },
          {
            id: 'III-s3',
            text: '"Unfortunately, most people still ignore the problem of climate change," says Parker.',
          },
          {
            id: 'III-s4',
            text: '"They see the news of huge storms and terrible forest fires, but still think of climate change as a distant threat.',
          },
          {
            id: 'III-s5',
            text: 'They just don\'t believe it could directly affect them and their families."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'So how can this attitude be changed?',
          },
          {
            id: 'IV-s2',
            text: 'Studies done in the USA in the last few years point to a surprising answer: Parents can be educated by their children.',
          },
          {
            id: 'IV-s3',
            text: 'In one study, for example, the scientists designed a school program for 11- to 14-year-old children.',
          },
          {
            id: 'IV-s4',
            text: 'The kids learned about the effects of climate change on local wildlife, and were encouraged to discuss the subject with their parents.',
          },
          {
            id: 'IV-s5',
            text: 'Before the program, the scientists gave the parents a survey to find out how concerned they were about climate change.',
          },
          {
            id: 'IV-s6',
            text: 'After the program, parents were surveyed again to see if their attitudes changed following conversations with their kids.',
          },
        ],
      },
      {
        id: 'V',
        sentences: [
          {
            id: 'V-s1',
            text: '"Parents whose kids participated in the program became more concerned about climate change because they understood that it was causing local damage too," says Parker.',
          },
          {
            id: 'V-s2',
            text: '"This understanding is very important because it can make people more willing to behave responsibly.',
          },
          {
            id: 'V-s3',
            text: 'I would love to see programs like this in every school.',
          },
          {
            id: 'V-s4',
            text: 'They could make a big difference."',
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
      question: 'What do we learn from paragraph I?',
      options: [
        'What the worst effects of climate change are.',
        'What has happened since the PA was signed.',
        'Why climate change is getting worse.',
        'Why only wealthy countries signed the PA.',
      ],
      correctOption: 1,
      hint: 'Paragraph I mentions both the signing of the PA and something that followed. Which answer option matches something that resulted from the PA being signed?',
      points: 7,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why are some countries using wind power and solar power? Give ONE answer from lines 6–8.',
      questionPrefix: 'In order to',
      correctSentenceIds: ['II-s1'],
      hint: 'The reason countries replaced harmful energy sources with green energy is stated at the very beginning of paragraph II, before wind and solar are even mentioned.',
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'Name ONE country in which large investments are being made in green energy.',
      correctSentenceIds: ['II-s3', 'II-s4'],
      hint: 'Two sentences in paragraph II name specific countries or regions. Either one gives a valid example.',
      points: 7,
    },
    {
      id: 4,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What opinion does Parker express in paragraph II?',
      options: [
        'Industries should invest more money in climate research.',
        'Not enough governments are aware of climate change.',
        'More people need to understand that climate change is dangerous.',
        'More countries should switch to solar power.',
      ],
      correctOption: 2,
      hint: 'Parker says "every person and every family" should do something. What is that something? Which answer option matches what she wants people to have?',
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'How can people help fight climate change? Base your answer on the example in line 14.',
      questionPrefix: 'By',
      correctSentenceIds: ['III-s1'],
      hint: 'Line 14 gives a specific example of an environmentally friendly behavior. Find the sentence that contains that example.',
      points: 8,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'What does Parker explain in paragraph III?',
      options: [
        'Why people avoid watching the news.',
        'What attempts have been made to change people\'s lifestyle.',
        'How climate change causes forest fires.',
        'Why most people don\'t worry about climate change.',
      ],
      correctOption: 3,
      hint: 'Parker says most people "ignore" the problem and think of it as a "distant threat." She gives a reason for this attitude. Which answer option matches that explanation?',
      points: 8,
    },
    {
      id: 7,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'In the study described in paragraph IV, how did parents learn about the local effects of climate change?',
      correctSentenceIds: ['IV-s4'],
      hint: 'The paragraph explains what the children did after learning about climate change. That action is how the parents received the information.',
      points: 8,
    },
    {
      id: 8,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What are we told about the study that is described in paragraph IV?',
      options: [
        'Why surveys were used in the study.',
        'How parents were encouraged to participate in the study.',
        'What parents thought about the study.',
        'How long the study lasted.',
      ],
      correctOption: 0,
      hint: 'Two surveys are mentioned: one before and one after the program. The text tells us clearly what each survey was meant to measure. Which answer option matches that information?',
      points: 8,
    },
    {
      id: 9,
      type: 'click-text',
      paragraphId: 'V',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Parker, why is it important to make people more aware of the effects of climate change? Give ONE answer from paragraph V.',
      questionPrefix: 'Because then people might',
      correctSentenceIds: ['V-s2'],
      hint: 'Parker explains what this "understanding" can lead to. Look for the sentence that says what people become more willing to do.',
      points: 8,
    },
  ],
}
