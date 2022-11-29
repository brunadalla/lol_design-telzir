import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import toast from "react-hot-toast"
import { cities, taxes } from "../data"

export interface ICallInfo {
  fromWhere: string
  toWhere: string
  forHowLong: string
  withPlan: string
  withoutPlan: string
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

      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(total))
    }

    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(0)
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

    if (!originCity) {
      toast.error("Sorry, this connection does not exist.")
    }

    const destinationCity = cities.find(
      (city) => city.code === taxInfo?.codeDestination
    )

    const sum = Number(taxInfo!.tax * Number(forHowLong))
    const withoutPlan = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(sum)
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
