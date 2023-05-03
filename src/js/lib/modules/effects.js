import $ from '../core';

$.prototype.animateOverTime = function (duration, callback, finish) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / duration, 1);

        callback(completion);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finish === 'function') {
                finish();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, finish) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
        };

        const ani = this.animateOverTime(duration, _fadeIn, finish);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function (duration, finish) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (completion) => {
            this[i].style.opacity = 1 - completion;
            if (completion === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, finish);
        requestAnimationFrame(ani);
    }

    return this;
};

// $.prototype.fadeToggle = function (duration, display, finish) {
//     for (let i = 0; i < this.length; i++) {
//         if (window.getComputedStyle(this[i]).display === 'none') {
//             this[i].style.display = display || 'block';

//             const _fadeIn = (completion) => {
//                 this[i].style.opacity = completion;
//             };

//             const ani = this.animateOverTime(duration, _fadeIn, finish);
//             requestAnimationFrame(ani);
//         } else {
//             const _fadeOut = (completion) => {
//                 this[i].style.opacity = 1 - completion;
//                 if (completion === 1) {
//                     this[i].style.display = 'none';
//                 }
//             };

//             const ani = this.animateOverTime(duration, _fadeOut, finish);
//             requestAnimationFrame(ani);
//         }
//     }
//     return this;
// };

$.prototype.fadeToggle = function (duration, display, finish) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const computedDisplay = window.getComputedStyle(element).display;

        if (computedDisplay === 'none') {
            $(element).fadeIn(duration, display, finish);
        } else {
            $(element).fadeOut(duration, finish);
        }
    }
    return this;
};
