export const ShowRating = (show: boolean) => {
  const thumbUp = document.getElementById('thumb_up')
  const thumbDown = document.getElementById('thumb_down')

  if (show) {
    if (thumbUp) thumbUp.style.visibility = 'visible'
    if (thumbDown) thumbDown.style.visibility = 'visible'
  } else {
    if (thumbUp) thumbUp.style.visibility = 'hidden'
    if (thumbDown) thumbDown.style.visibility = 'hidden'
  }
}

//Jaccard Similarity
export const Jaccard = (set1: string[], set2: string[]) => {
  const intersect = new Set(set1.filter((value) => set2.includes(value)))
  const union = new Set([...set1, ...set2])
  return intersect.size / union.size
}

//Tokenize input into string array
export const Tokenize = (str: string) => {
  //Parse string and split
  let str_arr = str
    .toLowerCase()
    .replace("'re", ' are ')
    .replace("'ll", ' will ')
    .replace("'d", ' would ')
    .replace("'s", ' is ')
    .replace("'m", ' am ')
    .replace('?', ' ? ')
    .replace('!', ' ! ')
    .replace(',', ' ')
    .replace('.', ' ')
    .split(' ')

  //Remove empty elements
  for (let i = 0; i < str_arr.length; i++) {
    if (str_arr[i] === '') str_arr.splice(i--, 1)
  }

  // Remove duplicates
  const uniq_arr: Set<string> = new Set(str_arr)
  return Array.from(uniq_arr)
}

//Returns the indexs with Jaccard value greater than threshold
export const JaccardThreshold = (
  str_set: string[],
  db_set: string[][],
  threshold: number = 0.5
) => {
  //run Jaccard and record index of threshold values
  let threshold_index = []
  for (let j = 0; j < db_set.length; j++) {
    if (Jaccard(str_set, db_set[j]) >= threshold) threshold_index.push(j)
  }
  return threshold_index
}

//Algorithm for picking similar strings based
//on random numbers and rank.
export const ratingPick = (choices: any) => {
  //Nothing to choose from, or only one choice
  if (choices.length === 0) return null
  if (choices.length === 1) return choices[0]['response']

  //Variables used in calculation
  let my_data = []
  let cur_rank = 0
  let max_rank = 0
  let min = 9999999

  //obtain the minimum rating, parse the ratings
  //into Int and add them to my_data.
  for (const x in choices) {
    my_data.push(parseInt(choices[x]['rating']))
    if (choices[x]['rating'] < min) min = choices[x]['rating']
  }

  //Determines the algorithm for normalizing the data
  let negative = false
  if (min <= 1) negative = true

  //Determines the difference value
  let difference = min - 1
  if (negative === true) difference = -Math.abs(min - 1)

  for (const x in my_data) {
    my_data[x] -= difference //Modify data with difference
    max_rank += my_data[x] //Creating the max_rank value
  }

  //Generate our random number
  const rand = Math.random()

  //run probability algorithm
  for (const x in my_data) {
    // create a threshold for our first choice
    cur_rank += my_data[x] / max_rank

    // return the choice which lies in the threshold
    if (rand < cur_rank) {
      return choices[x]['response']
    }
  }
}
