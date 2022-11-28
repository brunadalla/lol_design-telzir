import * as yup from "yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormContainer } from "./styles"
import { cities, faleMaisPlans } from "../../data"
import { Context } from "../../contexts"

interface IResponseData {
  fromWhere: number
  toWhere: number
  forHowLong: string
  plan: number
}

const Form = () => {
  const { calculateCallValue, isEqual } = useContext(Context)

  const formSchema = yup.object().shape({
    fromWhere: yup.number(),
    toWhere: yup.number(),
    forHowLong: yup.string().required("Duration time necessary!"),
    selectPlan: yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResponseData>({
    resolver: yupResolver(formSchema),
  })

  return (
    <FormContainer
      onSubmit={
        handleSubmit(calculateCallValue)
      }
    >
      <div>
        <label htmlFor='fromWhere'>Origem</label>
        <select defaultValue={11} id='fromWhere' {...register('fromWhere')}>
          {cities.map((city, index) => (
            <option key={index} value={city.code}>
              {" "}
              {city.name}{" "}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='toWhere'>Origem</label>
        <select defaultValue={16} id='toWhere' {...register('toWhere')}>
          {cities.map((city, index) => (
            <option key={index} value={city.code}>
              {" "}
              {city.name}{" "}
            </option>
          ))}
        </select>
        {isEqual ? (
          <p>Origin and Destination can not be the same city</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <label htmlFor='forHowLong'> Tempo (minutos) </label>
        <input
          id='forHowLong'
          type='text'
          placeholder='Ex: 120'
          {...register('forHowLong')}
        />
        {errors.forHowLong ? <p>{errors.forHowLong.message}</p> : <p></p>}
      </div>

      <div>
        <label htmlFor='selectPlan'>Plano FaleMais</label>
        <select defaultValue='30' id='selectPlan' {...register('plan')}>
          {faleMaisPlans.map((plan, index) => (
            <option key={index} value={Number(plan)}>
              FaleMais {plan}
            </option>
          ))}
        </select>
      </div>

      <button type='submit'> Calcular </button>
    </FormContainer>
  )
}

export default Form
