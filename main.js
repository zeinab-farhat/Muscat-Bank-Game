var start_music;
var collect_music;
var player_src;

$(document).ready(function () {
    window.parent.postMessage(JSON.stringify({'event': 'mmp_ad_content_ready_with_close'}), '*');
    start_music = new sound("assets/audio/music.mp3");
    collect_music = new sound2('assets/audio/collect.mp3');
    $(".frame-1").show();

});

$(document).on("click", ".play-btn", function () {
    $(".frame-1").hide();
    $(".frame-2").show();
    start_music.play();
});

$(document).on("click", ".close-btn", function () {
    window.parent.postMessage(JSON.stringify({event: "mmp_ad_exit"}), "*");
    $('#wrapper').remove();
});

//function to share score to fb
$(document).on("click", ".fb", function () {
    var field_list = {
        u: window.location.href,
        quote: 'حصلت على' + score + 'نقطة في لعبة #عيديتك_علينا من   @bankmuscat جرب حظك لفرصة الفوز بعيدية من بنك مسقط',
    };
});

//function to share score to twitter
$(document).on("click", ".twitter", function () {
    var field_list = {
        url: window.location.href,
        text: 'حصلت على' + score + 'نقطة في لعبة #عيديتك_علينا من @bankmuscat جرب حظك لفرصة الفوز بعيدية من بنك مسقط',
    };
    window.open('https://twitter.com/share?' + jQuery.param(field_list), '_blank', 'width=550,height=420').focus();
});

$(document).on("click", ".share-btn", function () {
    $(".frame-5").hide();
    $(".frame-6").show();
});

// This code handles the submission of user information upon clicking the "send-info-btn" button.
// It validates the input fields, sends the user's information to a specified endpoint if all fields are filled out correctly,
// and displays error messages if any fields are missing or if the email address is invalid.
$(document).on("click", ".send-info-btn", function () {
    var name = $('#user_name').val();
    var familyName = $('#user_family_name').val();
    var email = $('#user_email').val();
    var phone = $('#user_phone').val();
    if (name !== '' && familyName !== '' && email !== '' && phone !== '') {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($('#user_email').val())) {
            var pixel = new Image();

            pixel.src = "https://europe-west2-mmpww-vendo.cloudfunctions.net/upload_user_info_for_muscat_game?user_name=" + name + "&user_family_name=" + familyName + "&user_email=" + email + "&user_phone_number=" + phone + "&score=" + parseInt(score);
            $(".frame-6").hide();
            $(".frame-7").show();
            $('.error-email').hide();
        } else {
            document.getElementById("user_email").focus();
            $('.error-email').show();
        }

    } else {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($('#user_email').val())) {
            $('.error-email').hide();
            //
        } else {
            $('.error-email').show();
            document.getElementById("user_email").focus();
        }
        $(".error-text").css({'display': 'block'});

    }
});

// This code generates an HTML document containing terms and conditions
// in Arabic upon clicking the element with the class "copy-right".
// It then opens a new browser tab and displays the generated content.

