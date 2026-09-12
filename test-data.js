const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Match the words to the pictures.",
    "note": "Use the original picture labels a, b, and c.",
    "points": 3,
    "sectionImage": "assets/images/section-a-pictures.png",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. row",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Picture b shows one horizontal row highlighted in a table.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. test score",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Picture a shows a test with an A+ test score.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. take away",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Picture c shows a girl taking a plate away from the table.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Look and complete the words.",
    "note": "Complete each word to describe the picture.",
    "points": 3,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. t _ r _ d",
        "answers": [
          "tired"
        ],
        "explanation": "The boy is rubbing his eyes because he is tired.",
        "image": "assets/images/page1-img2-385x275.png",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. _ h _ r _ t y",
        "answers": [
          "thirsty"
        ],
        "explanation": "The girl is reaching for a glass of water because she is thirsty.",
        "image": "assets/images/page1-img3-385x275.png",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. _ u n _ r _",
        "answers": [
          "hungry"
        ],
        "explanation": "The boy is ready to eat a plate of food because he is hungry.",
        "image": "assets/images/page1-img7-385x275.png",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Listen and write the words. Then write the number of syllables in each word.",
    "note": "Each number has two answers: the word and its number of syllables.",
    "points": 8,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "paired",
        "points": 2,
        "prompt": "1.",
        "parts": [
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "clean"
            ],
            "explanation": "The word in the audio is clean."
          },
          {
            "key": "syllables",
            "label": "Number of syllables",
            "type": "choice",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answers": [
              "1"
            ],
            "explanation": "Clean has one syllable: clean."
          }
        ]
      },
      {
        "id": "C2",
        "type": "paired",
        "points": 2,
        "prompt": "2.",
        "parts": [
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "dirty"
            ],
            "explanation": "The word in the audio is dirty."
          },
          {
            "key": "syllables",
            "label": "Number of syllables",
            "type": "choice",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answers": [
              "2"
            ],
            "explanation": "Dirty has two syllables: dir-ty."
          }
        ]
      },
      {
        "id": "C3",
        "type": "paired",
        "points": 2,
        "prompt": "3.",
        "parts": [
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "column"
            ],
            "explanation": "The word in the audio is column."
          },
          {
            "key": "syllables",
            "label": "Number of syllables",
            "type": "choice",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answers": [
              "2"
            ],
            "explanation": "Column has two syllables: col-umn."
          }
        ]
      },
      {
        "id": "C4",
        "type": "paired",
        "points": 2,
        "prompt": "4.",
        "parts": [
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "subtraction"
            ],
            "explanation": "The word in the audio is subtraction."
          },
          {
            "key": "syllables",
            "label": "Number of syllables",
            "type": "choice",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answers": [
              "3"
            ],
            "explanation": "Subtraction has three syllables: sub-trac-tion."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Complete the sentences. Use the simple past.",
    "note": "Use the verb in brackets in the correct simple past form.",
    "points": 3,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. I didn't ___ any candy. (buy)",
        "answers": [
          "buy"
        ],
        "explanation": "After didn't, use the base form of the verb: buy.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. She ___ you at school. (see)",
        "answers": [
          "saw"
        ],
        "explanation": "The simple past of see is saw.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. They ___ three books. (sell)",
        "answers": [
          "sold"
        ],
        "explanation": "The simple past of sell is sold.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Look and complete the sentences. Use the simple past.",
    "note": "Write the simple past verb that matches each picture.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. The birds ___ away.",
        "answers": [
          "flew"
        ],
        "explanation": "The picture shows birds flying away. The simple past of fly is flew.",
        "image": "assets/images/page2-img2-383x220.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. They ___ cupcakes.",
        "answers": [
          "ate"
        ],
        "explanation": "The picture shows the children eating cupcakes. The simple past of eat is ate.",
        "image": "assets/images/page2-img5-383x220.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. He ___ to the library.",
        "answers": [
          "went"
        ],
        "explanation": "The picture shows him at the library. The simple past of go is went.",
        "image": "assets/images/page2-img3-383x220.png",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. I ___ a glass of water.",
        "answers": [
          "drank"
        ],
        "explanation": "The picture shows her drinking water. The simple past of drink is drank.",
        "image": "assets/images/page2-img6-383x220.png",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Write the words in the correct order to make sentences. Then match them to the pictures.",
    "note": "Each number has two answers: the complete sentence and picture a or b.",
    "points": 4,
    "sectionImage": "assets/images/section-f-pictures.png",
    "questions": [
      {
        "id": "F1",
        "type": "paired",
        "points": 2,
        "prompt": "1. dinner / I / ate / for / pasta",
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "I ate pasta for dinner.",
              "I ate pasta for dinner"
            ],
            "explanation": "Put the subject first, then the past verb and the rest of the sentence: I ate pasta for dinner."
          },
          {
            "key": "picture",
            "label": "Matching picture",
            "type": "choice",
            "options": [
              "a",
              "b"
            ],
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows a girl eating pasta."
          }
        ]
      },
      {
        "id": "F2",
        "type": "paired",
        "points": 2,
        "prompt": "2. eat / I / dinner / for / pasta / didn't",
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "I didn't eat pasta for dinner.",
              "I didn't eat pasta for dinner",
              "I did not eat pasta for dinner.",
              "I did not eat pasta for dinner"
            ],
            "explanation": "A negative simple past sentence uses didn't + the base verb eat: I didn't eat pasta for dinner."
          },
          {
            "key": "picture",
            "label": "Matching picture",
            "type": "choice",
            "options": [
              "a",
              "b"
            ],
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows a boy eating a different meal, not pasta."
          }
        ]
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Look and circle the correct words.",
    "note": "Choose the word that matches each picture.",
    "points": 3,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "baker",
          "jar"
        ],
        "answers": [
          "jar"
        ],
        "explanation": "The picture shows a jar, not a baker.",
        "image": "assets/images/page3-img1-385x275.png",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "cook",
          "bored"
        ],
        "answers": [
          "bored"
        ],
        "explanation": "The girl's expression shows that she is bored; cook is an action.",
        "image": "assets/images/page3-img2-385x275.png",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "hide",
          "steal"
        ],
        "answers": [
          "hide"
        ],
        "explanation": "The cat is hiding inside the box.",
        "image": "assets/images/page3-img4-385x275.png",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Look and write the words.",
    "note": "Use the words in the box: arm, eye, face, foot, hand, knee, nose. One word is extra.",
    "points": 6,
    "wordBank": [
      "arm",
      "eye",
      "face",
      "foot",
      "hand",
      "knee",
      "nose"
    ],
    "sectionImage": "assets/images/page3-img3-1430x550.png",
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1.",
        "answers": [
          "face"
        ],
        "explanation": "Label 1 points to the whole face.",
        "image": "",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2.",
        "answers": [
          "nose"
        ],
        "explanation": "Label 2 points to the nose in the middle of the face.",
        "image": "",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3.",
        "answers": [
          "hand"
        ],
        "explanation": "Label 3 points to the hand at the end of the arm.",
        "image": "",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4.",
        "answers": [
          "arm"
        ],
        "explanation": "Label 4 points to the arm.",
        "image": "",
        "points": 1
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5.",
        "answers": [
          "knee"
        ],
        "explanation": "Label 5 points to the knee, where the leg bends.",
        "image": "",
        "points": 1
      },
      {
        "id": "H6",
        "type": "input",
        "prompt": "6.",
        "answers": [
          "foot"
        ],
        "explanation": "Label 6 points to the foot. The unused word is eye.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Listen and complete the sentences.",
    "note": "Listen carefully and write the missing words.",
    "points": 3,
    "audio": "assets/audio/Listening-I.mp3",
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. Please ___ of the toy.",
        "answers": [
          "let go"
        ],
        "explanation": "The complete expression is let go of the toy.",
        "image": "",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. She was ___ and ate too much candy.",
        "answers": [
          "greedy"
        ],
        "explanation": "Greedy describes someone who wants or takes more than they need.",
        "image": "",
        "points": 1
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. Let's ___ the garden.",
        "answers": [
          "dig up"
        ],
        "explanation": "Dig up means to remove soil by digging.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Circle the correct words.",
    "note": "Choose the word that makes each question or sentence correct.",
    "points": 5,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. Did you buy / bought a new jacket?",
        "options": [
          "buy",
          "bought"
        ],
        "answers": [
          "buy"
        ],
        "explanation": "After Did, use the base form buy.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. The dog steal / stole a hamburger.",
        "options": [
          "steal",
          "stole"
        ],
        "answers": [
          "stole"
        ],
        "explanation": "The sentence describes a completed past action, so use stole.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. What / Where did you do?",
        "options": [
          "What",
          "Where"
        ],
        "answers": [
          "What"
        ],
        "explanation": "What asks about the action: What did you do?",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. What / Where did you go?",
        "options": [
          "What",
          "Where"
        ],
        "answers": [
          "Where"
        ],
        "explanation": "Where asks about a place: Where did you go?",
        "image": "",
        "points": 1
      },
      {
        "id": "J5",
        "type": "choice",
        "prompt": "5. I make / made a sandwich yesterday.",
        "options": [
          "make",
          "made"
        ],
        "answers": [
          "made"
        ],
        "explanation": "Yesterday shows a past action, so use made.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Look and answer the questions.",
    "note": "Write a complete sentence for each answer.",
    "points": 2,
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. Where did they go?",
        "answers": [
          "They went to the park.",
          "They went to the park",
          "To the park."
        ],
        "explanation": "The picture shows a park, so the complete answer is: They went to the park.",
        "image": "assets/images/page4-img1-440x220.png",
        "points": 1
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "2. How many cupcakes did he eat?",
        "answers": [
          "He ate two cupcakes.",
          "He ate two cupcakes",
          "Two cupcakes."
        ],
        "explanation": "The picture shows two cupcake wrappers and the cupcake he is eating. The answer key gives: He ate two cupcakes.",
        "image": "assets/images/page4-img2-440x220.png",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Write the words in the correct order to make questions. Look at the pictures and answer the questions.",
    "note": "Each number has two answers: the complete question and the complete answer.",
    "points": 6,
    "questions": [
      {
        "id": "L1",
        "type": "paired",
        "points": 2,
        "prompt": "1. you / What / do / did",
        "image": "assets/images/page4-img3-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "What did you do?",
              "What did you do"
            ],
            "explanation": "Use What + did + subject + base verb: What did you do?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "I drank some water.",
              "I drank some water",
              "I drank water.",
              "I drank water"
            ],
            "explanation": "The picture shows the speaker drinking water, so answer: I drank some water."
          }
        ]
      },
      {
        "id": "L2",
        "type": "paired",
        "points": 2,
        "prompt": "2. go / Did / to / the play / they",
        "image": "assets/images/page4-img4-385x266.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "Did they go to the play?",
              "Did they go to the play"
            ],
            "explanation": "A simple past yes/no question uses Did + subject + base verb: Did they go to the play?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "No, they didn't.",
              "No, they didn't",
              "No, they did not.",
              "No, they did not"
            ],
            "explanation": "The picture does not show a play, so the answer is: No, they didn't."
          }
        ]
      },
      {
        "id": "L3",
        "type": "paired",
        "points": 2,
        "prompt": "3. she / have / Did / balloons / three",
        "image": "assets/images/page4-img5-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "Did she have three balloons?",
              "Did she have three balloons"
            ],
            "explanation": "Put the words in question order: Did + she + have + three balloons?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "Yes, she did.",
              "Yes, she did"
            ],
            "explanation": "The picture shows her holding three balloons, so answer: Yes, she did."
          }
        ]
      }
    ]
  }
];
