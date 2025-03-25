const API_URL = process.env.REACT_APP_API_URL;

export const getAbout = async () => {
  const response = await fetch(`${API_URL}/api/about`);
  if (!response.ok) {
    throw new Error("Error fetching about info");
  }
  return response.json();
};

export const getTime = async () => {
  const response = await fetch(`${API_URL}/api/time`);
  if (!response.ok) {
    throw new Error("Error fetching time");
  }
  return response.json();
};

export const getNotes = async () => {
  const response = await fetch(`${API_URL}/api/notes`);
  if (!response.ok) {
    throw new Error("Error fetching notes");
  }
  return response.json();
};

export const postNote = async (text) => {
  const response = await fetch(`${API_URL}/api/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error("Error posting note");
  }
  return response.json();
};
