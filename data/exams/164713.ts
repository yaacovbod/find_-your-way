import type { ExamData } from '@/types/game'

export const exam164713: ExamData = {
  id: '164713',
  title: 'Super Recognizers: The People Who Never Forget Faces',
  subject: 'English – Module E',
  year: 'Winter 2025',
  text: {
    title: 'SUPER RECOGNIZERS: THE PEOPLE WHO NEVER FORGET FACES',
    paragraphs: [
      {
        id: 'I',
        sentences: [
          {
            id: 'I-s1',
            text: 'Last month, 53-year-old Mia Carson was waiting for a bus when a man walked past the bus stop.',
          },
          {
            id: 'I-s2',
            text: '"Hi, Danny," she said. The man was amazed. "How do you know me?" he asked. "I recognized you," said Carson.',
          },
          {
            id: 'I-s3',
            text: '"You were in first grade with me.',
          },
          {
            id: 'I-s4',
            text: 'We haven\'t met since then, but I never forget anyone\'s face!"',
          },
        ],
      },
      {
        id: 'II',
        sentences: [
          {
            id: 'II-s1',
            text: 'Carson belongs to a small group of people who are known as "super recognizers" because they have an exceptional ability: They can immediately recognize any face that they have seen before.',
          },
          {
            id: 'II-s2',
            text: '"Most of us easily recognize only faces we see often – for example, those of people in our neighborhood," says psychologist Dr. Kevin Shipley.',
          },
          {
            id: 'II-s3',
            text: '"But for super recognizers, seeing a face only once is enough.',
          },
          {
            id: 'II-s4',
            text: 'After that, they recognize it whenever they see it again."',
          },
        ],
      },
      {
        id: 'III',
        sentences: [
          {
            id: 'III-s1',
            text: 'This unique skill is useful in a variety of jobs.',
          },
          {
            id: 'III-s2',
            text: 'Some super recognizers, for example, work for the police, or for newspapers or magazines.',
          },
          {
            id: 'III-s3',
            text: 'Carson herself is a photographer for the American Sports magazine.',
          },
          {
            id: 'III-s4',
            text: '"I\'m often sent to take pictures at large sports events, such as football games or car races," she says.',
          },
          {
            id: 'III-s5',
            text: '"There, I might quickly identify famous people in the crowd and take their pictures.',
          },
          {
            id: 'III-s6',
            text: 'Or sometimes I take pictures of the whole crowd, and later identify any well-known people in them.',
          },
          {
            id: 'III-s7',
            text: 'Then the magazine might ask those people for permission to publish their pictures."',
          },
        ],
      },
      {
        id: 'IV',
        sentences: [
          {
            id: 'IV-s1',
            text: 'However, to get a job that requires their special skill, super recognizers must prove that they really can recognize faces quickly and accurately.',
          },
          {
            id: 'IV-s2',
            text: 'Therefore, when applying for such a job they need to do a series of tests.',
          },
          {
            id: 'IV-s3',
            text: 'In one test, for example, they must recognize faces of famous people in photos that are blurry or shown upside down.',
          },
          {
            id: 'IV-s4',
            text: '"Some tests sound easy to do, but are actually difficult even for super recognizers," says Shipley.',
          },
          {
            id: 'IV-s5',
            text: '"Not all super recognizers are equally talented, and only the best ones do well on all the tests."',
          },
        ],
      },
      {
        id: 'V',
        sentences: [
          {
            id: 'V-s1',
            text: 'Scientists have recently begun to investigate what makes super recognizers so good at recognizing faces.',
          },
          {
            id: 'V-s2',
            text: 'One study found that they don\'t look at faces in the same way that ordinary people do.',
          },
          {
            id: 'V-s3',
            text: '"Most of us focus mainly on the eye area," explains Shipley.',
          },
          {
            id: 'V-s4',
            text: '"But super recognizers pay attention to the other parts of the face as well.',
          },
          {
            id: 'V-s5',
            text: 'Images of all the parts are stored in their memory.',
          },
          {
            id: 'V-s6',
            text: 'Then, when they see even one part of that face again, they immediately build a picture of the whole face."',
          },
          {
            id: 'V-s7',
            text: 'Shipley hopes that in the future, scientists will learn more about this amazing ability.',
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
      question: 'What do we learn about super recognizers from lines 1–6?',
      options: [
        'They don\'t always remember people\'s names.',
        'They don\'t like to surprise people.',
        'They can recognize a person\'s face at different ages.',
        'They mainly recognize people they see on the street.',
      ],
      correctOption: 2,
      hint: 'Mia Carson last saw Danny in first grade. Now, decades later, she recognized him immediately. What does this prove about super recognizers?',
      points: 7,
    },
    {
      id: 2,
      type: 'click-text',
      paragraphId: 'I',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'Why is it surprising that at age 53, Mia Carson recognized Danny?',
      questionPrefix: 'Because they haven\'t met since they',
      correctSentenceIds: ['I-s3'],
      hint: 'Carson explains when she last knew Danny. Find the short sentence where she says what grade they were both in.',
      points: 8,
    },
    {
      id: 3,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that answers the question.',
      question: "According to Shipley's example, whom do we see often?",
      correctSentenceIds: ['II-s2'],
      hint: 'Shipley gives a specific example of the kind of faces most people recognize easily. Find the sentence that includes that example.',
      points: 8,
    },
    {
      id: 4,
      type: 'click-text',
      paragraphId: 'II',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'According to Shipley, how are super recognizers different from most people?',
      questionPrefix: 'Super recognizers can recognize a face even if they',
      correctSentenceIds: ['II-s3'],
      hint: 'Shipley explains what is "enough" for a super recognizer to remember a face. Look for the sentence that states the minimum required.',
      points: 8,
    },
    {
      id: 5,
      type: 'click-text',
      paragraphId: 'III',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'At what large sports event might Carson take pictures? Give ONE example from paragraph III.',
      questionPrefix: 'At a',
      correctSentenceIds: ['III-s4'],
      hint: 'Carson names two specific types of large sports events. Find the sentence where she lists them.',
      points: 8,
    },
    {
      id: 6,
      type: 'multiple-choice',
      paragraphId: 'III',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn about the famous people in the pictures Carson takes?',
      options: [
        'Why they might be contacted by the magazine.',
        'How they became famous.',
        'Which sports events they go to most often.',
        'Why they ask Carson to take their pictures.',
      ],
      correctOption: 0,
      hint: 'The last sentence of paragraph III explains what the magazine might do after Carson identifies famous people in photos. Which answer option matches that action?',
      points: 7,
    },
    {
      id: 7,
      type: 'multiple-choice',
      paragraphId: 'IV',
      instruction: 'Circle the number of the correct answer.',
      question: 'What do we learn about the tests described in paragraph IV?',
      options: [
        'Which ones are most difficult.',
        'How quickly super recognizers do them.',
        'What the best way is to prepare for them.',
        'Why they are given.',
      ],
      correctOption: 3,
      hint: 'The opening sentence of paragraph IV states the purpose of these tests very clearly. Which answer option matches that purpose?',
      points: 8,
    },
    {
      id: 8,
      type: 'click-text',
      paragraphId: 'IV',
      instruction: 'Click on the sentence in the text that completes the answer.',
      question: 'What do we learn about super recognizers who apply for a job? Give ONE answer from paragraph IV.',
      questionPrefix: 'It can be difficult for them to',
      correctSentenceIds: ['IV-s1', 'IV-s5'],
      hint: 'Paragraph IV mentions both what they must prove and the fact that not all of them succeed equally. Either of those sentences completes the answer.',
      points: 8,
    },
    {
      id: 9,
      type: 'multiple-choice',
      paragraphId: 'V',
      instruction: 'Circle the number of the correct answer.',
      question: 'What did research show about super recognizers?',
      options: [
        'Why they focus on the eye area.',
        'What they notice when looking at faces.',
        'Which faces they recognize most quickly.',
        'How they can improve their ability.',
      ],
      correctOption: 1,
      hint: 'The study found something about HOW super recognizers look at faces – what they pay attention to compared to ordinary people. Which answer option matches that finding?',
      points: 8,
    },
  ],
}
