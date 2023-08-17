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
        "90c801a554d46d712284982a748a0901fb26f2e817470940fdfa3279673a37f955f1f86a770ae4ecdba094656c108717",
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
