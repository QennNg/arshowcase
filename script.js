const showInfo = () => {
    let y = 0;
    // const profileButton = document.querySelector("#profile-button");
    const webButton = document.querySelector("#web-button");
    const emailButton = document.querySelector("#email-button");
    const locationButton = document.querySelector("#location-button");
    const text = document.querySelector("#text");

    // profileButton.setAttribute("visible", true);
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
    webButton.addEventListener('click', function (evt) {
        
        text.setAttribute("value", "\nhttps://nvqenn.com/ \nPowered by Nvqenn");
        currentTab = 'web';
    });
    emailButton.addEventListener('click', function (evt) {
        text.setAttribute("value", "\ndragonqennfind@gmail.com \nPowered by Nvqenn");
        currentTab = 'email';
    });
    // profileButton.addEventListener('click', function (evt) {
    //     text.setAttribute("value", "The best cooking ever");
    //     currentTab = 'profile';
    // });
    locationButton.addEventListener('click', function (evt) {
        console.log("loc");
        text.setAttribute("value", "\nKuala Lumpur | Malaysia \nPowered by Nvqenn");
        currentTab = 'location';
    });

    text.addEventListener('click', function (evt) {
        if (currentTab === 'web') {
            window.location.href = "https://nvqenn.com/";
        }
        if (currentTab === 'email') {
            window.location.href = "https://www.google.com/gmail/";
        }
        if (currentTab === 'location') {
            window.location.href = "https://goo.gl/maps/PsyXqNNvgrY8YyF47";
        }
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
        for (let i = 0; i <= 2; i++) {
            document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
        }
    }

    
    const id = setInterval(() => {
        clearInterval(id);
        portfolioLeftButton.setAttribute("visible", true);
        portfolioRightButton.setAttribute("visible", true);
        portfolioLeftButton.addEventListener('click', () => {
            currentItem = (currentItem + 1) % 3;
            showPortfolioItem(currentItem);
        });
        portfolioRightButton.addEventListener('click', () => {
            currentItem = (currentItem - 1 + 3) % 3;
            showPortfolioItem(currentItem);
        });
        
            // paintandquestPreviewButton.addEventListener('click', () => {
            //     // alert("Button Is Clicked");
            //     paintandquestPreviewButton.setAttribute("visible", false);
            //     const testVideo = document.createElement("video");
            //     const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
            //     if (canplayWebm == "") {
            //         document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
            //         document.querySelector("#paintandquest-video-mp4").play();
            //     } else {
            //         document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
            //         document.querySelector("#paintandquest-video-webm").play();
            //     }
            // });
            
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
//   const avatar = document.querySelector("#avatar");
//   let z = -0.3;
//   const id = setInterval(() => {
//     z += 0.008;
//     if (z >= 0.3) {
//         clearInterval(id);
            onDone();
//     }
//     avatar.setAttribute("position", "0.125 -0.25 " + z);
//  }, 10);
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
                }, 150);
            });
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target found");
        });
        //this.el.emit('targetFound');
    }
});