$(document).on("click", ".copy-right", function () {

    var html = '<p>الأهلية: مسابقة (عيديتك علينا ) متاحة فقط لمن يقوم بالتسجيل على صفحة المسابقة على الإنترنت. المسابقة متاحة فقط للمواطنين و المقيمين في السلطنة. لا يحق لموظفي بنك مسقط المشاركة في المسابقة.</p>';
    html += '<p >\n' + '2. الموافقة على القواعد: من خلال المشاركة، فإنك توافق على أن تكون ملزمًا تمامًا دون قيد أو شرط بهذه القواعد، وأنت تقر وتضمن أنك تستوفي متطلبات الأهلية المنصوص عليها هنا. بالإضافة إلى ذلك، فإنك توافق على قبول قرارات بنك مسقط، باعتبارها نهائية وملزمة من حيث صلتها بالمحتوى. تخضع المسابقة لجميع القوانين المحلية المعمول بها.\n</p>';
    html += '<p>\n' + '3. فترة المسابقة: سيتم قبول المشاركات عبر الإنترنت بدءًا من ١٢ مايو ٢٠٢١ وتنتهي في ١٧  مايو ٢٠٢١.\n' + '\n</p>';
    html += '<p>\n' +
        '4. كيفية الاشتراك: يجب الاشتراك في المسابقة عن طريق إرسال "إدخال" باستخدام النموذج الموجود على الإنترنت في موقع المسابقة. يجب أن يفي الإدخال بجميع متطلبات المسابقة، كما هو محدد، ليكون مؤهلاً للفوز بجائزة. قد يتم استبعاد المشاركات غير المكتملة أو التي لا تلتزم بالقواعد أو المواصفات وفقًا لتقدير البنك المطلق. يمكنك الدخول مرة واحدة فقط ويجب عليك ملء المعلومات المطلوبة. لا يمكنك إدخال مرات أكثر مما هو محدد باستخدام عناوين بريد إلكتروني أو هويات أو أجهزة متعددة في محاولة للتحايل على القواعد. إذا كنت تستخدم طرقًا احتيالية أو حاولت بطريقة أخرى التحايل على القواعد، فقد يتم حذف طلبك من الأهلية وفقًا لتقدير بنك مسقط المطلق.\n</p>';
    html += '<p>\n' +
        '5. الجوائز: سيحصل الفائز على قيمة النقاط التي قام بتجميعها في اللعبة. وسيقدم البنك جوائز لمن يقوم بنشر مشاركته في المسابقة عبر وسائل التواصل الاجتماعي. كما لن يُسمح باستبدال الجائزة أو تحويل / التنازل عن الجائزة للآخرين أو طلب المكافئ النقدي من قبل الفائزين. يشكل قبول الجائزة إذنًا لبنك مسقط لاستخدام اسم الفائز لأغراض الدعاية دون تعويض إضافي، ما لم يحظر القانون ذلك.\n</p>';
    html += '<p>6. الاحتمالات: تعتمد احتمالات الفوز على عدد الإدخالات المؤهلة المستلمة.</p>';
    html += '<p>7. اختيار الفائز وأخطاره: سيتم اختيار الفائزين في المسابقة في سحب عشوائي تحت إشراف موظفي البنك. سيتم إخطار الفائز عبر البريد الإلكتروني الذي أدخلوه للمسابقة وذلك في غضون خمسة (5) أيام بعد اختيار الفائز. لا يتحمل البنك أي مسؤولية عن فشل الفائز في تلقي الإشعارات بسبب البريد العشوائي للفائزين أو البريد الإلكتروني غير الهام أو إعدادات الأمان الأخرى أو بسبب تقديم الفائزين لمعلومات اتصال غير صحيحة أو غير فعالة. إذا تعذر الاتصال بالفائز المختار، أو كان غير مؤهل، أو فشل في المطالبة بالجائزة في غضون 15 يومًا من وقت إرسال إشعار الجائزة، فقد يتم مصادرة الجائزة واختيار الفائز البديل.</p>';
    html += '<p>\n' + '8. الحقوق الممنوحة من قبلك: بإدخال هذا المحتوى، فإنك تدرك أن بنك مسقط أو أي شخص يتصرف نيابة عن البنك، أو المرخص لهم، لهم الحق، حيثما يسمح القانون، دون أي إشعار آخر أو مراجعة أو الموافقة على نشر وبث وتوزيع واستخدام، بما في ذلك، اسم الدخول واسم الفائز والصورة، صورة أو بيانات حول المسابقة، ومعلومات عن السيرة الذاتية أخبار أو دعاية أو معلومات لأغراض التجارة والإعلان والعلاقات العامة والأغراض الترويجية دون أي تعويض إضافي. \n</p>';
    html += '<p>9. الشروط: يحتفظ بنك مسقط بالحق في إلغاء أو إنهاء أو تعديل أو تعليق المسابقة (وفقًا لتقديره الخاص) في حالة وجود فيروس أو أخطاء أو تدخل بشري غير مصرح به أو احتيال أو أسباب أخرى خارجة عن إرادته ومؤثرة في إدارة المسابقة أو الأمن أو حسن سير المسابقة. في مثل هذه الحالة يحتفظ بنك مسقط بالحق وفقًا لتقديره المطلق في استبعاد أي شخص يعبث أو يحاول العبث بعملية الدخول أو تشغيل المسابقة أو الموقع الإلكتروني أو ينتهك هذه الشروط والأحكام.</p>';

    var tab = window.open('about:blank', '_blank');
    tab.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="main.css"></head><body class="copy-right-body">');
    tab.document.write('<div dir="rtl" class="copy-right-text">' + html + '</div>'); // where 'html' is a variable containing your HTML
    tab.document.write('</body></html>');
    tab.document.close(); //
});

