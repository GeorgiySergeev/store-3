const categories = [
  // !АКСЕССУАРИ
  {
    _id: 'a6599923-4786-11ec-857e-0050569e3a4b',
    __text: 'Аксесуари',
    _parentId: '',
    children: [
      {
        _id: 'ccee5b28-4786-11ec-857e-0050569e3a4b',
        __text: 'Багажники',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'c8a2c8c0-484b-11ec-857f-0050569e3a4b',
        __text: "Велокомп'ютери",
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '74934060-d6d1-11ee-8901-0050569ee4d0',
        __text: 'Велоодяг',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'd9907580-484b-11ec-857f-0050569e3a4b',
        __text: 'Велосумки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'e3314901-484b-11ec-857f-0050569e3a4b',
        __text: 'Герметики та антипрокольна рідини',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'eca0d9e8-484b-11ec-857f-0050569e3a4b',
        __text: 'Тримачі для смартфона',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '5b3032ff-adf3-11ed-8749-0050569e3a4b',
        __text: 'Тримачі та стійки під велосипед',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'ff8f57d1-484b-11ec-857f-0050569e3a4b',
        __text: 'Дитячі велокрісла',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'c6ddc7d8-484c-11ec-857f-0050569e3a4b',
        __text: 'Замки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'd858df30-484c-11ec-857f-0050569e3a4b',
        __text: 'Захист',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'be1943c4-484c-11ec-857f-0050569e3a4b',
        __text: 'Дзвінки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'dc11acca-d60a-11ee-8900-0050569ee4d0',
        __text: 'Дзеркала',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'e8f71364-484c-11ec-857f-0050569e3a4b',
        __text: 'Інструменти',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '01de7088-484d-11ec-857f-0050569e3a4b',
        __text: 'Колеса для дитячих велосипедів',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'fa3128bf-484c-11ec-857f-0050569e3a4b',
        __text: 'Корзини',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'f120ae6a-484c-11ec-857f-0050569e3a4b',
        __text: 'Крила',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '1dd3bbfe-484d-11ec-857f-0050569e3a4b',
        __text: 'Насоси',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '27166080-484d-11ec-857f-0050569e3a4b',
        __text: 'Окуляри',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '361f3170-484d-11ec-857f-0050569e3a4b',
        __text: 'Перчатки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '2ea11ff4-484d-11ec-857f-0050569e3a4b',
        __text: 'Підніжки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '500ad4bb-484d-11ec-857f-0050569e3a4b',
        __text: 'Різне',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '47488f25-484d-11ec-857f-0050569e3a4b',
        __text: 'Рюкзаки',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '5f25579a-484d-11ec-857f-0050569e3a4b',
        __text: 'Світло',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '848998d3-484d-11ec-857f-0050569e3a4b',
        __text: 'Мастила, рідини',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '96fe03cd-484d-11ec-857f-0050569e3a4b',
        __text: 'Фляги',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: '8ec3db1c-484d-11ec-857f-0050569e3a4b',
        __text: 'Флягоутримувачі',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
      {
        _id: 'a03e5223-484d-11ec-857f-0050569e3a4b',
        __text: 'Шоломи',
        _parentId: 'a6599923-4786-11ec-857e-0050569e3a4b',
      },
    ],
  },
  //   !ВЕЛОСИПЕДИ
  {
    _id: '6532d9cf-46e8-11ec-857d-0050569e3a4b',
    __text: 'Велосипеди',
    _parentId: '',
    children: [
      [
        {
          _id: '1532d9cf-46e8-11ec-857d-0050569e3a4b',
          __text: 'Міські',
          _parentId: '6532d9cf-46e8-11ec-857d-0050569e3a4b',
        },
        {
          _id: '2532d9cf-46e8-11ec-857d-0050569e3a4b',
          __text: 'Гірські',
          _parentId: '6532d9cf-46e8-11ec-857d-0050569e3a4b',
        },
        {
          _id: '3532d9cf-46e8-11ec-857d-0050569e3a4b',
          __text: 'Єлектровелосипеди',
          _parentId: '6532d9cf-46e8-11ec-857d-0050569e3a4b',
        },
        {
          _id: '4532d9cf-46e8-11ec-857d-0050569e3a4b',
          __text: 'Дитячі',
          _parentId: '6532d9cf-46e8-11ec-857d-0050569e3a4b',
        },
      ],
    ],
  },

  // !ЗАПЧАСТИНИ
  {
    _id: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
    __text: 'Запчастини',
    _parentId: '',
    children: [
      [
        {
          _id: '0f894460-4847-11ec-857f-0050569e3a4b',
          __text: 'Вилки та амортизатори',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: '63546cdd-4848-11ec-857f-0050569e3a4b',
              _parentId: '0f894460-4847-11ec-857f-0050569e3a4b',
              __text: 'Амортизаційні вилки',
            },
            {
              _id: '9d62d29c-73b7-11ec-85ef-0050569ee4d0',
              _parentId: '0f894460-4847-11ec-857f-0050569e3a4b',
              __text: 'Жорсткі вилки (рігідні)',
            },
          ],
        },
        {
          _id: '53215c3b-4847-11ec-857f-0050569e3a4b',
          __text: 'Колеса та колісні частини',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c3: [
            {
              _id: '87c58377-4848-11ec-857f-0050569e3a4b',
              _parentId: '53215c3b-4847-11ec-857f-0050569e3a4b',
              __text: 'Втулки',
            },
            {
              _id: '92303594-4848-11ec-857f-0050569e3a4b',
              _parentId: '53215c3b-4847-11ec-857f-0050569e3a4b',
              __text: 'Колеса',
            },
            {
              _id: 'a198ee05-4848-11ec-857f-0050569e3a4b',
              _parentId: '53215c3b-4847-11ec-857f-0050569e3a4b',
              __text: 'Ободи',
            },
            {
              _id: 'a9c6691a-4848-11ec-857f-0050569e3a4b',
              _parentId: '53215c3b-4847-11ec-857f-0050569e3a4b',
              __text: 'Спиці',
            },
          ],
        },
        {
          _id: '63fc6ae4-4847-11ec-857f-0050569e3a4b',
          __text: 'Педалі',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: '2159d899-7495-11ec-85f0-0050569ee4d0',
              _parentId: '63fc6ae4-4847-11ec-857f-0050569e3a4b',
              __text: 'Контактні педалі',
            },
            {
              _id: 'cf4a93b4-4848-11ec-857f-0050569e3a4b',
              _parentId: '63fc6ae4-4847-11ec-857f-0050569e3a4b',
              __text: 'Педалі платформи',
            },
          ],
        },
        {
          _id: '7fe32d60-4847-11ec-857f-0050569e3a4b',
          __text: 'Покришки та камери',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: 'e30bf217-4848-11ec-857f-0050569e3a4b',
              _parentId: '7fe32d60-4847-11ec-857f-0050569e3a4b',
              __text: 'Камери',
            },
            {
              _id: '01bc3424-4849-11ec-857f-0050569e3a4b',
              _parentId: '7fe32d60-4847-11ec-857f-0050569e3a4b',
              __text: 'Камери мото',
            },
            {
              _id: 'edc7a778-4848-11ec-857f-0050569e3a4b',
              _parentId: '7fe32d60-4847-11ec-857f-0050569e3a4b',
              __text: 'Покришки',
            },
            {
              _id: 'f7ce2e0b-4848-11ec-857f-0050569e3a4b',
              _parentId: '7fe32d60-4847-11ec-857f-0050569e3a4b',
              __text: 'Покришки мото',
            },
          ],
        },
        {
          _id: 'a97ecd30-4847-11ec-857f-0050569e3a4b',
          __text: 'Рульове управління',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: '1d38144f-4849-11ec-857f-0050569e3a4b',
              _parentId: 'a97ecd30-4847-11ec-857f-0050569e3a4b',
              __text: 'Виноси',
            },
            {
              _id: '25caf096-4849-11ec-857f-0050569e3a4b',
              _parentId: 'a97ecd30-4847-11ec-857f-0050569e3a4b',
              __text: 'Ручки керма',
            },
            {
              _id: '2dc17c7b-4849-11ec-857f-0050569e3a4b',
              _parentId: 'a97ecd30-4847-11ec-857f-0050569e3a4b',
              __text: 'Рульові колонки',
            },
            {
              _id: '38b3ea55-4849-11ec-857f-0050569e3a4b',
              _parentId: 'a97ecd30-4847-11ec-857f-0050569e3a4b',
              __text: 'Керма',
            },
          ],
        },
        {
          _id: 'd967282b-4847-11ec-857f-0050569e3a4b',
          __text: 'Сідла і підсидільні штирі',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: '7fd58d54-4849-11ec-857f-0050569e3a4b',
              _parentId: 'd967282b-4847-11ec-857f-0050569e3a4b',
              __text: 'Підсидільні затискачі',
            },
            {
              _id: '89a9d812-4849-11ec-857f-0050569e3a4b',
              _parentId: 'd967282b-4847-11ec-857f-0050569e3a4b',
              __text: 'Підсидільні штирі',
            },
            {
              _id: '9810f5d7-4849-11ec-857f-0050569e3a4b',
              _parentId: 'd967282b-4847-11ec-857f-0050569e3a4b',
              __text: 'Сідла',
            },
          ],
        },
        {
          _id: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
          __text: 'Гальмівна система',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: 'b565af21-4849-11ec-857f-0050569e3a4b',
              _parentId: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
              __text: 'Ротори',
            },
            {
              _id: 'd1ff3d61-4849-11ec-857f-0050569e3a4b',
              _parentId: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
              __text: 'Гальма V-brake',
            },
            {
              _id: 'dbecce12-4849-11ec-857f-0050569e3a4b',
              _parentId: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
              __text: 'Гальма дисковi',
            },
            {
              _id: 'e5c286f3-4849-11ec-857f-0050569e3a4b',
              _parentId: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
              __text: 'Гальмівні колодки',
            },
            {
              _id: 'efccb3e0-4849-11ec-857f-0050569e3a4b',
              _parentId: 'effb5b5a-4847-11ec-857f-0050569e3a4b',
              __text: 'Гальмівні ручки',
            },
          ],
        },
        {
          _id: '077ba90c-46fe-11ec-857d-0050569e3a4b',
          __text: 'Трансмісія',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: 'ef96971a-484a-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Тримач перемикача (сережка, півень)',
            },
            {
              _id: '10630b02-484a-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Зiрки',
            },
            {
              _id: '26f0ba79-484a-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Каретки',
            },
            {
              _id: '1b9e64a2-484a-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Касети/Тріскачки',
            },
            {
              _id: '8089f28f-a337-11ed-873b-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Набір трансмісії',
            },
            {
              _id: '0801ea9c-484b-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Перемикачі задні',
            },
            {
              _id: '108866b1-484b-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Перемикачі передні',
            },
            {
              _id: '26f0ba7a-484a-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Важелі перемикання',
            },
            {
              _id: '19c7c0a7-484b-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Ланцюги',
            },
            {
              _id: '3681187b-484b-11ec-857f-0050569e3a4b',
              _parentId: '077ba90c-46fe-11ec-857d-0050569e3a4b',
              __text: 'Шатуни',
            },
          ],
        },
        {
          _id: '15ed0967-4848-11ec-857f-0050569e3a4b',
          __text: 'Троси та сорочки',
          _parentId: '9f86a15a-46e8-11ec-857d-0050569e3a4b',
          c2: [
            {
              _id: '59e3e1be-484b-11ec-857f-0050569e3a4b',
              _parentId: '15ed0967-4848-11ec-857f-0050569e3a4b',
              __text: 'Боудени (обплетення троса)',
            },
            {
              _id: '63ff2df3-484b-11ec-857f-0050569e3a4b',
              _parentId: '15ed0967-4848-11ec-857f-0050569e3a4b',
              __text: 'Троса гальма і перемикання',
            },
          ],
        },
      ],
    ],
  },

  // !САМОКАТИ
  {
    _id: 'ab3f1c45-d6df-11ee-8901-0050569ee4d0',
    __text: 'Самокати',
    _parentId: '',
    children: [],
  },

  //!ЕЛЕКТРОКОПЛЕКТУЮЧІ
  {
    _id: '369674ba-d713-11ee-8901-0050569ee4d0',
    __text: 'Електрокоплектуючі',
    _parentId: '',
    children: [
      [
        {
          _id: '5c08d6a3-d717-11ee-8901-0050569ee4d0',
          __text: 'Акумулятори',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '8a06c2bb-d717-11ee-8901-0050569ee4d0',
          __text: 'Дисплеї',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: 'be74c323-d717-11ee-8901-0050569ee4d0',
          __text: 'Зарядні пристрої',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '4bb02b19-d718-11ee-8901-0050569ee4d0',
          __text: 'Кабелі',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '924a9020-d718-11ee-8901-0050569ee4d0',
          __text: 'Контролери',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: 'b421d406-d718-11ee-8901-0050569ee4d0',
          __text: 'Мотори',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: 'fc5a9192-d718-11ee-8901-0050569ee4d0',
          __text: 'Ручки газу',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '82af45c0-d719-11ee-8901-0050569ee4d0',
          __text: 'Системи допомоги педалюванню',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '01c4bdff-d71a-11ee-8901-0050569ee4d0',
          __text: 'Електротормозні ручки',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '219a1f0e-d71a-11ee-8901-0050569ee4d0',
          __text: 'Гальмівні сенсори',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: 'daf667f5-d718-11ee-8901-0050569ee4d0',
          __text: 'Фари',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
        {
          _id: '4a6557c0-d71a-11ee-8901-0050569ee4d0',
          __text: 'Електричний велонабір',
          _parentId: '369674ba-d713-11ee-8901-0050569ee4d0',
        },
      ],
    ],
  },

  //!ЕЛЕКТРОСКУТЕР
  {
    _id: '15cd057c-f2a1-11ef-8a36-0050569e3a4b',
    __text: 'Електроскутер',
    _parentId: '',
    children: [],
  },
];

