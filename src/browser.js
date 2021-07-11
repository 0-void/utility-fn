export const copyToClipboard = (data, successCallback) => {
  try {
    navigator.clipboard.writeText(data)
    if (successCallback) successCallback(data)
  } catch {
    return
  }
}
