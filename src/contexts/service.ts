import { useContext } from 'react'
import { createContext } from 'react'
import { IThunkMiddlewareExtraArgument } from '../store/middleware'
import { ICreditCard } from 'src/services/credit'

export const ServiceContext = createContext<IThunkMiddlewareExtraArgument>({
  creditCardsEndPoint: {
    fetchAvailableCreditCards: async () => {
      return (await []) as ICreditCard[]
    },
  },
})

export const useService = () => useContext(ServiceContext)