// Вспомогательная функция для поиска категории по ID
const getCategoryById = (id) => {
  return categories.find((category) => category._id === id);
};

// Вспомогательная функция для получения только родительских категорий
const getParentCategories = () => {
  return categories.filter((category) => !category._parentId);
};

// Получение дочерних категорий по ID родителя или массиву ID родителей
const getChildrenCategories = (parentIds) => {
  // Преобразуем в массив, если передан один ID
  const idsArray = Array.isArray(parentIds) ? parentIds : [parentIds];
  let allChildren = [];

  // Обрабатываем каждый ID родительской категории
  idsArray.forEach((parentId) => {
    // Находим родительскую категорию
    const parentCategory = getCategoryById(parentId);

    if (!parentCategory || !parentCategory.children) {
      return; // Skip to next iteration if no children
    }

    // Проверяем структуру children - может быть вложенный массив
    if (Array.isArray(parentCategory.children[0])) {
      allChildren = [...allChildren, ...parentCategory.children[0]];
    } else {
      allChildren = [...allChildren, ...parentCategory.children];
    }
  });

  return allChildren;
};

// Получение всех вложенных категорий (включая все уровни вложенности)
const getAllDescendantCategoryIds = (categoryId) => {
  const result = [categoryId];
  const processedIds = new Set([categoryId]);

  // Рекурсивная функция для обхода всех уровней вложенности
  const processCategory = (catId) => {
    const category = getCategoryById(catId);
    if (!category) return;

    // Обработка прямых потомков
    const children = getChildrenCategories(catId);

    if (children && children.length > 0) {
      children.forEach((child) => {
        if (!processedIds.has(child._id)) {
          result.push(child._id);
          processedIds.add(child._id);

          // Проверяем наличие вложенных категорий (c2, c3 и т.д.)
          if (child.c2) {
            child.c2.forEach((c2Item) => {
              if (!processedIds.has(c2Item._id)) {
                result.push(c2Item._id);
                processedIds.add(c2Item._id);
              }
            });
          }

          if (child.c3) {
            child.c3.forEach((c3Item) => {
              if (!processedIds.has(c3Item._id)) {
                result.push(c3Item._id);
                processedIds.add(c3Item._id);
              }
            });
          }

          // Рекурсивно обрабатываем потомков
          processCategory(child._id);
        }
      });
    }
  };

  processCategory(categoryId);
  return result;
};

// Обновляем функцию getAllCategoryIds для использования новой функции
const getAllCategoryIds = (categoryId) => {
  return getAllDescendantCategoryIds(categoryId);
};

// Проверка, является ли категория родительской
const isParentCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category && (!category._parentId || category._parentId === '');
};

// Получение родительской категории для подкатегории
const getParentForCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  if (category && category._parentId) {
    return getCategoryById(category._parentId);
  }
  return null;
};

export {
  getCategoryById,
  getParentCategories,
  getChildrenCategories,
  getAllCategoryIds,
  getAllDescendantCategoryIds, // Экспортируем новую функцию
  isParentCategory,
  getParentForCategory,
};
export default categories;
