import { render, screen } from '@testing-library/react'
import Chatbot from './Chatbot'
import { Jaccard, JaccardThreshold, ratingPick, Tokenize } from './chatbot_func'

test('Chatbot page: Renders', () => {
  render(<Chatbot />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})

test('Chatbot Functions: Jaccard', () => {
  const jaccard = Jaccard(['a', 'b', 'c', 'd'], ['a', 'b'])
  const expected = 0.5
  expect(jaccard).toEqual(expected)
})

test('Chatbot Functions: Tokenize', () => {
  // prettier-ignore
  const expected = ['they', 'are', 'i', 'will', 'that', 'would', '!', 'william', 'is', '?', 'am']
  const tokens = Tokenize("They're, I'll. that'd! William's? I'm?")
  expect(tokens).toEqual(expected)
})

test('Chatbot Functions: JaccardThreshold', () => {
  const jt = JaccardThreshold(['this', 'is'], [['is'], ['not'], ['this']], 0.5)
  const expected = [0, 2]
  expect(jt).toEqual(expected)
})

test('Chatbot Functions: ratingPick', () => {
  // With Random being used, is it even possible to predict the outcome?
  // const choice1 = {
  //   rating: "1",
  //   response: "hi",
  //   user_input: "hello there you",
  // }
  // const choice2 = {
  //   rating: "2",
  //   response: "hello",
  //   user_input: "hi there",
  // }
  // const rp = ratingPick([choice1, choice2])
})
