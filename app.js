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
        "70fe5f8b7873c2a5c92de4198d2e0d148b686b6283ada675ebd80c55316db6a4fcc42b84c3c19db959265ba5539e084d",
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
