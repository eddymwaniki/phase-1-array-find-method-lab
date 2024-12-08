function superbowlWin(superbowlRecord) {
    const winningSeason = superbowlRecord.find(superbowlRecord => superbowlRecord.result === "W");
    return winningSeason ? winningSeason.year : undefined ;
}
