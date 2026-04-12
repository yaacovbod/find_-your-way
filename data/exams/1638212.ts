import type { ExamData } from '@/types/game'

export const exam1638212: ExamData = {
  id: '1638212',
  title: 'A Guide Dog for Linda Cantrell',
  subject: 'English – Module C',
  year: 'Summer 2025 (Moed Aleph)',
  text: {
    title: 'A GUIDE DOG FOR LINDA CANTRELL',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'When Linda Cantrell goes to work, she always takes her guide dog, Bobby, with her.',
          },
          {
            id: 'I-s2',
            text: 'Linda is blind, so Bobby helps her cross the roads and leads her to an empty seat on the bus.',
          },
          {
            id: 'I-s3',
            text: '"I go everywhere with Bobby," says Linda.',
          },
          {
            id: 'I-s4',
            text: '"He helps me in so many ways.',
          },
          {
            id: 'I-s5',
            text: 'He even comes with me when I go to the supermarket or to the beach."',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'To become a guide dog, Bobby spent almost two years in a special training program.',
          },
          {
            id: 'II-s2',
            text: '"The training program begins when a puppy is about four months old," explains Daniel Webster, a trainer of guide dogs.',
          },
          {
            id: 'II-s3',
            text: '"But before the puppies can join the program, they must pass many tests.',
          },
          {
            id: 'II-s4',
            text: 'These tests check if a puppy has the qualities of a good guide dog.',
          },
          {
            id: 'II-s5',
            text: 'For example, a guide dog must not be afraid of loud noises.',
          },
          {
            id: 'II-s6',
            text: 'So in one of the tests, I take a puppy to a busy street with lots of noisy traffic.',
          },
          {
            id: 'II-s7',
            text: 'Then I watch the puppy to see if it remains calm."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Bobby passed the tests easily, and then he joined the training program.',
          },
          {
            id: 'III-s2',
            text: '"It\'s an extremely difficult program," says Daniel, who was Bobby\'s trainer.',
          },
          {
            id: 'III-s3',
            text: '"For example, the dogs must learn to ignore all distractions, such as cats or other animals.',
          },
          {
            id: 'III-s4',
            text: 'This is too difficult for some of the dogs, so they cannot complete the program.',
          },
          {
            id: 'III-s5',
            text: 'But Bobby can concentrate very well.',
          },
          {
            id: 'III-s6',
            text: 'In fact, he learned everything very quickly.',
          },
          {
            id: 'III-s7',
            text: 'This made it easy and fun to work with him."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'After the training program ended, Daniel had to choose the blind person that Bobby would live with.',
          },
          {
            id: 'IV-s2',
            text: '"I have a long list of people who are waiting to get a guide dog," he says.',
          },
          {
            id: 'IV-s3',
            text: '"I know a lot about them because they fill in a questionnaire when they first ask for a guide dog.',
          },
          {
            id: 'IV-s4',
            text: 'In Linda\'s questionnaire, she wrote that she loves going on long walks.',
          },
          {
            id: 'IV-s5',
            text: 'I decided to give Bobby to her because he has a lot of energy.',
          },
          {
            id: 'IV-s6',
            text: 'Linda told me that she is very happy with Bobby.',
          },
          {
            id: 'IV-s7',
            text: 'He has changed her life."',
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
        'Why Linda takes Bobby everywhere.',
        'What Linda does at work.',
        'How Bobby learned to help Linda.',
        'When Linda goes to work.',
      ],
      correctOption: 0,
      hint: 'The paragraph tells us something important about Linda herself that explains the whole situation. Read the second sentence — it gives the reason for everything that follows.',
      points: 8,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'According to lines 1–3, what is ONE of the ways that Bobby helps Linda?',
      correctSentenceIds: ['I-s2'],
      hint: 'Look for the sentence that describes specific actions Bobby does for Linda. It mentions two things he does — crossing somewhere and finding something.',
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'According to lines 5–6, what is ONE place that Linda goes to with Bobby?',
      correctSentenceIds: ['I-s5'],
      hint: "Linda mentions places she goes to beyond work. Look for the sentence that lists two specific locations she visits with Bobby.",
      points: 7,
    },
    {
      id: 4,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What does Daniel explain in paragraph II?',
      options: [
        'Why the tests take four months.',
        'Why a trainer must remain calm.',
        'How he trains puppies to cross streets.',
        'How he chooses puppies for the program.',
      ],
      correctOption: 3,
      hint: 'The paragraph focuses on a selection process. Daniel describes what tests he gives and what he is looking for. Think about what the purpose of the tests is.',
      points: 8,
    },
    {
      id: 5,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'Why does Daniel give the test that is described in lines 14–15?',
      questionPrefix: 'To find out if a puppy —',
      options: [
        'crosses a street easily.',
        'remains calm in a noisy street.',
        'is afraid of the trainer.',
        'watches the trainer carefully.',
      ],
      correctOption: 1,
      hint: 'The test involves taking the puppy to a busy, noisy street. Daniel says he watches the puppy. What exactly is he looking to see?',
      points: 8,
    },
    {
      id: 6,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'What do we learn about some of the dogs in the program?',
      questionPrefix: 'It is very difficult for them to...',
      correctSentenceIds: ['III-s4'],
      hint: 'Daniel says the program is extremely difficult. One sentence explains what happens to dogs who cannot handle it. Look for the sentence that says something is "too difficult."',
      points: 8,
    },
    {
      id: 7,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why did Daniel find it easy to work with Bobby? Give ONE answer from paragraph III.',
      questionPrefix: 'Because Bobby...',
      correctSentenceIds: ['III-s5', 'III-s6'],
      hint: "After explaining the problems other dogs have, Daniel says something positive about Bobby specifically. Look for sentences that describe Bobby's abilities.",
      points: 7,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'What happens when people first ask for a guide dog?',
      questionPrefix: 'They...',
      correctSentenceIds: ['IV-s3'],
      hint: 'Daniel explains how he knows so much about the people on his list. Look for the sentence that describes what people do when they apply for a guide dog.',
      points: 8,
    },
    {
      id: 9,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from paragraph IV?',
      options: [
        'How Linda heard about the training program.',
        'Where Linda goes on her walks.',
        'Why Daniel decided to give Bobby to Linda.',
        'Where Bobby and Linda first met.',
      ],
      correctOption: 2,
      hint: "Daniel explains his decision-making process. He mentions something specific that Linda wrote in her questionnaire and something specific about Bobby. The paragraph answers the question: why this dog for this person?",
      points: 8,
    },
  ],
}
