# Домашнее задание №3

  - Установить последнюю версию проекта. Обратить внимание и изучить:
      - теперь вместо 2-х терминов `good` и `product` обозначающих одно и тоже используется только `product`. Вместе с этим изменились имена некоторых переменных и методов.
      - `store` теперь состоит из 2-х модулей
      - в `production store` появилась новая технология `getters`. Обязательно изучите что это такое (ссылка на материал ниже)
  - __Обязательно__ прочитать статьи c официального сайта:
      - Vuex
          - [Геттеры](https://vuex.vuejs.org/ru/guide/getters.html)
          - [Модули](https://vuex.vuejs.org/ru/guide/modules.html)
      - Vue-Router
          - [Введение](https://router.vuejs.org/ru/)
          - [Начало работы](https://router.vuejs.org/ru/guide/#javascript)
          - [Динамические пути](https://router.vuejs.org/ru/guide/essentials/dynamic-matching.html)
          - [Режим HTML5 History](https://router.vuejs.org/ru/guide/essentials/history-mode.html#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BE%D0%B2)
  - Доработать компонент `CartPage`:
      - сделать отрисовку товаров из списка `order` _(вычисляемое свойство компоненты)_
      - добавить обработку событий нажатия на `+`, `-` и символа удаления по каждой отрисованной позиции. _([Обработка событий
](https://ru.vuejs.org/v2/guide/events.html))_
      - добавить вычисляемое свойство общей суммы покупки и вывести в соответствующем месте шаблона компонента
      - добавить возможность перехода на страницу товара при клике на изображение товара или при клике на его заголовок
  - Доработать модуль хранилища `cart`
      - добавить действия и мутации (`actions` и `mutation`) для изменения состояния хранилища по изменению количества товаров по каждой из позиции, добавления нового товара, удаление товара из списка покупок.

# Домашнее задание №2

  - Повторить все шаги сделанные на лекции
  - __Обязательно__ прочитать статьи c официального сайта:
      - [Что такое Vuex?](https://vuex.vuejs.org/ru/)
      - [Введение](https://vuex.vuejs.org/ru/guide/)
      - [Состояние](https://vuex.vuejs.org/ru/guide/state.html)
      - [Мутации](https://vuex.vuejs.org/ru/guide/mutations.html)
      - [Действия](https://vuex.vuejs.org/ru/guide/actions.html)
      - [Структура приложения](https://vuex.vuejs.org/ru/guide/structure.html)
      - [Отрисовка списков](https://ru.vuejs.org/v2/guide/list.html)
      - [Неизменяемый объект (wikipedia)](https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D0%BC%D1%8B%D0%B9_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82)
    - Разнообразьте тестовые данные: назначите другие цены, картинки и тд. Доведите количество товаров до 6.
    - Добавить в компонент `App`, все хуки жизненных циклов и изучить их аргументацию. Подсказка: используйте [spread syntax](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax), как здесь:

```javascript
...
{  
    data () {
        return {}
    },
    
    created (...args)  {
        console.log(...args)
    },
    
    mutation: {
...
```

# Домашнее задание №1

  - Повторить все шаги сделанные на лекции.
  - __Обязательно__ прочитать статьи c официального сайта:
      - [Введение](https://ru.vuejs.org/v2/guide/)
      - [Экземпляр Vue](https://ru.vuejs.org/v2/guide/instance.html)
      - [Синтаксис шаблонов](https://ru.vuejs.org/v2/guide/syntax.html)
      - [Вычисляемые свойства и слежение](https://ru.vuejs.org/v2/guide/computed.html)
      - [Обработка событий](https://ru.vuejs.org/v2/guide/events.html)
      - [Основы компонентов](https://ru.vuejs.org/v2/guide/components.html)
      - [Регистрация компонентов](https://ru.vuejs.org/v2/guide/components-registration.html)
      - [Входные параметры](https://ru.vuejs.org/v2/guide/components-props.html)
  - Дорелиазовать обработку атрибутов используемых в компоненте `good-card`.
