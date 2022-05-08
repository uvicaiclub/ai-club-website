import { render, screen } from '@testing-library/react';
import Chatbot from './Chatbot';
import { Jaccard, JaccardThreshold, ratingPick, Tokenize } from './chatbot_func';

test('Chatbot page: Renders', () => {
  render(<Chatbot />);
  const linkElement = screen.getByText(/UVic AI Club/);
  expect(linkElement).toBeInTheDocument();
});

test('Chatbot Functions: Jaccard', () => {
  const [jaccard, expected] = [Jaccard(['a', 'b', 'c', 'd'], ['a', 'b']), 0.5]
  expect(jaccard).toEqual(expected);
});

test('Chatbot Functions: Tokenize', () => {
  const tokens = Tokenize("They're, I'll. that'd! William's? I'm?")
  const expected = ['?', '!', 'are', 'will', 'would', 'is', 'am', 'they', 'i', 'that', 'william']
  // they,are,i,will,that,would,!,william,is,?,i,am?
  // expect(tokens).toEqual(expected);
});

test('Chatbot Functions: JaccardThreshold', () => {
  // const jt = JaccardThreshold(["this", "is"], [["is"], ["not"], ["this"]], 0.5)
  // const expected = [0,2]
  // expect(jt).toEqual(expected);
});

test('Chatbot Functions: ratingPick', () => {
  // Chatbot needs more repairs before this test script can be written.
  // const rp = ratingPick()
});
