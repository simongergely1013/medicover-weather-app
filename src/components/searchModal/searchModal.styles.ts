export const setStyles = () => {
  return {
    modal: { color: "black", textAlign: "center" },
    box: {
      position: "absolute" as "absolute",
      top: "25%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      borderRadius: 5,
      boxShadow: 24,
      p: 4,
    },
    input: { width: "100%", marginTop: 2, borderRadius: 5 },
    inputImage: "absolute right-3 top-9",
    list: "absolute bg-white w-full z-10 text-left pl-4 py-2 border rounded-md",
    listItem: "flex items-center mb-3 gap-3",
    h3: "cursor-pointer hover:text-sky-800",
    closeIcon: "absolute right-5 top-5 hover:fill-sky-800 cursor-pointer",
  };
};
