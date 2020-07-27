const isHasMajorVowelHarmony = (word) => {
    const hard = ['a','ı','o','u'];
    const soft = ['e','i','ö','ü'];
  
    let isContainHard = false;
    let isContainSoft = false;
    for (var i = 0; i < word.length; i++) {
      if (hard.indexOf(word[i]) !== -1) {
        isContainHard = true;
      }
      if (soft.indexOf(word[i]) !== -1) {
        isContainSoft = true;
      }
    }
    if (isContainHard && isContainSoft) return false;
    else if (isContainHard || isContainSoft) return true;
}

export default isHasMajorVowelHarmony;