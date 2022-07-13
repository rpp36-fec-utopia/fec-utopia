/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import {cleanup, fireEvent, render, screen} from '@testing-library/react';
 import '@testing-library/jest-dom';
 import {unmountComponentAtNode} from 'react-dom';
 import {act} from 'react-dom/test-utils';

import App from '../client/src/app.jsx';
import QASection from '../client/src/components/questionsAndAnswers/QASection.jsx';
import QuestionsList from '../client/src/components/questionsAndAnswers/QuestionsList.jsx';
import QuestionsListItem from '../client/src/components/questionsAndAnswers/QuestionsListItem.jsx';
import AnswersListItem from '../client/src/components/questionsAndAnswers/AnswersListItem.jsx';
import HelpfulAnswer from '../client/src/components/questionsAndAnswers/HelpfulAnswer.jsx';
import sampleData from '../client/src/sampleData.js'


describe('QA render', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('id', 'app');
    console.log(container);
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render QA Section', () => {
    act(() => {
      render(<QASection id={sampleData.product_id}/>)
    })
    expect(screen.getByTestId('QA-Section')).toHaveClass('section')
  })

  it('should render Questions List', () => {
    act(() => {
      render(<QuestionsList questions={sampleData.results}/>)
    })
    expect(screen.getByTestId('Questions-List')).toHaveClass('questionsList')
  })
});