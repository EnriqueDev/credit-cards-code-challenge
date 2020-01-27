import axios from 'axios'

export const creditCardsEndPoint = {
  checkCreditCards: async (
    income: number,
    occupation: string,
  ): Promise<void> => {
    const response = axios.get(
      `http://localhost:4321/cards?income=${income}&occupation=${occupation}`,
    )

    console.log(response)
  },
}
