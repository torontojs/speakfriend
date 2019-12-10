export default (sortBy, arr) => {
  let input = sortBy.trim().toLowerCase()

  const newArr = arr.filter(entry => {
    return (
      entry['fields']['Topics']
        .replace(/,/g, ' ')
        .toLowerCase()
        .indexOf(input) > -1
    )
  })

  return newArr
}
