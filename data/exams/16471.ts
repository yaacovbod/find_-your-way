import type { ExamData } from '@/types/game'

export const exam16471: ExamData = {
  id: '16471',
  title: 'Looking for Treasures',
  subject: 'English – Module E',
  year: 'Winter 2026',
  text: {
    title: 'LOOKING FOR TREASURES',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Twice a month, Brian Spencer gets up early in the morning, puts on old clothes and rubber boots, drives to the center of London, and parks near the city\'s River Thames.',
          },
          {
            id: 'I-s2',
            text: 'He goes down to the thick mud at the edge of the river.',
          },
          {
            id: 'I-s3',
            text: 'Walking slowly through the mud, he occasionally stops and picks something up.',
          },
          {
            id: 'I-s4',
            text: '"I\'m searching for objects that haven\'t been seen for hundreds of years," he says.',
          },
          {
            id: 'I-s5',
            text: '"Last month I was lucky. I found two coins and an earring from the 18th century."',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Spencer, a biology teacher, is one of the many people in England whose hobby is searching for very old objects.',
          },
          {
            id: 'II-s2',
            text: '"The mud of the River Thames is a great place to find them," he says.',
          },
          {
            id: 'II-s3',
            text: '"That\'s because, for over 2,000 years, London has been a large, crowded city, with many of its people living near the river.',
          },
          {
            id: 'II-s4',
            text: 'They used to throw in all sorts of broken household items.',
          },
          {
            id: 'II-s5',
            text: 'Sometimes they dropped various small objects when walking in the streets, and those things were carried into the river by rain.',
          },
          {
            id: 'II-s6',
            text: 'So today, if you look very carefully, you might find some treasures lying in the mud."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'Thousands of people in England also regularly go looking for old metal objects in fields in the countryside.',
          },
          {
            id: 'III-s2',
            text: 'One of these people is shop assistant Angela Carson.',
          },
          {
            id: 'III-s3',
            text: '"Each of us brings a metal detector.',
          },
          {
            id: 'III-s4',
            text: 'We move it slowly across the field, waiting for the sound it makes whenever it detects a metal object under the ground," she explains.',
          },
          {
            id: 'III-s5',
            text: '"Of course, we can never go into a field without permission from its owners.',
          },
          {
            id: 'III-s6',
            text: 'But usually they are happy to allow us to search there because they\'re curious to see what we might find."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'However, according to the law in England, people cannot always keep what they find.',
          },
          {
            id: 'IV-s2',
            text: 'Any object that seems to be more than 300 years old must be examined by experts.',
          },
          {
            id: 'IV-s3',
            text: 'If they decide that it is important, it is given to a museum and the government pays the finder what it is worth.',
          },
          {
            id: 'IV-s4',
            text: '"Last year, I took several objects I had found to be examined," says Carson.',
          },
          {
            id: 'IV-s5',
            text: '"Most of them were returned to me because they were not very special.',
          },
          {
            id: 'IV-s6',
            text: 'But one was a rare silver coin.',
          },
          {
            id: 'IV-s7',
            text: 'So the government paid me, and now it is on display in a museum in London!"',
          },
        ],
      },
      {
        id: 'V',
        sentences: [
          {
            id: 'V-s1',
            text: '"A few people have become rich from finding valuable objects," says Spencer.',
          },
          {
            id: 'V-s2',
            text: '"But nobody who goes searching in the mud or in the fields does it for the money.',
          },
          {
            id: 'V-s3',
            text: 'For us, it is just a wonderful way of connecting with the past."',
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
      question: 'What are we told about Brian Spencer in paragraph I?',
      options: [
        'How he became interested in old objects.',
        'How he searches for old objects.',
        'What he does with the old objects he collects.',
        'Why he stopped looking for old objects.',
      ],
      correctOption: 1,
      hint: 'The paragraph describes a specific routine Spencer follows. Think about what actions he takes step by step – from getting up early to picking things up in the mud.',
      points: 8,
    },
    {
      id: 2,
      type: 'multiple-choice',
      paragraphId: 'II',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn from Spencer in paragraph II?',
      options: [
        'Why people in England enjoy searching for old objects.',
        'Why London has always been large and crowded.',
        'Why people used to live near the River Thames.',
        'Why there are old objects in the River Thames.',
      ],
      correctOption: 3,
      hint: 'Spencer explains what happened over 2,000 years near the river – people threw things in, rain carried objects. What does all of this explain?',
      points: 7,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Spencer, how can people find objects in the River Thames?',
      questionPrefix: 'By',
      correctSentenceIds: ['II-s6'],
      hint: 'Spencer gives advice at the end of the paragraph about what a person needs to do to find treasures. Look for the sentence that begins with "So today."',
      points: 8,
    },
    {
      id: 4,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: "What do we learn about Carson's search for old metal objects?",
      options: [
        'When she began searching for them.',
        'How often the search is successful.',
        'How the search is done.',
        'Why these objects interest her.',
      ],
      correctOption: 2,
      hint: 'Carson describes in detail what she and others physically do: the equipment they use and how they move through the field. Which answer option matches that kind of information?',
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: "What must people do before they can search for objects in a field? Base your answer on Carson's words in lines 15–17.",
      questionPrefix: 'They must',
      correctSentenceIds: ['III-s5'],
      hint: 'Carson says there is one thing people can NEVER do without a specific requirement being met first. Find the sentence where she states that condition.',
      points: 8,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What are we told in paragraph IV about old objects that people find in England?',
      options: [
        'When the law dealing with them was introduced.',
        'Which ones need to be examined by experts.',
        'Why most of them are over 300 years old.',
        'How experts examine them.',
      ],
      correctOption: 1,
      hint: 'The paragraph mentions a specific age that triggers a legal requirement. Which answer option is about identifying which objects must go through that process?',
      points: 8,
    },
    {
      id: 7,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'What does Carson explain about most of the objects she took to be examined? Base your answer on lines 21–23.',
      questionPrefix: 'She explains why they',
      correctSentenceIds: ['IV-s5'],
      hint: 'Carson talks about what happened to the majority of her objects after examination, and gives a reason. Find the sentence that explains both the outcome and the reason.',
      points: 8,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: 'What rare object that Carson found is now in a museum in London?',
      correctSentenceIds: ['IV-s6'],
      hint: 'Among all the objects Carson found, one stood out as unusual and valuable. Find the short sentence that names it specifically.',
      points: 7,
    },
    {
      id: 9,
      type: 'click-text',
      paragraphId: 'V',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Spencer, why do people search for old objects?',
      questionPrefix: 'Because they want to',
      correctSentenceIds: ['V-s3'],
      hint: 'Spencer gives the real motivation for people who search. It is not about money. Look for the sentence where he explains what this activity truly means to them.',
      points: 8,
    },
  ],
}
