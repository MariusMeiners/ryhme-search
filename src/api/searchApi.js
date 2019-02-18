export const getListOfRhymeWordsForGivenWord = async word => {
  try {
    const url = "https://api.datamuse.com/words?rel_rhy=" + word + "&max=25";
    const apiresponse = await fetch(url);
    const json = await apiresponse.json();
    return json;
  } catch (error) {
    //log somewhere and throw error
    throw error; //in production throw specific network error
  }
};
