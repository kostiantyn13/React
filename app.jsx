//React создает виртуальный дом-элемент(обьектом)
//код JSX НОРМАЛЬНЫЕ ЛЮДИ пишут в файлах с расширением *.jsx  Это не обязательно, можно и js
//этот файл транспилируется в JavaScript
/*var jsx = (
  <div className="container">
    <img src="favicon.ico" />
    <h1>React</h1>
    <p>Библиотека для создания пользовательских интерфейсов</p>
  </div>
);
var hhh = React.createElement("div", null, jsx);
console.log(hhh); //всегда вернет обьект с кучей свойств
var dom = ReactDOM.render(jsx, document.getElementById("root"));
console.log(dom); //всегда вернет готовый (виртуальный) дом
//COMPONENT
//На базовом уровне это функция, которая возвращает один или несколько
//реакт элементов
*/
function Guru(props) {
  // это функциональний вид компонента
  // так как просто возвращает JSX
  // можно передать аргументы - СВОЙСТВА - property("props")
  //    можно использовать только выражения(напр. цикл - это не выражение, ибо ничего не возвращает)
  function handleClick() {
    return props.count++;
  };
  this.setState({
    this.count = count
  });
  return (
    <div>
      <div className="count">{props.count}</div>
      <img src={props.imgUrl} onClick={handleClick} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Guru
      imgUrl="favicon.ico"
      title="React"
      subtitle="Библиотека для создания пользовательских интерфейсов"
    />
    <Guru
      imgUrl="img/angular.png"
      title="Angular 2"
      subtitle="Один фреймворк"
    />
    <Guru
      imgUrl="img/ember.png"
      title="Ember"
      subtitle=""
    />
  </div>,
  document.getElementById("root")
);
//есть сложные компоненты
