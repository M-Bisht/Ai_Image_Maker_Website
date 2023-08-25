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
        "bcd6862ca98aa1a0ac7eb562a60356db32c9ec16f36f4beede75e2b8df26142b070bc2cbd9ca88d694e51a1e72c35989",
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
