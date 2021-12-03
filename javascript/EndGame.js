var EndGame = function (m_score1, m_score2){
    this.m_score1 = m_score1;
    this.m_score2 = m_score2;
}

EndGame.prototype.handleEndGame = function(){
    var minusResult = this.m_score1 - this.m_score2;

    if (minusResult === 1) return "Advantage player1";
    if (minusResult === -1) return "Advantage player2";
    if (minusResult >= 2) return "Win for player1";
    
    return "Win for player2";
}

if (typeof window === "undefined") {
    module.exports = EndGame;
}
