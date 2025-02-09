import currentIsoDate from '../common/date'
import jsonHeaders from '../common/jsonHeaders'

export default function test(params: string[]) {
  return new Response(
    JSON.stringify({firstParam: params[0], data: currentIsoDate()}),
    jsonHeaders
  )
}
