import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import { cities, taxes } from "../data"

export interface ICallInfo {
  fromWhere: string
  toWhere: string
  forHowLong: string
  withPlan: number
  withoutPlan: number
}

interface IResponseData {
  fromWhere: number
  toWhere: number
  forHowLong: string
  plan: number
}

interface IProviderProps {
  children: ReactNode
}

interface IContext {
  isEqual: boolean
  calculateCallValue: (value: IResponseData) => void
  callInfo: ICallInfo
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext<IContext>({} as IContext)

export const Provider = ({ children }: IProviderProps) => {
  const [isEqual, setIsEqual] = useState(false)
  const [callInfo, setCallInfo] = useState<ICallInfo>({} as ICallInfo)
  const [isModalVisible, setIsModalVisible] = useState(false)

  function calculateAdditionalMinutes(
    minutes: number,
    planMinutes: number,
    tax: number
  ) {
    if (minutes > planMinutes) {
      const total =
        tax * (minutes - planMinutes) + tax * 0.1 * (minutes - planMinutes)
      return Number(total.toFixed(2))
    }

    return 0
  }

  function calculateCallValue(data: IResponseData) {
    setIsEqual(false)
    const { fromWhere, toWhere, forHowLong, plan } = data
  
    if (fromWhere === toWhere) {
      setIsEqual(true)
      return
    }

    const taxInfo = taxes.find(
      (tax) => tax.codeOrigin === fromWhere && tax.codeDestination === toWhere
    )
    const originCity = cities.find((city) => city.code === taxInfo?.codeOrigin)
    const destinationCity = cities.find(
      (city) => city.code === taxInfo?.codeDestination
    )

    const withoutPlan = Number((taxInfo!.tax * Number(forHowLong)).toFixed(2))
    const withPlan = calculateAdditionalMinutes(
      Number(forHowLong),
      plan,
      taxInfo!.tax
    )

    setCallInfo({
      fromWhere: originCity?.name!,
      toWhere: destinationCity?.name!,
      forHowLong,
      withPlan,
      withoutPlan,
    })
    setIsModalVisible(true)
  }

  return (
    <Context.Provider
      value={{
        isEqual,
        calculateCallValue,
        callInfo,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </Context.Provider>
  )
}
