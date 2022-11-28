import * as yup from "yup"
import "animate.css"
import { useContext } from "react"
import { useForm } from "react-hook-form"
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
    selectPlan: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResponseData>({
    resolver: yupResolver(formSchema),
  })

  return (
    <FormContainer onSubmit={handleSubmit(calculateCallValue)}>
      <div>
        <label htmlFor='fromWhere'>Origin</label>
        <select defaultValue={11} id='fromWhere' {...register("fromWhere")}>
          {cities.map((city, index) => (
            <option key={index} value={city.code}>
              {" "}
              {city.name}{" "}
            </option>
          ))}
        </select>
        <p></p>
      </div>

      <div>
        <label htmlFor='toWhere'>Destination</label>
        <select defaultValue={16} id='toWhere' {...register("toWhere")}>
          {cities.map((city, index) => (
            <option key={index} value={city.code}>
              {" "}
              {city.name}{" "}
            </option>
          ))}
        </select>
        {isEqual ? (
          <p className="animate__animated animate__shakeX">Origin and Destination can not be the same city!</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <label htmlFor='forHowLong'> Duration Time (minutes) </label>
        <input
          id='forHowLong'
          type='text'
          placeholder='Ex: 120'
          {...register("forHowLong")}
        />
        {errors.forHowLong ? <p className="animate__animated animate__shakeX">{errors.forHowLong.message}</p> : <p></p>}
      </div>

      <div>
        <label htmlFor='selectPlan'>FaleMais Plan</label>
        <select defaultValue='30' id='selectPlan' {...register("plan")}>
          {faleMaisPlans.map((plan, index) => (
            <option key={index} value={Number(plan)}>
              FaleMais {plan}
            </option>
          ))}
        </select>
        <p></p>
      </div>

      <button type='submit'> Calculate </button>
    </FormContainer>
  )
}

export default Form
