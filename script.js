const showInfo = () => {
    let y = 0;
    const profileButton = document.querySelector("#profile-button");
    const webButton = document.querySelector("#web-button");
    const emailButton = document.querySelector("#email-button");
    const locationButton = document.querySelector("#location-button");

    profileButton.setAttribute("visible", true);
    setTimeout(() => {
        webButton.setAttribute("visible", true);
    }, 150);
    setTimeout(() => {
        emailButton.setAttribute("visible", true);
    }, 300);
    setTimeout(() => {
        locationButton.setAttribute("visible", true);
    }, 450);

    let currentTab = '';
    profileButton.addEventListener('click', function (evt) {
        window.location.href = "https://www.instagram.com/nvqenn/?hl=en";
        currentTab = 'profile';
    });
    webButton.addEventListener('click', function (evt) {
        window.location.href = "https://nvqenn.com/";
        currentTab = 'web';
    });
    emailButton.addEventListener('click', function (evt) {
        window.location.href = "https://www.google.com/gmail/";
        currentTab = 'email';
    });
    locationButton.addEventListener('click', function (evt) {
        window.location.href = "https://goo.gl/maps/PsyXqNNvgrY8YyF47";
        currentTab = 'location';
    });
}

const showPortfolio = (done) => {
    const portfolio = document.querySelector("#portfolio-panel");
    const portfolioLeftButton = document.querySelector("#portfolio-left-button");
    const portfolioRightButton = document.querySelector("#portfolio-right-button");
    const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

    let y = 0;
    let currentItem = 0;

    portfolio.setAttribute("visible", true);

    const showPortfolioItem = (item) => {
        for (let i = 0; i <= 7; i++) {
            document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
        }
    }

    
    const id = setInterval(() => {
        clearInterval(id);
            portfolioLeftButton.setAttribute("visible", true);
            portfolioRightButton.setAttribute("visible", true);
            portfolioLeftButton.addEventListener('click', () => {
                currentItem = (currentItem + 1) % 8;
                showPortfolioItem(currentItem);
            });
            portfolioRightButton.addEventListener('click', () => {
                currentItem = (currentItem - 1 + 8) % 8;
                showPortfolioItem(currentItem);
            });


            paintandquestPreviewButton.addEventListener('click', () => {
                paintandquestPreviewButton.setAttribute("visible", false);
                const testVideo = document.createElement("video");
                const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
                if (canplayWebm == "") {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                    document.querySelector("#paintandquest-video-mp4").play();
                } else {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                    document.querySelector("#paintandquest-video-webm").play();
                }
            });

            setTimeout(() => {
                done();
            }, 250);
            
        y += 0.008;
        if (y >= 0.6) {
        }
        portfolio.setAttribute("position", "0 " + y + " -0.01");
    }, 10);
}

const showAvatar = (onDone) => {
            onDone();
}

AFRAME.registerComponent('mytarget', {
    init: function () {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            showAvatar(() => {
                setTimeout(() => {
                    showPortfolio(() => {
                        setTimeout(() => {
                            showInfo();
                        }, 150);
                    });
                }, 2500);
            });
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target found");
        });
    }
});
