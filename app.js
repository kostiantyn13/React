var image = React.createElement("img", { src: "favicon.ico" });
var title = React.createElement("h1", null, "React"); //от этого метода получаем элемент
//React - обьект
//метод принимает 3 елемента(название дом элемента, свойства, содержимое создаваемого элемента)

var subtitle = React.createElement(
  "p",
  null,
  "Библиотека для создания пользовательских интерфейсов"
);

var container = React.createElement(
  "div",
  { className: "container" },
  image,
  title,
  subtitle
);

ReactDOM.render(container, document.getElementById("root"));

//Javacript Syntax Extension (JSX) - расширение синтаксиса JavaScript
//все пустые элементы обязательно закрываются "/"
/*
<div className="container">
  <img src="favicon.ico" />
  <h1>React</h1>
  <p>Библиотека для создания пользовательских интерфейсов</p>
</div>;
*/
//Аналог кода в файле app.jsx
