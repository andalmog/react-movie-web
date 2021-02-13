import React from "react";
import PropTypes from "prop-types";

// class component
/**
 * function component는 어떤 것을 return하며, screen에 표시됨
 * class component는 react component로 부터 확장되고, screen에 표시됨, 어떤 것을 return하지 않음
 * 
 * react는 "자동으로" 모든 class component의 render method를 실행함
 * class component에는 state가 있음
 * state는 object이고 변하는 data를 넣는 곳
 * 
 * setState()는 state를 refresh하고 render funtion을 호출
 * 
 * render function은 react component가 사용하는 유일한 function
 */

// component life cycle
/** Mounting : 태어나는 것
 * 1. constructor() : javascript에서 class를 만들 때 사용하는 것
 *    > constructor 호출 시점 : component가 mount될 떄, screen에 표시될 떄, page가 이동할 때
 * 2. render()
 * 3. componentDidMount()
 *    > component가 처음 render 될 때
 */
/** Updating
 * state를 변경할 때 update됨
 * 1. render()
 * 2. componentDidUpdate() : component가 update된 후 호출
 */
/** Unmounting : component가 죽을 때
 * 1. componentWillUnmount() : component가 떠날 때(페이지 새로고침, 꺼짐)
 */
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  };
  render(){ // render method
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
      </div>
    );
  }
}

export default App;
