function seriesCalculator(input) {
    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let episodeDuration = Number(input[3]);
    
    let commercials = episodeDuration * 0.20;
    let lastEpisodeTime = seasonsCount * 10;

    let totalEpisodes = seasonsCount * episodeCount;
    let totalTimeNeeded = (totalEpisodes * episodeDuration) + (totalEpisodes * commercials) + lastEpisodeTime;

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTimeNeeded} minutes.`);

}

seriesCalculator([
    "Lucifer",
    "3",
    "18",
    "55"]);

seriesCalculator([
    "Game of Thrones",
    "7",
    "10",
    "50"])

seriesCalculator([
    "Riverdale",
    "3",
    "21",
    "45"])


