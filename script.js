        // Массив с URL изображений котиков
        const catImages = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrDOYBCl-nBpMyOxnx8hdLl7yHA0X4NqI8sMI97u-6j_JlsaEquqwIG8xHTmGTszrhKw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5eB2MbL6P0N0ByhAkXGF-YEgDgDD_larmSZzTV2Rlapzhh5KHI2TFf66UAVJkklrocI&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NJr8ecs3_NVjnYVxU1-dMoT6giWQ5fe2a5SGw_mzzkQY9P0QmbneboiMi0u_FjYgCZM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zlsRczgEBcFDrW9uXa8GctgqPtU0MIOygQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zqFrNNGWXb_eUw3_LAazp5Ll6AbjDhWjRIGHMnfneryv0Q0eid7s87fNzulLoVmK58Y&usqp=CAU"
        ];

        // Функция для генерации случайного изображения котика
        function createRandomCatImage() {
            const img = document.createElement("img");
            img.src = catImages[Math.floor(Math.random() * catImages.length)];
            img.classList.add("cat-img");

            // Получение случайных координат в пределах окна
            const x = Math.random() * (window.innerWidth - 100); // Учитываем ширину изображения
            const y = Math.random() * (window.innerHeight - 100); // Учитываем высоту изображения

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            document.body.appendChild(img);

            // Удаление изображения через 5 секунд
            setTimeout(() => {
                img.remove();
            }, 5000);
        }

        // Создаем 10 случайных изображений котиков при загрузке страницы
        for (let i = 0; i < 10; i++) {
            createRandomCatImage();
        }

        // Создаем случайные изображения котиков каждую секунду
        setInterval(createRandomCatImage, 1000);
