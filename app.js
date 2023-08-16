const input = document.querySelector("input");
const button = document.querySelector("button");
const image = document.querySelector("img");

button.addEventListener("click", () => {
  const inputValue = input.value;

  const form = new FormData();
  form.append("prompt", `${inputValue}`);

  fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key":
        "d82f081beeef9bdd1a0d31bba95a9a2fc17f139a00da5d9724a5c47e528e6145b83dc6055dbd32f50e6f559d7e04a652",
    },
    body: form,
  })
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      // Convert the ArrayBuffer to a Blob
      const blob = new Blob([buffer], { type: "image/png" });

      // Create a Data URL from the Blob
      const imageUrl = URL.createObjectURL(blob);
      image.setAttribute("src", imageUrl);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
