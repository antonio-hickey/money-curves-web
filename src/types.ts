export interface CurveData {
  labels: string[],
  datasets: {
    fill: boolean,
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
  }[]
}
