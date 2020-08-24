const dayjs = require("dayjs")

export const dateService = {
  publishedAt(time) {
    return dayjs(time).format('YYYY/MM/DD')
  }
}
