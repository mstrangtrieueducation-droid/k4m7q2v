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
    key: "A", label: "A", title: "Match the words to the pictures.",
    note: "Use the original picture labels a, b, and c.", points: 3,
    sectionImage: A + "section-a-pictures.png",
    questions: [
      choice("A1", "1. row", ["a", "b", "c"], "b", "Picture b shows one horizontal row highlighted in a table."),
      choice("A2", "2. test score", ["a", "b", "c"], "a", "Picture a shows a test with an A+ test score."),
      choice("A3", "3. take away", ["a", "b", "c"], "c", "Picture c shows a girl taking a plate away from the table.")
    ]
  },
  {
    key: "B", label: "B", title: "Look and complete the words.",
    note: "Complete each word to describe the picture.", points: 3,
    questions: [
      input("B1", "1. t _ r _ d", ["tired"], "The boy is rubbing his eyes because he is tired.", A + "page1-img2-385x275.png"),
      input("B2", "2. t h _ r _ t y", ["thirsty"], "The girl is reaching for a glass of water because she is thirsty.", A + "page1-img3-385x275.png"),
      input("B3", "3. _ u n _ r _", ["hungry"], "The boy is ready to eat a plate of food because he is hungry.", A + "page1-img7-385x275.png")
    ]
  },
  {
    key: "C", label: "C", title: "Listen and write the words. Then write the number of syllables in each word.",
    note: "Each number has two answers: the word and its number of syllables.", points: 8,
    audio: "assets/audio/Listening-C.mp3",
    questions: [
      {
        id: "C1", type: "paired", points: 2, prompt: "1.", parts: [
          { key: "word", label: "Word", type: "input", answers: ["clean"], explanation: "The word in the audio is clean." },
          { key: "syllables", label: "Number of syllables", type: "choice", options: ["1", "2", "3", "4"], answers: ["1"], explanation: "Clean has one syllable: clean." }
        ]
      },
      {
        id: "C2", type: "paired", points: 2, prompt: "2.", parts: [
          { key: "word", label: "Word", type: "input", answers: ["dirty"], explanation: "The word in the audio is dirty." },
          { key: "syllables", label: "Number of syllables", type: "choice", options: ["1", "2", "3", "4"], answers: ["2"], explanation: "Dirty has two syllables: dir-ty." }
        ]
      },
      {
        id: "C3", type: "paired", points: 2, prompt: "3.", parts: [
          { key: "word", label: "Word", type: "input", answers: ["column"], explanation: "The word in the audio is column." },
          { key: "syllables", label: "Number of syllables", type: "choice", options: ["1", "2", "3", "4"], answers: ["2"], explanation: "Column has two syllables: col-umn." }
        ]
      },
      {
        id: "C4", type: "paired", points: 2, prompt: "4.", parts: [
          { key: "word", label: "Word", type: "input", answers: ["subtraction"], explanation: "The word in the audio is subtraction." },
          { key: "syllables", label: "Number of syllables", type: "choice", options: ["1", "2", "3", "4"], answers: ["3"], explanation: "Subtraction has three syllables: sub-trac-tion." }
        ]
      }
    ]
  },
  {
    key: "D", label: "D", title: "Complete the sentences. Use the simple past.",
    note: "Use the verb in brackets in the correct simple past form.", points: 3,
    questions: [
      input("D1", "1. I didn't ___ any candy. (buy)", ["buy"], "After didn't, use the base form of the verb: buy."),
      input("D2", "2. She ___ you at school. (see)", ["saw"], "The simple past of see is saw."),
      input("D3", "3. They ___ three books. (sell)", ["sold"], "The simple past of sell is sold.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the sentences. Use the simple past.",
    note: "Write the simple past verb that matches each picture.", points: 4,
    questions: [
      input("E1", "1. The birds ___ away.", ["flew"], "The picture shows birds flying away. The simple past of fly is flew.", A + "page2-img2-383x220.png"),
      input("E2", "2. They ___ cupcakes.", ["ate"], "The picture shows the children eating cupcakes. The simple past of eat is ate.", A + "page2-img5-383x220.png"),
      input("E3", "3. He ___ to the library.", ["went"], "The picture shows him at the library. The simple past of go is went.", A + "page2-img3-383x220.png"),
      input("E4", "4. I ___ a glass of water.", ["drank"], "The picture shows her drinking water. The simple past of drink is drank.", A + "page2-img6-383x220.png")
    ]
  },
  {
    key: "F", label: "F", title: "Write the words in the correct order to make sentences. Then match them to the pictures.",
    note: "Each number has two answers: the complete sentence and picture a or b.", points: 4,
    sectionImage: A + "section-f-pictures.png",
    questions: [
      {
        id: "F1", type: "paired", points: 2, prompt: "1. dinner / I / ate / for / pasta", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["I ate pasta for dinner.", "I ate pasta for dinner"], explanation: "Put the subject first, then the past verb and the rest of the sentence: I ate pasta for dinner." },
          { key: "picture", label: "Matching picture", type: "choice", options: ["a", "b"], answers: ["b"], explanation: "Picture b shows a girl eating pasta." }
        ]
      },
      {
        id: "F2", type: "paired", points: 2, prompt: "2. eat / I / dinner / for / pasta / didn't", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["I didn't eat pasta for dinner.", "I didn't eat pasta for dinner", "I did not eat pasta for dinner.", "I did not eat pasta for dinner"], explanation: "A negative simple past sentence uses didn't + the base verb eat: I didn't eat pasta for dinner." },
          { key: "picture", label: "Matching picture", type: "choice", options: ["a", "b"], answers: ["a"], explanation: "Picture a shows a boy eating a different meal, not pasta." }
        ]
      }
    ]
  },
  {
    key: "G", label: "G", title: "Look and circle the correct words.",
    note: "Choose the word that matches each picture.", points: 3,
    questions: [
      choice("G1", "1.", ["baker", "jar"], "jar", "The picture shows a jar, not a baker.", A + "page3-img1-385x275.png"),
      choice("G2", "2.", ["cook", "bored"], "bored", "The girl's expression shows that she is bored; cook is an action.", A + "page3-img2-385x275.png"),
      choice("G3", "3.", ["hide", "steal"], "hide", "The cat is hiding inside the box.", A + "page3-img4-385x275.png")
    ]
  },
  {
    key: "H", label: "H", title: "Look and write the words.",
    note: "Use the words in the box: arm, eye, face, foot, hand, knee, nose. One word is extra.", points: 6,
    wordBank: ["arm", "eye", "face", "foot", "hand", "knee", "nose"],
    sectionImage: A + "page3-img3-1430x550.png",
    questions: [
      input("H1", "1.", ["face"], "Label 1 points to the whole face."),
      input("H2", "2.", ["nose"], "Label 2 points to the nose in the middle of the face."),
      input("H3", "3.", ["hand"], "Label 3 points to the hand at the end of the arm."),
      input("H4", "4.", ["arm"], "Label 4 points to the arm."),
      input("H5", "5.", ["knee"], "Label 5 points to the knee, where the leg bends."),
      input("H6", "6.", ["foot"], "Label 6 points to the foot. The unused word is eye.")
    ]
  },
  {
    key: "I", label: "I", title: "Listen and complete the sentences.",
    note: "Listen carefully and write the missing words.", points: 3,
    audio: "assets/audio/Listening-I.mp3",
    questions: [
      input("I1", "1. Please ___ of the toy.", ["let go"], "The complete expression is let go of the toy."),
      input("I2", "2. She was ___ and ate too much candy.", ["greedy"], "Greedy describes someone who wants or takes more than they need."),
      input("I3", "3. Let's ___ the garden.", ["dig up"], "Dig up means to remove soil by digging.")
    ]
  },
  {
    key: "J", label: "J", title: "Circle the correct words.",
    note: "Choose the word that makes each question or sentence correct.", points: 5,
    questions: [
      choice("J1", "1. Did you buy / bought a new jacket?", ["buy", "bought"], "buy", "After Did, use the base form buy."),
      choice("J2", "2. The dog steal / stole a hamburger.", ["steal", "stole"], "stole", "The sentence describes a completed past action, so use stole."),
      choice("J3", "3. What / Where did you do?", ["What", "Where"], "What", "What asks about the action: What did you do?"),
      choice("J4", "4. What / Where did you go?", ["What", "Where"], "Where", "Where asks about a place: Where did you go?"),
      choice("J5", "5. I make / made a sandwich yesterday.", ["make", "made"], "made", "Yesterday shows a past action, so use made.")
    ]
  },
  {
    key: "K", label: "K", title: "Look and answer the questions.",
    note: "Write a complete sentence for each answer.", points: 2,
    questions: [
      input("K1", "1. Where did they go?", ["They went to the park.", "They went to the park", "To the park."], "The picture shows a park, so the complete answer is: They went to the park.", A + "page4-img1-440x220.png"),
      input("K2", "2. How many cupcakes did he eat?", ["He ate two cupcakes.", "He ate two cupcakes", "Two cupcakes."], "The picture shows two cupcake wrappers and the cupcake he is eating. The answer key gives: He ate two cupcakes.", A + "page4-img2-440x220.png")
    ]
  },
  {
    key: "L", label: "L", title: "Write the words in the correct order to make questions. Look at the pictures and answer the questions.",
    note: "Each number has two answers: the complete question and the complete answer.", points: 6,
    questions: [
      {
        id: "L1", type: "paired", points: 2, prompt: "1. you / What / do / did", image: A + "page4-img3-385x275.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["What did you do?", "What did you do"], explanation: "Use What + did + subject + base verb: What did you do?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["I drank some water.", "I drank some water", "I drank water.", "I drank water"], explanation: "The picture shows the speaker drinking water, so answer: I drank some water." }
        ]
      },
      {
        id: "L2", type: "paired", points: 2, prompt: "2. go / Did / to / the play / they", image: A + "page4-img4-385x266.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Did they go to the play?", "Did they go to the play"], explanation: "A simple past yes/no question uses Did + subject + base verb: Did they go to the play?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["No, they didn't.", "No, they didn't", "No, they did not.", "No, they did not"], explanation: "The picture does not show a play, so the answer is: No, they didn't." }
        ]
      },
      {
        id: "L3", type: "paired", points: 2, prompt: "3. she / have / Did / balloons / three", image: A + "page4-img5-385x275.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Did she have three balloons?", "Did she have three balloons"], explanation: "Put the words in question order: Did + she + have + three balloons?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["Yes, she did.", "Yes, she did"], explanation: "The picture shows her holding three balloons, so answer: Yes, she did." }
        ]
      }
    ]
  }
];
