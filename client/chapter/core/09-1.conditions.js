/* -------------------------------------------------------------------------- */
/*                                  Condition                                 */
/* -------------------------------------------------------------------------- */

// 그 영화 봄?
// Yes | No
//     | 볼거임?
//     Yes | No

// 영화 봄?

const watchingMovie = () => {
  let didWatchMovie = confirm('영화 봄?');

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm('볼거임?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑');

      if (withWho === 'you') {
        console.log('ㅋ');
      }
    } else {
      console.log('ㄴ');
    }
  } else {
    console.log('안봄.');
  }
};

// 영화 볼거임?
// let didWatchMovie = 'no';
// let goingToWatchMovie = 'yes';

let didWatchMovie = prompt('영화 봤음?');
let goingToWatchMovie = prompt('같이 보자');

// let movieMessage = didWatchMovie.includes('no')
//   ? '그거 재밌음'
//   : goingToWatchMovie.includes('yes')
//     ? '같이 보실?'
//     : '별로.';

// console.log(movieMessage);

if (didWatchMovie.includes('yes')) {
  console.log('그거 재밌음');
} else {
  if (goingToWatchMovie.includes('yes')) {
    console.log('같이 보실');
  } else {
    console.log('별로');
  }
}

// 조건부 연산자
// 멀티 조선부 연산자 식

const render = (node, isActive) => {
  let template = `
  <div>${isActive ? '안녕' : '잘가셈.'}</div>
  `;

  node.insertAdjacentHTML('beforeend', template);
};
