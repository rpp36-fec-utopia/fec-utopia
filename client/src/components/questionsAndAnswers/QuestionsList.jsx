import React from 'react';

const list = [1, 2, 3, 4]

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="questionsList">
        <h5>Questions List</h5>
        {this.props.questions.map((item, i) =>
          <div class="question">
            <div class="qa">
              <div>{item.question_body}</div>
              <div>ANSWERS LIST</div>
            </div>
            <div class="helpfulAnswer">
              <button>Helpful</button>
              <button>Add Answer</button>
            </div>
          </div>
        )}
        {/* <div class="question">
          <div class="qa">
            <div>This is a Random Question</div>
            <div>I wanted to put this here in place of an answer</div>
          </div>
          <div class="helpfulAnswer">
            <button>Helpful</button>
            <button>Add Answer</button>
          </div>
        </div>
        <div class="question">
          <div class="qa">
            <div>This is Question #2</div>
            <div>Here is an Answer</div>
          </div>
          <div class="helpfulAnswer">
            <button>Helpful</button>
            <button>Add Answer</button>
          </div>
        </div>
        <div class="question">
          <div class="qa">
            <div>Here is Question #3</div>
            <div>This is what it would look like if someone wrote a really long answer and stuff</div>
          </div>
          <div class="helpfulAnswer">
            <button>Helpful</button>
            <button>Add Answer</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default QuestionsList;