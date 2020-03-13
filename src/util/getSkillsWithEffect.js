const getSkillsWithEffect = (skills = [], statusEffect = {}) => {
  return skills.filter(skill => {
    const skillStatusEffects = skill.statusEffects || [];
    return skillStatusEffects
      .map(({ name = "" }) => name.toLowerCase())
      .includes(statusEffect.name.toLowerCase());
  });
};

export default getSkillsWithEffect;
