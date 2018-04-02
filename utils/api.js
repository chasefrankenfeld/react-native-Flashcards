import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = 'DeckStorageKey:mobile_flashcards1';

// getDecks: return all of the decks along with their titles, questions, and answers.

  export const getDecks = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
        const decks = JSON.parse(result)
        return decks
    })
  }

// getDeck: take in a single id argument and return the deck associated with that id.

export const getDeck = ({ id }) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
        if (result) {
            return result[id]
        }
    })
}

// saveDeckTitle: take in a single title argument and add it to the decks.

export const sumbitDeckTitle = ({ deckTitle }) => {

    const id = Date.now()

    const deckObj = {
        title: deckTitle,
        questions: [],
    }

    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [id]: deckObj
    }), () => {
        AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
            console.log(result)
        })
    })
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

export const adaddCardToDeck = ( id, question, answer ) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
        console.log(result)
        const data = JSON.parse(result)
        console.log(data)
        let deck = data[id]
        questionAnswerObject = {
            question: question,
            answer: answer
        }
        deck["questions"].push(questionAnswerObject)
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({
            [id]: deck
        }))
    })
}
