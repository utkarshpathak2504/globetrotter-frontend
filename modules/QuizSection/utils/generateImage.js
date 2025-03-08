const generateInviteImage = async (username, score) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = 800;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const bgImage = new Image();
    bgImage.src = "/assets/invite-bg.png";

    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, width, height);

      // Text styling
      ctx.fillStyle = "#fff";
      ctx.font = "bold 40px Arial";
      ctx.textAlign = "center";

      // Add text with emojis
      ctx.fillText("🚀 Globetrotter Challenge! 🚀", width / 2, 100);
      ctx.fillText(`${username} scored ${score} points!`, width / 2, 200);
      ctx.fillText("Think you can beat them? 🤔", width / 2, 300);

      // Convert canvas to image URL
      canvas.toBlob((blob) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          resolve(imageUrl);
        } else {
          reject("Failed to generate image.");
        }
      });
    };

    bgImage.onerror = () => reject("Failed to load background image.");
  });
};
