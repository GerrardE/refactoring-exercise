var TennisGame3 = function(name1, name2) {
    this.player2 = 0;
    this.player1 = 0;

    this.player1Name = name1;
    this.player2Name = name2;
};

TennisGame3.prototype.getScore = function() {
    var score;
    if ((this.player1 < 4 && this.player2 < 4) && (this.player1 + this.player2 < 6)) {
        return this.handleEarlyGame(score);
    } else {
        return this.handleEqualGame(score);
    }
};

TennisGame3.prototype.handleEarlyGame = function(scoreparam){
    var score = scoreparam;

    var scoreText = ["Love", "Fifteen", "Thirty", "Forty"];

    score = scoreText[this.player1];

    if(this.player1 === this.player2) {
        return score + "-All"
    } else {
        return score + "-" + scoreText[this.player2]
    }
}

TennisGame3.prototype.handleEqualGame = function(scoreparam){
    var score = scoreparam;

    if (this.player1 == this.player2) return "Deuce";
    
    score = this.player1 > this.player2 ? this.player1Name : this.player2Name;
        
    if((this.player1 - this.player2) * (this.player1 - this.player2) == 1){
        return "Advantage " + score;
    } else {
        return "Win for " + score;
    }
}

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.player1 += 1;
    else
        this.player2 += 1;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
