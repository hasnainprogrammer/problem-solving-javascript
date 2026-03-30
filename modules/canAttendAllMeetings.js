/*
PROBLEM: Given an array of meeting time intervals where each element represents a meeting time as [start, end], determine whether a person can attend all the meetings without any overlap between meeting times.
example: [[1,5],[5,10],[10,15]] -> true (no overlap), [[8,10],[1,3],[2,6],[15,18]] -> false (overlap)
*/

function canAttendAllMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const prevEnd = intervals[i - 1][1];

    if (currentStart < prevEnd) return false;
  }

  return true;
}

const runCanAttendAllMeetings = () => {
  console.log(canAttendAllMeetings([[83, 99]]));
  console.log(
    canAttendAllMeetings([
      [1, 5],
      [5, 10],
      [10, 15],
    ]),
  );
  console.log(
    canAttendAllMeetings([
      [8, 10],
      [1, 3],
      [2, 6],
      [15, 18],
    ]),
  );
};
export { runCanAttendAllMeetings };
