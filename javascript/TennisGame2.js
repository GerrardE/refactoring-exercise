var TennisGame2 = function(player1Name, player2Name) {
    this.player1point = 0;
    this.player2point = 0;

    this.player1res = "";
    this.player2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";
    var scoreText = ["Love", "Fifteen", "Thirty", "Forty"];

    if (this.player1point === this.player2point && this.player1point > 2)
        score = "Deuce";

    score = this.handleEarlyGame(score, scoreText);

    score = this.handleMidGame(score, scoreText);

    score = this.handleEndGame(score);

    return score;
};

TennisGame2.prototype.handleEarlyGame = function(scoreparam, scoreText) {
    var score = scoreparam;

    if (this.player1point === this.player2point && this.player1point < 3) {
         switch(this.player1point) {
            case 0:
            case 1:
            case 2:
                score = scoreText[this.player1point];
                break;
        }
        score += "-All";
    }

    if (this.player1point > 0 && this.player2point === 0) {
        switch(this.player1point) {
            case 1:
            case 2:
            case 3:
                this.player1res = scoreText[this.player1point];
                break;
        }

        this.player2res = scoreText[this.player2point];

        score = this.player1res + "-" + this.player2res;
    }

    if (this.player2point > 0 && this.player1point === 0) {
        switch(this.player2point){
            case 1:
            case 2:
            case 3:
                this.player2res = scoreText[this.player2point];
                break;
        }

        this.player1res = scoreText[this.player1point];

        score = this.player1res + "-" + this.player2res;
    }

    return score
}

TennisGame2.prototype.handleMidGame=function(scoreparam, scoreText){
    var score = scoreparam;

    if (this.player1point > this.player2point && this.player1point < 4) {
        if (this.player1point === 2)
            this.player1res = scoreText[this.player1point];
        if (this.player1point === 3)
            this.player1res = scoreText[this.player1point];

        if (this.player2point === 1)
            this.player2res = scoreText[this.player2point];
        if (this.player2point === 2)
            this.player2res = scoreText[this.player2point];

        score = this.player1res + "-" + this.player2res;
    }

    if (this.player2point > this.player1point && this.player2point < 4) {
        if (this.player2point === 2)
            this.player2res = scoreText[this.player2point];
        if (this.player2point === 3)
            this.player2res = scoreText[this.player2point];

        if (this.player1point === 1)
            this.player1res = scoreText[this.player1point];
        if (this.player1point === 2)
            this.player1res = scoreText[this.player1point];

        score = this.player1res + "-" + this.player2res;
    }

    return score;
}

TennisGame2.prototype.handleEndGame = function(scoreparam) {
    var score = scoreparam;

    if (this.player1point > this.player2point && this.player2point >= 3) {
        score = "Advantage player1";
    }

    if (this.player2point > this.player1point && this.player1point >= 3) {
        score = "Advantage player2";
    }

    if (this.player1point >= 4 && this.player2point >= 0 && (this.player1point - this.player2point) >= 2) {
        score = "Win for player1";
    }
    if (this.player2point >= 4 && this.player1point >= 0 && (this.player2point - this.player1point) >= 2) {
        score = "Win for player2";
    }

    return score
}

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.player1point++;
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.player2point++;
    }
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.player1point++;
    else
        this.player2point++;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
