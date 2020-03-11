import cheerio from "cheerio";

const siteUrl = `https://divinityoriginalsin2.wiki.fextralife.com/`;

const skillPaths = ["Fortify"];

const joinPathToURL = (path, url) => {
  const uri = new URL(url);
  uri.pathname = path;
  return uri.href;
}

const makeSkillFromData = data => {
  return { data };
};

const skills = skillPaths.map(path => {
  const data = await fetch(joinPathToURL(path, siteUrl));
  return makeSkillFromData(data);
});

console.log('skills', skills)