$(document).on("click", ".next-btn", function () {
    if (document.getElementById("player").src.includes("assets/frame2/girl.png")) {

        document.getElementById("player").src = "assets/frame2/boy.png";
    } else {
        document.getElementById("player").src = "assets/frame2/girl.png";
    }
});

$(document).on("click", ".prev-btn", function () {

    if (document.getElementById("player").src.includes("assets/frame2/girl.png")) {
        document.getElementById("player").src = "assets/frame2/boy.png";
    } else {
        document.getElementById("player").src = "assets/frame2/girl.png";
    }
});

$(document).on("click", ".player", function () {
    if (document.getElementById("player").src.includes('assets/frame2/girl.png')) {
        player_src = 'assets/girl.png';
    } else {
        player_src = 'assets/boy.png';
    }

    $(".frame-2").hide();
    $(".frame-3").show();
});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}

function sound2(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;

    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("type", "audio/mpeg");
    // this.sound.setAttribute("muted", "true");
    // this.sound.muted= true;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}

// This funciton is to start the game when clicking on 'start-btn'
$(document).on("click", ".start-btn", function () {
    start_music.stop();
    $(".frame-3").hide();
    $(".game-wrapper").show();
    var width = document.getElementsByClassName('game-wrapper')[0].offsetWidth;
    var height = document.getElementsByTagName('body')[0].offsetHeight - document.getElementsByClassName('header')[0].offsetHeight;
    var lower_height = $('.lower-image').height();
    document.getElementById('falling_game').style.width = width + 'px';
    document.getElementById('falling_game').style.height = height + 'px';
    $('.frame-6').css('height', height + 40 + 'px');
    start_game();
});

var replay_game = function () {
    start_music.stop();
    clearTimeout(time);
    pausedGame = false;
    $('.overlay').hide();
    gamearea.clear();
    gamearea.stop();
    score = 0;
    myObstacles = [];
    myObstacles2 = [];
    myObstacles3 = [];
    myObstacles4 = [];
    $(".frame-4").hide();
    lives = 3;
    counter = 0;
    num = 3;
    fill_lives();
    document.getElementById('coins_score').innerText = '0';
    document.getElementById('atm_score').innerText = '0';
    document.getElementById('cards_score').innerText = '0';
    jump();
    player.newPos();
    start_game();
};

$(document).on("click", ".replay-btn", function () {
    replay_game();
});

$(document).on("click", ".replay-final-btn", function () {
    clearTimeout(time);
    pausedGame = false;
    $('.overlay').hide();
    gamearea.clear();
    gamearea.stop();
    score = 0;
    myObstacles = [];
    myObstacles2 = [];
    myObstacles3 = [];
    myObstacles4 = [];
    document.getElementById('coins_score').innerText = '0';
    document.getElementById('atm_score').innerText = '0';
    document.getElementById('cards_score').innerText = '0';
    fill_lives();

    $(".frame-5").hide();
    $(".game-wrapper").show();
    lives = 3;
    counter = 0;
    num = 3;
    jump();
    player.newPos();
    start_game();
});

var fill_lives = function () {
    for (var i = 1; i <= 3; i++) {
        $('#life' + i).css('opacity', '1');
    }
}

let y = 0;
let x = 0;
let minGap = 100;
let maxGap = 1500;
let gap = randGap();
var fire_image;

var start_game = function () {
    gamearea.start();
}
var myObstacles = [];
var myObstacles2 = [];
var myObstacles3 = [];
var myObstacles4 = [];
var Cards = [];
var ATM = [];
var Coins = [];
var range;
var elements = [myObstacles2, myObstacles3, myObstacles4];
var card_image;

function obstacle() {
    this.height = 60;
    this.width = 30;
    this.x = 600;
    this.z = Math.floor($('.lower-image').height() - 30);
    fire_image = new Image();
    fire_image.src = 'assets/fire.png';
    this.y = (gamearea.canvas.height) - this.z - (fire_image.naturalHeight);
    this.draw = function () {
        fire_image = new Image();
        fire_image.src = 'assets/fire.png';
        gamearea.context.drawImage(fire_image, this.x, this.y, fire_image.naturalWidth / 1.5, fire_image.naturalHeight / 1.5);
    }
}

function obstacle2() {
    this.height = 60;
    this.width = 30;
    this.x = 900;
    card_image = new Image();
    card_image.src = 'assets/card.png';
    range = Math.floor($('.lower-image').height()) + 20;
    var random = Math.random() * (range - (range - 20)) + (range - 20);
    this.y = gamearea.canvas.height - range - random + 25;
    this.draw = function () {
        card_image = new Image();
        card_image.src = 'assets/card.png';
        gamearea.context.save();
        gamearea.context.drawImage(card_image, this.x, this.y, card_image.naturalWidth / 5, card_image.naturalHeight / 5);
        gamearea.context.restore();
    }
}

function obstacle3() {
    this.height = 60;
    this.width = 30;
    this.x = 900;
    card_image = new Image();
    card_image.src = 'assets/coin.png';
    range = Math.floor($('.lower-image').height()) + 20;
    var random = Math.random() * (range - (range - 20)) + (range - 20);
    this.y = gamearea.canvas.height - range - random + 25;
    this.draw = function () {
        card_image = new Image();
        card_image.src = 'assets/coin.png';
        gamearea.context.save();
        gamearea.context.drawImage(card_image, this.x, this.y, card_image.naturalWidth / 5, card_image.naturalHeight / 5);
        gamearea.context.restore();
    }
}

function obstacle4() {
    this.height = 60;
    this.width = 30;
    this.x = 900;
    card_image = new Image();
    card_image.src = 'assets/atm.png';
    range = Math.floor($('.lower-image').height()) + 20;
    var random = Math.random() * (range - (range - 20)) + (range - 20);
    this.y = gamearea.canvas.height - range - random + 25;
    this.draw = function () {
        card_image = new Image();
        card_image.src = 'assets/atm.png';
        gamearea.context.save();
        gamearea.context.drawImage(card_image, this.x, this.y, card_image.naturalWidth / 5, card_image.naturalHeight / 5);
        gamearea.context.restore();
    }
}

var max = 1200;
var min = 500;

function randGap() {
    return Math.floor(Math.random() * (1200 - 500 + 1)) + 500;
}

function randGap2() {
    return Math.floor(Math.random() * (420 - 300 + 1)) + 300;
}

function randGap3() {
    return Math.floor(Math.random() * (150 - 100 + 1)) + 100;
}

function randGapElements() {
    return Math.floor(minGap + Math.random() * (170 - minGap + 1));
}


function everyinterval(n) {
    if (gamearea.frame % n === 0) return true;
    return false;
}

function everyintervalElements(n) {
    if (gamearea.frameElements % n === 0) return true;
    return false;
}

let lives = 3;
let counter = 0;
let num = 3;
let random = randGap();
let random2 = randGapElements();
var gameEnded = false;
var count = 0;
let score = 0;
var coin;
var collision;
var updated = 0;
var collectX;
var collectY;
var pausedGame = false;
var time;

/**
 * Manages the game area, including canvas setup, game loop, and rendering.
 * Handles player interactions, obstacle generation, collision detection, and score tracking.
 */
var gamearea = {
    canvas: document.createElement('canvas'),
    canvas2: document.createElement('canvas'),
    start: function () {
        this.canvas.height = document.getElementById('falling_game').offsetHeight;
        this.canvas.width = document.getElementById('falling_game').offsetWidth;
        this.canvas2.height = document.getElementById('falling_game').offsetHeight;
        this.canvas2.width = document.getElementById('falling_game').offsetWidth;
        document.getElementById('falling_game').appendChild(this.canvas);
        document.getElementById('falling_game').appendChild(this.canvas2);
        this.context = this.canvas.getContext('2d');
        this.context2 = this.canvas2.getContext('2d');
        this.player_src = player_src;
        this.frame = 0;
        this.frameElements = 0;
        this.interval = setInterval(this.updateGameArea, 5);
        this.lowerHeight = Math.floor($('.lower-image').height());
        window.addEventListener('click', jump);
        base_image = new Image();
        base_image.src = 'assets/girl1.png';
        player.start();
        jump();
        player.newPos();
    },
    updateGameArea: function () {
        updated++;

        gamearea.clear();
        if (pausedGame === false) {
            if (everyinterval(gap)) {
                myObstacles.push(new obstacle());
                gamearea.frame = 0;
                if (score >= 300 && score < 400) {
                    gap = randGap2();
                } else if (score >= 400) {

                    gap = randGap3();
                } else {
                    gap = randGap();
                }
            }

            if (everyintervalElements(random2)) {
                count++;
                var old = random2;
                if (score < 350) {


                    if (count == 25) {
                        myObstacles2.push(new obstacle2());

                    } else if (count == 55) {
                        myObstacles4.push(new obstacle4());
                        count = 0;

                    } else {
                        myObstacles3.push(new obstacle3());

                    }
                } else {

                    myObstacles3.push(new obstacle3());
                }

                var newone = randGapElements();
                if (newone == old || newone == old - 1 || newone == old - 2) {
                    newone = randGapElements();

                } else {

                }
                //  random2 = randGapElements();
                gamearea.frameElements = 0;
            }

            for (i = 1; i < myObstacles.length; i++) {
                if (player.crashWith(myObstacles[i])) {
                    lives--;
                    gamearea.clear();
                    $('.overlay').show();
                    pausedGame = true;
                    // if (myObstacles.splice(i, 1)) {
                    counter++;

                    $('#life' + counter).css('opacity', '0.5');
                    myObstacles.splice(i, 1);
                    num--;

                    time = setTimeout(function () {
                        num--;
                        $('.overlay').hide();
                        pausedGame = false;

                    }, 1000);
                    if (lives === 0) {
                        gamearea.stop();
                        $('.game-wrapper').hide();
                        $('.frame-5').show();
                        start_music.play();
                        document.getElementById('score_result').innerText = score;
                    }
                }
            }

            for (i = 0; i < myObstacles2.length; i++) {

                if (player.collectElement(myObstacles2[i])) {
                    Cards.push(myObstacles2[i].x);
                    collectX = Cards[0];
                    collectY = myObstacles2[i].y - 50;
                    myObstacles2.splice(i, 1);
                    var cards = parseInt(document.getElementById('cards_score').innerText) + 10;

                    if (score + 10 >= 500) {
                        gamearea.stop();
                        $('.game-wrapper').hide();
                        $('.frame-5').show();
                        start_music.play();
                        if (score + 10 == 500) score = score + 10;
                        document.getElementById('score_result').innerText = score;
                    } else {
                        score = score + 10;
                        coin = new Image();
                        coin.src = 'assets/plus-card.png';


                        coin.onload = function () {
                            collision = true;
                            gamearea.context2.drawImage(coin, collectX, collectY, coin.naturalWidth / 3, coin.naturalHeight / 3);
                            setTimeout(function () {

                                gamearea.context2.clearRect(0, 0, gamearea.canvas2.width, gamearea.canvas2.height);
                                Cards = [];
                                // gamearea.context.clearRect(0,0,this.canvas.width,this.canvas.height)
                            }, 250)
                        }
                    }

                    document.getElementById('cards_score').innerText = cards.toString()
                }
            }

            for (i = 0; i < myObstacles3.length; i++) {
                if (player.collectElement(myObstacles3[i])) {
                    Coins.push(myObstacles3[i].x);
                    collectX = Coins[0];
                    collectY = myObstacles3[i].y - 50;
                    myObstacles3.splice(i, 1);
                    var coins = parseInt(document.getElementById('coins_score').innerText) + 1;

                    if (score + 1 >= 500) {
                        gamearea.stop();
                        $('.game-wrapper').hide();
                        $('.frame-5').show();
                        start_music.play();
                        if (score + 1 == 500) score = score + 1;
                        document.getElementById('score_result').innerText = score;
                    } else {
                        score = score + 1;
                        coin = new Image();
                        coin.src = 'assets/plus-coin.png';

                        coin.onload = function () {
                            collision = true;
                            gamearea.context2.drawImage(coin, collectX, collectY, coin.naturalWidth / 3, coin.naturalHeight / 3);
                            setTimeout(function () {
                                gamearea.context2.clearRect(0, 0, gamearea.canvas2.width, gamearea.canvas2.height);
                                Coins = [];
                            }, 250)
                        }
                    }

                    document.getElementById('coins_score').innerText = coins.toString()
                }
            }

            for (i = 0; i < myObstacles4.length; i++) {
                if (player.collectElement(myObstacles4[i])) {
                    ATM.push(myObstacles4[i].x);
                    collectX = ATM[0];
                    collectY = myObstacles4[i].y - 50;
                    myObstacles4.splice(i, 1);
                    var atms = parseInt(document.getElementById('atm_score').innerText) + 50;

                    if (score + 50 >= 500) {
                        gamearea.stop();
                        $('.game-wrapper').hide();
                        $('.frame-5').show();
                        start_music.play();
                        if (score + 50 == 500) score = score + 50;
                        document.getElementById('score_result').innerText = score;
                    } else {
                        score = score + 50;
                        coin = new Image();
                        coin.src = 'assets/plus-atm.png';


                        coin.onload = function () {
                            collision = true;
                            gamearea.context2.drawImage(coin, collectX, collectY, coin.naturalWidth / 3, coin.naturalHeight / 3);
                            setTimeout(function () {
                                ATM = [];
                                gamearea.context2.clearRect(0, 0, gamearea.canvas2.width, gamearea.canvas2.height);

                            }, 250)
                        }
                    }

                    document.getElementById('atm_score').innerText = atms.toString()
                }
            }

            gamearea.clear();

            for (var i = 1; i < myObstacles.length; i++) {
                myObstacles[i].x -= 0.9;
                myObstacles[i].draw();
            }

            for (var i = 0; i < myObstacles2.length; i++) {
                myObstacles2[i].x -= 1;
                myObstacles2[i].draw();
            }

            for (var i = 0; i < myObstacles3.length; i++) {
                myObstacles3[i].x -= 1;
                myObstacles3[i].draw();
            }

            for (var i = 0; i < myObstacles4.length; i++) {
                myObstacles4[i].x -= 1;
                myObstacles4[i].draw();
            }
            player.newPos();

            gamearea.frame += 1;
            gamearea.frameElements += 1;
        } else {
            player.newPos();

            for (i = 1; i < myObstacles.length; i++) {
                myObstacles[i].draw();
            }

            for (i = 0; i < myObstacles2.length; i++) {
                myObstacles2[i].draw();
            }

            for (i = 0; i < myObstacles3.length; i++) {
                myObstacles3[i].draw();
            }

            for (i = 0; i < myObstacles4.length; i++) {
                myObstacles4[i].draw();
            }

        }
    },

    clear: function () {
        gamearea.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop: function () {

        gamearea.clear();
        clearInterval(this.interval);

    }
}

var base_image;
var base_image2;
var base_image3;
var base_image_jump;
var base_image_sad_jump;
var base_image_sad;
var boy_image;
var ground = true;
var j = 1;
var user = 0;

/**
 * Manages the player character, including movement, rendering, collision detection, and interaction with game elements.
 * Handles player animation based on movement state and game events.
 */
var player = {
    speedY: 0,
    start: function () {
        this.x = 20,
            base_image = new Image();
        if (gamearea.player_src == 'assets/girl.png') {
            base_image.src = 'assets/girl1.png';
            base_image2 = new Image();
            base_image2.src = 'assets/girl2.png';
            base_image3 = new Image();
            base_image3.src = 'assets/girl3.png';
            base_image_jump = new Image();
            base_image_jump.src = 'assets/girl-jump.png';
            base_image_sad = new Image();
            base_image_sad_jump = new Image();
            base_image_sad.src = 'assets/sad-girl.png';
            base_image_sad_jump = 'assets/sad-girl-jump.png';

        } else {
            base_image = new Image();
            base_image.src = 'assets/boy1.png';
            boy_image = new Image();
            boy_image.src = 'assets/boy1.png';
            base_image2 = new Image();
            base_image2.src = 'assets/boy2.png';
            base_image3 = new Image();
            base_image3.src = 'assets/boy3.png';
            base_image_jump = new Image();
            base_image_jump.src = 'assets/boy-jump.png';
            base_image_sad = new Image();
            base_image_sad_jump = new Image();
            base_image_sad.src = 'assets/sad-boy.png';
            base_image_sad_jump = 'assets/sad-boy-jump.png';
        }
        this.y = gamearea.canvas.height - gamearea.lowerHeight - (base_image.naturalHeight / 5);
        this.width = base_image.naturalWidth / 5;
        this.height = base_image.naturalHeight / 5;

        gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);

    },
    newPos: function () {
        user++;
        if (user == 21) user = 0;
        if (pausedGame) {
            if (gamearea.player_src === 'assets/girl.png') {
                if (this.speedY === 2) {
                    base_image.src = 'assets/sad-girl-jump.png';
                    gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);
                } else {
                    base_image.src = 'assets/sad-girl.png';
                    gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);
                }
            } else {
                if (this.speedY === 2) {
                    base_image.src = 'assets/sad-boy-jump.png';
                    gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);
                } else {
                    base_image.src = 'assets/sad-boy.png';
                    gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);
                }
            }

        } else {
            this.y = this.y + this.speedY;
            if (this.y < gamearea.canvas.height - gamearea.lowerHeight - (base_image.naturalHeight / 4) - 100) {
                this.speedY = 2;
            }

            if (this.speedY === 2) {
                ground = false;
                if (gamearea.player_src === 'assets/girl.png') {
                    base_image.src = 'assets/girl-jump.png';
                } else
                    base_image.src = 'assets/boy-jump.png';

            } else {
                if (user === 20) {
                    user = 0;
                    j++;
                    if (j == 3) {
                        j = 1;
                    }
                }

                ground = true;

                if (gamearea.player_src === 'assets/girl.png')
                    base_image.src = 'assets/girl' + j + '.png';
                else
                    base_image.src = 'assets/boy' + j + '.png';
            }

            gamearea.context.drawImage(base_image, this.x, this.y, base_image.naturalWidth / 5, base_image.naturalHeight / 5);

            if (this.speedY == 2 && this.y > gamearea.canvas.height - gamearea.lowerHeight - (base_image.naturalHeight / 5)) {
                this.speedY = 0;
            }

        }
    },
    crashWith: function (obs) {
        if (this.x + (base_image.naturalWidth / 5) > obs.x && this.x < obs.x + obs.width && this.y + (base_image.naturalHeight / 5) > obs.y) {
            return true;
        }
        return false;
    },
    collectElement: function (obs) {
        if (this.x + (base_image.naturalWidth / 5) > obs.x && this.x < obs.x + obs.width && (this.y <= obs.y || this.y <= obs.y - obs.naturalHeight)) {
            collect_music.sound.volume = 1.0;
            collect_music.play();
            return true;
        }
        return false;
    }


}

var jump_counter = 0;

function jump() {
    if (jump_counter == 0) {
        collect_music.sound.volume = 0;
        collect_music.play();
        jump_counter++;
    }

    if (ground) {
        player.speedY = -2;
    }
}