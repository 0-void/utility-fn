export const copyToClipboard = (data, successCallback) => {
  if (typeof window === 'undefined') {
    throw new Error('`copyToClipboard` should be used in the browser environment')
  }

  try {
    navigator.clipboard.writeText(data)
    if (successCallback) successCallback(data)
  } catch {
    return
  }
}
