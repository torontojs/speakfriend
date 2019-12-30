export default (entries, newEntry) => {
  if (entries.indexOf(newEntry.trim()) > -1) {
    return true
  } else {
    return false
  }
}
