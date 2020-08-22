const catsData = {
    descriptions: {
        defaultDesc: 'Чего сидишь? Порадуй котэ, купи.',
        selectedDesc: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        disabledDesc: 'Печалька, с курой закончился.'
    },
    cats: [
        {
            id: 1,
            text: 'Сказочное заморское яство',
            name: 'Нямушка',
            type: 'с фуа-гра',
            portion: {
                text: 'порций',
                count: 10
            },
            mouse: {
                text: 'мышь в подарок',
                count: ''
            },
            weight: '0,5',
            weightType: 'кг',
            disabled: false,
            selected: false
        },
        {
            id: 2,
            text: 'Сказочное заморское яство',
            name: 'Нямушка',
            type: 'с рыбой',
            portion: {
                text: 'порций',
                count: 40
            },
            mouse: {
                text: 'мыши в подарок',
                count: 2
            },
            weight: '2',
            weightType: 'кг',
            disabled: false,
            selected: true
        },
        {
            id: 3,
            text: 'Сказочное заморское яство',
            name: 'Нямушка',
            type: 'с курой',
            portion: {
                text: 'порций',
                count: 100
            },
            mouse: {
                text: 'мышей в подарок заказчик доволен',
                count: 5
            },
            weight: '5',
            weightType: 'кг',
            disabled: true,
            selected: false
        }
    ]
};

export const getCats = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(catsData)
        }, 1000)
    })
};
