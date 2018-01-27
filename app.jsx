//код JSX НОРМАЛЬНЫЕ ЛЮДИ пишут в файлах с расширением *.jsx  Это не обязательно, можно и js
//этот файл транспилируется в JavaScript
var jsx = (
  <div className="container">
    <img src="favicon.ico" />
    <h1>React</h1>
    <p>Библиотека для создания пользовательских интерфейсов</p>
  </div>
);
ReactDOM.render(jsx, document.getElementById("root"));
