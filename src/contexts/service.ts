import { useContext } from 'react'
import { createContext } from 'react'
import { IThunkMiddlewareExtraArgument } from '../store/middleware'

export const ServiceContext = createContext<IThunkMiddlewareExtraArgument>({
  creditCardsEndPoint: {
    checkCreditCards: async () => {
      return await {
        cards: [],
      }
    },
  },
})

export const useService = () => useContext(ServiceContext)
