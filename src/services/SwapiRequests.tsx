export const baseUrl = "https://swapi.dev/api/";
export const peopleUrl = `${baseUrl}/people`;

export const getPeople = async () => {
  try {
    const response = await fetch(peopleUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
