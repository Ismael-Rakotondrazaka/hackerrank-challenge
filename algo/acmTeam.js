acmTeam(3, ["10101", "11110", "00010"]);

function acmTeam(n, topic) {
  // Write your code here
  let maxTopics = 0;
  let maxDuo = 0;
  const topicKnownLength = topic[0].length;
  for (let i = 0; i < topic.length - 1; i++) {
    const element = topic[i];
    let sameTopic = 0;
    for (let j = i + 1; j < topic.length; j++) {
      console.log(element);
      const element2 = topic[j];
      console.log(element2);
      for (let k = 0; k < topicKnownLength; k++) {
        if (element[k] === "1" || element2[k] === "1") {
          sameTopic++;
        }
      }
      if (sameTopic > maxTopics) {
        maxTopics = sameTopic;
        maxDuo = 1;
      } else if (sameTopic === maxTopics) {
        maxDuo++;
      }
      console.log(sameTopic);
      sameTopic = 0;
    }
  }
  console.log(maxTopics, maxDuo);
}
