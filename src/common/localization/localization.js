const localization = {
    en: {
        header: {
            pageTitle: {
                mainPageTitle: "Pizza Dough Calculator"
            },
            language: {
                currentLanguage: "EN",
                currentFlag: "🇬🇧",
            }
        },
        main: {
            mainContent: {
                whatIsIt: {
                    whatPageTitle: "Do you like pizza making as me? You are in the right place!",
                    whatPageDescription: "This simple tools can help you quickly calculate proportion of ingridients to make the best pizza in your whole life!",
                    whatPageButton: "Let's go!"
                },
                calculate: {
                    calculatePageTitle: "Pizza-calculator",
                    calculateInputSection: {
                        pageTitle: "Let's calculate some ingridients!",
                        radioTitle: "Choose correct answer:",
                        radioContent1: "I know weight off pizza dough",
                        radioContent2: "I know how many flour i want to use",
                        inputDescription1: "Pizza-ball weight for 1 pizza(g):",
                        inputDescription2: "Count of pizza's:",
                        inputDescription3: "Flour weight(g):",
                        inputDescription4: "Are you using fresh or dry yeast?",
                        fresh: "Fresh",
                        dry: "Dry",
                        resetButton: "Reset to default",
                        submitButton: "Calculate"
                    },
                    calculationResult: {
                        pageTitle: "Calculation Result:",
                        mass: "g",
                        count: "pcs",
                        volume: "ml",
                        resultDescription1: "Pizza-ball weight:",
                        resultDescription2: "Count of Pizza's:",
                        resultDescription3: "Flour:",
                        resultDescription4: "Water:",
                        resultDescription5: "Olive Oil:",
                        resultDescription6: "Sugar:",
                        resultDescription7: "Salt:",
                        resultDescription8: "Yeast",
                        backButton: "Try another reciept?"
                    }
                },
                about: {
                    aboutPageTitle: "About this Project"
                },
                contacts: {
                    contactsPageTitle: "My Contacts"
                }
            },
            mainMenu: [
                {
                    name: "What is it?",
                    link: "/",
                    id: 11
                },
                {
                    name: "Calculate",
                    link: "/calculate",
                    id: 12
                },
                {
                    name: "About",
                    link: "/about",
                    id: 13
                },
                {
                    name: "Contacts",
                    link: "/contacts",
                    id: 14
                }
            ]
        },
        footer: {},
        common: {
            unavivablePage: {
                unavivablePageTitle: "Ooops!",
                unavivablePageDescription1: "It looks like you trying to get unaviable resources from",
                unavivablePageDescription2: "and got a bad result like",
                unavivablePageDescription3: "error 404",
                unavivablePageDescription4: "Don't worry about it! Just click on the button bellow and relax :)",
                unavivablePageButton: "Go Home"
            }
        }
    },

    ru: {
        header: {
            pageTitle: {
                mainPageTitle: "Пицца-калькулятор"
            },
            language: {
                currentLanguage: "RU",
                currentFlag: "🇷🇺",
            }
        },
        main: {
            mainContent: {
                whatIsIt: {
                    whatPageTitle: "Если ты любишь пиццу так же как я, ты здесь не зря!",
                    whatPageDescription: "Это простое приложение поможет тебе замесить тесто мечты, рассчитав все необходимые пропорции ингридиентов для самой вкусной пиццы в твоей жизни!",
                    whatPageButton: "Вперед!"
                },
                calculate: {
                    calculatePageTitle: "Пицца-калькулятор",
                    calculateInputSection: {
                        pageTitle: "Время посчитать ингридиенты!",
                        radioTitle: "Выберите правильное утверждение:",
                        radioContent1: "Я знаю сколько теста должно получится",
                        radioContent2: "У меня есть мука и я хочу узнать сколько ингридиентов нужно",
                        inputDescription1: "Вес одной основы, г:",
                        inputDescription2: "Количество основ, шт:",
                        inputDescription3: "Вес муки, г:",
                        inputDescription4: "Какие дрожжи предпочитаете?",
                        fresh: "Живые",
                        dry: "Сухие",
                        resetButton: "Начнем сначала?",
                        submitButton: "Считаем!"
                    },
                    calculationResult: {
                        pageTitle: "Результаты расчета:",
                        mass: "г",
                        count: "шт",
                        volume: "мл",
                        resultDescription1: "Вес основы:",
                        resultDescription2: "Количество пицц:",
                        resultDescription3: "Мука:",
                        resultDescription4: "Вода:",
                        resultDescription5: "Оливковое масло:",
                        resultDescription6: "Сахар:",
                        resultDescription7: "Соль:",
                        resultDescription8: "Дрожжи",
                        backButton: "Попробуем другие пропорции?"
                    }
                },
                about: {
                    aboutPageTitle: "Об этом проекте"
                },
                contacts: {
                    contactsPageTitle: "Как меня найти?"
                }
            },
            mainMenu: [
                {
                    name: "Что это?",
                    link: "/",
                    id: 11
                },
                {
                    name: "Калькулятор",
                    link: "/calculate",
                    id: 12
                },
                {
                    name: "О проекте",
                    link: "/about",
                    id: 13
                },
                {
                    name: "Контакты",
                    link: "/contacts",
                    id: 14
                }
            ]
        },
        footer: {},
        common: {
            unavivablePage: {
                unavivablePageTitle: "Ууупс!",
                unavivablePageDescription1: "Похоже на то, что вы пытались получить несуществуюший контент по ссылке",
                unavivablePageDescription2: "и получили в ответ",
                unavivablePageDescription3: "ошибка 404",
                unavivablePageDescription4: "Не стоит переживать по этому поводу! Просто нажмите на кнопочку ниже :)",
                unavivablePageButton: "Домой"
            }
        }
    }
}

export default localization