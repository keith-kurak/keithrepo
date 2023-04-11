import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { Text, View } from "./Themed";

const battingStats = {
  games: { name: "Games", shortName: "G", key: "games" },
  atBats: { name: "At Bats", shortName: "AB", key: "atBats" },
  runs: { name: "Runs", shortName: "R", key: "runs" },
  hits: { name: "Hits", shortName: "H", key: "hits" },
  doubles: { name: "Doubles", shortName: "2B", key: "doubles" },
  triples: { name: "Triples", shortName: "3B", key: "triples" },
  homeRuns: { name: "Home Runs", shortName: "HR", key: "homeRuns" },
  runsBattedIn: { name: "Runs Batted In", shortName: "RBI", key: "runsBattedIn" },
  stolenBases: { name: "Stolen Bases", shortName: "SB", key: "stolenBases" },
  caughtStealing: { name: "Caught Stealing", shortName: "CS", key: "caughtStealing" },
  walks: { name: "Walks", shortName: "BB", key: "walks" },
  strikeouts: { name: "Strikeouts", shortName: "SO", key: "strikeouts" },
  battingAverage: { name: "Batting Average", shortName: "AVG", key: "battingAverage" },
  onBasePercentage: { name: "On Base Percentage", shortName: "OBP", key: "onBasePercentage" },
  sluggingPercentage: { name: "Slugging Percentage", shortName: "SLG", key: "sluggingPercentage" },
  onBasePlusSlugging: {
    name: "On Base Plus Slugging",
    shortName: "OPS",
    key: "onBasePlusSlugging",
  },
};

const summaryStats = [
  "games",
  "runs",
  "homeRuns",
  "runsBattedIn",
  "stolenBases",
  "battingAverage",
  "onBasePercentage",
  "sluggingPercentage",
];

const BattingStatsHeader = ({ keys }: { keys: string[] }) => {
  const { width } = useWindowDimensions();
  const spacePerStat = width / (keys.length + 2);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
      }}>
      <View style={{ width: spacePerStat, alignItems: "center" }} />
      <View style={{ width: spacePerStat, alignItems: "center" }} />
      {keys.map((key) => (
        <View style={{ width: spacePerStat, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{battingStats[key].shortName}</Text>
        </View>
      ))}
    </View>
  );
};

const BattingSeason = ({ season, keys }: { season: any; keys: string[] }) => {
  const { width } = useWindowDimensions();
  const spacePerStat = width / (keys.length + 2);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
      }}>
      <View style={{ width: spacePerStat, alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>{season.yearID}</Text>
      </View>
      <View style={{ width: spacePerStat, alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>{season.teamID}</Text>
      </View>
      {keys.map((key) => (
        <View style={{ width: spacePerStat, alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>{season[battingStats[key].shortName]}</Text>
        </View>
      ))}
    </View>
  );
};

export default function Player({ seasons }: { seasons: any[] }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ marginHorizontal: 4 }}>
        <BattingStatsHeader keys={summaryStats} />
        {seasons.map((season) => (
          <BattingSeason keys={summaryStats} season={season} />
        ))}
      </ScrollView>
    </View>
  );
}
