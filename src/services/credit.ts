import axios from 'axios'

export interface ICreditCardsEndpoint {
  fetchAvailableCreditCards: (
    income: number,
    occupation: string,
  ) => Promise<ICreditCard[]>
}

export type ICreditCard = {
  id: number
  name: string
  apr: number
  balanceTransferOfferDuration: number
  purchaseOfferDuration: number
  creditAvailable: number
}

export const creditCardsEndPoint: ICreditCardsEndpoint = {
  fetchAvailableCreditCards: async (
    income: number,
    occupation: string,
  ): Promise<ICreditCard[]> => {
    const response = await axios.get(
      `http://localhost:4321/cards?income=${income}&occupation=${occupation}`,
    )

    if (response.status !== 200) {
      throw new Error()
    }

    return response.data
  },
}
