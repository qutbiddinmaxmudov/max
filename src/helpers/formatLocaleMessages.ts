const formatLocaleMessages = (nestedMessages: any, prefix = '') => {
  if (!nestedMessages) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') Object.assign(messages, { [prefixedKey]: value })
    else Object.assign(messages, formatLocaleMessages(value, prefixedKey))

    return messages
  }, {})
}

export default formatLocaleMessages
