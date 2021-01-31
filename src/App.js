import React from "react";
// import Potato from "./Potato";
/** 3.
 * return 시 <Potato />를 작성하면 import해서 rendering 가능
 */

 /** 4.
  * jsx의 두번째 특징
  * component에 정보를 보낼 수 있음
  */
function Food({ name, picture }){ /** 5. component는 대문자로 시작 */
  /** 6. { fav }
   * ES6 문법으로 props.fav == { fav }
   */
  //console.log(props.fav);
  return <div>
            <h1>I like {name}</h1>
            <img src={picture} alt={name}/>
        </div>
}

const foodILike = [
  {
    id:1,
    name: "Kimchi", 
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Ramen", 
    image: "https://i.pinimg.com/originals/20/58/fd/2058fd4a6bce10ada1bce68c229e6ca4.jpg"
  },
  {
    id:3,
    name: "candy", 
    image: "https://i.pinimg.com/originals/04/b9/0c/04b90c32869d09d91e8447c3f17b10c4.jpg"
  }
];
/** 6. map
 * map 함수는 arr의 item을 하나씩 꺼내오고
 * item의 개수만큼 돈 후에 return했던 값 들을 한번에 arr로 가져옴
 * map 함수의 매개변수로는 사용자함수를 보내면 됨.
 * 사용자 함수의 첫번째 인자는 item 한 개
 */

/** 1.
 * component는 html을 반환하는 function
 * react는 component를 사용해서 html처럼 작성할 때 사용
 * js와 html 사이의 조합을 JSX 이라고 함 : JSX는 react.js만의 개념
 * jsx == js + html
 */
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image} />)
      }
    </div>
  );
}
 /** 5. <Food favorite="kimchi" something={true} arr={["hi", 1, 2, 3, true]} />
  * food component에 kimchi라는 value로 property fav를 전달함
  * object도 value로 보낼 수 있음
  */

export default App;
