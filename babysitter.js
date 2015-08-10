var start = process.argv[2];
var stop = process.argv[3];
// I expect this to be run from node.

// I'll make some starting assumptions, here.

/* Babysitters must arrive before the baby's bedtime.  Babysitters want to make as much money as they can.  Therefore, given the fee schedule, I will assume that the start time will be in the PM while the stop time will be in the AM (when the real money gets made). */

/* We must check that the ranges are in legal limits.  Since partial hours don't count, I'll suppose that all entered times are integers representing the top of following hour (e.g., 6 means 6:00 PM). */
if (start >= 5 && stop <= 4 ) {
	console.log("$" + 32 + (12 * (8 - start)) + (16 * stop) + ".00");
} else {
	console.log("You can't start before 5PM or stay after 4AM.");
}

/* As I explained in the documentation, since the original kata didn't mention what the bedtime is, I decided that it should be 8:00 PM.  The rate from bedtime to midnight is $8 per hour, so that means $32 is set. */