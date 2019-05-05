import './style.scss';

class ImageCarousel {

    constructor(id, images) {
        this.container = document.getElementById(id);
        this.images = images;
        this.index = 0;
        this.init();
    }

    switch (x) {
        if (x !== this.index) {
            this.index = x;
            const buttons = new Array(...this.container.querySelectorAll('ul li'));
            buttons.map((elem, x) => elem.classList.remove('active'));
            const button = this.container.querySelector(`ul li[data-num="${x}"]`);
            button.classList.add('active');
            this.image.style.backgroundImage = `url(${this.images[this.index]})`;
        }
    }

    init() {
        this.interval = setInterval(() => this.switch((this.index + 1 >= this.images.length) ? 0 : this.index + 1), 3000);
        this.image = document.createElement('div');
        this.image.style.backgroundImage = `url(${this.images[this.index]})`;
        this.container.appendChild(this.image);
        this.buttons = document.createElement('ul');
        this.images.map((val, x) => {
            const button = document.createElement('li');
            button.setAttribute('data-num', x);
            if (x === this.index) button.classList.add('active');
            button.onclick = () => {
                clearInterval(this.interval);
                this.switch(x);
            }
            this.buttons.appendChild(button)
        });
        this.container.appendChild(this.buttons);
    }

}

window.ImageCarousel = ImageCarousel;