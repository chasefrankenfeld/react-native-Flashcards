import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = 'DeckStorageKey:mobile_flashcards';

// getDecks: return all of the decks along with their titles, questions, and answers.
// export const getDecks = () => {
//     return AsyncStorage.getAllKeys(DECK_STORAGE_KEY)
// }

export const getDecks = () => {
    return AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let val = store[i][1];
          console.log(key, val);
        });
      });
    });
  }

// getDeck: take in a single id argument and return the deck associated with that id.

// saveDeckTitle: take in a single title argument and add it to the decks.

export const sumbitDeckTitle = ({ deckTitle }) => {
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({
        deckTitle
    }))
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
