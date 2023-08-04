export const baseUrl = "https://swapi.dev/api/";
export const peopleUrl = `${baseUrl}/people`;

export const getCharacters = async (): Promise<any> => {
  try {
    const response = await fetch(peopleUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(`Can not get ${url}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};
