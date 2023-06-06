import { Plugin, type ConvertFunction } from "submarin-converter"

interface ConvertFunctionOption {
  prefix: string
}
const mainConvertFunction: ConvertFunction<ConvertFunctionOption> = ({ input, option }) =>
  `${option?.prefix ?? ""}${input}`

const templatePlugin = new Plugin({
  convertFunction: [mainConvertFunction],
})

export { templatePlugin }

export type { ConvertFunctionOption }
