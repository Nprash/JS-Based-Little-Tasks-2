const prevel = document.querySelector('.prev');
        const nextel = document.querySelector('.next');
        const imagesel = document.querySelectorAll('img');
        const imagecontainerel = document.querySelector('.image-container');
        console.log(imagesel)
        let currentimage = 1;
        let timeout;
        prevel.addEventListener("click", () => {
            currentimage--;
            clearTimeout(timeout);
            updateimages();
        });
        nextel.addEventListener("click", () => {
            currentimage++;
            clearTimeout(timeout);
            updateimages();

        });

        function updateimages() {
            if (currentimage > imagesel.length) {
                currentimage = 1;
            }
            else if (currentimage < 1) {
                currentimage = imagesel.length;
            }
            imagecontainerel.style.transform = `translateX(-${(currentimage - 1) * 500}px)`;

            timeout = setTimeout(() => {
                currentimage++;
                updateimages();  // to automatic update images  without clickng button of prev & next
            }, 3000)
        }
        updateimages();