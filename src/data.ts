interface ICity {
  code: number
  name: string
}

interface ITax {
  codeOrigin: number
  codeDestination: number
  tax: number
}

export const cities: Array<ICity> = [
  { code: 11, name: "São Paulo – SP" },
  { code: 16, name: "Ribeirão Preto – SP" },
  { code: 17, name: "São José do Rio Preto – SP" },
  { code: 18, name: "Presidente Prudente – SP" },
]

export const taxes: Array<ITax> = [
  { codeOrigin: 11, codeDestination: 16, tax: 1.90 },
  { codeOrigin: 16, codeDestination: 11, tax: 2.90 },
  { codeOrigin: 11, codeDestination: 17, tax: 1.70 },
  { codeOrigin: 17, codeDestination: 11, tax: 2.70 },
  { codeOrigin: 11, codeDestination: 18, tax: 0.90 },
  { codeOrigin: 18, codeDestination: 11, tax: 1.90 },
]

export const faleMaisPlans: Array<string> = [
  "30",
  "60",
  "120",
]
