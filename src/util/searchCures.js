import areStringsSimilar from "./areStringsSimilar";
import keyBy from "./keyBy";
import lowerCase from "./lowerCase";
import getSkillsWithEffect from "./getSkillsWithEffect";

const searchCures = (_ailment, { skills = [], statusEffects = [] }) => {
  const ailment = lowerCase(_ailment);

  const skillCures = skills.filter(
    ({ immunities = [], removes = [] }) =>
      immunities.some(value => areStringsSimilar(value, ailment)) ||
      removes.some(value => areStringsSimilar(value, ailment))
  );

  const effectCures = statusEffects.filter(({ immunities = [] }) =>
    immunities.some(value => areStringsSimilar(value, ailment))
  );

  const skillCuresFromEffects = effectCures
    .map(effect => getSkillsWithEffect(skills, effect))
    .flat();

  const results = Object.values({
    ...keyBy(skillCures, sk => sk.name.toLowerCase()),
    ...keyBy(skillCuresFromEffects, sk => sk.name.toLowerCase())
  }).sort((skillA, skillB) => {
    return skillA.actionPoints - skillB.actionPoints;
  });

  return results;
};

export default searchCures;
