import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = 'DeckStorageKey:mobile_flashcards1';

// getDecks: return all of the decks along with their titles, questions, and answers.
// export const getDecks = () => {
//     return AsyncStorage.getAllKeys(DECK_STORAGE_KEY)
// }


  export const getDecks = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY, (err, value) => {
        if (value) {
            // const decks = Object.keys(value).map((key) => value[key])
            console.log(value)
        }
    })
  }

// getDeck: take in a single id argument and return the deck associated with that id.

// saveDeckTitle: take in a single title argument and add it to the decks.

export const sumbitDeckTitle = ({ deckTitle }) => {

    const id = Date.now()

    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [id]: deckTitle
    }), () => {
        AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
            console.log(result)
        })
    })
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
