module.exports = function(req, res) {

    setTimeout(function () {

        res.set('Content-Type', 'application/json');

        res.json([
            {
                background_img: 'assets/images/slide1.png'
                , title: "Победим в боевом кубке"
                , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                , buttons: [
                    'Подробне'
                ]
            }

            , {
                background_img: 'assets/images/slide2.png'
                , title: "Открытие раздела CS:GO на нашем сайте"
                , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                , buttons: [
                    'Буст звания'
                    , 'Акаунты'
                ]
            }

            , {
                background_img: 'assets/images/slide3.png'
                , title: "Буст Ранга от профессионалов"
                , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                , buttons: [
                    'Подробне'
                ]
            }

            , {
                background_img: 'assets/images/slide4.png'
                , title: "Продажа аккаунтов DOTA 2 с рейтингом"
                , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                , buttons: [
                    'Подробне'
                ]
            }
        ]);
    }, Math.random() * 8000);
};