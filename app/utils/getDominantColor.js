import ColorThief from "colorthief";

export const getDominantColor = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      return resolve([40, 40, 40]); // Default color if no URL is provided
    }

    const img = new window.Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const colorThief = new ColorThief();
      try {
        const color = colorThief.getColor(img);
        resolve(color); // Resolve the Promise with the color
      } catch (error) {
        reject(error); // Reject the Promise if there's an error
      }
    };

    img.onerror = (error) => reject(error); // Handle image loading errors
  });
};
