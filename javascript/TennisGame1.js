var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var scoreText = ["Love", "Fifteen", "Thirty", "Forty"];

    if (this.m_score1 === this.m_score2) 
        return this.handleEqualScore(score, scoreText);
    
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        return new EndGame(this.m_score1, this.m_score2).handleEndGame();
    } 

    return this.handleEarlyGame(score, scoreText);
};

TennisGame1.prototype.handleEqualScore = function(scoreparam, scoreText){
    var score = scoreparam;

    switch (this.m_score1) {
        case 0:
        case 1:
        case 2:
            score = scoreText[this.m_score1]+"-All";
            break;
        default:
            score = "Deuce";
            break;
    }

    return score
}

TennisGame1.prototype.handleEarlyGame = function(scoreparam, scoreText){
    var score = scoreparam;
    var tempScore = 0;

    for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else {
            score += "-";
            tempScore = this.m_score2;
        }
        switch (tempScore) {
            case 0:
            case 1:
            case 2:
            case 3:
                score += scoreText[tempScore];
                break;
        }
    }

    return score;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
