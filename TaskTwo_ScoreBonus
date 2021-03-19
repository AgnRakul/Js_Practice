function BonusScore(score) {


    if (score <= 100) {

        newscore = score + 10;
        if (score % 2 == 0) {
            newscore = newscore + 4; // 394
        }

        let number = score;
        let l = number.toString();
        let lengthScore = l.length;
        let lastScore = l[lengthScore - 1];

        if (lastScore == 5) {
            newscore = newscore + 5;

        }
        console.log(newscore);

    } else if (score > 100 && score < 999) {

        bonus_scr = 0.30 * score; /// 90
        newscore = score + bonus_scr; // 390


        if (score % 2 == 0) {
            newscore = newscore + 4; // 394
        }

        let number = score;
        let l = number.toString();
        let lengthScore = l.length;
        let lastScore = l[lengthScore - 1];

        if (lastScore == 5) {
            newscore = newscore + 5;

        }
        console.log(newscore);

    } else if (score >= 1000) {
        bonus_scr = 0.20 * score; // 200.2
        newscore = score + bonus_scr; // 1201.2


        if (score % 2 == 0) {
            newscore = newscore + 4; // 394
        }

        let number = score;
        let l = number.toString();
        let lengthScore = l.length;
        let lastScore = l[lengthScore - 1];

        if (lastScore == 5) {
            newscore = newscore + 5;

        }
        console.log(newscore);

    } else {
        console.log("Score Not Defined");
    }

}
BonusScore(1005);
