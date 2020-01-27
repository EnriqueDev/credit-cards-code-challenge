import axios from 'axios'

export interface ICreditCardsEndpoint {
  fetchAvailableCreditCards: (
    income: number,
    occupation: string,
  ) => Promise<void>
}

export const creditCardsEndPoint: ICreditCardsEndpoint = {
  fetchAvailableCreditCards: async (
    income: number,
    occupation: string,
  ): Promise<void> => {
    const response = await axios.get(
      `http://localhost:4321/cards?income=${income}&occupation=${occupation}`,
    )

    console.log(response)
  },
}
