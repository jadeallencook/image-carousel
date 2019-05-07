import './style.scss';

class ImageCarousel {

    constructor(id, images) {
        this.container = document.getElementById(id);
        this.images = images;
        this.index = 0;
        this.init();
    }

    switch (x) {
        x = (x < 0) ? this.images.length - 1 : x;
        x = (x >= this.images.length) ? 0 : x;
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
        this.image = document.createElement('div');
        this.image.style.backgroundImage = `url(${this.images[this.index]})`;
        this.container.appendChild(this.image);
        this.buttons = document.createElement('ul');
        this.images.map((val, x) => {
            const button = document.createElement('li');
            button.setAttribute('data-num', x);
            if (x === this.index) button.classList.add('active');
            button.onclick = () => this.switch(x);
            this.buttons.appendChild(button)
        });
        this.container.appendChild(this.buttons);
        this.directional = document.createElement('div');
        this.right = document.createElement('div');
        this.right.innerText = 'next';
        this.right.onclick = () => this.switch(this.index + 1);
        this.left = document.createElement('div');
        this.left.innerText = 'back';
        this.left.onclick = () => this.switch(this.index - 1);
        this.directional.appendChild(this.left);
        this.directional.appendChild(this.right);
        this.container.appendChild(this.directional);
    }

}

window.ImageCarousel = ImageCarousel;